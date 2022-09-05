import json
import re
from rdflib import Graph

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

createRefLinks=True

with open("../signlist/cuneify.json",encoding='utf-8') as f:
    cuneify = json.load(f)

with open("../signlist/signmapping.json",encoding='utf-8') as f:
    signmapping = json.load(f)
    
with open('../signlist/oraccsenses.json', encoding="utf-8") as f:
    sensesmap = json.load(f)
    
with open('../prefixes.json', encoding="utf-8") as f:
    prefixes = json.load(f)

def getGraphemeReadingURI(word):
    if word!=None and word!="" and word in cuneify:
        #print(str(word)+" - "+str(word in cuneify))
        unicodeword=cuneify[word]
        chars=word.split("-")
        counter=0
        for chara in unicodeword:
            if chara in signmapping:
                return {"@type":signmapping[chara]["@type"],"@id":signmapping[chara]["@id"],"signname":str(signmapping[chara]["signname"]),"label":"Grapheme: "+str(signmapping[chara]["signname"])}
    return {}

def cuneifyWord(ufword,worduri,ttlresult,readcolluri):
    word=format_unicode(cleanForCharLookup(ufword))
    #print("cuneifyWord "+str(word))
    if word!="" and word!="," and word.lower() in cuneify:
        unicodeword=cuneify[word.lower()]
        chars=re.split(wordsplit,word)
        counter=0
        #print(chars)
        for chara in unicodeword:
            if chara in signmapping:
                #print(str(chara)+" - "+str(signmapping[chara]))
                ttlresult.add("<"+str(worduri)+"> cunei:contains <"+str(signmapping[chara]["@id"])+"> .\n")
                ttlresult.add("<"+str(signmapping[chara]["@id"])+"> rdf:type graphemon:Grapheme . \n")
                ttlresult.add("<"+str(signmapping[chara]["@id"])+"> rdfs:label \"Character: "+str(signmapping[chara]["signname"])+"\" . \n")
                #labeltouri["Character: "+str(signmapping[chara]["signname"])]=str(signmapping[chara]["@id"])
            if counter<len(chars) and chara in signmapping:
                ttlresult.add("<"+str(worduri)+"> graphemon:hasGraphemeReading <"+str(signmapping[chara]["@id"])+"_reading_"+str(chars[counter])+"> .\n")
                cdlitabs.add(readcolluri+" rdfs:member <"+str(signmapping[chara]["@id"])+"_reading_"+str(chars[counter])+"> .\n")
                ttlresult.add("<"+str(signmapping[chara]["@id"])+"_reading_"+str(chars[counter])+"> rdfs:label \"Grapheme Reading "+str(signmapping[chara]["signname"])+": "+str(chars[counter])+"\" .\n")
                #labeltouri["Grapheme Reading "+str(signmapping[chara]["signname"])+": "+str(chars[counter])]=str(signmapping[chara]["@id"])+"_reading_"+str(chars[counter])
                ttlresult.add("<"+str(signmapping[chara]["@id"])+"_reading_"+str(chars[counter])+"> rdf:type graphemon:GraphemeReading .\n")
                ttlresult.add("<"+str(signmapping[chara]["@id"])+"> graphemon:hasGraphemeReading <"+str(signmapping[chara]["@id"])+"_reading_"+str(chars[counter])+"> .\n")
            counter+=1
        return cuneify[word]
    return ""

def replaceNonURIChars(myuri):
    res=myuri.replace("$","_").replace("<","_").replace(">","_").replace("#","").replace("~","_").replace("[","_").replace("]","_").replace("\"","_").replace("{","_").replace("?","_").replace("!","_").replace("+","_").replace(" ","_").replace("=","_").replace("-","_").replace("^","_").replace("*","_").replace("}","_").replace("̌","_").replace(";","_").replace("̄","_").replace("ʾ","_").replace("̆","_").replace(",","_").replace("'","_").replace("/","_").replace("+","_").replace("(","_").replace(")","_").replace("|","_").replace("@","_").replace("×","_").replace("&","_").replace("+","_").replace(".","_")
    if res.startswith("_"):
        res=res[1:]
    if res.endswith("_"):
        res=res[0:-1]
    return res.strip()

