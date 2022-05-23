import json
import csv

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

def replaceNonURIChars(myuri):
    return myuri.replace(" ","_").replace("$","_").replace("{","_").replace("}","_").replace("̌","_").replace(";","_").replace("̄","_").replace("ʾ","_").replace("̆","_").replace(",","_").replace("'","_").replace("/","_").replace("+","_").replace("(","_").replace(")","_").replace("|","_").replace("@","_").replace("×","_").replace("&","_").replace("+","_").replace(".","_")

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


         
#with open('cdliatf_unblocked.atf', encoding="utf-8") as atffile:
#    atfs=atffile.read()
#    atfss=atfs.split("&P")
#    for atf in atfss:
#        print(atf)
header="""@prefix dc:<http://purl.org/dc/terms/> .\n@prefix cdli:<https://cdli.ucla.edu/>.\n@prefix qudt:<http://qudt.org/schema/qudt/> .\n@prefix xsd:<http://www.w3.org/2001/XMLSchema#> .\n@prefix cunei:<http://www.example.org/cunei/> .\n@prefix cuneidict:<http://www.example.org/cuneiform/dict/> .\n@prefix cidoc:<http://www.cidoc-crm.org/cidoc-crm/> .\n@prefix owl:<http://www.w3.org/2002/07/owl#> .\n@prefix rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:<http://www.w3.org/2000/01/rdf-schema#> .\n@prefix lemon:<http://lemon-model.net/lemon#> .\n"""
ontology="""rdfs:member rdf:type owl:ObjectProperty .\ncunei:language rdf:type owl:ObjectProperty .\ncunei:period rdf:type owl:ObjectProperty .\ncunei:cdli_key rdf:type owl:DatatypeProperty .\ncunei:compositeNumber rdf:type owl:DatatypeProperty .\ncunei:museumNumber rdf:type owl:DatatypeProperty .\ncunei:collection rdf:type owl:ObjectProperty .\nrdf:value rdf:type owl:DatatypeProperty .\nqudt:unit rdf:type owl:ObjectProperty .\ncunei:thickness rdf:type owl:ObjectProperty .\ncunei:width rdf:type owl:ObjectProperty .\ncunei:height rdf:type owl:ObjectProperty .\ncunei:material rdf:type owl:ObjectProperty .\ncunei:isDamaged rdf:type owl:DatatypeProperty .\n<http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> rdf:type owl:ObjectProperty .\ncunei:hasLine rdf:type owl:ObjectProperty.\ncidoc:P56_found_on rdf:type owl:ObjectProperty.\ncidoc:TXP10_read_by rdf:type owl:ObjectProperty.\ncidoc:TXP3_is_rendered_by rdf:type owl:ObjectProperty .\ncunei:writtenText rdf:type owl:ObjectProperty .\ncunei:hasSide rdf:type owl:ObjectProperty .\ncunei:partOf rdf:type owl:ObjectProperty .\ncunei:next rdf:type owl:ObjectProperty .\ncunei:prevLine rdf:type owl:ObjectProperty .\ncunei:nextLine rdf:type owl:ObjectProperty .\ncunei:prevSentence rdf:type owl:ObjectProperty .\ncunei:nextSentence rdf:type owl:ObjectProperty .\ncunei:nextWord rdf:type owl:ObjectProperty .\ncunei:consistsOf rdf:type owl:ObjectProperty .\ncunei:prevWord rdf:type owl:ObjectProperty .\ncunei:prevInWord rdf:type owl:ObjectProperty .\ncunei:nextInWord rdf:type owl:ObjectProperty .\ncunei:prev rdf:type owl:ObjectProperty .\nlemon:sense rdf:type owl:ObjectProperty .\nlemon:pos rdf:type owl:ObjectProperty .\nlemon:entry rdf:type owl:ObjectProperty .\nlemon:writtenRepUnicode rdf:type owl:DatatypeProperty .\n lemon:writtenRepASCII rdf:type owl:DatatypeProperty .\n<http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> rdf:type owl:ObjectProperty .<http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> rdf:type owl:ObjectProperty .\n<http://www.cidoc-crm.org/cidoc-crm/P138_represents> rdf:type owl:ObjectProperty .\n lemon:writtenRep rdf:type owl:DatatypeProperty .\ncunei:positionOnTabletSide rdf:type owl:DatatypeProperty .\ncunei:locatedIn rdf:type owl:ObjectProperty .\nlemon:form rdf:type owl:ObjectProperty .\ncunei:positionInWord rdf:type owl:DatatypeProperty .\ncunei:Line rdf:type owl:DatatypeProperty .\ncunei:isAttested rdf:type owl:ObjectProperty .\n"""

with open('export.ttl', 'w', encoding='utf-8') as f:
  f.write(header)
  f.write(ontology)
  f.write("".join(sorted(list(dict.fromkeys(ttlresult)))))
  f.close()

