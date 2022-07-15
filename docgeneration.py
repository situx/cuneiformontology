# -*- coding: UTF-8 -*-
from rdflib import Graph
from rdflib import URIRef
import os
import json
import sys

htmltemplate="""
<div id="mySidenav" class="sidenav" style="overflow:auto;">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  GeoClasses: <input type="checkbox" id="geoclasses"/><br/>
  Search:<input type="text" id="classsearch"><br/><div id="jstree"></div>
</div><html><head><title>{{title}}</title>
<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.1.1/themes/default/style.min.css" />
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="{{scriptfolderpath}}"></script><script src="{{classtreefolderpath}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.3.9/jstree.min.js"></script>
<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
<script>
  var baseurl={{baseurl}}
  $( function() {
    var availableTags = Object.keys(search)
    $( "#search" ).autocomplete({
      source: availableTags
    });
    console.log(availableTags)
    setupJSTree()
  } );

function loadClasses(){
	if($('#geoclasses').prop('checked')){
		getAllClasses();
	}else{
		getClassHierarchy([]);
	}
}
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function followLink(thelink=null){
    if(thelink==null){
        rest=search[document.getElementById('search').value].replace(baseurl,"")
    }else{
        rest=thelink.replace(baseurl,"")
    }
    count=location.href.split("/").length-1
    counter=0
    while(counter<count){
        rest="../"+rest
        counter+=1
    }  
    location.href=rest
}

function setupJSTree(){
    console.log("setupJSTree")
    tree["contextmenu"]={}
    tree["contextmenu"]["items"]=function (node) {
                    return {
                        "instancecount": {
                            "separator_before": false,
                            "separator_after": false,
                            "icon": baseurl+"static/icons/instancecount.png",
                            "label": "Check instance count",
                            "action": function (obj) {
                                getInstanceCount(node)      
                            }
                        },
                        "showinstances": {
                            "separator_before": false,
                            "separator_after": false,
                            "label": "Show instances in GeoPubby",
                            "icon": baseurl+"static/icons/queryinstances.png",
                            "action": function (obj) {
                                getInstances(node)                              
                            }
                        },
                        "querydataschema": {
                            "separator_before": false,
                            "separator_after": false,
                            "icon": baseurl+"static/icons/classschema.png",
                            "label": "Query data (schema)",
                            "action": function (obj) {
                                if(node.icon.includes("class.png")){
                                    getDatasetSchema(node)                                  	
                                }else if(node.icon.includes("instance.png")){
                                    getInstanceData(node)  
                                }
                            }
                        },
                        "show in map view": {
                            "separator_before": false,
                            "separator_after": false,
                            "label": "Show instances in Map View",
                            "action": function (obj) {
                                console.log(node)
                                console.log("Show instances in map view")  
                                var win = window.open("https://digits.mainzed.org/geopubby/"+"values/-rdf:type/"+node.id.substring(node.id.lastIndexOf('/')+1), '_blank');
                                win.focus();                                   
                            }
                        },
                        "lookupdefinition": {
                            "separator_before": false,
                            "separator_after": false,
                            "label": "Lookup definition",
                            "icon": baseurl+"static/icons/classlink.png",
                            "action": function (obj) {
                                var win = window.open(node.id, '_blank');
                                win.focus();                                 
                            }
                        }
                    };
    }
    $('#jstree').jstree(tree);
    $('#jstree').bind("dblclick.jstree", function (event) {
        var node = $(event.target).closest("li");
        var data = node[0].id
        console.log(data)
        console.log(node)
        if(data.includes("{{prefixpath}}")){
            followLink()
        }
        window.open(data, '_blank');
    });
    var to = false;
	$('#classsearch').keyup(function () {
		console.log("KEY UP")
        if(to) { clearTimeout(to); }
        to = setTimeout(function () {
            var v = $('#classsearch').val();
            $('#jstree').jstree(true).search(v,false,true);
        });
    });
}

</script>
<style>html { margin: 0; padding: 0; }
body { font-family: sans-serif; font-size: 80%; margin: 0; padding: 1.2em 2em; }
#rdficon { float: right; position: relative; top: -28px; }
#header { border-bottom: 2px solid #696; margin: 0 0 1.2em; padding: 0 0 0.3em; }
#footer { border-top: 2px solid #696; margin: 1.2em 0 0; padding: 0.3em 0 0; }
#homelink { display: inline; }
#homelink, #homelink a { color: #666; }
#homelink a { font-weight: bold; text-decoration: none; }
#homelink a:hover { color: red; text-decoration: underline; }
h1 { display: inline; font-weight: normal; font-size: 200%; margin: 0; text-align: left; }
h2 { font-weight: normal; font-size: 124%; margin: 1.2em 0 0.2em; }
.page-resource-uri { font-size: 116%; margin: 0.2em 0; }
.page-resource-uri a { color: #666; text-decoration: none; }
.page-resource-uri a:hover { color: red; text-decoration: underline; }
img { border: none; }
table.description { border-collapse: collapse; clear: left; font-size: 100%; margin: 0 0 1em; width: 100%; }
table.description th { background: white; text-align: left; }
table.description td, table.description th { line-height: 1.2em; padding: 0.3em 0.5em; vertical-align: top; }
table.description ul { margin: 0; padding-left: 1.4em; }
table.description li { list-style-position: outside; list-style-type: square; margin-left: 0; padding-left: 0; }
table.description .property-column { width: 13em; }
.ui-autocomplete {
    max-height: 100px;
    overflow-y: auto;
    /* prevent horizontal scrollbar */
    overflow-x: hidden;
  }
.uri { white-space: nowrap; }
.uri a, a.uri { text-decoration: none; }
.unbound { color: #888; }
table.description a small, .metadata-table a small  { font-size: 100%; color: #55a; }
table.description small, .metadata-table a small  { font-size: 100%; color: #666; }
table.description .property { white-space: nowrap; padding-right: 1.5em; }
h1, h2 { color: #810; }
body { background: #cec; }
table.description .container > td { background: #c0e2c0; padding: 0.2em 0.8em; }
table.description .even td { background: #d4f6d4; }
table.description .odd td { background: #f0fcf0; }
.image { background: white; float: left; margin: 0 1.5em 1.5em 0; padding: 2px; }
a.expander { text-decoration: none; }

.metadata-label {
	font-size: 100%;
	background: #f0fcf0;
	padding: 3px;
}

.metadata-table {
	font-size: 100%;
	border-left: 3px solid #f0fcf0;
	border-bottom: 3px solid #f0fcf0;
	border-right: 3px solid #f0fcf0;
	background: #d4f6d4;
	border-top: 0px solid none;
	margin: 0px;
}

.metadata-table td {
	padding: 3px;
}
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #FFF;
  overflow-x: hidden;
  transition: 0.5s;
}

.sidenav a {
  text-decoration: none;
  font-size: 12px;
  color: #818181;
  transition: 0.3s;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#jstree {
	font-size: 12px;
	background-color:white;
	z-index: 2;
}

.jstree-contextmenu {
z-index: 10;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}</style></head><body><div id="header">
        <h1 id="title">{{title}}</h1></div><div class="page-resource-uri"><a href="{{baseurl}}">{{baseurl}}</a><b>powered by <a href="https://github.com/i3mainz/geopubby" title="Static Pubby" target="_blank">Static Pubby<img src="https://digits.mainzed.org/geopubby/static/geopubby_logo.png" alt="GeoPubby" /></a></b></div>
      </div><div id="rdficon"><span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span></div> <div class="search">
    <div class="ui-widget">Search: <input id="search" size="50"><button id="gotosearch" onclick="followLink()">Go</button></div>
</div><div class="container-fluid"><div class="row-fluid" id="main-wrapper"><table border=1 width=100% class=description><tr><th>Property</th><th>Value</th></tr>{{tablecontent}}</table><div id="footer"><div class="container-fluid"></div></div></body></html>"""

