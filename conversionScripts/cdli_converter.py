import json
import csv
import re
import os

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
ttlresult.add("cunei:Tablet rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdf:type owl:Class . lemon:Sense rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdfs:label \"Glyph\"@en .\n")
namespace="https://cdli.ucla.edu/"
namespaceprefix="cdli"
materials={"agate":"http://www.wikidata.org/entity/Q123314",
"alabaster":"http://www.wikidata.org/entity/Q143447",
"aragonite":"http://www.wikidata.org/entity/Q23775",
"bitumen":"http://www.wikidata.org/entity/Q167510",
"calcite":"http://www.wikidata.org/entity/Q171917",
"carnelian":"http://www.wikidata.org/entity/Q324369",
"clay":"http://www.wikidata.org/entity/Q42302",
"lead":"http://www.wikidata.org/entity/Q708",
"ivory":"http://www.wikidata.org/entity/Q82001",
"lapislazuli":"http://www.wikidata.org/entity/Q216798",
"limestone":"http://www.wikidata.org/entity/Q23757",
"marble":"http://www.wikidata.org/entity/Q40861",
"obsidian":"http://www.wikidata.org/entity/Q53754",
"sandstone":"http://www.wikidata.org/entity/Q13085",
"shell":"http://www.wikidata.org/entity/Q213096",
"tuff":"http://www.wikidata.org/entity/Q484924",
"wood":"http://www.wikidata.org/entity/Q287"
 }
genre={"Administrative":"http://www.example.org/cunei/Administrative","list":"http://www.wikidata.org/entity/Q12139612"}
subgenre={}
language={"Sumerian":"http://www.wikidata.org/entity/Q36790",
"Akkadian":"http://www.wikidata.org/entity/Q35518",
"Hittite":"http://www.wikidata.org/entity/Q35668",
"undetermined":"http://www.example.org/cunei/Undetermined"}
period={"Uruk III (ca. 3200-3000 BC)":"http://www.wikidata.org/entity/Q731494", "Ur III":"http://www.wikidata.org/entity/Q109384761"}
dynasty={}
cuneify={}
signmapping={}
sensesmap={}
prefixes={}

with open("cuneify.json",encoding='utf-8') as f:
    cuneify = json.load(f)

with open("signmapping.json",encoding='utf-8') as f:
    signmapping = json.load(f)
    
with open('oraccsenses.json', encoding="utf-8") as f:
    sensesmap = json.load(f)
    
with open('prefixes.json', encoding="utf-8") as f:
    prefixes = json.load(f)

def getGraphemeReadingURI(word):
    if word!=None and word!="" and word in cuneify:
        print(str(word)+" - "+str(word in cuneify))
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
                ttlresult.add("<"+str(worduri)+"> cunei:contains <"+str(signmapping[chara]["uri"])+"> .\n")
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"> rdf:type graphemon:Grapheme . \n")
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"> rdfs:label \"Character: "+str(signmapping[chara]["signname"])+"\" . \n")
                labeltouri["Character: "+str(signmapping[chara]["signname"])]=str(signmapping[chara]["uri"])
            if counter<len(chars) and chara in signmapping:
                ttlresult.add("<"+str(worduri)+"> graphemon:hasGraphemeReading <"+str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])+"> .\n")
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])+"> rdfs:label \"Grapheme Reading "+str(signmapping[chara]["signname"])+": "+str(chars[counter])+"\" .\n")
                labeltouri["Grapheme Reading "+str(signmapping[chara]["signname"])+": "+str(chars[counter])]=str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])+"> rdf:type graphemon:GraphemeReading .\n")
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"> graphemon:hasGraphemeReading <"+replaceNonURIChars(str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter]))+"> .\n")
            counter+=1
        return cuneify[word]
    return ""

def replaceNonURIChars(myuri):
    res=myuri.replace("$","_").replace("[","_").replace("]","_").replace("\"","_").replace("{","_").replace("?","_").replace("!","_").replace("+","_").replace(" ","_").replace("=","_").replace("-","_").replace("^","_").replace("*","_").replace("}","_").replace("̌","_").replace(";","_").replace("̄","_").replace("ʾ","_").replace("̆","_").replace(",","_").replace("'","_").replace("/","_").replace("+","_").replace("(","_").replace(")","_").replace("|","_").replace("@","_").replace("×","_").replace("&","_").replace("+","_").replace(".","_")
    if res.startswith("_"):
        res=res[1:]
    if res.endswith("_"):
        res=res[0:-1]
    return res.strip()

