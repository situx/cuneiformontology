import json
from rdflib import Graph

origtabletside="front"
tabletnames=["HS1174","HT073195","TCH92","O147"]
tabletsides=["front","back","left","right","bottom","top"]
tabletname="HS1174"
material="3D rendering"
creatormap={"O147":"https://orcid.org/0000-0001-6690-9098"}
creator="https://orcid.org/0000-0002-9499-5840"
namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/imgannotations/"
namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/"
filename="../examples/"+str(tabletname)+"/ttl/"+str(tabletname)+"_"+str(origtabletside)+".png.json"
withlines=False
withcharoccs=False
withglyphs=False


for tabname in tabletnames:
    for side in tabletsides:
        origtabletside=side
        filename="../examples/"+str(tabletname)+"/ttl/"+str(tabletname)+"_"+str(origtabletside)+".png.json"
        if not os.path.exists(filename):
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
        creator="https://orcid.org/0000-0002-9499-5840"
        if tabletname in creatormap:
            creator=creatormap[tabletname]
        for key in data:
            indid=str(namespace)+str(key).replace("#","")
            charindex=0
            lineindex=0
            curtranslit=""
            tabletside=""+origtabletside
            if origtabletside=="back":
                tabletside="reverse"
            if origtabletside=="front":
                tabletside="obverse"
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
            res.write("<"+str(indid)+"> as:generator <https://github.com/recogito/annotorious-openseadragon> .\n")
            res.write("<https://github.com/recogito/annotorious-openseadragon> rdf:type dc:Software .\n")
            res.write("<https://github.com/recogito/annotorious-openseadragon> foaf:name \"Annotorious-OpenSeaDragon\" .\n")
            res.write("<https://github.com/recogito/annotorious-openseadragon> foaf:homepage \"https://github.com/recogito/annotorious-openseadragon\" .\n")
            res.write("<"+str(indid)+"> <http://purl.org/dc/terms/creator> <"+creator+"> .\n")
            res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_glyph> .\n")
            res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_translit> .\n")
            res.write("<"+str(indid)+"> oa:hasTarget <"+str(indid)+"_target1> .\n")
            res.write("<"+str(indid)+"> <http://purl.org/dc/terms/rights> \"https://creativecommons.org/publicdomain/zero/1.0/\" .\n")
            res.write("<"+str(indid)+"> rdfs:label \"Annotation of Glyph at "+str(tabletname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            res.write("<"+str(indid)+"_body_glyph> rdf:type oa:SpecificResource .\n")
            res.write("<"+str(indid)+"_body_glyph> oa:hasSource <"+str(namespaceitems)+str(tabletname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"_glyph> .\n")
            res.write("<"+str(indid)+"_body_glyph> oa:motivatedBy oa:identifying .\n")
            res.write("<"+str(indid)+"_body_glyph> rdfs:label \"Annotation body referencing Glyph at "+str(tabletname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            res.write("<"+str(indid)+"_body_translit> rdf:type oa:SpecificResource .\n")
            res.write("<"+str(indid)+"_body_translit> oa:hasSource <"+str(namespaceitems)+str(tabletname)+"_transliteration1_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"> .\n")
            res.write("<"+str(indid)+"_body_translit> oa:motivatedBy oa:identifying .\n")
            res.write("<"+str(indid)+"_body_translit> rdf:value \""+str(curtranslit)+"\" .\n")
            res.write("<"+str(indid)+"_body_translit> rdfs:label  \"Annotation body referencing transliteration char occurrence at "+str(tabletname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            res.write("<"+str(indid)+"_target1> rdf:type owl:NamedIndividual .\n")
            res.write("<"+str(indid)+"_target1> oa:hasSelector <"+str(indid)+"_target1_selector> .\n")
            res.write("<"+str(indid)+"_target1> oa:hasSource <"+str(source)[0:str(source).rfind("/")]+"> .\n")
            res.write("<"+str(indid)+"_target1> rdfs:label \"Annotation target1 of Annotation of Glyph at "+str(tabletname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            res.write("<"+str(indid)+"_target1_selector> rdf:type oa:"+str(selectortype)+" .\n")
            res.write("<"+str(indid)+"_target1_selector> rdf:value \""+str(selectorval).replace('"','\\"')+"\" .\n")
            res.write("<"+str(indid)+"_target1_selector> rdfs:label \"Annotation target selector of Annotation of Glyph at "+str(tabletname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            if withglyphs:
                res.write("<"+str(namespaceitems)+str(tabletname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"_glyph> rdf:type <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> .\n")
                res.write("<"+str(namespaceitems)+str(tabletname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"_glyph> rdfs:label \"Glyph at "+str(tabletname)+" "+str(tabletside)+" side line "+str(lineindex)+" char "+str(charindex)+"\"@en . \n")
            if withcharoccs:
                res.write("<"+str(namespaceitems)+str(tabletname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"> rdf:type cunei:TransliterationCharOccurrence .\n")
                res.write("<"+str(namespaceitems)+str(tabletname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"> rdfs:label \"Transliteration Char Occurrence at "+str(tabletname)+" "+str(tabletside)+" side line "+str(lineindex)+" char "+str(charindex)+"\"@en .\n")
            if withlines:
                res.write("<"+str(namespaceitems)+str(tabletname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"> rdf:type cunei:Line .\n")
                res.write("<"+str(namespaceitems)+str(tabletname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"> rdfs:label rdfs:label \""+str(tabletname)+" "+str(tabletside)+" line "+str(lineindex)+"\"@en .\n")
        res.close()
        g = Graph()
        g.parse(filename.replace(".json",".ttl"))
        g.serialize(destination=filename.replace(".json",".ttl"))