def getClassTree(graph,uritolabel):
    classquery="""PREFIX owl: <http://www.w3.org/2002/07/owl#>\n
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n
    SELECT DISTINCT ?subject ?label ?supertype\n
    WHERE {\n
       { ?individual rdf:type ?subject . } UNION { ?subject rdf:type owl:Class . } .\n
       OPTIONAL { ?subject rdfs:subClassOf ?supertype } .\n
       OPTIONAL { ?subject rdfs:label ?label. filter(langMatches(lang(?label),\"en\")) }
       OPTIONAL { ?subject rdfs:label ?label }.\n
        FILTER (\n
            (\n
            ?subject != owl:Class &&\n
            ?subject != rdf:List &&\n
            ?subject != rdf:Property &&\n
            ?subject != rdfs:Class &&\n
            ?subject != rdfs:Datatype &&\n
            ?subject != rdfs:ContainerMembershipProperty &&\n
            ?subject != owl:DatatypeProperty &&\n
            ?subject != owl:AnnotationProperty &&\n
            ?subject != owl:Restriction &&\n
            ?subject != owl:ObjectProperty &&\n
            ?subject != owl:NamedIndividual &&\n
            ?subject != owl:Ontology) )\n
    }"""
    results = g.query(classquery)
    tree={ "plugins": ["search","sort","state","types","contextmenu"],"search": {},"types":{
        	"class":{"icon":"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/class.png"},
        	"geoclass":{"icon":"static/icons/geoclass.png"},
        	"instance":{"icon": "https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/instance.png"},
        	"geoinstance":{"icon":"static/icons/geoinstance.png"}
        },
         "core": { "check_callback":True, "data" :[]}}
    result=[]
    ress={}
    classeswithinstances={}
    for res in results:
        print(res)
        if "_:" not in str(res["subject"]) and str(res["subject"]).startswith("http"):
            ress[str(res["subject"])]={"super":res["supertype"],"label":res["label"]}
    print(ress)
    for cls in ress:
        for obj in graph.subjects(URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(cls)):
            if str(obj) in uritolabel:
                result.append({ "id" : str(obj), "parent" : cls, 
                "type":"instance",
                "text" : uritolabel[str(obj)]+" ("+str(obj)[str(obj).rfind('/')+1:]+")"})
            else:
                result.append({ "id" : str(obj), "parent" : cls, 
                "type":"instance",
                "text" : str(obj)[str(obj).rfind('/')+1:] })
        if ress[cls]["super"]==None:
                result.append({ "id" : cls, "parent" : "#", 
                "type":"class",
                "text" : cls[cls.rfind('/')+1:] })
        else:
            if cls["label"]!=None:
                result.append({ "id" : cls, "parent" : ress[cls]["super"], 
                "type" : "class",
                "text" : ress[cls]["label"]+" ("+cls[cls.rfind('/')+1:]+")"})
            else:
                result.append({ "id" : cls, "parent" : "#", 
                    "type":"class",
                "text" : cls[cls.rfind('/')+1:] })
    tree["core"]["data"]=result
    return "var tree="+json.dumps(tree,indent=2)

