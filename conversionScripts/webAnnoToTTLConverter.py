import json
from rdflib import Graph
import os

origtabletside="front"
tabletnames=["HS1174","HT073195","TCH92","O147"]
tabletsides=["front","back","left","right","bottom","top"]
tabletname="HS1174"
material="3D rendering"
meshsources={"HS1174":"https://heidicon.ub.uni-heidelberg.de/eas/partitions/1/0/577000/577526/97a78512f61fae4dbdf80c43e7725822a3a23308/application/x-ply/HS_1174_HeiCuBeDa_GigaMesh.ply",
"HT073195":"https://heidicon.ub.uni-heidelberg.de/eas/partitions/5/0/841000/841085/667f74981bf43066b1b10ecd71a86412da7c3074/application/x-ply/HT_07-31-95_3D_GMOCF_r1.50_n4_v512.volume_FuncValColor_Legacy.ply"}
creatormap={"O147":"https://orcid.org/0000-0001-6690-9098"}
creator="https://orcid.org/0000-0002-9499-5840"
namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/imgannotations/"
namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/"
crsnamespace="https://situx.github.io/cuneiformontology/examples/crs/"
filename="../examples/"+str(tabletname)+"/ttl/"+str(tabletname)+"_"+str(origtabletside)+".png.json"
withlines=False
withcharoccs=False
withglyphs=False
compreftypes={"PCA":"http://purl.org/meshsparql#PCAReference"}

def coptoRDF(fw,crsnamespace,indid,opaswkt,induid):
    induuid=induid.replace("#","")
    fw.write("<"+str(indid)+"> <http://www.opengis.net/ont/geosparql#coordinateOperation> <"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"> .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"> rdfs:label \"Object To PCA\"@en .\n")
    fw.write("geocrs:CoordinateOperation rdf:type owl:Class .\n")
    fw.write("geocrs:CoordinateOperation rdfs:label \"coordinate operation\"@en .\n")
    fw.write("geocrs:OperationParameter rdf:type owl:Class .\n")
    fw.write("geocrs:OperationParameter rdfs:label \"operation parameter\"@en .\n")
    fw.write("geocrs:OperationParameterValue rdf:type owl:Class .\n")
    fw.write("geocrs:OperationParameterValue rdfs:label \"operation parameter value\"@en .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"> rdf:type geocrs:CoordinateOperation .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"> geocrs:sourceCRS <"+str(crsnamespace)+"cs/cartesian_ax3_mm> .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"> geocrs:parameter <"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_xaxis_translation> .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_xaxis_translation> rdfs:label \"X-axis translation\"@en .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_xaxis_translation> rdf:type geocrs:OperationParameter .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_xaxis_translation> geocrs:usesValue <"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_xaxis_translation_value> .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_xaxis_translation_value> rdf:value \"0.0\"^^xsd:double .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_xaxis_translation_value> rdf:type geocrs:OperationParameterValue .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_xaxis_translation_value> om:hasUnit om:millimetre .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_xaxis_translation_value> rdfs:label \"X-axis translation value\"@en .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"> geocrs:parameter <"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_yaxis_translation> .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_yaxis_translation> rdfs:label \"Y-axis translation\"@en .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_yaxis_translation> rdf:type geocrs:OperationParameter .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_yaxis_translation> geocrs:usesValue <"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_yaxis_translation_value> .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_yaxis_translation_value> rdfs:label \"Y-axis translation value\"@en .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_yaxis_translation_value> rdf:type geocrs:OperationParameterValue .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_yaxis_translation_value> rdf:value \"0.0\"^^xsd:double .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_yaxis_translation_value> om:hasUnit om:millimetre .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"> geocrs:parameter <"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_zaxis_translation> .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_zaxis_translation> rdfs:label \"Z-axis translation\"@en .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_zaxis_translation> rdf:type geocrs:OperationParameter .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_zaxis_translation> geocrs:usesValue <"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_zaxis_translation_value> .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_zaxis_translation_value> rdfs:label \"Z-axis translation value\"@en .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_zaxis_translation_value> rdf:type geocrs:OperationParameterValue .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_zaxis_translation_value> rdf:value \"0.0\"^^xsd:double .\n")
    fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_zaxis_translation_value> om:hasUnit om:millimetre .\n")
    #fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"> geocrs:area_of_use <"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_aou> .\n")
    #fw.write("<"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"> geocrs:area_of_use <"+str(crsnamespace)+"crs/operation/cartesian_to_pca_"+str(induuid)+"_aou> .\n")
    
    