def cleanForCharLookup(charr):
    return charr.replace("#","").replace("?","").replace("!","").lower()

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

counter=0
with open('cdli_cat.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if counter<7500:
            ttlresult.add(namespaceprefix+":P"+row["id"]+" rdf:type cunei:Tablet .\n")
            ttlresult.add(namespaceprefix+":P"+row["id"]+" rdfs:label \"Cuneiform Artifact "+str("P"+row["id"])+"\"@en .\n")
            ttlresult.add(namespaceprefix+":P"+row["id"]+"_transliteration rdf:type cunei:Transliteration .\n")
            if "author" in row and row["author"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_transliteration dc:creator \""+str(row["author"])+"\"^^xsd:string .\n")
            if "collection" in row and row["collection"]!="":
                if ";" in row["collection"]:
                    for coll in row["collection"].split(";"):
                        ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:collection cdli:"+replaceNonURIChars(str(coll))+" .\n")
                        ttlresult.add("cdli:"+replaceNonURIChars(str(coll))+" rdf:type cunei:Collection .\n")
                        ttlresult.add("cdli:"+replaceNonURIChars(str(coll))+" rdfs:member "+namespaceprefix+":P"+row["id"]+" .\n")
                        ttlresult.add("cdli:"+replaceNonURIChars(str(coll))+" rdfs:label \""+str(coll)+"\"^^xsd:string .\n")
                else:
                    ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:collection cdli:"+replaceNonURIChars(str(row["collection"]))+" .\n")
                    ttlresult.add("cdli:"+replaceNonURIChars(str(row["collection"]))+" rdfs:member "+namespaceprefix+":P"+row["id"]+" .\n")
                    ttlresult.add("cdli:"+replaceNonURIChars(str(row["collection"]))+" rdf:type cunei:CuneiformArtifactCollection .\n")
                    ttlresult.add("cdli:"+replaceNonURIChars(str(row["collection"]))+" rdfs:label \""+str(row["collection"])+"\"^^xsd:string .\n")
            if "cdli_comments" in row and row["cdli_comments"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:remarks \""+row["cdli_comments"]+"\"^^xsd:string .\n")
            if "museum_no" in row and row["museum_no"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:museumNumber \""+row["museum_no"]+"\"^^xsd:string .\n")
            if "composite_id" in row and row["composite_id"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:compositeNumber \""+row["composite_id"]+"\"^^xsd:string .\n")
            if "width" in row and row["width"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:width "+namespaceprefix+":P"+row["id"]+"_width .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_width rdf:type cunei:Width .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_width rdfs:label \"Width of Cuneiform Artifact "+str("P"+row["id"])+"\"@en .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_width rdf:value \""+row["width"]+"\"^^xsd:integer .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_width qudt:unit qudt:millimeter .\n") 
            if "height" in row and row["height"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:height "+namespaceprefix+":P"+row["id"]+"_height .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_height rdf:type cunei:Height .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_height rdfs:label \"Height of Cuneiform Artifact "+str("P"+row["id"])+"\"@en .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_height rdf:value \""+row["height"]+"\"^^xsd:integer .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_height qudt:unit qudt:millimeter .\n") 
            if "thickness" in row and row["thickness"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:thickness "+namespaceprefix+":P"+row["id"]+"_thickness .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_thickness rdf:type cunei:Thickness .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_thickness rdfs:label \"Thickness of Cuneiform Artifact "+str("P"+row["id"])+"\"@en .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_thickness rdf:value \""+row["thickness"]+"\"^^xsd:integer .\n")
                ttlresult.add(namespaceprefix+":P"+row["id"]+"_thickness qudt:unit qudt:millimeter .\n") 
            if "material" in row and row["material"] in materials:
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:material <"+materials[row["material"]]+"> .\n")
                ttlresult.add("<"+materials[row["material"]]+"> rdfs:label \""+str(row["material"])+"\"@en .\n")
            else:
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:material \""+row["material"]+"\"^^xsd:string .\n") 
            if "genre" in row and row["genre"] in genre:
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:genre <"+genre[row["genre"]]+"> .\n")
                ttlresult.add("<"+genre[row["genre"]]+"> rdf:type cunei:Genre .\n")
                ttlresult.add("<"+genre[row["genre"]]+"> rdfs:label \""+str(row["genre"])+"\"@en .\n")
            elif "genre" in row and row["genre"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:genre \""+row["genre"]+"\"^^xsd:string .\n")
            if "subgenre" in row and row["subgenre"] in subgenre:
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:subgenre <"+subgenre[row["subgenre"]]+"> .\n")
                ttlresult.add("<"+subgenre[row["subgenre"]]+"> rdf:type cunei:Genre.\n")
                ttlresult.add("<"+subgenre[row["subgenre"]]+"> rdfs:label \""+str(row["subgenre"])+"\"@en .\n")
                ttlresult.add("<"+subgenre[row["subgenre"]]+"> cunei:cdli_key \""+str(row["subgenre"])+"\"^^xsd:string .\n")
            elif "subgenre" in row and row["subgenre"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:subgenre \""+row["subgenre"]+"\"^^xsd:string .\n") 
            if "language" in row and row["language"] in language:
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:language <"+language[row["language"]]+"> .\n")
                ttlresult.add("<"+language[row["language"]]+"> rdf:type cunei:Language .\n")
                ttlresult.add("<"+language[row["language"]]+"> rdfs:label \""+str(row["language"])+"\"@en .\n")
                ttlresult.add("<"+language[row["language"]]+"> cunei:cdli_key \""+str(row["language"])+"\"^^xsd:string .\n")
            elif "language" in row and row["language"]!="":
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:language \""+row["language"]+"\"^^xsd:string .\n") 
            if "period" in row and row["period"] in period:
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:period <"+period[row["period"]]+"> .\n")
                ttlresult.add("<"+period[row["period"]]+"> rdf:type cunei:Period .\n")
                ttlresult.add("<"+period[row["period"]]+"> rdfs:label \""+str(row["period"])+"\"@en .\n")
                ttlresult.add("<"+period[row["period"]]+"> cunei:cdli_key \""+str(row["period"])+"\"^^xsd:string .\n")
            else:
                ttlresult.add(namespaceprefix+":P"+row["id"]+" cunei:period \""+row["period"]+"\"^^xsd:string .\n")                   
            print(row["id"])
        counter+=1
