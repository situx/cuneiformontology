import csv
import rdflib
import json

rdfset=set()

def convertToRDF(cuneiformsigndict,nuolenna,rdfset):
    unicodeToURI={}
    for entry in cuneiformsigndict:
        print(entry)
        signuri=entry["signname"].lower().replace("š","sz")
        rdfset.add("<http://purl.org/cuneiform/signlist/"+str(signuri)+"> rdf:type cunei:Grapheme .\n")
        rdfset.add("<http://purl.org/cuneiform/signlist/"+str(signuri)+"> rdfs:label \"Character: "+str(entry["signname"])+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/"+str(signuri)+"> cunei:meszl \""+str(entry["meszl"])+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/"+str(signuri)+"> cunei:slha \""+str(entry["slha"])+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/"+str(signuri)+"> cunei:hethzl \""+str(entry["hethzl"])+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/"+str(signuri)+"> cunei:abzl \""+str(entry["abzl"])+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/"+str(signuri)+"> cunei:unicodeCodepoint \""+str(entry["unicode"])+"\" . \n")
        rdfset.add("<http://purl.org/cuneiform/signlist/"+str(signuri)+"> cunei:unicodeRepresentation \""+str(entry["unicodename"])+"\" . \n")
        unicodeToURI[entry["unicode"]]="http://purl.org/cuneiform/signlist/"+str(signuri)
    print(unicodeToURI)
    #print(rdfset)

with open('../signlist/nuolenna.json') as f:
   nuolenna = json.load(f)

print(nuolenna)

cuneiformsigndict = []

with open('../signlist/listofcuneiformsigns_wikipedia.csv', mode='r') as inp:
    reader = csv.reader(inp)
    counter=0
    for rows in reader:
        try:
            cuneiformsigndict.append({"meszl":rows[0],"slha":rows[1],"abzl":rows[2],"hethzl":rows[3],"signname":rows[5],"unicode":rows[6],"unicodename":rows[7]})
        except:
            print("error")

print(cuneiformsigndict)

convertToRDF(cuneiformsigndict,nuolenna,rdfset)

with open('../signlist.ttl', 'w') as f:
    f.write("".join(rdfset))


