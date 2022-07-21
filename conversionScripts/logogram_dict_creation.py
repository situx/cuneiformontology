# coding=utf8
import json

with open('../signlist/akklogograms.json', 'r',encoding="utf-8") as f:
  logograms = json.load(f)

dictabbToURI={
    "CD":"",
    "ME":"",
    "AHw":"",
    "ZL":""
}

def cleanString(mystr):
    return mystr.replace(" ","_").replace(".","_").replace("”","_").replace("=","_").replace("-","_").replace("+","_").replace("’","_").replace(",","_").replace("š","sz").replace("Š","SZ").replace("\"","_").replace("'","_").replace("(","_").replace(")","_").replace("[","_").replace("]","_")

def resolveReferences(refstring,wordformuri,ttlresult):
    even=True
    cururi=""
    for item in refstring.split(" "):
        if even:
            if item in dictabbToURI:
                cururi=dictabbToURI[item]
            else:
                cururi="cuneidict:"+str(item)
            ttlresult.add("<"+str(wordformuri)+"> cunei:isReferencedBy <"+str(cururi)+"> . \n") 
        else:
            ttlresult.add("<"+str(wordformuri)+"> cunei:isReferencedByNumber \""+str(item)+"\" . \n") 
        even=not even

ttlresult=set()  
ttlresult.add("cuneidict:Akk rdf:type lemon:Lexicon .\n")
ttlresult.add("cuneidict:Sum rdf:type lemon:Lexicon .\n")
counter=0
for log in logograms:
    if counter<100 and "ref" in log and log["ref"]!="":
        ttlresult.add("cuneidict:"+cleanString(str(log["logogram"]))+"_wordform rdf:type lemon:WordForm .\n")
        ttlresult.add("cuneidict:Sum lemon:entry cuneidict:"+cleanString(str(log["logogram"]))+" .\n")
        ttlresult.add("cuneidict:"+cleanString(str(log["origvalue"]).replace("-",""))+" rdf:type lemon:Word .\n")
        ttlresult.add("cuneidict:Akk lemon:entry cuneidict:"+cleanString(str(log["origvalue"]).replace("-",""))+" .\n")
        ttlresult.add("cuneidict:"+cleanString(str(log["origvalue"]).replace("-",""))+"_word lemon:form cuneidict:"+cleanString(str(log["origvalue"]).replace("-","_"))+"_wordform .\n")
        ttlresult.add("cuneidict:"+cleanString(str(log["origvalue"]).replace("-",""))+"_word rdfs:label \"Word: "+str(log["origvalue"]).replace("-","").replace("\"","")+"\" .\n")
        ttlresult.add("cuneidict:"+cleanString(str(log["origvalue"]).replace("-","_"))+"_wordform rdf:type lemon:WordForm.\n")
        if "destvalue" in log:
            ttlresult.add("cuneidict:"+cleanString(str(log["origvalue"]).replace("-",""))+" lemon:sense cuneidict:"+cleanString(str(log["origvalue"]).replace("-",""))+"_sense .\n")
            ttlresult.add("cuneidict:"+cleanString(str(log["origvalue"]).replace("-",""))+"_sense rdf:type lemon:LexicalSense .\n")
            ttlresult.add("cuneidict:"+cleanString(str(log["origvalue"]).replace("-",""))+"_sense rdfs:label \"WordSense: "+str(log["destvalue"]).replace("\"","")+" ("+str(log["origvalue"]).replace("\"","")+")\" .\n")
            if "concept" in log:
                ttlresult.add("cuneidict:"+cleanString(str(log["origvalue"]).replace("-",""))+"_sense lemon:reference <"+str(log["concept"])+"> .\n")
                ttlresult.add("<"+str(log["concept"])+"> rdfs:label  \"WordSense Reference: "+str(log["destvalue"]).replace("\"","")+" ("+str(log["concept"][log["concept"].rfind("/")+1:])+")\" .\n")
    counter+=1    
                
                
with open('../dict/akklogogram_dict.ttl', 'w',encoding="utf-8") as f:
    f.write("@prefix graphemon: <http://purl.org/graphemon/> .\n ")
    f.write("@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n ")
    f.write("@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n ")
    f.write("@prefix lemon: <http://lemon-model.net/lemon#> .\n ")
    f.write("@prefix cuneisignlist: <http://purl.org/cuneiform/signlist/> .\n ")
    f.write("@prefix cuneidict: <http://purl.org/cuneiform/dict/> .\n ")
    f.write("@prefix cunei: <http://purl.org/cuneiform/> .\n ")
    f.write("@prefix owl: <http://www.w3.org/2002/07/owl#> .\n ")
    f.write("graphemon:SignlistOntology rdf:type owl:Ontology .\n ")
    f.write("graphemon:GraphemeReading rdf:type owl:Class .\n ")
    f.write("graphemon:GraphemeList rdf:type owl:Class .\n ")
    f.write("graphemon:Grapheme rdf:type owl:Class .\n ")
    f.write("cunei:Epoch rdf:type owl:Class .\n ")
    f.write("rdfs:member rdfs:label \"member\" .\n ")
    f.write("rdfs:label rdfs:label \"label\" .\n ")
    f.write("graphemon:GraphemeComposition rdf:type owl:Class .\n ")
    f.write("graphemon:hasGraphemeReading rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:isComposedOf rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:partOf rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:hethzl rdf:type owl:DatatypeProperty .\n ")
    f.write("lemon:writtenRep rdf:type owl:DatatypeProperty .\n ")
    f.write("lemon:sense rdf:type owl:ObjectProperty .\n ")    
    f.write("lemon:reference rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:abzl rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:epoch rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:lak rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:obo rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:labat rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:readingValue rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:meszl rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:slha rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:unicodeCodepoint rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:unicodeRepresentation rdf:type owl:DatatypeProperty .\n ")
    for item in sorted(list(dict.fromkeys(ttlresult))):
        f.write(item)
    f.close()