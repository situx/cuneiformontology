import csv
import rdflib
import json

rdfset=set()

def cleanString(strr):
    return strr.lower().replace("š","sz").replace(" ","_").replace("\"","").replace("|","_").replace("/","_").replace("+","_").replace("(","_").replace(")","_").replace(".","_").replace(":","_")

def convertToRDF(cuneiformsigndict,nuolenna,rdfset):
    unicodeToURI={}
    for entry in cuneiformsigndict:
        print(entry)
        signuri=cleanString(entry["signname"])
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> rdf:type graphemon:Grapheme .\n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> rdfs:label \"Character: "+str(entry["signname"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:meszl \""+str(entry["meszl"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:slha \""+str(entry["slha"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:hethzl \""+str(entry["hethzl"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:abzl \""+str(entry["abzl"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:unicodeCodepoint \""+str(entry["unicode"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:unicodeRepresentation \""+str(entry["unicodename"]).replace("\"","")+"\" . \n")
        unicodeToURI[entry["unicodename"]]="http://purl.org/cuneiform/signlist/character_"+str(signuri)
    print(unicodeToURI)
    for item in nuolenna:
        if len(nuolenna[item])==1 and nuolenna[item] in unicodeToURI:
            cururi=unicodeToURI[nuolenna[item]]
            rdfset.add("<"+str(cururi)+"> graphemon:hasGraphemeReading <"+str(cururi)+"_reading_"+cleanString(str(item))+"> .\n")
            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(item))+"> rdf:type graphemon:GraphemeReading .\n")
            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(item))+"> rdfs:label \"Grapheme Reading: "+str(item).replace("\"","")+"\" .\n")
            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(item))+"> graphemon:readingValue \""+str(item).replace("\"","")+"\" .\n")

with open('../signlist/nuolenna.json', encoding="utf-8") as f:
   nuolenna = json.load(f)

print(nuolenna)

cuneiformsigndict = []

with open('../signlist/listofcuneiformsigns_wikipedia.csv', mode='r', encoding="utf-8") as inp:
    reader = csv.reader(inp)
    counter=0
    for rows in reader:
        try:
            cuneiformsigndict.append({"meszl":rows[0],"slha":rows[1],"abzl":rows[2],"hethzl":rows[3],"signname":rows[5],"unicode":rows[6],"unicodename":rows[7]})
        except:
            print("error")

print(cuneiformsigndict)

convertToRDF(cuneiformsigndict,nuolenna,rdfset)

with open('../signlist/signlist.ttl', mode='w', encoding="utf-8") as f:
    f.write("@prefix graphemon: <http://purl.org/graphemon/> .\n")
    f.write("@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n")
    f.write("@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n")
    f.write("@prefix owl: <http://www.w3.org/2002/07/owl#> .\n")
    f.write("graphemon:GraphemeReading rdf:type owl:Class .\n")
    f.write("graphemon:Grapheme rdf:type owl:Class .\n")
    f.write("graphemon:hasGraphemeReading rdf:type owl:ObjectProperty .\n")
    f.write("graphemon:hethzl rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:abzl rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:meszl rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:slha rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:unicodeCodepoint rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:unicodeRepresentation rdf:type owl:DatatypeProperty .\n")
    f.write("".join(rdfset))


