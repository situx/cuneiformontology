import json
import os
import rdflib
from rdflib import Graph

htmltemplate="""<html><head><title>{{title}}</title><style>* {
    box-sizing: border-box;
    font-family: "Avenir", "Helvetica", sans-serif;
}

body {
    background-color: #f9f9f9;
}

/* Default table styles for this demo */
table {
    border-collapse: collapse;
    text-align: left;
    width: 100%;
}
table tr {
    background: white;
    border-bottom: 1px solid
}
table th, table td {
    padding: 10px 20px;
}
table td span {
    background: #eee;
    color: dimgrey;
    display: none;
    font-size: 10px;
    font-weight: bold;
    padding: 5px;
    position: absolute;
    text-transform: uppercase;
    top: 0;
    left: 0;
}

/* Simple CSS for flexbox table on mobile */
@media(max-width: 800px) {
    table thead {
        left: -9999px;
        position: absolute;
        visibility: hidden;
    }
    table tr {
        border-bottom: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }
    table td {
        border: 1px solid;
        margin: 0 -1px -1px 0;
        padding-top: 35px;
        position: relative;
        width: 50%;
    }
    table td span {
        display: block;
    }
}</style></head><body><h1 align=center>{{title}}</h1><p>{{description}}</p><table border=1 width=100%><tr><th>Property</th><th>Value</th></tr>{{tablecontent}}</table></body></html>"""

jtfcontext={
	  "cunei": "http://www.purl.org/cuneiform/",
      "graphemon": "http://www.purl.org/graphemon/",
      "cuneisignlist": "http://www.purl.org/cuneiform/signlist/",
      "cuneidict": "http://www.purl.org/cuneiform/dict/",
	  "cidoc": "http://www.cidoc-crm.org/cidoc-crm/",
      "lemon": "http://lemon-model.net/lemon#",
      "rdfs":"http://www.w3.org/2000/01/rdf-schema#",
	  "Collection": "cunei:CuneiformArtifactCollection",
	  "tablet": "cunei:Tablet",
	  "Cone": "cunei:Cone",
	  "Bulla": "cunei:Bulla",
	  "Brick": "cunei:Brick",
	  "Block": "cunei:Block",
	  "Barrel": "cunei:Barrel",
      "children": "cunei:contains",
	  "Cylinder": "cunei:Cylinder",
	  "Envelope": "cunei:Envelope",
      "label": "rdfs:label",
	  "Tag": "cunei:Tag",
	  "sequence":"cunei:Sequence",
      "reading":"graphemon:hasGraphemeReading",
      "grapheme": "graphemon:grapheme",
  	  "short":"cunei:ShortSequence",
      "sense":"lemon:sense",
      "form":"lemon:form",
      "lineNumber":"cunei:lineNumber",
	  "TabletSide":"cunei:TabletSide",
	  "bottom":"cunei:BottomSide",
	  "top":"cunei:TopSide",
	  "left":"cunei:LeftSide",
	  "right":"cunei:RightSide",
	  "obverse":"cunei:ObverseSide",
	  "reverse":"cunei:ReverseSide",
	  "FindSpot": "cunei:FindSpot",
	  "Genre": "cunei:Genre",
	  "Transliteration": "cunei:Transliteration",
      "TransliterationCharOccurrence": "cunei:TransliterationCharOccurrence",
	  "TabletSide": "cunei:TabletSide",
	  "WritingField": "cidoc:TX4_WritingField",
	  "Column":"cunei:Column",
	  "Sentence":"cunei:Sentence",
	  "WordOccurance":"cunei:WordOccurance",
	  "Glyph":"cidoc:TX9_Glyph"
}

ttlresult=set()
ttldictresult=set()
ttlsignlistresult=set()
labeltouri={}
ttlresult.add("cunei:Tablet rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdf:type owl:Class . lemon:Sense rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdfs:label \"Glyph\"@en .\n")
namespace="http://purl.org/cuneiform/"
namespacedict="http://purl.org/cuneiform/dict/"
namespacesignlist="http://purl.org/cuneiform/signlist/"
namespaceshort="cunei"
namespaceshortdict="cuneidict"
namespaceshortsignlist="cuneisignlist"
currentproject=""
currenttabletid=""
currenttableturi=""
lexicons=[]

