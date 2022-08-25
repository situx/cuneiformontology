import json
from rdflib import Graph
import os
import re

translitindex={}
wordindex={}
charindex={}
lineindex={}
wordindexreverse={}
charindexreverse={}
lineindexreverse={}
charindexcounter=0
wordindexcounter=0
lineindexcounter=0
linestart=re.compile("^([0-9]+)\.")
def indexTransliteration(transliteration):  
    charindexcounter=0
    wordindexcounter=0
    lineindexcounter=0
    currentside="front"
    for line in transliteration.split("\n"):
        if line.startswith("@") or line.startswith("#"):
            lineindexcounter+=len(line)
            wordindexcounter+=len(line)
            charindexcounter+=len(line)
            if line.startswith("@") and not line.startswith("@tablet"):
                currentside=line.replace("@","")              
            continue
        lm=linestart.match(line)
        if lm:      
            linenumber=lm.groups()[0]
            lineindex[str(linenumber)]={"start":lineindexcounter,"end":lineindexcounter+len(line),"id":str(linenumber)}
            lineindexreverse[lineindexcounter]={"start":lineindexcounter,"end":lineindexcounter+len(line),"id":str(currentside)+"_"+str(linenumber)}
            wordindexcounter+=int(lm.groups()[0])+2
            charindexcounter+=int(lm.groups()[0])+2
            wordcounter=1
            for word in line.split(" "):
                wordindex[str(linenumber)+"_"+str(wordcounter)]={"start":wordindexcounter,"end":wordindexcounter+len(word),"id":str(linenumber)+"_"+str(wordcounter)}
                wordindexreverse[wordindexcounter]={"start":wordindexcounter,"end":wordindexcounter+len(word),"id":str(currentside)+"_"+str(linenumber)+"_"+str(wordcounter)}
                charcounter=1
                for chara in word.split("-"):
                    charindex[str(linenumber)+"_"+str(charcounter)]={"start":charindexcounter,"end":charindexcounter+len(chara),"id":str(linenumber)+"_"+str(charcounter)}
                    charindexreverse[charindexcounter]={"start":charindexcounter,"end":charindexcounter+len(chara),"id":str(currentside)+"_"+str(linenumber)+"_"+str(charcounter)}
                    charindexcounter+=len(chara)+1
                    charcounter+=1              
                wordindexcounter+=len(word)+1
                wordcounter+=1                   
    

def relateAnnotationToTransliteration(startindex,endindex,namespace,tabid):
    resuris=set()
    print(str(startindex)+" - "+str(endindex))
    print(wordindexreverse)
    print(charindexreverse)
    for word in wordindexreverse:
        if word>startindex and word<endindex:
            if wordindexreverse[word]["end"]<endindex:
                resuris.add("<"+str(namespace)+str(tabid)+"_transliteration1_"+str(wordindexreverse[word]["id"])+">")
    for chara in charindexreverse:
        if chara>startindex and chara<endindex:
            if charindexreverse[chara]["end"]<endindex:
                resuris.add("<"+str(namespace)+str(tabid)+"_transliteration1_"+str(charindexreverse[chara]["id"])+">")
    print(resuris)
    return resuris

origtabletside="front"
tabletnames=["HS1174","HT073195","TCH92","O147"]
tabletsides=["front","back","left","right","bottom","top"]
tabletname="HS1174"
material="3D rendering"
creatormap={"O147":"https://orcid.org/0000-0001-6690-9098"}
creator="https://orcid.org/0000-0002-9499-5840"
namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/imgannotations/"
namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/"
crsnamespace="https://situx.github.io/cuneiformontology/examples/crs/"
filename="../examples/"+str(tabletname)+"/ttl/"+str(tabletname)+".atf"
withlines=False
withcharoccs=False
withglyphs=False


