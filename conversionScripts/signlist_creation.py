import csv
import rdflib
import json
from rdflib import Graph

rdfset=set()

def cleanString(strr):
    return strr.lower().replace("š","sz").replace("Š","SZ").replace("%","_").replace(" ","_").replace("'","_").replace("\"","").replace("|","_").replace("/","_").replace("-","_").replace("+","_").replace("%","_").replace("(","_").replace(")","_").replace(".","_").replace(":","_").replace("₄","4").replace("₂","2").replace("₃","3").replace("₅","5").replace("₆","6").replace("₈","8").replace("₉","9").replace("₁","1").replace("₀","0")

def toASCII(strr):
    return strr.replace("₄","4").replace("₂","2").replace("₃","3").replace("₅","5").replace("₇","7").replace("₆","6").replace("₈","8").replace("₉","9").replace("₁","1").replace("₀","0").replace("%","_").replace("š","sz").replace("Š","SZ")

def convertToRDF(cuneiformsigndict,nuolenna,aasigndict,rdfset):
    unicodeToURI={}
    signnameToURI={}
    for entry in cuneiformsigndict:
        print(entry)
        signuri=cleanString(entry["signname"])
        signnameToURI[toASCII(str(entry["signname"])).replace("\"","")]="http://purl.org/cuneiform/signlist/character_"+str(signuri)
        if "unicodename" in entry and len(entry["unicodename"])>1:
            rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> rdf:type graphemon:GraphemeComposition .\n ")
        else:
            rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> rdf:type graphemon:Grapheme .\n ")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> rdfs:label \"Character: "+toASCII(str(entry["signname"])).replace("\"","")+"\" .\n ")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:meszl \""+str(entry["meszl"]).replace("\"","")+"\" .\n ")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:slha \""+str(entry["slha"]).replace("\"","")+"\" .\n")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:hethzl \""+str(entry["hethzl"]).replace("\"","")+"\" .\n ")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:abzl \""+str(entry["abzl"]).replace("\"","")+"\" .\n ")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:unicodeCodepoint \""+str(entry["unicode"]).replace("\"","")+"\" .\n ")
        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> graphemon:unicodeRepresentation \""+str(entry["unicodename"]).replace("\"","")+"\" .\n ")
        unicodeToURI[entry["unicodename"]]={"uri":"http://purl.org/cuneiform/signlist/character_"+str(signuri),"signname":toASCII(str(entry["signname"])).replace("\"","")}
    print(unicodeToURI)
    nuolennamatchcounter=0
    for item in nuolenna:
        if nuolenna[item] in unicodeToURI:
            cururi=unicodeToURI[nuolenna[item]]["uri"]
            cursignname=unicodeToURI[nuolenna[item]]["signname"]
            rdfset.add("<"+str(cururi)+"> graphemon:hasGraphemeReading <"+str(cururi)+"_reading_"+cleanString(str(item))+"> .\n ")
            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(item))+"> rdf:type graphemon:GraphemeReading .\n ")
            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(item))+"> rdfs:label \"Grapheme Reading "+str(cursignname)+": "+toASCII(str(item)).replace("\"","")+"\" .\n ")
            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(item))+"> graphemon:readingValue \""+toASCII(str(item)).replace("\"","")+"\" .\n ")
            nuolennamatchcounter+=1
    print("Matched "+str(nuolennamatchcounter)+" items in nuolenna!")
    aalistmatchcounter=0
    for entry in aasigndict:
        sname=toASCII(str(entry["unicode"]))
        if sname in signnameToURI:
            cururi=signnameToURI[sname]
            rdfset.add("<"+str(cururi)+"> graphemon:labat \""+str(entry["labat"])+"\" .\n ")
            rdfset.add("<"+str(cururi)+"> graphemon:obo \""+str(entry["obo"])+"\" .\n ")
            rdfset.add("<"+str(cururi)+"> graphemon:lak \""+str(entry["lak"])+"\" .\n ")
            if "meaning" in entry and entry["meaning"]!="":
                meanings=entry["meaning"]
                if ";" in entry["meaning"]:
                    meanings=entry["meaning"].split(";")
                else:
                    meanings=[entry["meaning"]]
                for mean in meanings:
                    rdfset.add("<"+str(cururi)+"> lemon:sense <"+str(cururi)+"_sense_"+cleanString(str(mean))+"> .\n ")
                    rdfset.add("<"+str(cururi)+"_sense_"+cleanString(str(mean))+"> lemon:writtenRep \""+str(mean).replace("\"","")+"\" .\n ")
                    rdfset.add("<"+str(cururi)+"_sense_"+cleanString(str(mean))+"> rdfs:label \"Grapheme Sense "+str(sname)+": "+str(mean).replace("\"","")+"\" .\n ")
                    rdfset.add("<"+str(cururi)+"_sense_"+cleanString(str(mean))+"> rdf:type graphemon:GraphemeSense .\n ")
            terms=[{"term":"oldbab","label":"Old Babylonian","uri":"http://www.wikidata.org/entity/Q733897"},{"term":"lagasz2","label":"Lagasz2","uri":""},{"term":"edIII","label":"EdIII","uri":"http://www.wikidata.org/entity/Q110209565"},{"term":"oldass","label":"Old Assyrian","uri":"http://www.wikidata.org/entity/Q22948607"},{"term":"middleass","label":"Middle Assyrian","uri":""},{"term":"middlebab","label":"Middle Babylonian","uri":"http://www.wikidata.org/entity/Q16530848"}]
            for term in terms:
                print(term["term"])
                if term["term"] in entry and entry[term["term"]]!="":
                    readings=entry[term["term"]]
                    if ";" in entry[term["term"]]:
                        readings=entry[term["term"]].split(";")
                    else:
                        readings=[entry[term["term"]]]
                    print(readings)
                    for reading in readings:
                        print(str(cururi)+"_sense_"+cleanString(str(mean)))
                        if "uri" in term:
                            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(reading))+"> graphemon:epoch <"+str(term["uri"])+"> .\n ")
                            rdfset.add("<"+str(term["uri"])+"> rdf:type cunei:Epoch .\n ")
                            if "label" in term and term["label"]!="":
                                rdfset.add("<"+str(term["uri"])+"> rdfs:label \"Wikidata: "+str(term["label"])+"\" .\n ")
                            else:
                                rdfset.add("<"+str(term["uri"])+"> rdfs:label \"Wikidata: "+str(term["term"])+"\" .\n ")
                            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(reading))+"> graphemon:epochId \""+str(term["term"])+"\" .\n ")
                        else:
                            rdfset.add("<"+str(cururi)+"_reading_"+cleanString(str(reading))+"> graphemon:epochId \""+str(term["term"])+"\" .\n ")
            aalistmatchcounter+=1
    print("Matched "+str(aalistmatchcounter)+" items in aalist")

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

