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
def indexTransliteration(tranliteration):  
    for line in transliteration.split("\n"):
        if line.startswith("@") or line.startswith("#"):
            lineindexcounter+=len(line)
            wordindexcounter+=len(line)
            charindexcounter+=len(line)
            continue
        lm=linestart.match(line)
        if lm:      
            linenumber=lm.groups()[0]
            lineindex[str(linenumber)]={"start":lineindexcounter,"end":lineindexcounter+len(line),"id":str(linenumber)}
            lineindexreverse[lineindexcounter]={"start":lineindexcounter,"end":lineindexcounter+len(line),"id":str(linenumber)}
            wordindexcounter+=lm.groups()[0]+2
            charindexcounter+=lm.groups()[0]+2
            wordcounter=1
            for word in line.split(" "):
                wordindex[str(linenumber)+"_"+str(wordcounter)]={"start":wordindexcounter,"end":wordindexcounter+len(word),"id":str(linenumber)+"_"+str(wordcounter)}
                wordindexreverse[wordindexcounter]={"start":wordindexcounter,"end":wordindexcounter+len(word),"id":str(linenumber)+"_"+str(wordcounter)}
                charcounter=1
                charindexcout
                for chara in word.split("-"):
                    charindex[str(linenumber)+"_"+str(charcounter)]={"start":charindexcounter,"end":charindexcounter+len(chara),"id":str(linenumber)+"_"+str(charcounter)}
                    charindexreverse[charindexcounter]={"start":charindexcounter,"end":charindexcounter+len(chara),"id":str(linenumber)+"_"+str(charcounter)}
                    charindexcounter+=len(chara)+1
                    charcounter+=1              
                wordindexcounter+=len(word)+1
                wordcounter+=1                   
    

def relateAnnotationToTransliteration(startindex,endindex,namespace,tabid):
    resuris=set()
    for word in wordindexreverse:
        if word>starindex and word<endindex:
            if wordindexreverse[word]["end"]<endindex:
                resuris.add("<"+str(namespace)+"_"+str(tabid)+str(wordindexreverse[word]["id"])+">")
    for chara in charindexreverse:
        if chara>starindex and chara<endindex:
            if charindexreverse[chara]["end"]<endindex:
                resuris.add("<"+str(namespace)+"_"+str(tabid)+str(charindexreverse[char]["id"])+">")
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
    filename="../examples/"+str(tabletname)+"/ttl/"+str(tabletname)+"_textanno.json"
    translitfilename="../examples/"+str(tabletname)+"/ttl/"+str(tabletname)+".atf"
    namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/imgannotations/"
    namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/"
    print(filename)
    print(translitfilename)
    data3d={}
    if not os.path.exists(filename) or not os.path(translitfilename):
        continue
    f = open(filename,'r')
    data = json.load(f)

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
    res.write("oa:TextQuoteSelector rdfs:label \"Svg Selector\"@en .\n")
    creator="https://orcid.org/0000-0002-9499-5840"
    if tabletname in creatormap:
        creator=creatormap[tabletname]
    res.write("<"+str(namespace)+str(tabname)+"_"+str(tabletside)+"_transliteration1_textannotations> rdf:type as:Collection .\n")
    res.write("<"+str(namespace)+str(tabname)+"_"+str(tabletside)+"_transliteration1_textannotations> rdfs:subClassOf skos:Collection .\n")
    res.write("<"+str(namespace)+str(tabname)+"_"+str(tabletside)+"_transliteration1_textannotations> rdfs:label \"Text annotations on "+str(tabname)+" "+str(tabletside)+" transliteration 1+"\"@en .\n")
    for key in data:
        if "http" not in key and key.startswith("#"):
            indid=str(namespace)+str(key).replace("#","")
        else:
            indid=key
        charindex=0
        lineindex=0
        curtranslit=""
        source=""
        selectortype=""
        selectorval=""
        if "body" in data[key]:
            for item in data[key]["body"]:
                if item["purpose"]=="Line":
                    lineindex=int(item["value"])
                if item["purpose"]=="Charindex":
                    charindex=int(item["value"])
                if item["purpose"]=="Transliteration":
                    curtranslit=item["value"]
                if item["purpose"]=="TabletSide":
                    tabletside=item["value"]
        if "target" in data[key]:
            source=data[key]["target"]["source"]
            if "selector" in data[key]["target"]:
                selectortype=data[key]["target"]["selector"]["type"]
                selectorval=data[key]["target"]["selector"]["value"]
        res.write("<"+str(indid)+"> rdf:type oa:Annotation .\n")
        res.write("<"+str(namespace)+str(tabname)+"_"+str(tabletside)+"_transliteration1_textannotations> rdfs:member <"+str(indid)+"> .\n")
        res.write("<"+str(indid)+"> as:generator <https://github.com/recogito/annotorious-openseadragon> .\n")
        res.write("<https://github.com/recogito/recogito-js> rdf:type dc:Software .\n")
        res.write("<https://github.com/recogito/recogito-js> foaf:name \"Recogito JS\" .\n")
        res.write("<https://github.com/recogito/recogito-js> foaf:homepage \"https://github.com/recogito/recogito-js\"^^xsd:anyURI .\n")
        res.write("<"+str(indid)+"> <http://purl.org/dc/terms/creator> <"+creator+"> .\n")
        res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_glyph> .\n")
        res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_translit> .\n")
        res.write("<"+str(indid)+"> oa:hasTarget <"+str(indid)+"_target1> .\n")
        res.write("<"+str(indid)+"> <http://purl.org/dc/terms/rights> \"https://creativecommons.org/publicdomain/zero/1.0/\"^^xsd:anyURI .\n")
        res.write("<"+str(indid)+"> rdfs:label \"Annotation of text at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
        res.write("<"+str(indid)+"_body_translit> rdf:type oa:SpecificResource .\n")
        res.write("<"+str(indid)+"_body_translit> oa:hasSource <"+str(namespaceitems)+str(tabname)+"_transliteration1_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"> .\n")
        res.write("<"+str(indid)+"_body_translit> oa:motivatedBy oa:identifying .\n")
        res.write("<"+str(indid)+"_body_translit> rdf:value \""+str(curtranslit)+"\" .\n")
        res.write("<"+str(indid)+"_body_translit> rdfs:label  \"Annotation body referencing transliteration char occurrence at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
        targetcounter=1
        for anntar in relateAnnotationToTransliteration(startindex,endindex,namespace,tabid):          
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"> rdf:type owl:NamedIndividual .\n")
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"> oa:hasSelector <"+str(indid)+"_target1_selector> .\n")
            if "/raw" in str(source):
                res.write("<"+str(indid)+"_target"+str(targetcounter)+"> oa:hasSource <"+str(source)[0:str(source).rfind("/")].replace("https://gitlab.rlp.net/api/v4/projects/28015/repository/files/renderings%2F"+str(tabname)+"%2F","https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/images/sides/")+"> .\n")
            else:
                res.write("<"+str(indid)+"_target"+str(targetcounter)+"> oa:hasSource <"+str(source).replace("https://gitlab.rlp.net/api/v4/projects/28015/repository/files/renderings%2F"+str(tabname)+"%2F","https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/images/")+"> .\n")              
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"> rdfs:label \"Annotation target1 of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdf:type oa:"+str(selectortype)+" .\n")
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdf:value \""+str(selectorval).replace('"','\\"')+"\" .\n")
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdfs:label \"Annotation target selector of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            targetcounter+=1
    res.close()
    g = Graph()
    g.parse(filename.replace(".json",".ttl"))
    g.serialize(destination=filename.replace(".json",".ttl"))