def cleanForCharLookup(charr):
    return charr.replace("_","").replace("#","").replace("?","").replace("!","").replace("|","").replace(",","").replace("]","").replace("[","").lower()

def format_unicode(word):
    unicode_replacements = {
            'A2':'Á',  'A3': 'À',
            'a2':'á',  'a3': 'à',
            'E2':'É',  'E3':'È',
            'e2':'é', 'e3':'è',
            'I2':'Í', 'I3':'Ì',
            'i2':'í', 'i3':'ì',
            'U2':'Ú', 'U3':'Ù',
            'u2':'ú', 'u3':'ù',
            'T,':'Ṭ',  'i':'j',
            'g':'ĝ',  't,':'ṭ',
            'h':'ḫ', 'H':'Ḫ',
            'sz':'š', 'SZ':'Š',
            's,':'ṣ', 'S,':'Ṣ',
            '0':'₀',  '1':'₁',
            '2':'₂',  '3':'₃',
            '4':'₄',  '5':'₅',
            '6':'₆',  '7':'₇',
            '8':'₈',  '9':'₉'}
    for rep, initial in unicode_replacements.items():
        word = word.replace(rep, initial)
    #print(word)
    return word

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
        word = word.replace(rep, initial)
    #print(word)
    return word

origtabletside="front"
tabletnames=["HS1174","HT073195","TCH92","O147"]
tabletsides=["front","back","left","right","bottom","top"]
tabsideid={"front":"03","back":"06","obverse":"03","reverse":"06","bottom":"04"}
sidereplacements:{"obverse":"front","reverse":"back"}
renderingvars={"O147":["A_Color","B_Color","A_shaded","B_Shaded"]}
tabletname="HS1174"
material="3D rendering"
wordsplit="-|~|\."
creatormap={"O147":"https://orcid.org/0000-0001-6690-9098"}
creator="https://orcid.org/0000-0002-9499-5840"
namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/imgannotations/"
namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/"
namespaceprefix="cuneiex"
crsnamespace="https://situx.github.io/cuneiformontology/examples/crs/"
filename="../examples/"+str(tabletname)+"/ttl/"+str(tabletname)+".atf"
withlines=False
withcharoccs=False
withglyphs=False   
    
