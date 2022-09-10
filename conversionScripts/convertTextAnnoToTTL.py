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
linestart=re.compile("^([0-9]+)\.(.*)$")
def indexTransliteration(transliteration):  
    charindexcounter=2
    wordindexcounter=2
    lineindexcounter=2
    currentside="front"
    for line in transliteration.split("\n"):
        if line.startswith("@") or line.startswith("#"):
            if iswindowsformatted:
                lineindexcounter+=len(line)+2
                wordindexcounter+=len(line)+2
                charindexcounter+=len(line)+2
            else:
                wordindexcounter+=len(line)+1
                lineindexcounter+=len(line)+1
                charindexcounter+=len(line)+1
            if line.startswith("@") and not line.startswith("@tablet"):
                currentside=line.replace("@","")              
            continue
        lm=linestart.match(line)
        if lm:      
            linenumber=lm.groups()[0]
            linecontent=lm.groups()[1][1:]
            lineindex[str(linenumber)]={"start":lineindexcounter,"end":lineindexcounter+len(line),"id":str(linenumber)}
            lineindexreverse[str(lineindexcounter)]={"start":lineindexcounter,"end":lineindexcounter+len(line),"id":str(currentside)+"_"+str(linenumber)}
            wordindexcounter+=len(lm.groups()[0])+1
            charindexcounter+=len(lm.groups()[0])+1
            wordcounter=1
            print("LineContent: "+str(linecontent))
            for word in linecontent.split(" "):
                print("Word: "+str(word))
                print("Word: "+str(wordindexcounter))
                wordindex[str(linenumber)+"_"+str(wordcounter)]={"start":wordindexcounter,"end":wordindexcounter+len(word),"exact":str(word),"id":str(linenumber)+"_"+str(wordcounter)}
                wordindexreverse[str(wordindexcounter)]={"start":wordindexcounter,"end":wordindexcounter+len(word),"id":str(currentside)+"_line"+str(linenumber)+"_word"+str(wordcounter)+"_wordformocc","exact":str(word),"line":linenumber,"word":wordcounter}
                charcounter=1
                for chara in re.split("-|\.",word):
                    charindex[str(linenumber)+"_"+str(charcounter)]={"start":charindexcounter,"end":charindexcounter+len(chara),"exact":str(chara),"id":str(linenumber)+"_"+str(charcounter)}
                    charindexreverse[str(charindexcounter)]={"start":charindexcounter,"end":charindexcounter+len(chara),"exact":str(chara),"id":str(currentside)+"_line"+str(linenumber)+"_char"+str(charcounter),"line":linenumber,"char":charcounter}
                    charindexcounter+=len(chara)+1
                    charcounter+=1              
                wordindexcounter+=len(word)+1
                wordcounter+=1                   
        lineindexcounter+=1

def relateAnnotationToTransliteration(startindex,endindex,namespace,tabid,transliteration):
    resuris={}
    print("RelToTrans: "+str(startindex)+" - "+str(endindex))
    startindex+=2
    endindex+=2
    print(transliteration[startindex:endindex])
    #print(wordindexreverse)
    #print(charindexreverse)
    for word in wordindexreverse:
        if int(word)>=int(startindex) and int(word)<=int(endindex):
            if int(wordindexreverse[word]["end"])<=endindex:
                resuris["<"+str(namespacetext)+str(tabid)+"_transliteration1_"+str(wordindexreverse[word]["id"])+">"]=wordindexreverse[word]
    for chara in charindexreverse:
        if int(chara)>=int(startindex) and int(chara)<=int(endindex):
            if int(charindexreverse[chara]["end"])<=endindex:
                resuris["<"+str(namespacetext)+str(tabid)+"_transliteration1_"+str(charindexreverse[chara]["id"])+">"]=charindexreverse[chara]
    print("RelToTransRes: "+str(resuris))
    return resuris

origtabletside="front"
tabletnames=["HS1174","HT073195","TCH92","O147"]
tabletsides=["front","back","left","right","bottom","top"]
tabletname="HS1174"
material="transliteration"
creatormap={"O147":"https://orcid.org/0000-0001-6690-9098"}
creator="https://orcid.org/0000-0002-9499-5840"
namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/imgannotations/"
namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabletname).lower()+"/"
crsnamespace="https://situx.github.io/cuneiformontology/examples/crs/"
filename="../examples/"+str(tabletname)+"/ttl/"+str(tabletname)+".atf"
withlines=False
withcharoccs=False
withglyphs=False
iswindowsformatted=False