with open("cuneify.json",encoding='utf-8') as f:
    cuneify = json.load(f)

with open("signmapping.json",encoding='utf-8') as f:
    signmapping = json.load(f)
    
with open('oraccsenses.json', encoding="utf-8") as f:
    sensesmap = json.load(f)

def createHTML(savepath,predobjs,subject):
    tablecontents=""
    for tup in predobjs:
        tablecontents+="<tr><td><a href=\""+str(tup[0])+"\">"+str(tup[0][tup[0].rfind('/')+1:])+"</a></td>"
        if len(tup)>0:
            if "http" in tup[1]:
                tablecontents+="<td><a href=\""+str(tup[1])+"\">"+str(tup[1][tup[1].rfind('/')+1:])+"</a></td>"
            else:
                tablecontents+="<td>"+str(tup[1])+"</td>"
        else:
            tablecontents+="<td></td>"
        tablecontents+="</tr>"
    with open(savepath+"/index.html", 'w', encoding='utf-8') as f:
        f.write(htmltemplate.replace("{{title}}","<a href=\""+str(subject)+"\">"+str(subject[subject.rfind("/")+1:])+"</a>").replace("{{tablecontent}}",tablecontents).replace("{{description}}",""))
        f.close()

def replaceNonURIChars(myuri):
    res=myuri.replace("$","_").replace("{","_").replace("=","_").replace("-","_").replace("^","_").replace("*","_").replace("}","_").replace("̌","_").replace(";","_").replace("̄","_").replace("ʾ","_").replace("̆","_").replace(",","_").replace("'","_").replace("/","_").replace("+","_").replace("(","_").replace(")","_").replace("|","_").replace("@","_").replace("×","_").replace("&","_").replace("+","_").replace(".","_")
    if res.startswith("_"):
        res=res[1:]
    if res.endswith("_"):
        res=res[0:-1]
    return res

def format_ascii(word):
    ascii_replacements = {
        'Á' : 'A2','À' : 'A3',
        'á' : 'a2','à' : 'a3',
        'É' : 'E2','È' : 'E3',
        'é' : 'e2','è' : 'e3',
        'Í' : 'I2','Ì' : 'I3',
        'í' : 'i2','ì' : 'i3',
        'Ú' : 'U2','Ù' : 'U3',
        'ú' : 'u2','ù' : 'u3',
        'Ṭ' : 'T,', 'j' : 'i',
        'ĝ' : 'g', 'ṭ' : 't,',
        'ḫ' : 'h', 'Ḫ' : 'H',
        'š' : 'sz', 'Š' : 'SZ',
        'ṣ' : 's,', 'Ṣ' : 'S,',
        '₀' : '0', '₁' : '1',
        '₂' : '2', '₃' : '3',
        '₄' : '4', '₅' : '5',
        '₆' : '6', '₇' : '7',
        '₈' : '8', '₉' : '9'}
    for rep, initial in ascii_replacements.items():
        word = word.replace(rep.lower(), initial)
    #print(word)
    return word


def getGraphemeReadingURI(word):
    if word in cuneify:
        unicodeword=cuneify[word]
        chars=word.split("-")
        counter=0
        for chara in unicodeword:
            if chara in signmapping:
                return {"@type":signmapping[chara]["type"],"@id":signmapping[chara]["uri"],"signname":str(signmapping[chara]["signname"]),"label":"Grapheme: "+str(signmapping[chara]["signname"])}
    return {}

