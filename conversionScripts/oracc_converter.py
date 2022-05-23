import json
import os

ttlresult=set()
ttlresult.add("cunei:Tablet rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdf:type owl:Class . lemon:Sense rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdfs:label \"Glyph\"@en .\n")
namespace="http://www.example.org/cuneiform"
namespacedict="http://www.example.org/cuneiform/dict/"
namespaceshort="cunei"
namespaceshortdict="cuneidict"
currentproject=""
currenttabletid=""
currenttableturi=""
lexicons=[]

with open("cuneify.json",encoding='utf-8') as f:
    cuneify = json.load(f)

def replaceNonURIChars(myuri):
    return myuri.replace("$","_").replace("{","_").replace("}","_").replace("̌","_").replace(";","_").replace("̄","_").replace("ʾ","_").replace("̆","_").replace(",","_").replace("'","_").replace("/","_").replace("+","_").replace("(","_").replace(")","_").replace("|","_").replace("@","_").replace("×","_").replace("&","_").replace("+","_").replace(".","_")

def format_ascii(word):
    ascii_replacements = {
        'Á' : 'A2','À' : 'A3',
        'á' : 'a2','à' : 'a3',
        'É' : 'E2','È' : 'E3',
        'é' : 'e2','è' : 'e3', 
        'Í' : 'I2','Ì' : 'I3',
        'í' : 'i2','ì' : 'i3', 
        'Ú' : 'U2','Ù' : 'U3',
        'ú' : 'u2','ù' : 'u3', 
        'Ṭ' : 'T,', 'j' : 'i',
        'ĝ' : 'g', 'ṭ' : 't,',
        'ḫ' : 'h', 'Ḫ' : 'H',
        'š' : 'sz', 'Š' : 'SZ',
        'ṣ' : 's,', 'Ṣ' : 'S,',
        '₀' : '0', '₁' : '1',    
        '₂' : '2', '₃' : '3', 
        '₄' : '4', '₅' : '5', 
        '₆' : '6', '₇' : '7',
        '₈' : '8', '₉' : '9'}
    for rep, initial in ascii_replacements.items():
        word = word.replace(rep.lower(), initial)
    print(word)
    return word

def cuneifyWord(word):
    if word in cuneify:
        return cuneify[word]