for tabname in tabletnames:
    print(tabname)
    translitfilename="../examples/"+str(tabname)+"/transliteration/"+str(tabname)+".atf"
    namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/"
    namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/"
    header="""@prefix foaf:<http://xmlns.com/foaf/0.1/> .\n@prefix prov:<http://www.w3.org/ns/prov-o/> .\n@prefix skos:<http://www.w3.org/2004/02/skos/core#> .\n@prefix """+str(namespaceprefix)+""":<"""+str(namespace)+"""> .\n @prefix dc:<http://purl.org/dc/terms/> .\n@prefix cdli:<https://cdli.ucla.edu/> .\n@prefix graphemon:<https://purl.org/graphemon/> .\n@prefix qudt:<http://qudt.org/schema/qudt/> .\n@prefix xsd:<http://www.w3.org/2001/XMLSchema#> .\n@prefix cunei:<http://www.example.org/cunei/> .\n@prefix cuneidict:<http://www.example.org/cuneiform/dict/> .\n@prefix cidoc:<http://www.cidoc-crm.org/cidoc-crm/> .\n@prefix owl:<http://www.w3.org/2002/07/owl#> .\n@prefix rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:<http://www.w3.org/2000/01/rdf-schema#> .\n@prefix lemon:<http://lemon-model.net/lemon#> .\n"""
    ontology="""cunei:writtenrepASCII rdf:type owl:DatatypeProperty .\ncunei:charIndex rdf:type owl:DatatypeProperty .\ncunei:lineNumber rdf:type owl:DatatypeProperty .\ncunei:contains rdf:type owl:ObjectProperty .\ngraphemon:contains rdf:type owl:ObjectProperty .\ngraphemon:hasGraphemeReading rdf:type owl:ObjectProperty.\ncunei:isDamaged rdf:type owl:DatatypeProperty .\ncunei:positionOnTabletSide rdf:type owl:DatatypeProperty .\ncunei:positionInWord rdf:type owl:DatatypeProperty .\ncunei:consistsOf rdf:type owl:ObjectProperty .\nrdfs:member rdf:type owl:ObjectProperty .\ncunei:language rdf:type owl:ObjectProperty .\ncunei:period rdf:type owl:ObjectProperty .\ncunei:cdli_key rdf:type owl:ObjectProperty .\ncunei:compositeNumber rdf:type owl:ObjectProperty .\ncunei:museumNumber rdf:type owl:ObjectProperty .\ncunei:collection rdf:type owl:ObjectProperty .\nrdf:value rdf:type owl:ObjectProperty .\nqudt:unit rdf:type owl:ObjectProperty .\ncunei:thickness rdf:type owl:ObjectProperty .\ncunei:width rdf:type owl:ObjectProperty .\ncunei:height rdf:type owl:ObjectProperty .\ncunei:material rdf:type owl:ObjectProperty .\ncunei:isDamaged rdf:type owl:ObjectProperty .\n<http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> rdf:type owl:ObjectProperty .\ncunei:hasLine rdf:type owl:ObjectProperty.\ncidoc:P56_found_on rdf:type owl:ObjectProperty.\ncidoc:TXP10_read_by rdf:type owl:ObjectProperty.\ncidoc:TXP3_is_rendered_by rdf:type owl:ObjectProperty .\ncunei:writtenText rdf:type owl:ObjectProperty .\ncunei:hasSide rdf:type owl:ObjectProperty .\ncunei:partOf rdf:type owl:ObjectProperty .\ncunei:next rdf:type owl:ObjectProperty .\ncunei:prevLine rdf:type owl:ObjectProperty .\ncunei:nextLine rdf:type owl:ObjectProperty .\ncunei:prevSentence rdf:type owl:ObjectProperty .\ncunei:nextSentence rdf:type owl:ObjectProperty .\ncunei:nextWord rdf:type owl:ObjectProperty .\ncunei:consistsOf rdf:type owl:ObjectProperty .\ncunei:prevWord rdf:type owl:ObjectProperty .\ncunei:prevInWord rdf:type owl:ObjectProperty .\ncunei:nextInWord rdf:type owl:ObjectProperty .\ncunei:prev rdf:type owl:ObjectProperty .\nlemon:sense rdf:type owl:ObjectProperty .\nlemon:pos rdf:type owl:ObjectProperty .\nlemon:entry rdf:type owl:ObjectProperty .\nlemon:writtenRepUnicode rdf:type owl:ObjectProperty .\n lemon:writtenRepASCII rdf:type owl:ObjectProperty .\n<http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> rdf:type owl:ObjectProperty .<http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> rdf:type owl:ObjectProperty .\n<http://www.cidoc-crm.org/cidoc-crm/P138_represents> rdf:type owl:ObjectProperty .\n lemon:writtenRep rdf:type owl:ObjectProperty .\ncunei:positionOnTabletSide rdf:type owl:ObjectProperty .\ncunei:locatedIn rdf:type owl:ObjectProperty .\nlemon:form rdf:type owl:ObjectProperty .\ncunei:positionInWord rdf:type owl:ObjectProperty .\ncunei:Line rdf:type owl:ObjectProperty .\ncunei:isAttested rdf:type owl:ObjectProperty .\n"""    
    print(filename)
    print(translitfilename)
    data3d={}
    f = open(translitfilename,'r')
    atf=f.read()
    atfsslines=atf.split("\n")
    currenttabletid=tabname
    cdlitabs=set()
    wordformresult=set()
    cdlitabs.add("cidoc:E22_ManMadeObject rdfs:subClassOf prov:Entity .\n")
    cdlitabs.add("cunei:Transliteration rdfs:subClassOf prov:Entity .\n")
    cdlitabs.add("cunei:Tablet rdfs:subClassOf cidoc:E22_ManMadeObject .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+" rdf:type cunei:Tablet .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+" rdfs:label \"Cuneiform Artifact: "+str(currenttabletid)+"\" .\n")
    cdlitabs.add("cidoc:TX7_WrittenTextFragment rdfs:subClassOf cidoc:TX1_WrittenText .\n")
    cdlitabs.add("cidoc:TX7_WrittenTextFragment rdfs:label \"written text fragment\"@en .\n")
    cdlitabs.add("cunei:Side rdfs:subClassOf cidoc:TX7_WrittenTextFragment .\n")
    cdlitabs.add("cunei:Line rdfs:subClassOf cidoc:TX7_WrittenTextFragment .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText rdf:type cidoc:TX1_WrittenText .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText rdfs:label \"Written Text on "+str(currenttabletid)+"\" .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText cidoc:P56_found_on "+namespaceprefix+":"+str(currenttabletid)+" .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText cidoc:TXP10_read_by "+namespaceprefix+":"+str(currenttabletid)+"_writtenText_reading .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText_reading rdf:type cidoc:TX5_Reading .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText_reading rdfs:label \"Reading interpretation of the written text of "+str(currenttabletid)+"\" .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText_reading cidoc:TXP3_is_rendered_by "+namespaceprefix+":"+str(currenttabletid)+"_transliteration  .\n")
    currentside=""
    jtfldrep={"@context":jtfcontext,"@graph":{"_class":"object", "@id":"P"+atfsslines[0],"@type":"tablet","children":[]}}
    currentsidejtf={"_class":"surface","@id":str(currenttabletid)+"_tablet","@type":"tablet","children":[]}
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1 rdf:type cunei:Transliteration .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1 rdfs:label \"Transliteration 1 of "+str(currenttabletid)+"\"@en .\n")
    cdlitabs.add("cunei:CharOccurrenceCollection rdfs:subClassOf skos:Collection .\n")
    cdlitabs.add("cunei:CharOccurrenceCollection rdfs:label \"CharOccurrence Collection\"@en .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_charoccurrences rdf:type cunei:CharOccurrenceCollection .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_charoccurrences rdfs:label \"Char Occurrences of "+str(currenttabletid)+" generated from transliteration 1\"@en .\n")
    cdlitabs.add("cunei:WordFormOccurrenceCollection rdfs:subClassOf skos:Collection .\n")
    cdlitabs.add("skos:Collection rdf:type owl:Class .\n")
    cdlitabs.add("skos:Collection rdfs:label \"collection\"@en .\n")
    cdlitabs.add("cunei:WordFormOccurrenceCollection rdfs:label \"WordFormOccurrence Collection\"@en .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_wordformoccurrences rdf:type cunei:WordFormOccurrenceCollection .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_wordformoccurrences rdfs:label \"Wordform Occurrences of "+str(currenttabletid)+" generated from transliteration 1\"@en .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_glyphlist rdf:type cunei:GlyphCollection .\n")
    cdlitabs.add("cunei:GlyphCollection rdfs:subClassOf skos:Collection .\n")
    cdlitabs.add("cunei:GlyphCollection rdfs:label \"Glyph Collection\"@en .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_glyphlist rdfs:label \"Glyphs of "+str(currenttabletid)+"\"@en .\n")
    cdlitabs.add("lemon:Lexicon rdfs:subClassOf skos:Collection .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_lexicon rdf:type lemon:Lexicon .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_lexicon rdfs:label \"Lexicon for "+str(currenttabletid)+" generated from transliteration 1\"@en .\n")
    cdlitabs.add("cunei:GraphemeCollection rdfs:subClassOf skos:Collection .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_signlist rdf:type cunei:GraphemeCollection .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_signlist rdfs:label \"Signlist of "+str(currenttabletid)+"\"@en .\n")
    cdlitabs.add("cunei:GraphemeReadingCollection rdfs:subClassOf skos:Collection .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_signreadinglist rdf:type cunei:GraphemeReadingCollection .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_signreadinglist rdfs:label \"Sign Readings of "+str(currenttabletid)+"\"@en .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_signreadinglist rdfs:label \"Sign Readings of "+str(currenttabletid)+" as shown in transliteration 1\"@en .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_graphemevars rdf:type cunei:GraphemeVariantCollection .\n")
    cdlitabs.add("cunei:GraphemeVariantCollection rdfs:subClassOf skos:Collection .\n")
    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_graphemevars rdfs:label \""+str(currenttabletid)+" Grapheme Variant Collection \"@en .\n")
    currentline=0
    currentwordindex=0
    currentrelcharindex=0
    globalcharindex=0
    #try:
    for line in atfsslines:
        if line.startswith("#") or line.startswith("$") or line.startswith("@tablet"):
            continue
        elif line.startswith("@"):
            currentside=line.replace("@","").strip()
            currentsideuri=replaceNonURIChars(str(currentside))
            currentsidejtf={"_class":"surface","@id":str(currenttabletid)+"_"+currentsideuri,"@type":currentside,"children":[]}
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_"+currentsideuri+" rdf:type cunei:Side .\n")
            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_"+currentsideuri+" foaf:image \""+str(namespace)+"images/sides/"+str(tabname)+"_"+str(currentside)+".jpg\"^^xsd:anyURI .\n")
            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+" .\n")
            jtfldrep["@graph"]["children"].append(currentsidejtf)
            currentline=0
            currentcharindex=0
        elif re.match("^[0-9]+\.",line):
            currentline+=1
            curjtfline={"_class":"line","@id":str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline)),"children":[]}
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" rdf:type cunei:Line .\n")
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" rdfs:label \"Line "+str(currentline)+"\"@en .\n")
            if createRefLinks:
                cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" cidoc:TXP3_is_rendered_by "+namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"  .\n")
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" foaf:image \""+str(namespace)+"images/line/line_"+replaceNonURIChars(str(currentline))+"_"+str(tabname)+"_"+str(tabsideid[currentside])+"_"+str(currentside)+".jpg\"^^xsd:anyURI .\n")
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" rdf:type cunei:TransliterationLine .\n")
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+" cunei:contains "+namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" .\n")
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" skos:definition \""+str(line)+"\" .\n")
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" lemon:writtenRepUnicode \""+str(cuneifyWord(str(currentline),str(namespace)+""+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc",cdlitabs,namespaceprefix+":"+str(currenttabletid)+"_signreadinglist")).replace("\"","")+"\"^^cunei:unicodeLiteral .\n")
            cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" lemon:writtenRepASCII \""+str(format_ascii(str(currentline))).replace("\"","")+"\"^^cunei:ASCIILiteral .\n")
            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" rdfs:label \"Transliteration Line: "+str(currentline)+" ["+str(currenttabletid)+"_"+str(currentside)+"]\" .\n")
            currentsidejtf["children"].append(curjtfline)
            currentwordindex=0
            currentcharindex=1
            linespl=line.split(" ")
            linelen=len(linespl)
            for word in linespl:
                if word=="":
                    continue
                if currentwordindex==0:
                    currentwordindex+=1
                    continue
                cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc rdf:type cunei:WordformOccurance .\n")
                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc rdfs:label \" WordForm Occurrence: "+str(word)+" ("+str(currenttabletid)+"["+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"])\" .\n")
                cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc skos:definition \""+str(word)+"\" .\n")
                cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform rdf:type cunei:WordForm .\n")
                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_wordformoccurrences rdfs:member "+str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform . \n")
                cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform skos:definition \""+str(word)+"\" .\n")
                cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform  cunei:isAttested "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc .\n")
                wordformresult.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform rdf:type cunei:WordForm .\n")
                wordformresult.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform rdfs:label \"WordForm: "+replaceNonURIChars(str(word)).replace("\"","")+"\" .\n")
                cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform rdfs:label \"WordForm: "+str(word).replace("\"","")+"\" .\n")
                cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform lemon:writtenRepUnicode \""+str(cuneifyWord(str(word),str(namespace)+""+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc",cdlitabs,namespaceprefix+":"+str(currenttabletid)+"_signreadinglist")).replace("\"","")+"\"^^cunei:unicodeLiteral .\n")
                cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform lemon:writtenRepASCII \""+str(format_ascii(str(word))).replace("\"","")+"\"^^cunei:ASCIILiteral .\n")
                wordformresult.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform lemon:writtenRepASCII \""+str(format_ascii(str(word))).replace("\"","")+"\" .\n")
                curseq={"_class":"sequence","@id":str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc","form":word,"@type":"short","children":[]}
                curjtfline["children"].append(curseq)
                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+" cunei:consistsOf "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc .\n")
                if currentwordindex>0 and (currentwordindex-1)>0:
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc cunei:prevWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex-1)+"_wordformocc .\n")
                if currentwordindex<=linelen and (currentwordindex+1)<len(linespl):
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc cunei:nextWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex+1)+"_wordformocc .\n")
                currentrelcharindex=1
                wordspl=re.split(wordsplit,word)
                wordspllen=len(wordspl)
                for charr in wordspl:
                    if charr=="":
                        continue
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc rdf:type cunei:TransliterationCharOccurrence .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_charoccurrences rdfs:member "+str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform . \n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc rdfs:label \"Char Occurrence: "+str(charr)+" ("+str(currenttabletid)+"["+str(currentside)+"_transliteration1_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"])\" .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc skos:definition \""+str(charr)+"\" .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_charoccurrences rdfs:member "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc . \n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph rdf:type cidoc:TX9_Glyph .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph foaf:image \""+str(namespace)+"images/charline/charline_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_"+str(tabname)+"_"+str(tabsideid[currentside])+"_"+str(currentside)+".jpg\"^^xsd:anyURI .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph foaf:image \""+str(namespace)+"images/character/char_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_"+str(tabname)+"_"+str(tabsideid[currentside])+"_"+str(currentside)+".jpg\"^^xsd:anyURI .\n")              
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> cunei:"+str(currenttabletid)+"_writtenText .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph rdfs:label \"Glyph at "+str(currenttabletid)+"["+str(currentside)+" "+replaceNonURIChars(str(currentline))+" "+str(currentcharindex)+"])\" .\n")
                    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_glyphlist rdfs:member "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph .\n")                    
                    #cdlitabs.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform cunei:isAttested "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc cunei:consistsOf "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc cunei:partOf "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_word"+str(currentwordindex)+"_wordformocc .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc cunei:positionOnTabletSide \""+str(globalcharindex)+"\"^^xsd:integer .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc cunei:lineNumber \""+str(currentline)+"\"^^xsd:integer .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc cunei:charIndex \""+str(currentcharindex)+"\"^^xsd:integer .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc cunei:positionInWord \""+str(currentrelcharindex)+"\"^^xsd:integer .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc lemon:writtenRepUnicode \""+str(cuneifyWord(str(charr),str(namespace)+""+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc",cdlitabs,namespaceprefix+":"+str(currenttabletid)+"_signreadinglist"))+"\" .\n")
                    if createRefLinks:
                        cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph cidoc:TXP3_is_rendered_by "+namespaceprefix+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc .\n")
                    if "#" in charr:
                        cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph cunei:isDamaged \"true\"^^xsd:boolean .\n")
                    else:
                        cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph cunei:isDamaged \"false\"^^xsd:boolean .\n")
                    curchar={"_class":"chr","@id":str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc","@type":"TransliterationCharOccurrence","reading":str(charr),"grapheme":getGraphemeReadingURI(cleanForCharLookup(str(charr)))}                            
                    curseq["children"].append(curchar)
                    if currentcharindex>0 and (currentcharindex-1)>0:
                        if (currentrelcharindex-1)>0:
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc cunei:prevInWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentrelcharindex-1)+"_charocc .\n")
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph cunei:prevInWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentrelcharindex-1)+"_glyph .\n")
                        cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc cunei:prev "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex-1)+"_charocc .\n")
                        cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph cunei:prevChar "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex-1)+"_glyph .\n")
                    if currentcharindex<=wordspllen and (currentcharindex+1)<=wordspllen:
                        cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_charocc cunei:nextInWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_transliteration1_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex+1)+"_charocc .\n")
                        cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex)+"_glyph cunei:next "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_line"+replaceNonURIChars(str(currentline))+"_char"+str(currentcharindex+1)+"_glyph .\n")
                    currentrelcharindex+=1
                    currentcharindex+=1
                    globalcharindex+=1
                currentwordindex+=1
    
    print(cdlitabs)
    with open(translitfilename+".ttl", 'w', encoding='utf-8') as f:
        f.write(header)
        f.write(ontology)
        f.write("".join(cdlitabs))
        f.close()
    with open(translitfilename+".jtf", 'w', encoding='utf-8') as f:
        f.write(json.dumps(jtfldrep,indent=2))
        f.close()
    g = Graph()
    g.parse(translitfilename+".ttl")
    g.serialize(destination=translitfilename+".ttl")