def csToRDF(fw,crsnamespace,indid,crsaswkt):
    svgstr= """<svg width=\"400\" height=\"250\" viewbox=\"0 0 375 220\"><defs><marker id=\"arrowhead\" markerWidth=\"10\" markerHeight=\"7\" refX=\"0\" refY=\"2\" orient=\"auto\"><polygon points=\"0 0, 4 2, 0 4\" /></marker></defs>"""
    fw.write("<"+str(indid)+"> <http://www.opengis.net/ont/geosparql#inSRS> <"+str(crsnamespace)+"cs/cartesian_ax3_mm> .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm> <http://www.opengis.net/ont/crs/asWKT> \""+str(crsaswkt)+"\"^^<http://www.opengis.net/ont/geosparql/crs#wktLiteral>.\n")     
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.opengis.net/ont/crs/CartesianCoordinateSystem> .\n") 
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm> <http://www.w3.org/2000/01/rdf-schema#label> \"Cartesian coordinate system with 3 axis in millimetre units\"@en .\n") 
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm> <http://www.opengis.net/ont/crs/axis> <"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis1> .\n") 
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis1> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.opengis.net/ont/crs/CoordinateSystemAxis> .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis1> <http://www.w3.org/2000/01/rdf-schema#label> \"Cartesian coordinate system with 3 axis in millimetre units: Axis 1\"@en .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis1> <http://www.opengis.net/ont/crs/abbreviation> \"X\" .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis1> <http://www.opengis.net/ont/crs/axisDirection> <http://www.opengis.net/ont/crs/geocentricX> .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis1> <http://www.opengis.net/ont/crs/axisOrder> \"1\"^^xsd:int .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis1> <http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit> <http://www.ontology-of-units-of-measure.org/resource/om-2/millimetre> .\n")         
    svgstr+="""<line x1=\"20\" y1=\"200\" x2=\"200\" y2=\"200\" stroke=\"red\" stroke-width=\"5\" marker-end=\"url(#arrowhead)\"></line><text x=\"110\" y=\"220\" class=\"small\">X: Cartesian X Axis (om:millimetre)</text>"""
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm> <http://www.opengis.net/ont/crs/axis> <"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis2> .\n") 
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis2> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.opengis.net/ont/crs/CoordinateSystemAxis> .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis2> <http://www.w3.org/2000/01/rdf-schema#label> \"Cartesian coordinate system with 3 axis in millimetre units: Axis 2\"@en .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis2> <http://www.opengis.net/ont/crs/abbreviation> \"Y\" .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis2> <http://www.opengis.net/ont/crs/axisDirection> <http://www.opengis.net/ont/crs/geocentricY> .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis2> <http://www.opengis.net/ont/crs/axisOrder> \"2\"^^xsd:int .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis2> <http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit> <http://www.ontology-of-units-of-measure.org/resource/om-2/millimetre> .\n")  
    svgstr+="""<line x1=\"20\" y1=\"200\" x2=\"20\" y2=\"20\" stroke=\"green\" stroke-width=\"5\" marker-end=\"url(#arrowhead)\"></line><text x=\"35\" y=\"20\" class=\"small\">Y: Cartesian Y Axis (om:millimetre)</text>"""
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm> <http://www.opengis.net/ont/crs/axis> <"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis3> .\n") 
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis3> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.opengis.net/ont/crs/CoordinateSystemAxis> .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis3> <http://www.w3.org/2000/01/rdf-schema#label> \"Cartesian coordinate system with 3 axis in millimetre units: Axis 3\"@en .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis3> <http://www.opengis.net/ont/crs/abbreviation> \"Z\" .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis3> <http://www.opengis.net/ont/crs/axisDirection> <http://www.opengis.net/ont/crs/geocentricZ> .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis3> <http://www.opengis.net/ont/crs/axisOrder> \"3\"^^xsd:int .\n")
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm_axis3> <http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit> <http://www.ontology-of-units-of-measure.org/resource/om-2/millimetre> .\n")        
    svgstr+="""<line x1=\"20\" y1=\"200\" x2=\"190\" y2=\"30\" stroke=\"blue\" stroke-width=\"5\" marker-end=\"url(#arrowhead)\"></line><text x=\"210\" y=\"25\" class=\"small\">Z: Cartesian Z Axis (om:millimetre)</text>"""
    fw.write("<"+str(crsnamespace)+"cs/cartesian_ax3_mm> <http://www.opengis.net/ont/crs/asSVG> \""+svgstr.replace("\"","'")+"</svg>\"^^<http://www.opengis.net/ont/crs/svgLiteral> .\n")
    
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
        annocounter=0
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
        @prefix geocrs: <http://www.opengis.net/ont/crs/> .
        @prefix prov: <http://www.w3.org/ns/prov#> .
        @prefix msp: <http://purl.org/meshsparql#> .
        @prefix om: <http://www.ontology-of-units-of-measure.org/resource/om-2/> .
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
        res.write("oa:Selector rdf:type owl:Class .\n")
        res.write("oa:Selector rdfs:subClassOf prov:Entity .\n")
        res.write("oa:SpecificResource rdfs:subClassOf prov:Entity .\n")
        res.write("oa:SvgSelector rdf:type owl:Class .\n")
        res.write("geocrs:CoordinateOperation rdfs:subClassOf prov:Entity .\n")
        res.write("<http://purl.org/meshsparql#ComputingReference> rdfs:subClassOf prov:Entity .\n")
        res.write("oa:SvgSelector rdfs:label \"Svg Selector\"@en .\n")
        res.write("oa:WKTSelector rdf:type owl:Class .\n")
        res.write("oa:WKTSelector rdfs:label \"WKT Selector\"@en .\n")
        res.write("oa:WKTSelector rdfs:subClassOf oa:Selector .\n")
        res.write("oa:FragmentSelector rdf:type owl:Class .\n")
        res.write("oa:FragmentSelector rdfs:label \"Fragment Selector\"@en .\n")
        res.write("oa:FragmentSelector rdfs:subClassOf oa:Selector .\n")
        creator="https://orcid.org/0000-0002-9499-5840"
        if tabletname in creatormap:
            creator=creatormap[tabletname]
        res.write("<"+str(namespace)+str(tabname)+"_"+str(tabletside)+"_annotations> rdf:type as:Collection .\n")
        res.write("as:Collection rdfs:subClassOf skos:Collection .\n")
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
            res.write("oa:Annotation rdfs:subClassOf prov:Entity .\n")
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
                annocounter+=1
                res.write("<"+str(indid)+"> oa:hasTarget <"+str(indid)+"_target3d> .\n")
                res.write("<"+str(indid)+"_target3d> rdf:type owl:NamedIndividual .\n")
                if tabname in meshsources:
                    res.write("<"+str(indid)+"_target3d> oa:hasSource <"+meshsources[tabname]+"> .\n")               
                else:
                    res.write("<"+str(indid)+"_target3d> oa:hasSource <"+str(data3d[key]["target"]["source"]).replace("../","https://situx.github.io/cuneiformontology/examples/")+"> .\n")
                res.write("<"+str(indid)+"_target3d> oa:hasSelector <"+str(indid)+"_target3d_selector> .\n")
                res.write("<"+str(indid)+"_target3d> rdfs:label \"3D Annotation target of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on "+str(material)+"\"@en .\n")
                res.write("<"+str(indid)+"_target3d_selector> rdf:type oa:WKTSelector .\n")
                if "coordinateSystem" in data3d[key]["target"]["selector"]:
                    csToRDF(res,crsnamespace,str(indid)+"_target3d_selector","\"\""+str(data3d[key]["target"]["selector"]["coordinateSystem"]).replace("\n","").replace("\"","\\\"")+"\"\"")
                if "pcaValue" in data3d[key]["target"]["selector"]:
                    res.write("<"+str(indid)+"_target3d_selector> <http://purl.org/meshsparql#pcaValue> \""+str(data3d[key]["target"]["selector"]["pcaValue"]).replace("\n","")+"\"^^oa:wktLiteral . \n")                             
                if "computingReference" in data3d[key]["target"]["selector"]:
                    i=0
                    for compref in data3d[key]["target"]["selector"]["computingReference"]:
                        comprefid=str(indid)+"_target3d_selector_compref"+str(i)
                        print(compref)
                        res.write("<"+str(indid)+"_target3d_selector> <http://purl.org/meshsparql#computingReference> <"+str(comprefid)+"> . \n")
                        if "type" in compref:
                            if compref["type"] in compreftypes:
                                res.write("<"+str(compreftypes[compref["type"]])+"> rdfs:subClassOf <http://purl.org/meshsparql#ComputingReference> .\n")
                                res.write("<"+str(comprefid)+"> rdf:type <"+str(compreftypes[compref["type"]])+"> .\n")
                            else:
                                res.write("<"+str(comprefid)+"> rdf:type <http://purl.org/meshsparql#ComputingReference> .\n")
                                res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql#comprefType> \""+str(compref["type"])+"\"^^xsd:string .\n")   
                        else:
                            res.write("<"+str(comprefid)+"> rdf:type <http://purl.org/meshsparql#ComputingReference> .\n")
                        res.write("<"+str(comprefid)+"> rdfs:label \"Computing Reference of 3D Annotation target selector of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on a 3D Mesh\"@en .\n")
                        res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql#stable> \""+str(compref["stable"])+"\"^^xsd:boolean .\n")
                        res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql#transformationMatrix> \""+str(compref["transformationmatrix"]).replace("\n","").replace("\\n","")+"\"^^msp:matrixLiteral .\n")
                        res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql#referenceVector> \"\"\""+str(compref["value"]).replace("\r","").replace("\n","").replace("\\n","")+"\"\"\"^^msp:vectorLiteral .\n")
                        res.write("<"+str(comprefid)+"> <http://purl.org/meshsparql#wktTransformation> \"\"\""+str(compref["wktTransformation"]).replace("\n","").replace("\"","\\\"")+"\"\"\"^^geocrs:wktLiteral .\n")
                        coptoRDF(res,crsnamespace,str(comprefid),"\"\"\""+str(compref["wktTransformation"]).replace("\n","").replace("\"","\\\"")+"\"\"\"",key)
                    i+=1               
                res.write("<"+str(indid)+"_target3d_selector> rdf:type oa:WKTSelector .\n")
                res.write("<"+str(indid)+"_target3d_selector> rdf:value \""+str(data3d[key]["target"]["selector"]["value"])+"\"^^oa:wktLiteral .\n")
                res.write("<"+str(indid)+"_target3d_selector> rdfs:label \"3D Annotation target selector of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on a 3D Mesh\"@en .\n")
                #3D Label Target
                res.write("<"+str(indid)+"_target3d> oa:hasSelector  <"+str(indid)+"_target3d_labelselector> .\n")
                res.write("msp:MeshLabelSelector rdfs:subClassOf oa:Selector .\n")
                res.write("<"+str(indid)+"_target3d_labelselector> rdf:type msp:MeshLabelSelector .\n")
                res.write("<"+str(indid)+"_target3d_labelselector> rdfs:label \"3D Annotation target labeling selector of Annotation of Glyph at "+str(tabname)+" "+str(tabletside)+" line "+str(lineindex)+" char "+str(charindex)+" on a 3D Mesh\"@en .\n")
                res.write("<"+str(indid)+"_target3d_labelselector> rdf:value \"[v[labelid="+str(annocounter)+"]]\"^^msp:selectorLiteral .\n")
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