def replaceNameSpacesInLabel(uri):
    for ns in prefixes["reversed"]:
        if ns in uri:
            return {"uri":str(prefixes["reversed"][ns])+":"+str(uri.replace(ns,prefixes["reversed"][ns])),"ns":prefixes["reversed"][ns]}
    return None

def createHTML(savepath,predobjs,subject,baseurl,subpreds,graph,searchfilename,classtreename):
    tablecontents=""
    isodd=False
    savepath=savepath.replace("\\","/")
    if savepath.endswith("/"):
        checkdepth=savepath.replace(baseurl,"").count("/")-1
    else:
        checkdepth=savepath.replace(baseurl,"").count("/")
    checkdepth-=1
    print("Checkdepth: "+str(checkdepth))
    foundlabel=""
    for tup in predobjs:
        if isodd:
            tablecontents+="<tr class=\"odd\">"
        else:
            tablecontents+="<tr class=\"even\">"
        if baseurl in str(tup[0]):
            rellink=str(tup[0]).replace(baseurl,"")
            for i in range(0,checkdepth):
                rellink="../"+rellink
            rellink+="/index.html"
            tablecontents+="<td class=\"property\"><span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+rellink+"\">"+str(tup[0][tup[0].rfind('/')+1:])+"</a></span></td>"
        else:
            res=replaceNameSpacesInLabel(tup[1])
            if res!=None:
                tablecontents+="<td class=\"property\"><span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+str(tup[0])+"\">"+str(tup[0][tup[0].rfind('/')+1:])+" ("+res["uri"]+")</a></span></td>"                  
            else:
                tablecontents+="<td class=\"property\"><span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+str(tup[0])+"\">"+str(tup[0][tup[0].rfind('/')+1:])+"</a></span></td>"
        if str(tup[0])=="http://www.w3.org/2000/01/rdf-schema#label":
            foundlabel=tup[1]
        if len(tup)>0:
            if "http" in tup[1]:
                if baseurl in tup[1]:
                    rellink=str(tup[1]).replace(baseurl,"")
                    for i in range(0,checkdepth):
                        rellink="../"+rellink
                    rellink+="/index.html"
                    label=str(tup[1][tup[1].rfind('/')+1:])
                    #print(str(subject)+",http://www.w3.org/2000/01/rdf-schema#label")
                    for obj in graph.objects(tup[1],URIRef("http://www.w3.org/2000/01/rdf-schema#label")):
                        label=str(obj)
                        #print(obj)
                    tablecontents+="<td class=\"wrapword\"><a href=\""+rellink+"\">"+label+" ("+namespaceshort+":"+str(str(tup[1][tup[1].rfind('/')+1:]))+")</a></td>"
                else:
                    res=replaceNameSpacesInLabel(tup[1])
                    if res!=None:
                        tablecontents+="<td class=\"wrapword\"><a target=\"_blank\" href=\""+str(tup[1])+"\">"+str(tup[1][tup[1].rfind('/')+1:])+" ("+res["uri"]+")</a></td>"                  
                    else:
                        tablecontents+="<td class=\"wrapword\"><a target=\"_blank\" href=\""+str(tup[1])+"\">"+str(tup[1][tup[1].rfind('/')+1:])+"</a></td>"
            else:
                if not isinstance(tup[1], URIRef) and tup[1].datatype!=None:
                    tablecontents+="<td class=\"wrapword\">"+str(tup[1])+" <small>(<a style=\"color: #666;\" target=\"_blank\" href=\""+str(tup[1].datatype)+"\">"+str(tup[1].datatype[tup[1].datatype.rfind('/')+1:])+"</a>)</small></td>"
                else:
                    tablecontents+="<td class=\"wrapword\">"+str(tup[1])+"</td>"
        else:
            tablecontents+="<td class=\"wrapword\"></td>"
        tablecontents+="</tr>"
        isodd=not isodd
    for tup in subpreds:
        if isodd:
            tablecontents+="<tr class=\"odd\">"
        else:
            tablecontents+="<tr class=\"even\">"
        if baseurl in str(tup[1]):
            rellink=str(tup[1]).replace(baseurl,"")
            for i in range(0,checkdepth):
                rellink="../"+rellink
            rellink+="/index.html"
            tablecontents+="<td class=\"property\">Is <span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+rellink+"\">"+str(tup[1][tup[1].rfind('/')+1:])+"</a></span> of</td>"
        else:
            res=replaceNameSpacesInLabel(tup[1])
            if res!=None:
                tablecontents+="<td class=\"property\">Is <span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+str(tup[1])+"\">"+str(tup[1][tup[1].rfind('/')+1:])+" ("+res["uri"]+")</a></span> of</td>"                  
            else:
                tablecontents+="<td class=\"property\">Is <span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+str(tup[1])+"\">"+str(tup[1][tup[1].rfind('/')+1:])+"</a></span> of</td>"
        if len(tup)>0:
            if "http" in tup[0]:
                if baseurl in tup[0]:
                    rellink=str(tup[0]).replace(baseurl,"")
                    for i in range(0,checkdepth):
                        rellink="../"+rellink
                    rellink+="/index.html"
                    label=str(tup[0][tup[0].rfind('/')+1:])
                    #print(str(subject)+",http://www.w3.org/2000/01/rdf-schema#label")
                    for obj in graph.objects(tup[0],URIRef("http://www.w3.org/2000/01/rdf-schema#label")):
                        label=str(obj)
                        #print(obj)
                    tablecontents+="<td class=\"wrapword\"><a href=\""+rellink+"\">"+label+"</a></td>"
                else:
                    res=replaceNameSpacesInLabel(tup[0])
                    if res!=None:
                        tablecontents+="<td class=\"wrapword\"><a target=\"_blank\" href=\""+str(tup[0])+"\">"+str(tup[0][tup[0].rfind('/')+1:])+" ("+res["uri"]+")</a></td>"                  
                    else:
                        tablecontents+="<td class=\"wrapword\"><a target=\"_blank\" href=\""+str(tup[0])+"\">"+str(tup[0][tup[0].rfind('/')+1:])+"</a></td>"
            else:
                if not isinstance(tup[0], URIRef) and tup[0].datatype!=None:
                    tablecontents+="<td class=\"wrapword\">"+str(tup[0])+" <small>(<a style=\"color: #666;\" target=\"_blank\" href=\""+str(tup[0].datatype)+"\">"+str(tup[0].datatype[tup[0].datatype.rfind('/')+1:])+"</a>)</small></td>"
                else:
                    tablecontents+="<td class=\"wrapword\">"+str(tup[0])+"</td>"
        else:
            tablecontents+="<td class=\"wrapword\"></td>"
        tablecontents+="</tr>"
        isodd=not isodd
    with open(savepath+"/index.html", 'w', encoding='utf-8') as f:
        rellink=searchfilename
        for i in range(0,checkdepth):
            rellink="../"+rellink
        rellink2=classtreename
        for i in range(0,checkdepth):
            rellink2="../"+rellink2
        if foundlabel!="":
            f.write(htmltemplate.replace("{{prefixpath}}",prefixnamespace).replace("{{title}}","<a href=\""+str(subject)+"\">"+str(foundlabel)+"</a>").replace("{{baseurl}}","\""+baseurl+"\"").replace("{{tablecontent}}",tablecontents).replace("{{description}}","").replace("{{scriptfolderpath}}",rellink).replace("{{classtreefolderpath}}",rellink2))
        else:
            f.write(htmltemplate.replace("{{prefixpath}}",prefixnamespace).replace("{{title}}","<a href=\""+str(subject)+"\">"+str(subject[subject.rfind("/")+1:])+"</a>").replace("{{baseurl}}","\""+baseurl+"\"").replace("{{tablecontent}}",tablecontents).replace("{{description}}","").replace("{{scriptfolderpath}}",rellink).replace("{{classtreefolderpath}}",rellink2))
        f.close()

