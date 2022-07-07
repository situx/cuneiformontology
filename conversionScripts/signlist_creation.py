import csv
import rdflib
import json
from rdflib import Graph

rdfset=set()

sensesmap={
    "life":"http://www.wikidata.org/entity/Q3",
    "district":"http://www.wikidata.org/entity/Q149621",
    "flesh":"http://www.wikidata.org/entity/Q13119823",
    "throat":"http://www.wikidata.org/entity/Q16364",
    "country":"http://www.wikidata.org/entity/Q6256",
    "barley":"http://www.wikidata.org/entity/Q61665121",
    "raisin":"http://www.wikidata.org/entity/Q13186",
    "wing:":"http://www.wikidata.org/entity/Q161358",
    "branch":"http://www.wikidata.org/entity/Q2923673",
    "water":"http://www.wikidata.org/entity/Q283",
    "fire":"http://www.wikidata.org/entity/Q3196",
    "prince":"http://www.wikidata.org/entity/Q2747456",
    "morning":"http://www.wikidata.org/entity/Q7722",
    "breath":"http://www.wikidata.org/entity/Q13428325",
    "hand":"http://www.wikidata.org/entity/Q33767",
    "tendon":"http://www.wikidata.org/entity/Q232358",
    "horn":"http://www.wikidata.org/entity/Q82025",
    "egg":"http://www.wikidata.org/entity/Q93189",
    "tail":"http://www.wikidata.org/entity/Q60960",
    "road":"http://www.wikidata.org/entity/Q34442",
    "caravan":"http://www.wikidata.org/entity/Q203494",
    "clay":"http://www.wikidata.org/entity/Q42302",
    "night":"http://www.wikidata.org/entity/Q575",
    "year":"http://www.wikidata.org/entity/Q577",
    "snake":"http://www.wikidata.org/entity/Q2102",
    "king":"http://www.wikidata.org/entity/Q116",
    "sand":"http://www.wikidata.org/entity/Q34679",
    "dirt":"http://www.wikidata.org/entity/Q21152267",
    "garden":"http://www.wikidata.org/entity/Q1107656",
    "scepter":"http://www.wikidata.org/entity/Q152065",
    "dust":"http://www.wikidata.org/entity/Q165632",
    "ox":"http://www.wikidata.org/entity/Q473194",
    "steppe":"http://www.wikidata.org/entity/Q123991",
    "net":"http://www.wikidata.org/entity/Q986291",
    "shrine":"http://www.wikidata.org/entity/Q697295",
    "sky":"http://www.wikidata.org/entity/Q527",
    "heaven":"http://www.wikidata.org/entity/Q4489450",
    "slave":"http://www.wikidata.org/entity/Q12773225",
    "servant":"http://www.wikidata.org/entity/Q54128",
    "lake":"http://www.wikidata.org/entity/Q23397",
    "leatherworker":"http://www.wikidata.org/entity/Q16402902",
    "tongue":"http://www.wikidata.org/entity/Q9614",
    "linen":"http://www.wikidata.org/entity/Q1426327",
    "milk":"http://www.wikidata.org/entity/Q8495",
    "thread":"http://www.wikidata.org/entity/Q1391831"  
}

