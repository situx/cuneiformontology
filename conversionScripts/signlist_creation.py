import csv
import rdflib
import json

rdfset=set()

def cleanString(strr):
    return strr.lower().replace("š","sz").replace("Š","SZ").replace(" ","_").replace("\"","").replace("|","_").replace("/","_").replace("+","_").replace("(","_").replace(")","_").replace(".","_").replace(":","_").replace("₄","4").replace("₂","2").replace("₃","3").replace("₅","5").replace("₆","6").replace("₈","8").replace("₉","9").replace("₁","1").replace("₀","0")

def toASCII(strr):
    return strr.replace("₄","4").replace("₂","2").replace("₃","3").replace("₅","5").replace("₆","6").replace("₈","8").replace("₉","9").replace("₁","1").replace("₀","0").replace("š","sz").replace("Š","SZ")

def convertToRDF(cuneiformsigndict,nuolenna,rdfset):
    unicodeToURI={}
    for entry in cuneiformsigndict:
        print(entry)
        signuri=cleanString(entry["signname"])
        if "unicodename" in entry and len(entry["unicodename"])>1:
            rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> rdf:type graphemon:GraphemeComposition .\n")
        else:
            rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> rdf:type graphemon:Grapheme .\n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> rdfs:label \"Character: "+toASCII(str(entry["signname"])).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:meszl \""+str(entry["meszl"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:slha \""+str(entry["slha"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:hethzl \""+str(entry["hethzl"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:abzl \""+str(entry["abzl"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:unicodeCodepoint \""+str(entry["unicode"]).replace("\"","")+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:unicodeRepresentation \""+str(entry["unicodename"]).replace("\"","")+"\" . \n")
        unicodeToURI[entry["unicodename"]]={"uri":"http://purl.org/cuneiform/signlist/character_"+str(signuri),"signname":toASCII(str(entry["signname"])).replace("\"","")}
    print(unicodeToURI)
    for item in nuolenna:
        if nuolenna[item] in unicodeToURI:
            cururi=unicodeToURI[nuolenna[item]]["uri"]
            cursignname=unicodeToURI[nuolenna[item]]["signname"]
            rdfset.add("<"+str(cururi)+"> graphemon:hasGraphemeReading <"+str(cururi)+"_reading_"+cleanString(str(item))+"> .\n")
            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(item))+"> rdf:type graphemon:GraphemeReading .\n")
            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(item))+"> rdfs:label \"Grapheme Reading "+str(cursignname)+": "+toASCII(str(item)).replace("\"","")+"\" .\n")
            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(item))+"> graphemon:readingValue \""+toASCII(str(item)).replace("\"","")+"\" .\n")

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
    f.write("graphemon:SignlistOntology rdf:type owl:Ontology .\n")
    f.write("graphemon:GraphemeReading rdf:type owl:Class .\n")
    f.write("graphemon:Grapheme rdf:type owl:Class .\n")
    f.write("graphemon:GraphemeComposition rdf:type owl:Class .\n")
    f.write("graphemon:hasGraphemeReading rdf:type owl:ObjectProperty .\n")
    f.write("graphemon:hethzl rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:abzl rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:readingValue rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:meszl rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:slha rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:unicodeCodepoint rdf:type owl:DatatypeProperty .\n")
    f.write("graphemon:unicodeRepresentation rdf:type owl:DatatypeProperty .\n")
    f.write("".join(rdfset))