def handleLineElements(data,ttlresult,currentside,currentsentence,currenttabletid):
    currentline=-1
    currentwordindex=0
    currentcharindex=0
    currentrelcharindex=0
    for lineitem in data["cdl"]:
        print(lineitem)
        print("=======================")
        if "type" in lineitem and lineitem["type"]=="line-start":
            if "n" in lineitem:
                currentline=lineitem["n"]
            currentcharindex=0
            currentwordindex=0
            try:
                if int(currentline.replace("'",""))>1:
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" cunei:prevLine "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+".\n")
            except Exception as e:
                print(e)
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_transliteration cunei:hasLine "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+".\n")
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" rdf:type cunei:Line .\n")
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" rdfs:label \"Line: "+str(currentline)+" ["+str(currenttabletid)+"_"+str(currentside)+"]\" .\n")
            print(lineitem)
        if "node" in lineitem and lineitem["node"]=="l":
            print(lineitem)
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+" rdf:type cunei:Line .\n")
            if "f" in lineitem and "form" in lineitem["f"]:
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word rdf:type cunei:WordFormOccurance .\n")
                if "norm" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdf:type cunei:Word.\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_form .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["norm"]))+"\" .\n")
                else:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdf:type cunei:Word.\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_form .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["form"]))+"\" .\n")
                if "pos" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word <http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> \""+str(lineitem["f"]["pos"])+"\".\n")
                if "sense" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:sense "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdf:type lemon:Sense .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdfs:label \"WordSense: "+str(lineitem["f"]["sense"])+" ("+str(lineitem["f"]["form"])+")\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_form rdf:type cunei:WordForm .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_form lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_form rdfs:label \"WordForm: "+str(lineitem["f"]["form"])+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_form cunei:isAttested "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" cunei:consistsOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word rdfs:label \""+str(lineitem["f"]["form"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"])\" .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_word lemon:writtenRepUnicode \""+str(cuneifyWord(str(lineitem["f"]["form"])))+"\" .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_word lemon:writtenRepASCII \""+str(format_ascii(str(lineitem["f"]["form"])))+"\" .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word cunei:Line \""+str(currentline)+"\"^^xsd:integer .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word cunei:locatedIn  "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+".\n")
                if currentwordindex>0:
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word cunei:prevWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex-1)+"_word .\n")
                if currentwordindex<=len(data["cdl"]):
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word cunei:nextWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex+1)+"_word .\n")              
                currentwordindex+=1
                currentrelcharindex=0
                if "gdl" in lineitem["f"]:
                    for charr in lineitem["f"]["gdl"]:
                        if "lang" in lineitem["f"]:
                            if "akk" in lineitem["f"]["lang"]:
                                ttlresult.add("cunei:Akk rdf:type lemon:Dictionary .\n")
                                ttlresult.add("cunei:Akk lemon:language \"Akkadian\" .\n")  
                                ttlresult.add("cunei:Akk lemon:entry "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word .\n")                                
                        if "v" in charr:
                            ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(charr["v"]))+"_char rdf:type cunei:Char .\n")
                            ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(charr["v"]))+"_char rdfs:label \"Char: "+str(charr["v"])+"\" .\n")
                            ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(charr["v"]))+"_char lemon:form "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph rdf:type cidoc:TX9_Glyph .\n")
                            if "break" in charr and "damaged" in charr["break"]:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"true\"^^xsd:boolean .\n")
                            else:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"false\"^^xsd:boolean .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> cunei:"+str(currenttabletid)+"_writtenText .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph rdfs:label \"Glyph at "+str(currenttabletid)+"["+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"])\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> "+namespaceshort+":"+currenttabletid+" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/P138_represents> "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word cunei:consistsOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char rdf:type cunei:CharForm .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char rdfs:label \"CharForm: "+str(charr["v"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"])\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char lemon:writtenRep \""+str(charr["v"])+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char lemon:writtenRepUnicode \""+str(cuneifyWord(str(charr["v"])))+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char lemon:writtenRepASCII \""+str(format_ascii(str(charr["v"])))+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char cunei:partOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_word .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char cunei:positionOnTabletSide \""+str(currentcharindex)+"\"^^xsd:integer .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char cunei:Line \""+str(currentline)+"\"^^xsd:integer .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char cunei:positionInWord \""+str(currentrelcharindex)+"\"^^xsd:integer .\n")
                            if currentcharindex>0:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char cunei:prevInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex-1)+"_char .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:prevInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex-1)+"_glyph .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char cunei:prev "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex-1)+"_char .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:prev "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex-1)+"_glyph .\n")
                            if currentrelcharindex<=len(lineitem["f"]["gdl"]):
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char cunei:next "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex+1)+"_char .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:next "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex+1)+"_glyph .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_char cunei:nextInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex+1)+"_char .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:nextInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex+1)+"_glyph .\n")
                            currentcharindex+=1
                            currentrelcharindex+=1
    return ttlresult

def analyzeTablet(data,ttlresult):
    tablettype=""
    currentside=""
    currentsentence=1
    currentline=""
    if data["type"]=="cdl":
        ttlresult.add(namespaceshort+":"+data["textid"]+" rdf:type cunei:Tablet .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+" rdfs:label \"Cuneiform Artifact: "+str(data["textid"])+"\" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_transliteration rdf:type cunei:Transliteration .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_transliteration rdfs:label \"Transliteration: "+str(data["textid"])+"\" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+" cunei:writtenText "+namespaceshort+":"+str(data["textid"])+"_writtenText .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText rdf:type cidoc:TX1_WrittenText .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText rdfs:label \"Written Text on "+str(data["textid"])+"\" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText cidoc:P56_found_on "+namespaceshort+":"+str(data["textid"])+" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText cidoc:TXP10_read_by "+namespaceshort+":"+str(data["textid"])+"_writtenText_reading .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText_reading rdf:type cidoc:TX5_Reading .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText_reading rdfs:label \"Reading interpretation of the written text of "+str(data["textid"])+"\" .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText_reading cidoc:TXP3_is_rendered_by "+namespaceshort+":"+data["textid"]+"_transliteration  .\n")
        currenttabletid=data["textid"]
        currenttableturi=namespace+data["textid"]
    if "cdl" in data:
        for node in data["cdl"]:
            if "type" in node and "text" in node["type"] and "cdl" in node:
                for tabitem in node["cdl"]:
                    if tabitem["node"]=="d" and tabitem["type"]=="tablet":
                        tablettype=tabitem["subtype"]
                    if tabitem["node"]=="d" and tabitem["type"]=="obverse":
                        currentside="obverse"
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:ObverseSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="reverse":
                        currentside="reverse"
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:ReverseSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="top":
                        currentside="top"
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:TopSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="bottom":
                        currentside="bottom"
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:BottomSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="right":
                        currentside="right"
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:RightSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="left":
                        currentside="left"
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:LeftSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="c" and tabitem["type"]=="discourse" and "cdl" in tabitem:
                        for textitem in tabitem["cdl"]:
                            if textitem["node"]=="c" and textitem["type"]=="sentence" and "cdl" in textitem:
                                if currentsentence>1:
                                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence)+" cunei:prevSentence "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence-1)+" .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_tsentence_"+str(currentsentence)+" rdf:type cunei:TransliterationSentence .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence)+" rdf:type cunei:Sentence .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence)+" rdfs:label \"Sentence "+str(currentsentence)+" on "+str(currenttabletid)+"\" .\n")
                                ttlresult=handleLineElements(textitem,ttlresult,currentside,currentsentence,currenttabletid)
                                currentsentence+=1
                                        
    return ttlresult
    