with open('signlist/prefixes.json', encoding="utf-8") as f:
    prefixes = json.load(f)
    
prefixnamespace="http://purl.org/cuneiform/"
outpath="signlist_htmls/"
if len(sys.argv)<=1:
    print("No TTL file to process has been given as a parameter")
    exit()
if len(sys.argv)>1:
    filepath=sys.argv[1]
if len(sys.argv)>2:
    outpath=sys.argv[2]
if len(sys.argv)>3:
    prefixnamespace=sys.argv[3]
corpusid=filepath[filepath.rfind('/')+1:filepath.rfind('.')]
namespaceshort="cuneisignlist"
if not os.path.isdir(outpath):
    os.mkdir(outpath)
labeltouri={}
uritolabel={}
g = Graph()
g.parse(filepath)
prefixnamespace="http://purl.org/cuneiform/signlist/"
subjectstorender=set()
for sub in g.subjects():
    if prefixnamespace in sub:
        subjectstorender.add(sub)
        for obj in g.objects(sub,URIRef("http://www.w3.org/2000/01/rdf-schema#label")):
            labeltouri[str(obj)]=str(sub)
            uritolabel[str(sub)]=str(obj)
with open(outpath+corpusid+'_search.js', 'w', encoding='utf-8') as f:
    f.write("var search="+json.dumps(labeltouri,indent=2))
    f.close()