for tabname in tabletnames:
    print(tabname)
    filename="../examples/"+str(tabname)+"/ttl/"+str(tabname)+"_textanno.json"
    translitfilename="../examples/"+str(tabname)+"/transliteration/"+str(tabname)+".atf"
    namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/textannotations/"
    namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/"
    print(filename)
    print(translitfilename)
    data3d={}
    if not os.path.exists(filename) or not os.path.exists(translitfilename):
        continue
    f = open(filename,'r')
    data = json.load(f)
    f = open(translitfilename,'r')
    transliteration=f.read()
    indexTransliteration(transliteration)
    res = open(filename.replace(".json",".ttl"),'w')
    res.write("""
    @prefix oa: <http://www.w3.org/ns/oa#> .
    @prefix owl: <http://www.w3.org/2002/07/owl#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix xml: <http://www.w3.org/XML/1998/namespace> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix anno: <http://www.w3.org/ns/anno.jsonld> .
    @prefix dc: <http://purl.org/dc/elements/1.1/> .
    @prefix as: <https://www.w3.org/ns/activitystreams#> .
    @prefix skos: <http://www.w3.org/2004/02/skos/core#> .
    @prefix foaf: <http://xmlns.com/foaf/0.1/> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix cidoc: <http://www.cidoc-crm.org/cidoc-crm/> .
    @prefix cunei: <http://www.purl.org/cuneiform/> .
    @prefix lemon: <http://lemon-model.net/lemon#> .
    @prefix graphemon: <http://www.purl.org/graphemon#> .
    """)
    res.write("oa:TextQuoteSelector rdfs:subClassOf oa:Selector .\n")
    res.write("oa:Selector rdf:type owl:Class .\n")
    res.write("oa:TextQuoteSelector rdf:type owl:Class .\n")
    res.write("oa:TextQuoteSelector rdfs:label \"Text Quote Selector\"@en .\n")
    res.write("oa:TextPositionSelector rdf:type owl:Class .\n")
    res.write("oa:TextPositionSelector rdfs:label \"Text Position Selector\"@en .\n")
    creator="https://orcid.org/0000-0002-9499-5840"
    if tabletname in creatormap:
        creator=creatormap[tabletname]
    res.write("<"+str(namespace)+str(tabname)+"_transliteration1_textannotations> rdf:type as:Collection .\n")
    res.write("<"+str(namespace)+str(tabname)+"_transliteration1_textannotations> rdfs:subClassOf skos:Collection .\n")
    res.write("<"+str(namespace)+str(tabname)+"_transliteration1_textannotations> rdfs:label \"Text annotations on "+str(tabname)+" transliteration 1\"@en .\n")
    for keyobj in data:
        key=keyobj["id"]
        print(key)
        if "http" not in key and key.startswith("#"):
            indid=str(namespace)+str(key).replace("#","")
        else:
            indid=key
        charindex=0
        lineindex=0
        startindex=0
        endindex=0
        curtranslit=""
        source=""
        selectortype=""
        selectorval=""
        if "body" in keyobj:
            for item in keyobj["body"]:
                if item["purpose"]=="Line":
                    lineindex=int(item["value"])
                if item["purpose"]=="Charindex":
                    charindex=int(item["value"])
                if item["purpose"]=="Transliteration":
                    curtranslit=item["value"]
                if item["purpose"]=="TabletSide":
                    tabletside=item["value"]
        if "target" in keyobj:
            print(keyobj["target"])
            source=filename
            if "selector" in keyobj["target"]:
                selectortype=keyobj["target"]["selector"][1]["type"]
                startindex=keyobj["target"]["selector"][1]["start"]
                endindex=keyobj["target"]["selector"][1]["end"]
                selectorval=keyobj["target"]["selector"][0]["exact"]
        res.write("<"+str(indid)+"> rdf:type oa:Annotation .\n")
        res.write("<"+str(namespace)+str(tabname)+"_transliteration1_textannotations> rdfs:member <"+str(indid)+"> .\n")
        res.write("<"+str(indid)+"> as:generator <https://github.com/recogito/recogito-js> .\n")
        res.write("<https://github.com/recogito/recogito-js> rdf:type dc:Software .\n")
        res.write("<https://github.com/recogito/recogito-js> foaf:name \"Recogito JS\" .\n")
        res.write("<https://github.com/recogito/recogito-js> foaf:homepage \"https://github.com/recogito/recogito-js\"^^xsd:anyURI .\n")
        res.write("<"+str(indid)+"> <http://purl.org/dc/terms/creator> <"+creator+"> .\n")
        res.write("<"+str(indid)+"> oa:hasTarget <"+str(indid)+"_target1> .\n")
        res.write("<"+str(indid)+"> <http://purl.org/dc/terms/rights> \"https://creativecommons.org/publicdomain/zero/1.0/\"^^xsd:anyURI .\n")
        res.write("<"+str(indid)+"> rdfs:label \"Annotation of text at "+str(tabname)+"  line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
        targetcounter=1
        for anntar in relateAnnotationToTransliteration(startindex,endindex,namespace,tabname):      
            res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_translit"+str(targetcounter)+"> .\n")        
            res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> rdf:type oa:SpecificResource .\n")
            res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> oa:hasSource "+str(anntar)+" .\n")
            res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> oa:motivatedBy oa:identifying .\n")
            res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> rdf:value \""+str(anntar)+"\" .\n")
            res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> rdfs:label  \"Annotation body referencing transliteration char occurrence at "+str(tabname)+"  line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            targetcounter+=1
        targetcounter=1
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"> rdf:type owl:NamedIndividual .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"> oa:hasSelector <"+str(indid)+"_target"+str(targetcounter)+"_selector> .\n")
        if "/raw" in str(source):
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"> oa:hasSource <"+str(source)[0:str(source).rfind("/")].replace("https://gitlab.rlp.net/api/v4/projects/28015/repository/files/renderings%2F"+str(tabname)+"%2F","https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/images/sides/")+"> .\n")
        else:
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"> oa:hasSource <"+str(source).replace("https://gitlab.rlp.net/api/v4/projects/28015/repository/files/renderings%2F"+str(tabname)+"%2F","https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/images/")+"> .\n")              
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"> rdfs:label \"Annotation target"+str(targetcounter)+" of Annotation of Glyph at "+str(tabname)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdf:type oa:"+str(selectortype)+" .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> oa:start \""+str(startindex)+"\"^^xsd:integer .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> oa:end \""+str(endindex)+"\"^^xsd:integer .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdf:value \""+str(selectorval).replace('"','\\"')+"\" .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdfs:label \"Annotation target selector of Annotation of Glyph at "+str(tabname)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
    res.close()
    g = Graph()
    g.parse(filename.replace(".json",".ttl"))
    g.serialize(destination=filename.replace(".json",".ttl"))