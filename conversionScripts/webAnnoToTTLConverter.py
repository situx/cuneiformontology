import json
from rdflib import Graph
import os

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
    print(tabname)
    for side in tabletsides:
        origtabletside=side
        filename="../examples/"+str(tabname)+"/ttl/"+str(tabname)+"_"+str(origtabletside)+".png.json"
        filename3d="../examples/"+str(tabname)+"/ttl/"+str(tabname)+"_"+str(origtabletside)+".png_3D.json"
        namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/imgannotations/"
        namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/"
        tabletside=""+origtabletside
        if origtabletside=="back":
            tabletside="reverse"
        if origtabletside=="front":
            tabletside="obverse"
        print(filename)
        print(filename3d)
        data3d={}
        if not os.path.exists(filename):
            continue
        if os.path.exists(filename3d):
            print("Found 3d annos")
            f = open(filename3d,'r')
            data3d = json.load(f)
        print(tabname+" "+side)
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
        res.write("oa:SvgSelector rdfs:subClassOf oa:Selector .\n")
        res.write("oa:WKTSelector rdfs:subClassOf oa:Selector .\n")
        creator="https://orcid.org/0000-0002-9499-5840"
        if tabletname in creatormap:
            creator=creatormap[tabletname]
        res.write("<"+str(namespace)+str(tabname)+"_"+str(tabletside)+"_annotations> rdf:type as:Collection .\n")
        res.write("<"+str(namespace)+str(tabname)+"_"+str(tabletside)+"_annotations> rdfs:subClassOf skos:Collection .\n")
        res.write("<"+str(namespace)+str(tabname)+"_"+str(tabletside)+"_annotations> rdfs:label \"Image annotations on "+str(tabname)+" "+str(tabletside)+" on medium "+str(material)+"\"@en .\n")
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
            res.write("<"+str(namespace)+str(tabname)+"_"+str(tabletside)+"_annotations> rdfs:member <"+str(indid)+"> .\n")
            res.write("<"+str(indid)+"> as:generator <https://github.com/recogito/annotorious-openseadragon> .\n")
            res.write("<https://github.com/recogito/annotorious-openseadragon> rdf:type dc:Software .\n")
            res.write("<https://github.com/recogito/annotorious-openseadragon> foaf:name \"Annotorious-OpenSeaDragon\" .\n")
            res.write("<https://github.com/recogito/annotorious-openseadragon> foaf:homepage \"https://github.com/recogito/annotorious-openseadragon\"^^xsd:anyURI .\n")
            res.write("<"+str(indid)+"> <http://purl.org/dc/terms/creator> <"+creator+"> .\n")
            res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_glyph> .\n")
            res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_translit> .\n")
            res.write("<"+str(indid)+"> oa:hasTarget <"+str(indid)+"_target1> .\n")
            res.write("<"+str(indid)+"> <http://purl.org/dc/terms/rights> \"https://creativecommons.org/publicdomain/zero/1.0/\"^^xsd:anyURI .\n")
            res.write("<"+str(indid)+"> rdfs:label \"Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            res.write("<"+str(indid)+"_body_glyph> rdf:type oa:SpecificResource .\n")
            res.write("<"+str(indid)+"_body_glyph> oa:hasSource <"+str(namespaceitems)+str(tabname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"_glyph> .\n")
            res.write("<"+str(indid)+"_body_glyph> oa:motivatedBy oa:identifying .\n")
            res.write("<"+str(indid)+"_body_glyph> rdfs:label \"Annotation body referencing Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            res.write("<"+str(indid)+"_body_translit> rdf:type oa:SpecificResource .\n")
            res.write("<"+str(indid)+"_body_translit> oa:hasSource <"+str(namespaceitems)+str(tabname)+"_transliteration1_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"> .\n")
            res.write("<"+str(indid)+"_body_translit> oa:motivatedBy oa:identifying .\n")
            res.write("<"+str(indid)+"_body_translit> rdf:value \""+str(curtranslit)+"\" .\n")
            res.write("<"+str(indid)+"_body_translit> rdfs:label  \"Annotation body referencing transliteration char occurrence at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            if key in data3d and "target" in data3d[key] and "selector" in data3d[key]["target"]:
                res.write("<"+str(indid)+"> oa:hasTarget <"+str(indid)+"_target3d> .\n")
                res.write("<"+str(indid)+"_target3d> rdf:type owl:NamedIndividual .\n")
                res.write("<"+str(indid)+"_target3d> oa:hasSource <"+str(data3d[key]["target"]["source"])+"> .\n")
                res.write("<"+str(indid)+"_target3d> oa:hasSelector <"+str(indid)+"_target3d_selector> .\n")
                res.write("<"+str(indid)+"_target3d> rdfs:label \"3D Annotation target of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
                res.write("<"+str(indid)+"_target3d_selector> rdf:type oa:WKTSelector .\n")
                if "coordinateSystem" in data3d[key]["target"]["selector"]:
                    print("  ")
                    res.write("<"+str(indid)+"_target3d_selector> <http://www.opengis.net/ont/geosparql#inSRS> \"\"\""+str(data3d[key]["target"]["selector"]["coordinateSystem"]).replace("\n","").replace("\"","\\\"")+"\"\"\"^^<http://www.opengis.net/ont/geosparql/crs#wktLiteral> . \n")
                if "pcaValue" in data3d[key]["target"]["selector"]:
                    res.write("<"+str(indid)+"_target3d_selector> <http://purl.org/meshsparql/pcaValue> \""+str(data3d[key]["target"]["selector"]["pcaValue"]).replace("\n","")+"\"^^oa:wktLiteral . \n")                             
                if "computingReference" in data3d[key]["target"]["selector"]:
                    i=0
                    for compref in data3d[key]["target"]["selector"]["computingReference"]:
                        comprefid=str(indid)+"_target3d_selector_compref"+str(i)
                        print(compref)
                        res.write("<"+str(indid)+"_target3d_selector> <http://purl.org/meshsparql/computingReference> <"+str(comprefid)+"> . \n")
                        res.write("<"+str(comprefid)+"> rdf:type <http://purl.org/meshsparql/ComputingReference> .\n")
                        res.write("<"+str(comprefid)+"> rdfs:label \"Computing Reference of 3D Annotation target selector of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on a 3D Mesh\" .\n")
                        res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql/stable> \""+str(compref["stable"])+"\"^^xsd:boolean .\n")
                        res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql/transformationMatrix> \""+str(compref["transformationmatrix"]).replace("\n","").replace("\\n","")+"\"^^xsd:string .\n")
                        res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql/comprefType> \""+str(compref["type"])+"\"^^xsd:string .\n")
                        res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql/referenceVector> \"\"\""+str(compref["value"]).replace("\r","").replace("\n","").replace("\\n","")+"\"\"\"^^xsd:string .\n")
                        res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql/wktTransformation> \"\"\""+str(compref["wktTransformation"]).replace("\n","").replace("\"","\\\"")+"\"\"\"^^xsd:string .\n")
                    i+=1               
                res.write("<"+str(indid)+"_target3d_selector> rdf:type oa:WKTSelector .\n")
                res.write("<"+str(indid)+"_target3d_selector> rdf:value \""+str(data3d[key]["target"]["selector"]["value"])+"\"^^oa:wktLiteral .\n")
                res.write("<"+str(indid)+"_target3d_selector> rdfs:label \"3D Annotation target selector of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on a 3D Mesh\"@en .\n")
            res.write("<"+str(indid)+"_target1> rdf:type owl:NamedIndividual .\n")
            res.write("<"+str(indid)+"_target1> oa:hasSelector <"+str(indid)+"_target1_selector> .\n")
            if "/raw" in str(source):
                res.write("<"+str(indid)+"_target1> oa:hasSource <"+str(source)[0:str(source).rfind("/")].replace("https://gitlab.rlp.net/api/v4/projects/28015/repository/files/renderings%2F"+str(tabname)+"%2F","https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/images/sides/")+"> .\n")
            else:
                res.write("<"+str(indid)+"_target1> oa:hasSource <"+str(source).replace("https://gitlab.rlp.net/api/v4/projects/28015/repository/files/renderings%2F"+str(tabname)+"%2F","https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/images/")+"> .\n")              
            res.write("<"+str(indid)+"_target1> rdfs:label \"Annotation target1 of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            res.write("<"+str(indid)+"_target1_selector> rdf:type oa:"+str(selectortype)+" .\n")
            res.write("<"+str(indid)+"_target1_selector> rdf:value \""+str(selectorval).replace('"','\\"')+"\" .\n")
            res.write("<"+str(indid)+"_target1_selector> rdfs:label \"Annotation target selector of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
            if withglyphs:
                res.write("<"+str(namespaceitems)+str(tabname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"_glyph> rdf:type <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> .\n")
                res.write("<"+str(namespaceitems)+str(tabname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"_glyph> rdfs:label \"Glyph at "+str(tabname)+" "+str(tabletside)+" side line "+str(lineindex)+" char "+str(charindex)+"\"@en . \n")
            if withcharoccs:
                res.write("<"+str(namespaceitems)+str(tabname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"> rdf:type cunei:TransliterationCharOccurrence .\n")
                res.write("<"+str(namespaceitems)+str(tabname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"_char"+str(charindex)+"> rdfs:label \"Transliteration Char Occurrence at "+str(tabname)+" "+str(tabletside)+" side line "+str(lineindex)+" char "+str(charindex)+"\"@en .\n")
            if withlines:
                res.write("<"+str(namespaceitems)+str(tabname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"> rdf:type cunei:Line .\n")
                res.write("<"+str(namespaceitems)+str(tabname).lower()+"_"+str(tabletside)+"_line"+str(lineindex)+"> rdfs:label rdfs:label \""+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+"\"@en .\n")
        res.close()
        g = Graph()
        g.parse(filename.replace(".json",".ttl"))
        g.serialize(destination=filename.replace(".json",".ttl"))