with open(outpath+corpusid+"_classtree.js", 'w', encoding='utf-8') as f:
    f.write(getClassTree(g,uritolabel))
    f.close()
pathmap={}
paths={}
subtorenderlen=len(subjectstorender)
subtorencounter=0
for subj in subjectstorender:
    path=subj.replace(prefixnamespace,"")
    try:
        if "/" in path:
            addpath=""
            for pathelem in path.split("/"):
                addpath+=pathelem+"/"
                if not os.path.isdir(outpath+addpath):
                    os.mkdir(outpath+addpath)
            if outpath+path[0:path.rfind('/')]+"/" not in paths:
                paths[outpath+path[0:path.rfind('/')]+"/"]=[]
            paths[outpath+path[0:path.rfind('/')]+"/"].append(addpath[0:addpath.rfind('/')])
        else:
            if not os.path.isdir(outpath+path):
                 os.mkdir(outpath+path)
            if outpath not in paths:
                paths[outpath]=[]
            paths[outpath].append(path+"/index.html")
        createHTML(outpath+path,g.predicate_objects(subj),subj,prefixnamespace,g.subject_predicates(subj),g,str(corpusid)+"_search.js",str(corpusid)+"_classtree.js")  
        subtorencounter+=1
        print(str(subtorencounter)+"/"+str(subtorenderlen)+" "+str(outpath+path))
    except:
        print("error")
#print(paths)
for path in paths:
    indexhtml="<html><head></head><body><h1>"+str(path)+"</h1><ul style=\"height: 100%; overflow: auto\">"
    for pathlink in paths[path]:
        indexhtml+="<li><a href=\""+str(pathlink)+"\">"+str(pathlink[pathlink.rfind('/')+1:])+"</a></li>"
    indexhtml+="</ul></body></html>"
    print(path)
    with open(path+"index.html", 'w', encoding='utf-8') as f:
        f.write(indexhtml)
        f.close()
g.serialize(destination=corpusid+'.ttl')