def cuneifyWord(word,worduri,ttlresult):
    if word in cuneify:
        unicodeword=cuneify[word]
        chars=word.split("-")
        counter=0
        for chara in unicodeword:
            if chara in signmapping:
                ttlresult.add(""+str(worduri)+" cunei:contains <"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"> .\n")
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"> rdf:type graphemon:Grapheme . \n")
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"> rdfs:label \"Character: "+str(signmapping[chara]["signname"])+"\" . \n")
                labeltouri["Character: "+str(signmapping[chara]["signname"])]=str(signmapping[chara]["uri"])
            if counter<len(chars) and chara in signmapping:
                ttlresult.add(str(worduri)+" graphemon:hasGraphemeReading <"+str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])+"> .\n")
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"_reading_"+str(chars[counter])+"> rdfs:label \"Grapheme Reading "+str(signmapping[chara]["signname"])+": "+str(chars[counter])+"\" .\n")
                labeltouri["Grapheme Reading "+str(signmapping[chara]["signname"])+": "+str(chars[counter])]=str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"_reading_"+str(chars[counter])+"> rdf:type graphemon:GraphemeReading .\n")
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"> graphemon:hasGraphemeReading <"+replaceNonURIChars(str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter]))+"> .\n")
            counter+=1
        return cuneify[word]