header="""@prefix dc:<http://purl.org/dc/terms/> .\n@prefix cdli:<https://cdli.ucla.edu/> .\n@prefix graphemon:<https://purl.org/graphemon/> .\n@prefix qudt:<http://qudt.org/schema/qudt/> .\n@prefix xsd:<http://www.w3.org/2001/XMLSchema#> .\n@prefix cunei:<http://www.example.org/cunei/> .\n@prefix cuneidict:<http://www.example.org/cuneiform/dict/> .\n@prefix cidoc:<http://www.cidoc-crm.org/cidoc-crm/> .\n@prefix owl:<http://www.w3.org/2002/07/owl#> .\n@prefix rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:<http://www.w3.org/2000/01/rdf-schema#> .\n@prefix lemon:<http://lemon-model.net/lemon#> .\n"""
ontology="""cunei:isDamaged rdf:type owl:DatatypeProperty .\ncunei:positionOnTabletSide rdf:type owl:DatatypeProperty .\ncunei:positionInWord rdf:type owl:DatatypeProperty .\ncunei:consistsOf rdf:type owl:ObjectProperty .\nrdfs:member rdf:type owl:ObjectProperty .\ncunei:language rdf:type owl:ObjectProperty .\ncunei:period rdf:type owl:ObjectProperty .\ncunei:cdli_key rdf:type owl:ObjectProperty .\ncunei:compositeNumber rdf:type owl:ObjectProperty .\ncunei:museumNumber rdf:type owl:ObjectProperty .\ncunei:collection rdf:type owl:ObjectProperty .\nrdf:value rdf:type owl:ObjectProperty .\nqudt:unit rdf:type owl:ObjectProperty .\ncunei:thickness rdf:type owl:ObjectProperty .\ncunei:width rdf:type owl:ObjectProperty .\ncunei:height rdf:type owl:ObjectProperty .\ncunei:material rdf:type owl:ObjectProperty .\ncunei:isDamaged rdf:type owl:ObjectProperty .\n<http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> rdf:type owl:ObjectProperty .\ncunei:hasLine rdf:type owl:ObjectProperty.\ncidoc:P56_found_on rdf:type owl:ObjectProperty.\ncidoc:TXP10_read_by rdf:type owl:ObjectProperty.\ncidoc:TXP3_is_rendered_by rdf:type owl:ObjectProperty .\ncunei:writtenText rdf:type owl:ObjectProperty .\ncunei:hasSide rdf:type owl:ObjectProperty .\ncunei:partOf rdf:type owl:ObjectProperty .\ncunei:next rdf:type owl:ObjectProperty .\ncunei:prevLine rdf:type owl:ObjectProperty .\ncunei:nextLine rdf:type owl:ObjectProperty .\ncunei:prevSentence rdf:type owl:ObjectProperty .\ncunei:nextSentence rdf:type owl:ObjectProperty .\ncunei:nextWord rdf:type owl:ObjectProperty .\ncunei:consistsOf rdf:type owl:ObjectProperty .\ncunei:prevWord rdf:type owl:ObjectProperty .\ncunei:prevInWord rdf:type owl:ObjectProperty .\ncunei:nextInWord rdf:type owl:ObjectProperty .\ncunei:prev rdf:type owl:ObjectProperty .\nlemon:sense rdf:type owl:ObjectProperty .\nlemon:pos rdf:type owl:ObjectProperty .\nlemon:entry rdf:type owl:ObjectProperty .\nlemon:writtenRepUnicode rdf:type owl:ObjectProperty .\n lemon:writtenRepASCII rdf:type owl:ObjectProperty .\n<http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> rdf:type owl:ObjectProperty .<http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> rdf:type owl:ObjectProperty .\n<http://www.cidoc-crm.org/cidoc-crm/P138_represents> rdf:type owl:ObjectProperty .\n lemon:writtenRep rdf:type owl:ObjectProperty .\ncunei:positionOnTabletSide rdf:type owl:ObjectProperty .\ncunei:locatedIn rdf:type owl:ObjectProperty .\nlemon:form rdf:type owl:ObjectProperty .\ncunei:positionInWord rdf:type owl:ObjectProperty .\ncunei:Line rdf:type owl:ObjectProperty .\ncunei:isAttested rdf:type owl:ObjectProperty .\n"""