def cleanString(strr):
    return strr.lower().replace("š","sz").replace("Š","SZ").replace("%","_").replace("{","_").replace("}","_").replace(" ","_").replace("'","_").replace("\"","").replace(",","_").replace("|","_").replace("/","_").replace("-","_").replace("+","_").replace("%","_").replace("(","_").replace(")","_").replace(".","_").replace(":","_").replace("₄","4").replace("₂","2").replace("₃","3").replace("₅","5").replace("₆","6").replace("₈","8").replace("₉","9").replace("₁","1").replace("₀","0")

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
            rdfset.add("<http://purl.org/cuneiform/signlist/character_"+str(signuri)+"> rdfs:label \"Character Composition: "+toASCII(str(entry["signname"])).replace("\"","")+"\" .\n ")
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
            readinguri=(str(cururi)+"_reading_"+cleanString(str(item))).replace("__","_").replace("__","_")
            if readinguri[-1]=="_":
                readinguri=readinguri[0:-1]
            rdfset.add("<"+str(cururi)+"> graphemon:hasGraphemeReading <"+readinguri+"> .\n ")
            rdfset.add("<"+readinguri+"> rdf:type graphemon:GraphemeReading .\n ")
            rdfset.add("<"+readinguri+"> rdfs:label \"Grapheme Reading "+str(cursignname)+": "+toASCII(str(item)).replace("\"","")+"\" .\n ")
            rdfset.add("<"+readinguri+"> graphemon:readingValue \""+toASCII(str(item)).replace("\"","")+"\" .\n ")
            nuolennamatchcounter+=1
        else:
            rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> rdf:type graphemon:GraphemeComposition .\n ")
            rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> rdfs:label \"Character: "+toASCII(str(item)).replace("\"","")+"\" .\n ")
            rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> graphemon:unicodeRepresentation \""+str(nuolenna[item]).replace("\"","")+"\" .\n ")
            unicodeToURI[item]={"uri":"http://purl.org/cuneiform/signlist/character_"+cleanString(str(item)),"signname":toASCII(str(item)).replace("\"","")}
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
                meanings=entry["meaning"].replace("v.","").replace("n.","")
                if ";" in entry["meaning"]:
                    meanings=entry["meaning"].split(";")
                else:
                    meanings=[entry["meaning"]]
                for mean in meanings:
                    rdfset.add("<"+str(cururi)+"> lemon:sense <"+str(cururi)+"_sense_"+cleanString(str(mean))+"> .\n ")
                    rdfset.add("<"+str(cururi)+"_sense_"+cleanString(str(mean))+"> rdfs:label \"Grapheme Sense "+str(sname)+": "+str(mean).replace("\"","").strip()+"\" .\n ")
                    rdfset.add("<"+str(cururi)+"_sense_"+cleanString(str(mean))+"> rdf:type graphemon:GraphemeSense .\n ")
                    print(str(mean).replace("\"","").strip())
                    if str(mean).replace("\"","").strip() in sensesmap:
                        rdfset.add("<"+str(cururi)+"_sense_"+cleanString(str(mean))+"> lemon:reference <"+str(sensesmap[str(mean).replace("\"","").strip()])+"> .\n ")
                        rdfset.add("<"+str(sensesmap[str(mean).replace("\"","").strip()])+"> rdfs:label \"Wikidata: "+str(mean).replace("\"","").strip()+"\" .\n ")
            terms=[{"term":"oldbab","label":"Old Babylonian","uri":"http://www.wikidata.org/entity/Q733897"},{"term":"lagasz2","label":"Lagasz2","uri":""},{"term":"edIII","label":"EdIII","uri":"http://www.wikidata.org/entity/Q110209565"},{"term":"oldass","label":"Old Assyrian","uri":"http://www.wikidata.org/entity/Q22948607"},{"term":"middleass","label":"Middle Assyrian","uri":""},{"term":"middlebab","label":"Middle Babylonian","uri":"http://www.wikidata.org/entity/Q16530848"}]
            for term in terms:
                #print(term["term"])
                if term["term"] in entry and entry[term["term"]]!="":
                    readings=entry[term["term"]]
                    if ";" in entry[term["term"]]:
                        readings=entry[term["term"]].split(";")
                    else:
                        readings=[entry[term["term"]]]
                    #print(readings)
                    for reading in readings:
                        if reading.strip()=="":
                            continue
                        #print(str(cururi)+"_sense_"+cleanString(str(mean)))
                        readinguri=(str(cururi)+"_reading_"+cleanString(str(item))).replace("__","_").replace("__","_")
                        if readinguri[-1]=="_":
                            readinguri=readinguri[0:-1]
                        if "uri" in term:
                            rdfset.add("<"+readinguri+"> graphemon:epoch <"+str(term["uri"])+"> .\n ")
                            rdfset.add("<"+str(term["uri"])+"> rdf:type cunei:Epoch .\n ")
                            if "label" in term and term["label"]!="":
                                rdfset.add("<"+str(term["uri"])+"> rdfs:label \"Wikidata: "+str(term["label"])+"\" .\n ")
                            else:
                                rdfset.add("<"+str(term["uri"])+"> rdfs:label \"Wikidata: "+str(term["term"])+"\" .\n ")
                        else:
                            rdfset.add("<"+readinguri+"> graphemon:epochId \""+str(term["term"])+"\" .\n ")
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
    f.write("".join(rdfset))

g = Graph()
g.parse("../signlist/signlist.ttl")
g.serialize(destination="../signlist/signlist.ttl")