header="""@prefix xsd:<http://www.w3.org/2001/XMLSchema#> .\n@prefix cunei:<http://www.example.org/cunei/> .\n@prefix cuneidict:<http://www.example.org/cuneiform/dict/> .\n@prefix cidoc:<http://www.cidoc-crm.org/cidoc-crm/> .\n@prefix owl:<http://www.w3.org/2002/07/owl#> .\n@prefix rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:<http://www.w3.org/2000/01/rdf-schema#> .\n@prefix lemon:<http://lemon-model.net/lemon#> .\n"""
ontology="""cunei:isDamaged rdf:type owl:DatatypeProperty .\n<http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> rdf:type owl:ObjectProperty .\ncunei:hasLine rdf:type owl:ObjectProperty.\ncidoc:P56_found_on rdf:type owl:ObjectProperty.\ncidoc:TXP10_read_by rdf:type owl:ObjectProperty.\ncidoc:TXP3_is_rendered_by rdf:type owl:ObjectProperty .\ncunei:writtenText rdf:type owl:ObjectProperty .\ncunei:hasSide rdf:type owl:ObjectProperty .\ncunei:partOf rdf:type owl:ObjectProperty .\ncunei:next rdf:type owl:ObjectProperty .\ncunei:prevLine rdf:type owl:ObjectProperty .\ncunei:nextLine rdf:type owl:ObjectProperty .\ncunei:prevSentence rdf:type owl:ObjectProperty .\ncunei:nextSentence rdf:type owl:ObjectProperty .\ncunei:nextWord rdf:type owl:ObjectProperty .\ncunei:consistsOf rdf:type owl:ObjectProperty .\ncunei:prevWord rdf:type owl:ObjectProperty .\ncunei:prevInWord rdf:type owl:ObjectProperty .\ncunei:nextInWord rdf:type owl:ObjectProperty .\ncunei:prev rdf:type owl:ObjectProperty .\nlemon:sense rdf:type owl:ObjectProperty .\nlemon:pos rdf:type owl:ObjectProperty .\nlemon:entry rdf:type owl:ObjectProperty .\nlemon:writtenRepUnicode rdf:type owl:DatatypeProperty .\n lemon:writtenRepASCII rdf:type owl:DatatypeProperty .\n<http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> rdf:type owl:ObjectProperty .<http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> rdf:type owl:ObjectProperty .\n<http://www.cidoc-crm.org/cidoc-crm/P138_represents> rdf:type owl:ObjectProperty .\n lemon:writtenRep rdf:type owl:DatatypeProperty .\ncunei:positionOnTabletSide rdf:type owl:DatatypeProperty .\ncunei:locatedIn rdf:type owl:ObjectProperty .\nlemon:form rdf:type owl:ObjectProperty .\ncunei:positionInWord rdf:type owl:DatatypeProperty .\ncunei:Line rdf:type owl:DatatypeProperty .\ncunei:isAttested rdf:type owl:ObjectProperty .\n"""

corpusid="ccpo"
subdircorp=""
if subdircorp!="":
    rootdir="cams-gkab/cams/gkab/corpusjson"
else:
    rootdir=str(corpusid)+"/"+str(corpusid)+"/corpusjson"

counter=1
for subdir, dirs, files in os.walk(rootdir):
    if subdir==".":
        continue
    subdirs=str(subdir).replace(".\\","")
    for file in files:
        try:
            with open(subdir+"/"+file,encoding='utf-8') as f:
              data = json.load(f)
        except Exception as e:
            print(e)      
        ttlresult=analyzeTablet(data,ttlresult)


with open(corpusid+'.ttl', 'w', encoding='utf-8') as f:
  f.write(header)
  f.write(ontology)
  f.write("".join(sorted(list(dict.fromkeys(ttlresult)))))
  f.close()