corpusid="cdli"
if not os.path.isdir(str(corpusid)+"_jtfs"):
    os.mkdir(str(corpusid)+"_jtfs")
if not os.path.isdir(str(corpusid)+"_htmls"):
    os.mkdir(str(corpusid)+"_htmls")

with open('cdli.ttl', 'w', encoding='utf-8') as f:
  f.write(header)
  f.write(ontology)
  f.write("".join(sorted(list(dict.fromkeys(ttlresult)))))
  f.close()
  
testcounter=0
cdlitabs=set()
with open('cdliatf_unblocked.atf', encoding="utf-8") as atffile:
    atfs=atffile.read()
    atfss=atfs.split("&P")
    for atf in atfss:
        if testcounter>2:
            continue
        atfsslines=atf.split("\n")
        currenttabletid="P"+atfsslines[0][0:atfsslines[0].find("=")-1].strip()
        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+" rdf:type cunei:Tablet .\n")
        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+" rdfs:label \"Cuneiform Artifact: "+str(currenttabletid)+"\" .\n")
        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText rdf:type cidoc:TX1_WrittenText .\n")
        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText rdfs:label \"Written Text on "+str(currenttabletid)+"\" .\n")
        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText cidoc:P56_found_on "+namespaceprefix+":"+str(currenttabletid)+" .\n")
        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText cidoc:TXP10_read_by "+namespaceprefix+":"+str(currenttabletid)+"_writtenText_reading .\n")
        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText_reading rdf:type cidoc:TX5_Reading .\n")
        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText_reading rdfs:label \"Reading interpretation of the written text of "+str(currenttabletid)+"\" .\n")
        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_writtenText_reading cidoc:TXP3_is_rendered_by "+namespaceprefix+":"+str(currenttabletid)+"_transliteration  .\n")
        currentside=""
        jtfldrep={"@context":jtfcontext,"@graph":{"_class":"object", "@id":"P"+atfsslines[0],"@type":"tablet","children":[]}}
        currentsidejtf=None
        currentline=0
        currentwordindex=0
        currentrelcharindex=0
        try:
            for line in atfsslines:
                if line.startswith("#") or line.startswith("$") or line.startswith("@tablet"):
                    continue
                elif line.startswith("@"):
                    currentside=line.replace("@","").strip()
                    currentsideuri=replaceNonURIChars(str(currentside))
                    currentsidejtf={"_class":"surface","@id":str(currenttabletid)+"_"+currentsideuri,"@type":currentside,"children":[]}
                    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_"+currentsideuri+" rdf:type cunei:Side .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+" .\n")
                    jtfldrep["@graph"]["children"].append(currentsidejtf)
                    currentline=0
                    currentcharindex=0
                elif re.match("^[0-9]+\.",line):
                    currentline+=1
                    curjtfline={"_class":"line","@id":str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline)),"children":[]}
                    cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+" rdf:type cunei:TransliterationLine .\n")
                    cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+" rdfs:label \"Line: "+str(currentline)+" ["+str(currenttabletid)+"_"+str(currentside)+"]\" .\n")
                    currentsidejtf["children"].append(curjtfline)
                    currentwordindex=0
                    linespl=line.split(" ")
                    linelen=len(linespl)
                    for word in linespl:
                        if currentwordindex==0:
                            currentwordindex+=1
                            continue
                        cdlitabs.add(namespaceprefix+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc rdf:type cunei:WordformOccurance .\n")
                        cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc rdfs:label \" WordForm Occurrence: "+str(word)+" ("+str(currenttabletid)+"["+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"])\" .\n")
                        cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform rdf:type cunei:WordForm .\n")
                        cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform rdfs:label \"WordForm: "+str(word).replace("\"","")+"\" .\n")
                        cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform lemon:writtenRepUnicode \""+str(cuneifyWord(str(word),str(namespace)+""+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc",cdlitabs)).replace("\"","")+"\" .\n")
                        cdlitabs.add(str(namespaceprefix)+":"+replaceNonURIChars(str(word))+"_wordform lemon:writtenRepASCII \""+str(format_ascii(str(word))).replace("\"","")+"\" .\n")
                        curseq={"_class":"sequence","@id":str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc","form":word,"@type":"short","children":[]}
                        curjtfline["children"].append(curseq)
                        cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+" cunei:consistsOf "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc .\n")
                        if currentwordindex>0:
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:prevWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex-1)+"_wordformocc .\n")
                        if currentwordindex<=linelen:
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:nextWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex+1)+"_wordformocc .\n")
                        currentwordindex+=1
                        currentrelcharindex=0
                        wordspl=word.split("-")
                        wordspllen=len(wordspl)
                        for charr in wordspl:
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc rdf:type cunei:TransliterationCharOccurrence .\n")
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc rdfs:label \"Char Occurrence: "+str(charr)+" ("+str(currenttabletid)+"["+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"])\" .\n")
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph rdf:type cidoc:TX9_Glyph .\n")
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> cunei:"+str(currenttabletid)+"_writtenText .\n")
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph rdfs:label \"Glyph at "+str(currenttabletid)+"["+str(currentside)+" "+replaceNonURIChars(str(currentline))+" "+str(currentcharindex)+"])\" .\n")
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:consistsOf "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc .\n")
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:partOf "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc .\n")
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:positionOnTabletSide \""+str(currentcharindex)+"\"^^xsd:integer .\n")
                            cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:positionInWord \""+str(currentrelcharindex)+"\"^^xsd:integer .\n")
                            if "#" in charr:
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"true\"^^xsd:boolean .\n")
                            else:
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"false\"^^xsd:boolean .\n")
                            curchar={"_class":"chr","@id":str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc","@type":"TransliterationCharOccurrence","reading":str(charr),"grapheme":getGraphemeReadingURI(cleanForCharLookup(str(charr)))}                            
                            curseq["children"].append(curchar)
                            if currentcharindex>0:
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:prevInWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_charocc .\n")
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:prevInWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_glyph .\n")
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:prev "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_charocc .\n")
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:prev "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_glyph .\n")
                            if currentrelcharindex<=wordspllen:
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:next "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_charocc .\n")
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:next "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_glyph .\n")
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:nextInWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_charocc .\n")
                                cdlitabs.add(str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:nextInWord "+str(namespaceprefix)+":"+str(currenttabletid)+"_"+currentsideuri+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_glyph .\n")
                            currentrelcharindex+=1
                            currentcharindex+=1
            with open("cdli_jtfs/"+replaceNonURIChars(currenttabletid)+'.jtf', 'w', encoding='utf-8') as f:
                f.write(json.dumps(jtfldrep,indent=2))
                f.close()
            testcounter+=1
        except:
            print("except")
with open("cdlitabs.ttl", 'w', encoding='utf-8') as f:
    f.write(header)
    f.write(ontology)
    f.write("".join(cdlitabs))
    f.close()