#CTRL,Bauer et al (pg.),Schneider; Ur III,Rosengarten,LAK,REC,OBO,Labat,Borger (MesZL),unicode,OB Signs,Sign var. (?),OGSL,SIGN NAME,ED III Sumerian (Oracc),ED III Sumerian (Oracc)_att,Lagaš II Sumerian (Oracc),Lagaš II Sumerian (Oracc)_att,Ur III,OB Sumerian,Basic Meaning,Other,Akkadian word equivalent,Uruk,Pre-Sargonic,Ebla,Ebla Meaning,OAkk,OB,OA,OA Meaning,Amarna,MA (Oracc),MA (Oracc)_att,MB (Oracc),MB (Oracc)_att,Nuzi,NA,NA (Oracc),NA (Oracc)_att,NB (Oracc),NB (Oracc)_att,LB (Oracc),LB (Oracc)_att
aasigndict = []

with open('../signlist/aa_signlist.csv', mode='r', encoding="utf-8") as inp:
    reader = csv.reader(inp)
    counter=0
    for rows in reader:
        aasigndict.append({"meszl":rows[10],"labat":rows[9],"obo":rows[8],"rec":rows[7],"lak":rows[6],"unicode":rows[13],"unicodename":rows[11],"edIII":rows[14]+";"+rows[15],"lagasz2":rows[16]+";"+rows[17],"oldbab":rows[19]+","+rows[28],"meaning":rows[20],"akkword":rows[22],"oldass":rows[29],"middleass":rows[32]+","+rows[33],"middlebab":rows[34]+","+rows[35]})

print(aasigndict)

convertToRDF(cuneiformsigndict,nuolenna,aasigndict,rdfset)

with open('../signlist/signlist.ttl', mode='w', encoding="utf-8") as f:
    f.write("@prefix graphemon: <http://purl.org/graphemon/> .\n ")
    f.write("@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n ")
    f.write("@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n ")
    f.write("@prefix lemon: <http://lemon-model.net/lemon#> .\n ")
    f.write("@prefix cuneisignlist: <http://purl.org/cuneiform/signlist/> .\n ")
    f.write("@prefix cunei: <http://purl.org/cuneiform/> .\n ")
    f.write("@prefix owl: <http://www.w3.org/2002/07/owl#> .\n ")
    f.write("graphemon:SignlistOntology rdf:type owl:Ontology .\n ")
    f.write("graphemon:GraphemeReading rdf:type owl:Class .\n ")
    f.write("graphemon:Grapheme rdf:type owl:Class .\n ")
    f.write("cunei:Epoch rdf:type owl:Class .\n ")
    f.write("graphemon:GraphemeComposition rdf:type owl:Class .\n ")
    f.write("graphemon:hasGraphemeReading rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:hethzl rdf:type owl:DatatypeProperty .\n ")
    f.write("lemon:writtenRep rdf:type owl:DatatypeProperty .\n ")
    f.write("lemon:sense rdf:type owl:ObjectProperty .\n ")
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
    f.write("".join(rdfset))

g = Graph()
g.parse("../signlist/signlist.ttl")
g.serialize(destination="../signlist/signlist.ttl")