def handleLineElements(data,ttlresult,currentside,currentsentence,currenttabletid,jtfldrep):
    currentline=-1
    currentwordindex=0
    currentcharindex=0
    currentrelcharindex=0
    sensescounter=0
    curjtfline={"_class":"line","children":[]}
    for lineitem in data["cdl"]:
        #print(lineitem)
        #print("=======================")
        if "type" in lineitem and lineitem["type"]=="line-start":
            if "n" in lineitem:
                currentline=lineitem["n"]
            currentcharindex=0
            currentwordindex=0
            curjtfline={"_class":"line","@id":str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline)),"@type":"line","lineNumber":replaceNonURIChars(str(currentline)),"children":[]}
            if curjtfline!=None and jtfldrep!=None:
                jtfldrep["children"].append(curjtfline)
            try:
                if int(currentline.replace("'",""))>1:
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" cunei:prevLine "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+".\n")
            except Exception as e:
                print(e)
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_transliteration cunei:hasLine "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+".\n")
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" rdf:type cunei:Line .\n")
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" rdfs:label \"Line: "+str(currentline)+" ["+str(currenttabletid)+"_"+str(currentside)+"]\" .\n")
            #print(lineitem)
        if "node" in lineitem and lineitem["node"]=="l":
            #print(lineitem)
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+" rdf:type cunei:Line .\n")
            if "f" in lineitem and "form" in lineitem["f"]:
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc rdf:type cunei:WordFormOccurance .\n")
                if "norm" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdf:type cunei:Word .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdf:type cunei:Word .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["norm"]))+"\" .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["norm"]))+"\" .\n")
                    curseq={"_class":"sequence","@id":str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc","lemma":replaceNonURIChars(str(lineitem["f"]["norm"])),"form":replaceNonURIChars(str(lineitem["f"]["form"])),"@type":"short","children":[]}
                else:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdf:type cunei:Word.\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdf:type cunei:Word.\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["form"]))+"\" .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["form"]))+"\" .\n")
                    curseq={"_class":"sequence","@id":str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc","lemma":replaceNonURIChars(str(lineitem["f"]["form"])),"form":replaceNonURIChars(str(lineitem["f"]["form"])),"@type":"short","children":[]}
                curjtfline["children"].append(curseq)
                if "pos" in lineitem["f"]:
                    curseq["pos"]=str(lineitem["f"]["pos"])
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word <http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> \""+str(lineitem["f"]["pos"])+"\".\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word <http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> \""+str(lineitem["f"]["pos"])+"\".\n")
                if "sense" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:sense "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:sense "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdf:type lemon:Sense .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdf:type lemon:Sense .\n")
                    print(lineitem["f"]["sense"])
                    if str(lineitem["f"]["sense"]) in sensesmap:
                        sensescounter+=1
                        curseq["sense"]={"@id":str(sensesmap[str(lineitem["f"]["sense"])]),"@type":"lemon:Sense","label":str(lineitem["f"]["sense"])}
                        #curseq["senseLabel"]=str(lineitem["f"]["sense"])
                        ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense lemon:reference <"+str(sensesmap[str(lineitem["f"]["sense"])])+"> .\n")
                        ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense lemon:reference <"+str(sensesmap[str(lineitem["f"]["sense"])])+"> .\n")
                        ttlresult.add("<"+str(sensesmap[str(lineitem["f"]["sense"])])+"> rdfs:label \"Wikidata: "+str(lineitem["f"]["sense"])+"\".\n")
                        ttldictresult.add("<"+str(sensesmap[str(lineitem["f"]["sense"])])+"> rdfs:label \"Wikidata: "+str(lineitem["f"]["sense"])+"\".\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdfs:label \"WordSense: "+str(lineitem["f"]["sense"])+" ("+str(lineitem["f"]["form"])+")\" .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdfs:label \"WordSense: "+str(lineitem["f"]["sense"])+" ("+str(lineitem["f"]["form"])+")\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform rdf:type cunei:WordForm .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform rdf:type cunei:WordForm .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform rdfs:label \"WordForm: "+str(lineitem["f"]["form"])+"\" .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform rdfs:label \"WordForm: "+str(lineitem["f"]["form"])+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRepUnicode \""+str(cuneifyWord(str(lineitem["f"]["form"]),str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_wordformocc",ttlresult))+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRepASCII \""+str(format_ascii(str(lineitem["f"]["form"])))+"\" .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRepASCII \""+str(format_ascii(str(lineitem["f"]["form"])))+"\" .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc cunei:Line \""+str(currentline)+"\"^^xsd:integer .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc cunei:locatedIn "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+".\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform cunei:isAttested "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" cunei:consistsOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc rdfs:label \" WordForm Occurrence: "+str(lineitem["f"]["form"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"])\" .\n")
                if currentwordindex>0:
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:prevWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex-1)+"_wordformocc .\n")
                if currentwordindex<=len(data["cdl"]):
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:nextWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex+1)+"_wordformocc .\n")
                currentwordindex+=1
                currentrelcharindex=0
                if "gdl" in lineitem["f"]:
                    for charr in lineitem["f"]["gdl"]:
                        if "lang" in lineitem["f"]:
                            if "akk" in lineitem["f"]["lang"]:
                                ttlresult.add("cunei:Akk rdf:type lemon:Dictionary .\n")
                                ttlresult.add("cunei:Akk lemon:language \"Akkadian\" .\n")
                                ttlresult.add("cunei:Akk lemon:entry "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word .\n")
                        if "v" in charr:
                            graphemeobj=getGraphemeReadingURI(str(charr["v"]))
                            if "@id" in graphemeobj:
                                curchar={"_class":"chr","@id":str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc","@type":"TransliterationCharOccurrence","reading":{"@type":"graphemon:GraphemeReading","label":"Grapheme Reading "+str(graphemeobj["signname"])+": "+str(charr["v"]),"graphemon:readingValue":str(charr["v"]),"@id":graphemeobj["@id"]+"_reading_"+str(charr["v"])},"grapheme":graphemeobj}
                            else:
                                curchar={"_class":"chr","@id":str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc","@type":"TransliterationCharOccurrence","reading":str(charr["v"]),"grapheme":getGraphemeReadingURI(str(charr["v"]))}                            
                            #,"grapheme":getGraphemeReadingURI(str(charr["v"]))
                            curseq["children"].append(curchar)
                            #ttlresult.add(str(namespaceshortsignlist)+":character_"+replaceNonURIChars(str(charr["v"]))+" rdf:type graphemon:Grapheme .\n")
                            #ttlresult.add(str(namespaceshortsignlist)+":character_"+replaceNonURIChars(str(charr["v"]))+" rdfs:label \"Character: "+str(charr["v"])+"\" .\n")
                            #ttlresult.add(str(namespaceshortsignlist)+":character_"+replaceNonURIChars(str(charr["v"]))+"_reading_"+replaceNonURIChars(str(charr["v"]))+" graphemon:occurrence "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_character .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph rdf:type cidoc:TX9_Glyph .\n")
                            if "break" in charr and "damaged" in charr["break"]:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"true\"^^xsd:boolean .\n")
                            else:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"false\"^^xsd:boolean .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> cunei:"+str(currenttabletid)+"_writtenText .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph rdfs:label \"Glyph at "+str(currenttabletid)+"["+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"])\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> "+namespaceshort+":"+currenttabletid+" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/P138_represents> "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:consistsOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc rdf:type cunei:TransliterationCharOccurrence .\n")
                            labeltouri["Char Occurrence: "+str(charr["v"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"])"]=str(namespace)+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc"
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc rdfs:label \"Char Occurrence: "+str(charr["v"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"])\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc lemon:writtenRep \""+str(charr["v"])+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc lemon:writtenRepUnicode \""+str(cuneifyWord(str(charr["v"]),str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc",ttlresult))+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc lemon:writtenRepASCII \""+str(format_ascii(str(charr["v"])))+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:partOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:positionOnTabletSide \""+str(currentcharindex)+"\"^^xsd:integer .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:Line \""+str(currentline)+"\"^^xsd:integer .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:positionInWord \""+str(currentrelcharindex)+"\"^^xsd:integer .\n")
                            if currentcharindex>0:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:prevInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:prevInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_glyph .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:prev "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:prev "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_glyph .\n")
                            if currentrelcharindex<=len(lineitem["f"]["gdl"]):
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:next "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:next "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_glyph .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:nextInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:nextInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_glyph .\n")
                            currentcharindex+=1
                            currentrelcharindex+=1
    print("Assigned "+str(sensescounter)+" senses!")
    return ttlresult

def getCurrentSideFromJTF(jtfldrep,side):
    for item in jtfldrep["@graph"]["children"]:
        if item["@type"]==side:
            return item
    return None

def analyzeTablet(data,ttlresult):
    tablettype=""
    currentside=""
    currentsentence=1
    currentline=""
    jtfldrep={"@context":jtfcontext,"@graph":{"_class":"object", "@id":str(data["textid"]),"@type":"tablet","children":[]}}
    if data["type"]=="cdl":
        ttlresult.add(namespaceshort+":"+data["textid"]+" rdf:type cunei:Tablet .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+" rdfs:label \"Cuneiform Artifact: "+str(data["textid"])+"\" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_transliteration rdf:type cunei:Transliteration .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_transliteration rdfs:label \"Transliteration: "+str(data["textid"])+"\" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+" cunei:writtenText "+namespaceshort+":"+str(data["textid"])+"_writtenText .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText rdf:type cidoc:TX1_WrittenText .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText rdfs:label \"Written Text on "+str(data["textid"])+"\" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText cidoc:P56_found_on "+namespaceshort+":"+str(data["textid"])+" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText cidoc:TXP10_read_by "+namespaceshort+":"+str(data["textid"])+"_writtenText_reading .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText_reading rdf:type cidoc:TX5_Reading .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText_reading rdfs:label \"Reading interpretation of the written text of "+str(data["textid"])+"\" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText_reading cidoc:TXP3_is_rendered_by "+namespaceshort+":"+data["textid"]+"_transliteration  .\n")
        currenttabletid=data["textid"]
        currenttableturi=namespace+data["textid"]
    if "cdl" in data:
        for node in data["cdl"]:
            if "type" in node and "text" in node["type"] and "cdl" in node:
                for tabitem in node["cdl"]:
                    if tabitem["node"]=="d" and tabitem["type"]=="tablet":
                        tablettype=tabitem["subtype"]
                    if tabitem["node"]=="d" and tabitem["type"]=="obverse":
                        currentside="obverse"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"obverse","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:ObverseSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="reverse":
                        currentside="reverse"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"reverse","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:ReverseSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="top":
                        currentside="top"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"top","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:TopSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="bottom":
                        currentside="bottom"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"bottom","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:BottomSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="right":
                        currentside="right"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"right","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:RightSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="left":
                        currentside="left"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"left","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:LeftSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="c" and tabitem["type"]=="discourse" and "cdl" in tabitem:
                        for textitem in tabitem["cdl"]:
                            if textitem["node"]=="c" and textitem["type"]=="sentence" and "cdl" in textitem:
                                if currentsentence>1:
                                    ttlresult.add((str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence)).replace("__","_")+" cunei:prevSentence "+(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence-1)).replace("__","_")+" .\n")
                                ttlresult.add((str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_tsentence_"+str(currentsentence)).replace("__","_")+" rdf:type cunei:TransliterationSentence .\n")
                                ttlresult.add((str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence)).replace("__","_")+" rdf:type cunei:Sentence .\n")
                                ttlresult.add((str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence)).replace("__","_")+" rdfs:label \"Sentence "+str(currentsentence)+" on "+str(currenttabletid)+"\" .\n")
                                ttlresult=handleLineElements(textitem,ttlresult,currentside,currentsentence,currenttabletid,getCurrentSideFromJTF(jtfldrep,currentside))
                                currentsentence+=1
    with open(corpusid+'_jtfs/'+str(data["textid"])+'.jtf', 'w', encoding='utf-8') as f:
        f.write(json.dumps(jtfldrep,indent=2))
        f.close()
    return ttlresult

header="""@prefix xsd:<http://www.w3.org/2001/XMLSchema#> .\n@prefix graphemon:<http://purl.org/graphemon/> .\n@prefix cunei:<http://purl.org/cuneiform/> .\n@prefix cuneidict:<http://purl.org/cuneiform/dict/> .\n@prefix cuneisignlist:<http://purl.org/cuneiform/signlist/> .\n@prefix cidoc:<http://www.cidoc-crm.org/cidoc-crm/> .\n@prefix owl:<http://www.w3.org/2002/07/owl#> .\n@prefix rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:<http://www.w3.org/2000/01/rdf-schema#> .\n@prefix lemon:<http://lemon-model.net/lemon#> .\n"""
ontology="""cunei:isDamaged rdf:type owl:DatatypeProperty .\ngraphemon:hasGraphemeReading rdf:type owl:ObjectProperty .\n<http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> rdf:type owl:ObjectProperty .\ncunei:hasLine rdf:type owl:ObjectProperty.\ncidoc:P56_found_on rdf:type owl:ObjectProperty.\ncidoc:TXP10_read_by rdf:type owl:ObjectProperty.\ncidoc:TXP3_is_rendered_by rdf:type owl:ObjectProperty .\ncunei:writtenText rdf:type owl:ObjectProperty .\ncunei:hasSide rdf:type owl:ObjectProperty .\ncunei:partOf rdf:type owl:ObjectProperty .\ncunei:next rdf:type owl:ObjectProperty .\ncunei:prevLine rdf:type owl:ObjectProperty .\ncunei:nextLine rdf:type owl:ObjectProperty .\ncunei:prevSentence rdf:type owl:ObjectProperty .\nlemon:reference rdf:type owl:ObjectProperty .\ncunei:nextSentence rdf:type owl:ObjectProperty .\ncunei:nextWord rdf:type owl:ObjectProperty .\ncunei:consistsOf rdf:type owl:ObjectProperty .\ncunei:prevWord rdf:type owl:ObjectProperty .\ncunei:prevInWord rdf:type owl:ObjectProperty .\ncunei:nextInWord rdf:type owl:ObjectProperty .\ncunei:prev rdf:type owl:ObjectProperty .\nlemon:sense rdf:type owl:ObjectProperty .\nlemon:pos rdf:type owl:ObjectProperty .\nlemon:entry rdf:type owl:ObjectProperty .\nlemon:writtenRepUnicode rdf:type owl:DatatypeProperty .\n lemon:writtenRepASCII rdf:type owl:DatatypeProperty .\n<http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> rdf:type owl:ObjectProperty .<http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> rdf:type owl:ObjectProperty .\n<http://www.cidoc-crm.org/cidoc-crm/P138_represents> rdf:type owl:ObjectProperty .\n lemon:writtenRep rdf:type owl:DatatypeProperty .\ncunei:positionOnTabletSide rdf:type owl:DatatypeProperty .\ncunei:locatedIn rdf:type owl:ObjectProperty .\nlemon:form rdf:type owl:ObjectProperty .\ncunei:positionInWord rdf:type owl:DatatypeProperty .\ncunei:Line rdf:type owl:DatatypeProperty .\ncunei:isAttested rdf:type owl:ObjectProperty .\n"""

corpusid="ccpo"
subdircorp=""
if subdircorp!="":
    rootdir="cams-gkab/cams/gkab/corpusjson"
else:
    rootdir=str(corpusid)+"/"+str(corpusid)+"/corpusjson/"

print(cuneify)
print(rootdir)
print(list(os.walk(rootdir)))
if not os.path.isdir(str(corpusid)+"_jtfs"):
    os.mkdir(str(corpusid)+"_jtfs")
if not os.path.isdir(str(corpusid)+"_htmls"):
    os.mkdir(str(corpusid)+"_htmls")
counter=1
for subdir, dirs, files in os.walk(rootdir):
    print(subdir)
    print(dirs)
    print(files)
    if subdir==".":
        continue
    subdirs=str(subdir).replace(".\\","")
    for filee in files:
        try:
            with open(subdir+"/"+filee,encoding='utf-8') as f:
              data = json.load(f)
        except Exception as e:
            print(e)
        ttlresult=analyzeTablet(data,ttlresult)
print("ready")

with open(corpusid+'_search.js', 'w', encoding='utf-8') as f:
    f.write("var search="+json.dumps(labeltouri,indent=2))
    f.close()

with open(corpusid+'.ttl', 'w', encoding='utf-8') as f:
  f.write(header)
  f.write(ontology)
  f.write("".join(ttlresult))
  f.close()
with open(corpusid+'_dict.ttl', 'w', encoding='utf-8') as f:
  f.write(header)
  f.write(ontology)
  f.write("".join(ttldictresult))
  f.close()
g = Graph()
g.parse(corpusid+'.ttl')
prefixnamespace="http://purl.org/cuneiform/"
subjectstorender=[]
for sub in g.subjects():
    if prefixnamespace in sub:
        subjectstorender.append(sub)
pathmap={}
paths={}
for subj in subjectstorender:
    path=subj.replace("http://purl.org/cuneiform/","")
    if "/" in path:
        addpath=""
        for pathelem in path.split("/"):
            addpath+=pathelem+"/"
            if not os.path.isdir(str(corpusid)+"_htmls/"+addpath):
                os.mkdir(str(corpusid)+"_htmls/"+addpath)
            print(addpath)
        if str(corpusid)+"_htmls/"+path[0:path.rfind('/')]+"/" not in paths:
            paths[str(corpusid)+"_htmls/"+path[0:path.rfind('/')]+"/"]=[]
        paths[str(corpusid)+"_htmls/"+path[0:path.rfind('/')]+"/"].append(addpath[0:addpath.rfind('/')])
    else:
        if not os.path.isdir(str(corpusid)+"_htmls/"+path):
             os.mkdir(str(corpusid)+"_htmls/"+path)
        if str(corpusid)+"_htmls/" not in paths:
            paths[str(corpusid)+"_htmls/"]=[]
        paths[str(corpusid)+"_htmls/"].append(path+"/index.html")
    createHTML(str(corpusid)+"_htmls/"+path,g.predicate_objects(subj),subj)  
#print(paths)
for path in paths:
    indexhtml="<html><head></head><body><h1>"+str(path)+"</h1><ul style=\"height: 100%; overflow: auto\">"
    for pathlink in paths[path]:
        indexhtml+="<li><a href=\""+str(pathlink)+"\">"+str(pathlink[pathlink.rfind('/')+1:])+"</a></li>"
    indexhtml+="</ul></body></html>"
    print(path)
    with open(path+"index.html", 'w', encoding='utf-8') as f:
        f.write(indexhtml)
        f.close()
g.serialize(destination=corpusid+'.ttl')