for tabname in tabletnames:
    print(tabname)
    filename="../examples/"+str(tabname)+"/transliteration/"+str(tabname)+"_textanno.json"
    translitfilename="../examples/"+str(tabname)+"/transliteration/"+str(tabname)+".atf"
    namespace="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/textannotations/"
    namespacetext="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/"
    namespaceitems="https://situx.github.io/cuneiformontology/examples/"+str(tabname).lower()+"/"
    print(filename)
    print(translitfilename)
    data3d={}
    if not os.path.exists(filename) or not os.path.exists(translitfilename):
        continue
    f = open(filename,'r',encoding="utf-8")
    data = json.load(f)
    f = open(translitfilename,'r')
    transliteration=f.read()
    if "\r\n" in transliteration:
        iswindowsformatted=True
    indexTransliteration(transliteration)
    res = open(filename.replace(".json",".ttl"),'w',encoding="utf-8")
    res.write("""
    @prefix oa: <http://www.w3.org/ns/oa#> .
    @prefix owl: <http://www.w3.org/2002/07/owl#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix xml: <http://www.w3.org/XML/1998/namespace> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix prov: <http://www.w3.org/ns/prov#> .
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
    res.write("oa:TextPositionSelector rdfs:subClassOf oa:Selector .\n")
    res.write("oa:Selector rdf:type owl:Class .\n")
    res.write("oa:Selector rdfs:subClassOf prov:Entity .\n")
    res.write("oa:SpecificResource rdfs:subClassOf prov:Entity .\n")
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
        #print(key)
        if "http" not in key and key.startswith("#"):
            indid=str(namespace)+str(key).replace("#","")
        else:
            indid=key
        startindex=0
        endindex=0
        iswordannotation=False
        ischarannotation=False
        islineannotation=False
        isphraseannotation=False
        lemmacitation=None
        lemmaform=None
        language=None
        guideword=None
        curtranslit=""
        curline=0
        curword=0
        curchar=0
        source=""
        selectortype=""
        selectorval=""
        if "body" in keyobj:
            for item in keyobj["body"]:
                if item["purpose"]=="tagging" and "source" in item and item["source"]["id"]=="http://purl.org/cuneiform/Word":
                    iswordannotation=True
                if item["purpose"]=="tagging" and "source" in item and item["source"]["id"]=="http://purl.org/cuneiform/Character":
                    ischarannotation=True
                if item["purpose"]=="Lemma (Citation Form)":
                    lemmacitation=item["value"]
                if item["purpose"]=="Transcription (Babylonian Reading)":
                    lemmaform=item["value"]
                if item["purpose"]=="GuideWord":
                    guideword=item["value"]
                if item["purpose"]=="Language":
                    language=item["value"]
        if "target" in keyobj:
            #print(keyobj["target"])
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
        res.write("<"+str(indid)+"> rdfs:label \"Annotation of text passage of transliteration 1 of "+str(tabname)+" \"@en .\n")
        res.write("<"+str(indid)+"> <http://purl.org/dc/terms/rights> \"https://creativecommons.org/publicdomain/zero/1.0/\"^^xsd:anyURI .\n")
        targetcounter=1
        resuris=relateAnnotationToTransliteration(startindex,endindex,namespace,tabname,transliteration)
        for anntar in resuris:
            if ("word" in resuris[anntar] and iswordannotation) or ("char" in resuris[anntar] and ischarannotation):
                print(str(anntar)+" "+str(startindex)+" "+str(endindex))
                res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_translit"+str(targetcounter)+"> .\n")        
                res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> rdf:type oa:SpecificResource .\n")
                res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> oa:hasSource "+str(anntar)+" .\n")
                res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> oa:motivatedBy oa:identifying .\n")
                curline=resuris[anntar]["line"]
                if "word" in resuris[anntar] and iswordannotation:
                    res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> rdfs:label  \"Annotation body referencing transliteration of "+str(tabname)+" line "+str(resuris[anntar]["line"])+" word "+str(resuris[anntar]["word"])+" on "+str(material)+"\"@en .\n")
                    res.write("<"+str(indid)+"> rdfs:label \"Annotation of text at "+str(tabname)+"  line "+str(resuris[anntar]["line"])+" word "+str(resuris[anntar]["word"])+" on "+str(material)+"\"@en .\n")
                    curword=resuris[anntar]["word"]
                if "char" in resuris[anntar] and iswordannotation:
                    res.write("<"+str(indid)+"_body_translit"+str(targetcounter)+"> rdfs:label  \"Annotation body referencing transliteration of "+str(tabname)+" line "+str(resuris[anntar]["line"])+" char "+str(resuris[anntar]["char"])+" on "+str(material)+"\"@en .\n")
                    res.write("<"+str(indid)+"> rdfs:label \"Annotation of text at "+str(tabname)+"  line "+str(resuris[anntar]["line"])+" char "+str(resuris[anntar]["char"])+" on "+str(material)+"\"@en .\n")
                    curchar=resuris[anntar]["char"]
                targetcounter+=1
        if "body" in keyobj:
            for item in keyobj["body"]:
                if item["purpose"]=="Lemma (Citation Form)":
                    res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_lemma> .\n")
                    res.write("<"+str(indid)+"_body_lemma> rdf:type oa:TextualBody .\n")
                    res.write("<"+str(indid)+"_body_lemma> oa:motivatedBy oa:tagging .\n") 
                    res.write("<"+str(indid)+"_body_lemma> rdfs:label \"Lemma: "+str(item["value"])+"\"@en .\n")
                    res.write("<"+str(indid)+"_body_lemma> rdf:value \""+str(item["value"])+"\"^^xsd:string .\n")
                    res.write("<"+str(namespace)+str(tabname)+"_lexicon_"+str(language)+"> rdf:type lemon:Lexicon .\n")
                    res.write("<"+str(namespace)+str(tabname)+"_lexicon_"+str(language)+"> lemon:language <http://www.lexvo.org/page/iso639-1/"+str(language)+"> .\n")
                    res.write("<"+str(namespace)+str(tabname)+"_lexicon_"+str(language)+"> lemon:entry <"+str(lemmacitation)+"_word> .\n")
                    res.write("<"+str(lemmacitation)+"_word> rdf:type lemon:Word .\n")
                    res.write("<"+str(lemmacitation)+"_word> rdfs:label \"Word: "+str(item["value"])+"\"@en .\n")
                    if lemmaform!=None:
                       res.write("<"+str(lemmacitation)+"_word> lemon:form <"+str(lemmaform)+"_wordform> .\n")
                       res.write("<"+str(lemmaform)+"_wordform> rdf:type lemon:WordForm .\n")
                       res.write("<"+str(lemmaform)+"_wordform> rdfs:label \"Wordform: "+str(lemmaform)+"\"@en .\n")
                if item["purpose"]=="Transcription (Babylonian Reading)":
                    res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_transcription> .\n")
                    res.write("<"+str(indid)+"_body_transcription> rdf:type oa:TextualBody .\n")
                    res.write("<"+str(indid)+"_body_transcription> oa:motivatedBy oa:describing .\n") 
                    res.write("<"+str(indid)+"_body_transcription> rdfs:label \"Babylonian Reading: "+str(item["value"])+"\"@en .\n")
                    res.write("<"+str(indid)+"_body_transcription> rdf:value \""+str(item["value"])+"\"^^xsd:string .\n")
                if item["purpose"]=="GuideWord":
                    res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_guideword> .\n")
                    res.write("<"+str(indid)+"_body_guideword> rdf:type oa:TextualBody .\n")
                    res.write("<"+str(indid)+"_body_guideword> oa:motivatedBy oa:tagging .\n") 
                    res.write("<"+str(indid)+"_body_guideword> rdfs:label \"Guideword: "+str(item["value"])+"\"@en .\n")
                    res.write("<"+str(indid)+"_body_guideword> rdf:value \""+str(item["value"])+"\"^^xsd:string .\n")
                if item["purpose"]=="Language":
                    res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_language> .\n")
                    res.write("<"+str(indid)+"_body_language> rdf:type oa:TextualBody .\n")
                    res.write("<"+str(indid)+"_body_language> oa:motivatedBy oa:tagging .\n") 
                    res.write("<"+str(indid)+"_body_language> rdfs:label \"Language: "+str(item["value"])+"\"@en .\n")
                    res.write("<"+str(indid)+"_body_language> rdf:value \""+str(item["value"])+"\"^^xsd:string .\n")
                    language=item["value"]
                if item["purpose"]=="classifying" and "source" in item and "/Q" in item["source"]:
                    res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_class_sense> .\n")
                    res.write("<"+str(indid)+"_body_class_sense> rdf:value \""+str(item["source"])+"\"^^xsd:anyURI .\n")
                    res.write("<"+str(indid)+"_body_class_sense> rdfs:label \""+str(item["label"])+"\"@en .\n") 
                    res.write("<"+str(indid)+"_body_class_sense> oa:motivatedBy oa:classifying .\n")  
                    res.write("<"+str(indid)+"_body_class_sense> rdf:type oa:SpecificResource .\n")                      
                    res.write("<"+str(indid)+"_body_class_sense> skos:definition \""+str(item["description"])+"\"@en .\n") 
                if item["purpose"]=="classifying" and "source" in item and "/L" in item["source"]:
                    res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_wordform> .\n")
                    res.write("<"+str(indid)+"_body_wordform> rdf:value \""+str(item["source"])+"\"^^xsd:anyURI .\n")
                    res.write("<"+str(indid)+"_body_wordform> rdfs:label \""+str(item["label"])+"\"@en .\n") 
                    res.write("<"+str(indid)+"_body_wordform> oa:motivatedBy oa:classifying .\n")  
                    res.write("<"+str(indid)+"_body_wordform> rdf:type oa:SpecificResource .\n")                    
                    res.write("<"+str(indid)+"_body_wordform> skos:definition \""+str(item["description"])+"\"@en .\n")                         
                if item["purpose"]=="tagging" and "source" in item and "id" in item["source"] and "olia" in item["source"]["id"]:
                    res.write("<"+str(indid)+"> oa:hasBody <"+str(indid)+"_body_class_postag> .\n")
                    res.write("<"+str(indid)+"_body_class_postag> rdf:type oa:SpecificResource .\n")
                    res.write("<"+str(indid)+"_body_class_postag> rdfs:label \"Annotation body of POSTag classification\"@en .\n")
                    res.write("<"+str(indid)+"_body_class_postag> rdf:value \""+str(item["source"]["id"])+"\"^^xsd:anyURI .\n")
        targetcounter=1
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"> rdf:type owl:NamedIndividual .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"> oa:hasSelector <"+str(indid)+"_target"+str(targetcounter)+"_selector> .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"> oa:hasSource <"+str(namespace)+str(tabname)+"_transliteration1> .\n")             
        if iswordannotation:
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"> rdfs:label \"Annotation target"+str(targetcounter)+" of Annotation of text section at "+str(tabname)+" line "+str(curline)+" word "+str(curword)+" on "+str(material)+"\"@en .\n")
        else:
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"> rdfs:label \"Annotation target"+str(targetcounter)+" of Annotation of text section at "+str(tabname)+" line "+str(curline)+" char "+str(curchar)+" on "+str(material)+"\"@en .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdf:type oa:"+str(selectortype)+" .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> oa:start \""+str(startindex)+"\"^^xsd:integer .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> oa:end \""+str(endindex)+"\"^^xsd:integer .\n")
        res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdf:value \""+str(selectorval).replace('"','\\"')+"\" .\n")
        if iswordannotation:
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdfs:label \"Annotation target selector of Annotation of text section at "+str(tabname)+" transliteration  line "+str(curline)+" word "+str(curword)+" on "+str(material)+"\"@en .\n")
        else:
            res.write("<"+str(indid)+"_target"+str(targetcounter)+"_selector> rdfs:label \"Annotation target selector of Annotation of text section at "+str(tabname)+" transliteration  line "+str(curline)+" char "+str(curchar)+" on "+str(material)+"\"@en .\n")
    res.close()
    g = Graph()
    g.parse(filename.replace(".json",".ttl"))
    g.serialize(destination=filename.replace(".json",".ttl"))
