import json
import os
import rdflib
from rdflib import Graph
from rdflib import URIRef

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
  var baseurl="{{baseurl}}"
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

function rewriteLink(thelink){
    if(thelink==null){
        rest=search[document.getElementById('search').value].replace(baseurl,"")
    }else{
        rest=thelink.replace(baseurl,"")
    }
    count=rest.split("/").length
    counter=0
    while(counter<count){
        rest="../"+rest
        counter+=1
    }
    rest+="/index.html"
    return rest
}

function followLink(thelink=null){
    rest=rewriteLink(thelink) 
    location.href=rest
}

function setupJSTree(){
    console.log("setupJSTree")
    tree["contextmenu"]={}
    tree["core"]["check_callback"]=true
    tree["contextmenu"]["items"]=function (node) {
        return {
            "lookupdefinition": {
                "separator_before": false,
                "separator_after": false,
                "label": "Lookup definition",
                "icon": baseurl+"static/icons/classlink.png",
                "action": function (obj) {
                    newlink=rewriteLink(node.id) 
                    console.log(newlink)
                    var win = window.open(newlink, '_blank');
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
            followLink(data)
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
        <h1 id="title">{{title}}</h1></div><div class="page-resource-uri"><a href="{{baseurl}}">{{baseurl}}</a> <b>powered by Static Pubby</b></div>
      </div><div id="rdficon"><span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span></div> <div class="search">
    <div class="ui-widget">Search: <input id="search" size="50"><button id="gotosearch" onclick="followLink()">Go</button></div>
</div><div class="container-fluid"><div class="row-fluid" id="main-wrapper"><table border=1 width=100% class=description><tr><th>Property</th><th>Value</th></tr>{{tablecontent}}</table><div id="footer"><div class="container-fluid"></div></div></body></html>"""




jtfcontext={
	  "cunei": "http://www.purl.org/cuneiform/",
      "graphemon": "http://www.purl.org/graphemon/",
      "cuneisignlist": "http://www.purl.org/cuneiform/signlist/",
      "cuneidict": "http://www.purl.org/cuneiform/dict/",
	  "cidoc": "http://www.cidoc-crm.org/cidoc-crm/",
      "lemon": "http://lemon-model.net/lemon#",
      "rdfs":"http://www.w3.org/2000/01/rdf-schema#",
	  "Collection": "cunei:CuneiformArtifactCollection",
	  "tablet": "cunei:Tablet",
	  "Cone": "cunei:Cone",
	  "Bulla": "cunei:Bulla",
	  "Brick": "cunei:Brick",
	  "Block": "cunei:Block",
	  "Barrel": "cunei:Barrel",
      "children": "cunei:contains",
	  "Cylinder": "cunei:Cylinder",
	  "Envelope": "cunei:Envelope",
      "label": "rdfs:label",
	  "Tag": "cunei:Tag",
	  "sequence":"cunei:Sequence",
      "reading":"graphemon:hasGraphemeReading",
      "grapheme": "graphemon:grapheme",
  	  "short":"cunei:ShortSequence",
      "sense":"lemon:sense",
      "form":"lemon:form",
      "lineNumber":"cunei:lineNumber",
	  "TabletSide":"cunei:TabletSide",
	  "bottom":"cunei:BottomSide",
	  "top":"cunei:TopSide",
	  "left":"cunei:LeftSide",
	  "right":"cunei:RightSide",
	  "obverse":"cunei:ObverseSide",
	  "reverse":"cunei:ReverseSide",
	  "FindSpot": "cunei:FindSpot",
	  "Genre": "cunei:Genre",
	  "Transliteration": "cunei:Transliteration",
      "TransliterationCharOccurrence": "cunei:TransliterationCharOccurrence",
	  "TabletSide": "cunei:TabletSide",
	  "WritingField": "cidoc:TX4_WritingField",
	  "Column":"cunei:Column",
	  "Sentence":"cunei:Sentence",
	  "WordOccurance":"cunei:WordOccurance",
	  "Glyph":"cidoc:TX9_Glyph"
}

ttlresult=set()
ttldictresult=set()
ttlsignlistresult=set()
labeltouri={}
uritolabel={}
prefixes={}
ttlresult.add("cunei:Tablet rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdf:type owl:Class . lemon:Sense rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdfs:label \"Glyph\"@en .\n")
namespace="http://purl.org/cuneiform/"
namespacedict="http://purl.org/cuneiform/dict/"
namespacesignlist="http://purl.org/cuneiform/signlist/"
namespaceshort="cunei"
namespaceshortdict="cuneidict"
namespaceshortsignlist="cuneisignlist"
currentproject=""
currenttabletid=""
currenttableturi=""
lexicons=[]

with open("cuneify.json",encoding='utf-8') as f:
    cuneify = json.load(f)

with open("signmapping.json",encoding='utf-8') as f:
    signmapping = json.load(f)
    
with open('oraccsenses.json', encoding="utf-8") as f:
    sensesmap = json.load(f)
    
with open('prefixes.json', encoding="utf-8") as f:
    prefixes = json.load(f)

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
            return {"uri":str(prefixes["reversed"][ns])+":"+str(uri.replace(ns,"")),"ns":prefixes["reversed"][ns]}
    return None


def createHTML(savepath,predobjs,subject,baseurl,subpreds,graph,searchfilename,classtreename,uritolabel):
    tablecontents=""
    isodd=False
    savepath=savepath.replace("\\","/")
    if savepath.endswith("/"):
        checkdepth=savepath.replace(baseurl,"").count("/")-1
    else:
        checkdepth=savepath.replace(baseurl,"").count("/")
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
            label=rellink.replace("/index.html","")
            tablecontents+="<td class=\"property\"><span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+rellink+"\">"+label+"</a></span></td>"
        else:
            res=replaceNameSpacesInLabel(tup[0])
            if res!=None:
                tablecontents+="<td class=\"property\"><span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+str(tup[0])+"\">"+str(tup[0][tup[0].rfind('/')+1:])+" <span style=\"color: #666;\">("+res["uri"]+")</span></a></span></td>"                  
            else:
                tablecontents+="<td class=\"property\"><span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+str(tup[0])+"\">"+str(tup[0][tup[0].rfind('/')+1:])+"</a></span></td>"
        if str(tup[0])=="http://www.w3.org/2000/01/rdf-schema#label":
            foundlabel=tup[1]
        if len(tup)>0:
            if "http" in tup[1]:
                label=str(tup[1][tup[1].rfind('/')+1:])
                for obj in graph.objects(tup[1],URIRef("http://www.w3.org/2000/01/rdf-schema#label")):
                    label=str(obj)
                if baseurl in tup[1]:
                    rellink=str(tup[1]).replace(baseurl,"")
                    for i in range(0,checkdepth):
                        rellink="../"+rellink
                    rellink+="/index.html"
                    tablecontents+="<td class=\"wrapword\"><a href=\""+rellink+"\">"+label+" <span style=\"color: #666;\">("+namespaceshort+":"+str(str(tup[1][tup[1].rfind('/')+1:]))+")</span></a></td>"
                else:
                    res=replaceNameSpacesInLabel(tup[1])
                    if res!=None:
                        tablecontents+="<td class=\"wrapword\"><a target=\"_blank\" href=\""+str(tup[1])+"\">"+label+" <span style=\"color: #666;\">("+res["uri"]+")</span></a></td>"                  
                    else:
                        tablecontents+="<td class=\"wrapword\"><a target=\"_blank\" href=\""+str(tup[1])+"\">"+label+"</a></td>"
            else:
                if not isinstance(tup[1], URIRef) and tup[1].datatype!=None:
                    tablecontents+="<td class=\"wrapword\">"+str(tup[1])+" <small>(<a style=\"color: #666;\" target=\"_blank\" href=\""+str(tup[1].datatype)+"\">"+str(tup[1].datatype[tup[1].datatype.rfind('/')+1:])+"</a>)</small></td>"
                else:
                    tablecontents+="<td class=\"wrapword\">"+str(tup[1])+" <small>(<a style=\"color: #666;\" target=\"_blank\" href=\"http://www.w3.org/2001/XMLSchema#string\">xsd:string</a>)</small></td>"
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
            label=rellink.replace("/index.html","")
            tablecontents+="<td class=\"property\">Is <span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+rellink+"\">"+label+" <span style=\"color: #666;\">("+namespaceshort+":"+str(str(tup[1][tup[1].rfind('/')+1:]))+")</span></a></span> of</td>"
        else:
            res=replaceNameSpacesInLabel(tup[1])
            if res!=None:
                tablecontents+="<td class=\"property\">Is <span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+str(tup[1])+"\">"+str(tup[1][tup[1].rfind('/')+1:])+" <span style=\"color: #666;\">("+res["uri"]+")</span></a></span> of</td>"                  
            else:
                tablecontents+="<td class=\"property\">Is <span class=\"property-name\"><a class=\"uri\" target=\"_blank\" href=\""+str(tup[1])+"\">"+str(tup[1][tup[1].rfind('/')+1:])+"</a></span> of</td>"
        if len(tup)>0:
            if "http" in tup[0]:
                label=str(tup[0][tup[0].rfind('/')+1:])
                for obj in graph.objects(tup[0],URIRef("http://www.w3.org/2000/01/rdf-schema#label")):
                    label=str(obj)
                if baseurl in tup[0]:
                    rellink=str(tup[0]).replace(baseurl,"")
                    for i in range(0,checkdepth):
                        rellink="../"+rellink
                    rellink+="/index.html"
                    tablecontents+="<td class=\"wrapword\"><a href=\""+rellink+"\">"+label+" <span style=\"color: #666;\">("+namespaceshort+":"+str(str(tup[0][tup[0].rfind('/')+1:]))+")</span></a></td>"
                else:
                    res=replaceNameSpacesInLabel(tup[0])
                    if res!=None:
                        tablecontents+="<td class=\"wrapword\"><a target=\"_blank\" href=\""+str(tup[0])+"\">"+label+" <span style=\"color: #666;\">("+res["uri"]+")</span></a></td>"                  
                    else:
                        tablecontents+="<td class=\"wrapword\"><a target=\"_blank\" href=\""+str(tup[0])+"\">"+label+"</a></td>"
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
            f.write(htmltemplate.replace("{{prefixpath}}",prefixnamespace).replace("{{title}}","<a href=\""+str(subject)+"\">"+str(foundlabel)+"</a>").replace("{{baseurl}}",baseurl).replace("{{tablecontent}}",tablecontents).replace("{{description}}","").replace("{{scriptfolderpath}}",rellink).replace("{{classtreefolderpath}}",rellink2))
        else:
            f.write(htmltemplate.replace("{{prefixpath}}",prefixnamespace).replace("{{title}}","<a href=\""+str(subject)+"\">"+str(subject[subject.rfind("/")+1:])+"</a>").replace("{{baseurl}}",baseurl).replace("{{tablecontent}}",tablecontents).replace("{{description}}","").replace("{{scriptfolderpath}}",rellink).replace("{{classtreefolderpath}}",rellink2))
        f.close()

def replaceNonURIChars(myuri):
    res=myuri.replace("$","_").replace("{","_").replace("+","_").replace("=","_").replace("-","_").replace("^","_").replace("*","_").replace("}","_").replace("̌","_").replace(";","_").replace("̄","_").replace("ʾ","_").replace("̆","_").replace(",","_").replace("'","_").replace("/","_").replace("+","_").replace("(","_").replace(")","_").replace("|","_").replace("@","_").replace("×","_").replace("&","_").replace("+","_").replace(".","_")
    if res.startswith("_"):
        res=res[1:]
    if res.endswith("_"):
        res=res[0:-1]
    return res

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
    #print(word)
    return word


def getGraphemeReadingURI(word):
    if word in cuneify:
        unicodeword=cuneify[word]
        chars=word.split("-")
        counter=0
        for chara in unicodeword:
            if chara in signmapping:
                return {"@type":signmapping[chara]["type"],"@id":signmapping[chara]["uri"],"signname":str(signmapping[chara]["signname"]),"label":"Grapheme: "+str(signmapping[chara]["signname"])}
    return {}

def cuneifyWord(word,worduri,ttlresult):
    if word in cuneify:
        unicodeword=cuneify[word]
        chars=word.split("-")
        counter=0
        for chara in unicodeword:
            if chara in signmapping:
                ttlresult.add(""+str(worduri)+" cunei:contains <"+str(signmapping[chara]["uri"])+"> .\n")
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"> rdf:type graphemon:Grapheme . \n")
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"> rdfs:label \"Character: "+str(signmapping[chara]["signname"])+"\" . \n")
                labeltouri["Character: "+str(signmapping[chara]["signname"])]=str(signmapping[chara]["uri"])
            if counter<len(chars) and chara in signmapping:
                ttlresult.add(str(worduri)+" graphemon:hasGraphemeReading <"+str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])+"> .\n")
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"_reading_"+str(chars[counter])+"> rdfs:label \"Grapheme Reading "+str(signmapping[chara]["signname"])+": "+str(chars[counter])+"\" .\n")
                labeltouri["Grapheme Reading "+str(signmapping[chara]["signname"])+": "+str(chars[counter])]=str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"_reading_"+str(chars[counter])+"> rdf:type graphemon:GraphemeReading .\n")
                ttlresult.add("<"+replaceNonURIChars(str(signmapping[chara]["uri"]))+"> graphemon:hasGraphemeReading <"+replaceNonURIChars(str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter]))+"> .\n")
            counter+=1
        return cuneify[word]
    return ""

def handleLineElements(data,ttlresult,currentside,currentsentence,currenttabletid,jtfldrep):
    currentline=-1
    currentwordindex=0
    currentcharindex=0
    currentrelcharindex=0
    sensescounter=0
    curjtfline={"_class":"line","children":[]}
    for lineitem in data["cdl"]:
        #print(lineitem)
        #print("=======================")
        if "type" in lineitem and lineitem["type"]=="line-start":
            if "n" in lineitem:
                currentline=lineitem["n"]
            currentcharindex=0
            currentwordindex=0
            curjtfline={"_class":"line","@id":str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline)),"@type":"line","lineNumber":replaceNonURIChars(str(currentline)),"children":[]}
            if curjtfline!=None and jtfldrep!=None:
                jtfldrep["children"].append(curjtfline)
            try:
                if int(currentline.replace("'",""))>1:
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" cunei:prevLine "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+".\n")
            except Exception as e:
                print(e)
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_transliteration cunei:hasLine "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+".\n")
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" rdf:type cunei:Line .\n")
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" rdfs:label \"Line: "+str(currentline)+" ["+str(currenttabletid)+"_"+str(currentside)+"]\" .\n")
            #print(lineitem)
        if "node" in lineitem and lineitem["node"]=="l":
            #print(lineitem)
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" rdf:type cunei:Line .\n")
            if "f" in lineitem and "form" in lineitem["f"]:
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc rdf:type cunei:WordFormOccurance .\n")
                if "norm" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdf:type cunei:Word .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdf:type cunei:Word .\n")
                    labeltouri["Word: "+replaceNonURIChars(str(lineitem["f"]["norm"]))]=namespace+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word"
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:writtenRepUnicode \""+str(cuneifyWord(str(lineitem["f"]["norm"]),str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_wordformocc",ttlresult))+"\" .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:writtenRepASCII \""+str(format_ascii(str(lineitem["f"]["norm"])))+"\" .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["norm"]))+"\" .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["norm"]))+"\" .\n")
                    curseq={"_class":"sequence","@id":str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc","lemma":replaceNonURIChars(str(lineitem["f"]["norm"])),"form":replaceNonURIChars(str(lineitem["f"]["form"])),"@type":"short","children":[]}
                else:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdf:type cunei:Word.\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdf:type cunei:Word.\n")
                    labeltouri["Word: "+replaceNonURIChars(str(lineitem["f"]["form"]))]=namespace+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word"
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:writtenRepUnicode \""+str(cuneifyWord(str(lineitem["f"]["form"]),str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_wordformocc",ttlresult))+"\" .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:writtenRepASCII \""+str(format_ascii(str(lineitem["f"]["form"])))+"\" .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["form"]))+"\" .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["form"]))+"\" .\n")
                    curseq={"_class":"sequence","@id":str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc","lemma":replaceNonURIChars(str(lineitem["f"]["form"])),"form":replaceNonURIChars(str(lineitem["f"]["form"])),"@type":"short","children":[]}
                curjtfline["children"].append(curseq)
                if "pos" in lineitem["f"]:
                    curseq["pos"]=str(lineitem["f"]["pos"])
                    #<http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech>
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word cunei:partOfSpeech \""+str(lineitem["f"]["pos"])+"\".\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word cunei:partOfSpeech \""+str(lineitem["f"]["pos"])+"\".\n")
                if "sense" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:sense "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:sense "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdf:type lemon:Sense .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdf:type lemon:Sense .\n")
                    print(lineitem["f"]["sense"])
                    if str(lineitem["f"]["sense"]) in sensesmap:
                        sensescounter+=1
                        curseq["sense"]={"@id":str(sensesmap[str(lineitem["f"]["sense"])]),"@type":"lemon:Sense","label":str(lineitem["f"]["sense"])}
                        #curseq["senseLabel"]=str(lineitem["f"]["sense"])
                        ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense lemon:reference <"+str(sensesmap[str(lineitem["f"]["sense"])])+"> .\n")
                        ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense lemon:reference <"+str(sensesmap[str(lineitem["f"]["sense"])])+"> .\n")
                        ttlresult.add("<"+str(sensesmap[str(lineitem["f"]["sense"])])+"> rdfs:label \"Wikidata: "+str(lineitem["f"]["sense"])+"\".\n")
                        ttldictresult.add("<"+str(sensesmap[str(lineitem["f"]["sense"])])+"> rdfs:label \"Wikidata: "+str(lineitem["f"]["sense"])+"\".\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdfs:label \"WordSense: "+str(lineitem["f"]["sense"])+" ("+str(lineitem["f"]["form"])+")\" .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdfs:label \"WordSense: "+str(lineitem["f"]["sense"])+" ("+str(lineitem["f"]["form"])+")\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform rdf:type cunei:WordForm .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform rdf:type cunei:WordForm .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform rdfs:label \"WordForm: "+str(lineitem["f"]["form"])+"\" .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform rdfs:label \"WordForm: "+str(lineitem["f"]["form"])+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRep \""+str(lineitem["f"]["form"])+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRepUnicode \""+str(cuneifyWord(str(lineitem["f"]["form"]),str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc",ttlresult))+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRepASCII \""+str(format_ascii(str(lineitem["f"]["form"])))+"\" .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRepASCII \""+str(format_ascii(str(lineitem["f"]["form"])))+"\" .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:Line \""+str(currentline)+"\"^^xsd:string .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:locatedIn "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+".\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform cunei:isAttested "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" cunei:consistsOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc rdfs:label \" WordForm Occurrence: "+str(lineitem["f"]["form"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"])\" .\n")
                if currentwordindex>0:
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:prevWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex-1)+"_wordformocc .\n")
                if currentwordindex<=len(data["cdl"]):
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:nextWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex+1)+"_wordformocc .\n")
                currentwordindex+=1
                currentrelcharindex=0
                if "gdl" in lineitem["f"]:
                    for charr in lineitem["f"]["gdl"]:
                        if "lang" in lineitem["f"]:
                            if "akk" in lineitem["f"]["lang"]:
                                ttlresult.add("cunei:Akk rdf:type lemon:Dictionary .\n")
                                ttlresult.add("cunei:Akk lemon:language \"Akkadian\" .\n")
                                ttlresult.add("cunei:Akk lemon:entry "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word .\n")
                            if "sux" in lineitem["f"]["lang"]:
                                ttlresult.add("cunei:Sum rdf:type lemon:Dictionary .\n")
                                ttlresult.add("cunei:Sum lemon:language \"Sumerian\" .\n")
                                ttlresult.add("cunei:Sum lemon:entry "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word .\n")
                        if "v" in charr:
                            graphemeobj=getGraphemeReadingURI(str(charr["v"]))
                            if "@id" in graphemeobj:
                                curchar={"_class":"chr","@id":str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc","@type":"TransliterationCharOccurrence","reading":{"@type":"graphemon:GraphemeReading","label":"Grapheme Reading "+str(graphemeobj["signname"])+": "+str(charr["v"]),"graphemon:readingValue":str(charr["v"]),"@id":graphemeobj["@id"]+"_reading_"+str(charr["v"])},"grapheme":graphemeobj}
                            else:
                                curchar={"_class":"chr","@id":str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc","@type":"TransliterationCharOccurrence","reading":str(charr["v"]),"grapheme":getGraphemeReadingURI(str(charr["v"]))}                            
                            #,"grapheme":getGraphemeReadingURI(str(charr["v"]))
                            curseq["children"].append(curchar)
                            #ttlresult.add(str(namespaceshortsignlist)+":character_"+replaceNonURIChars(str(charr["v"]))+" rdf:type graphemon:Grapheme .\n")
                            #ttlresult.add(str(namespaceshortsignlist)+":character_"+replaceNonURIChars(str(charr["v"]))+" rdfs:label \"Character: "+str(charr["v"])+"\" .\n")
                            #ttlresult.add(str(namespaceshortsignlist)+":character_"+replaceNonURIChars(str(charr["v"]))+"_reading_"+replaceNonURIChars(str(charr["v"]))+" graphemon:occurrence "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_character .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph rdf:type cidoc:TX9_Glyph .\n")
                            if "break" in charr and "damaged" in charr["break"]:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"true\"^^xsd:boolean .\n")
                            else:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"false\"^^xsd:boolean .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> cunei:"+str(currenttabletid)+"_writtenText .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph rdfs:label \"Glyph at "+str(currenttabletid)+"["+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"])\" .\n")
                            labeltouri["Glyph at "+str(currenttabletid)+"["+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"])"]=namespace+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph"
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> "+namespaceshort+":"+currenttabletid+" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/P138_represents> "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc cunei:consistsOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc rdf:type cunei:TransliterationCharOccurrence .\n")
                            labeltouri["Char Occurrence: "+str(charr["v"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"])"]=str(namespace)+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc"
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc rdfs:label \"Char Occurrence: "+str(charr["v"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"])\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc lemon:writtenRep \""+str(charr["v"])+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc lemon:writtenRepUnicode \""+str(cuneifyWord(str(charr["v"]),str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc",ttlresult))+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc lemon:writtenRepASCII \""+str(format_ascii(str(charr["v"])))+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:partOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentwordindex)+"_wordformocc .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:positionOnTabletSide \""+str(currentcharindex)+"\"^^xsd:integer .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:Line \""+str(currentline)+"\"^^xsd:string .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:positionInWord \""+str(currentrelcharindex)+"\"^^xsd:integer .\n")
                            if currentcharindex>0:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:prevInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:prevInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_glyph .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:prev "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:prev "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex-1)+"_glyph .\n")
                            if currentrelcharindex<=len(lineitem["f"]["gdl"]):
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:next "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:next "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_glyph .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_charocc cunei:nextInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex)+"_glyph cunei:nextInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+"_"+str(currentcharindex+1)+"_glyph .\n")
                            currentcharindex+=1
                            currentrelcharindex+=1
    print("Assigned "+str(sensescounter)+" senses!")
    return ttlresult

def getCurrentSideFromJTF(jtfldrep,side):
    for item in jtfldrep["@graph"]["children"]:
        if item["@type"]==side:
            return item
    return None

def analyzeTablet(data,ttlresult):
    tablettype=""
    currentside=""
    currentsentence=1
    currentline=""
    jtfldrep={"@context":jtfcontext,"@graph":{"_class":"object", "@id":str(data["textid"]),"@type":"tablet","children":[]}}
    if data["type"]=="cdl":
        ttlresult.add(namespaceshort+":"+data["textid"]+" rdf:type cunei:Tablet .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+" rdfs:label \"Cuneiform Artifact: "+str(data["textid"])+"\" .\n")
        labeltouri["Cuneiform Artifact: "+str(data["textid"])]=str(namespace)+data["textid"]
        ttlresult.add(namespaceshort+":"+data["textid"]+"_transliteration rdf:type cunei:Transliteration .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_transliteration rdfs:label \"Transliteration: "+str(data["textid"])+"\" .\n")
        labeltouri["Transliteration: "+str(data["textid"])]=str(namespace)+data["textid"]+"_transliteration"
        ttlresult.add(namespaceshort+":"+data["textid"]+" cunei:writtenText "+namespaceshort+":"+str(data["textid"])+"_writtenText .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText rdf:type cidoc:TX1_WrittenText .\n")
        ttlresult.add(namespaceshort+":"+data["textid"]+"_writtenText rdfs:label \"Written Text on "+str(data["textid"])+"\" .\n")
        labeltouri["Written Text on "+str(data["textid"])]=str(namespace)+data["textid"]+"_writtenText"
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
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"obverse","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:ObverseSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="reverse":
                        currentside="reverse"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"reverse","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:ReverseSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="top":
                        currentside="top"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"top","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:TopSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="bottom":
                        currentside="bottom"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"bottom","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:BottomSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="right":
                        currentside="right"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"right","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:RightSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="d" and tabitem["type"]=="left":
                        currentside="left"
                        jtfldrep["@graph"]["children"].append({"_class":"surface","@id":str(currenttabletid)+"_"+str(currentside),"@type":"left","children":[]})
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+" cunei:hasSide "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdf:type cunei:LeftSide .\n")
                        ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+" rdfs:label \""+str(currenttabletid)+": "+str(currentside)+"\" .\n")
                    if tabitem["node"]=="c" and tabitem["type"]=="discourse" and "cdl" in tabitem:
                        for textitem in tabitem["cdl"]:
                            if textitem["node"]=="c" and textitem["type"]=="sentence" and "cdl" in textitem:
                                if currentsentence>1:
                                    ttlresult.add((str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence)).replace("__","_")+" cunei:prevSentence "+(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence-1)).replace("__","_")+" .\n")
                                ttlresult.add((str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_tsentence_"+str(currentsentence)).replace("__","_")+" rdf:type cunei:TransliterationSentence .\n")
                                ttlresult.add((str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence)).replace("__","_")+" rdf:type cunei:Sentence .\n")
                                ttlresult.add((str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_sentence_"+str(currentsentence)).replace("__","_")+" rdfs:label \"Sentence "+str(currentsentence)+" on "+str(currenttabletid)+"\" .\n")
                                ttlresult=handleLineElements(textitem,ttlresult,currentside,currentsentence,currenttabletid,getCurrentSideFromJTF(jtfldrep,currentside))
                                currentsentence+=1
    with open(corpusid+'_jtfs/'+str(data["textid"])+'.jtf', 'w', encoding='utf-8') as f:
        f.write(json.dumps(jtfldrep,indent=2))
        f.close()
    return ttlresult


prefixes["reversed"]["http://purl.org/cuneiform/"]="cunei"
prefixes["reversed"]["http://purl.org/cuneiform/signlist/"]="cuneisignlist"
prefixes["reversed"]["http://purl.org/graphemon/"]="graphemon"
prefixnamespace="http://purl.org/cuneiform/"
header="""@prefix xsd:<http://www.w3.org/2001/XMLSchema#> .\n@prefix graphemon:<http://purl.org/graphemon/> .\n@prefix cunei:<http://purl.org/cuneiform/> .\n@prefix cuneidict:<http://purl.org/cuneiform/dict/> .\n@prefix cuneisignlist:<http://purl.org/cuneiform/signlist/> .\n@prefix cidoc:<http://www.cidoc-crm.org/cidoc-crm/> .\n@prefix owl:<http://www.w3.org/2002/07/owl#> .\n@prefix rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:<http://www.w3.org/2000/01/rdf-schema#> .\n@prefix lemon:<http://lemon-model.net/lemon#> .\n"""
ontology="""cunei:isDamaged rdf:type owl:DatatypeProperty .\ngraphemon:hasGraphemeReading rdf:type owl:ObjectProperty .\n<http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> rdf:type owl:ObjectProperty .\ncunei:hasLine rdf:type owl:ObjectProperty.\ncidoc:P56_found_on rdf:type owl:ObjectProperty.\ncidoc:TXP10_read_by rdf:type owl:ObjectProperty.\ncidoc:TXP3_is_rendered_by rdf:type owl:ObjectProperty .\ncunei:writtenText rdf:type owl:ObjectProperty .\ncunei:hasSide rdf:type owl:ObjectProperty .\ncunei:partOf rdf:type owl:ObjectProperty .\ncunei:next rdf:type owl:ObjectProperty .\ncunei:prevLine rdf:type owl:ObjectProperty .\ncunei:nextLine rdf:type owl:ObjectProperty .\ncunei:prevSentence rdf:type owl:ObjectProperty .\nlemon:reference rdf:type owl:ObjectProperty .\ncunei:nextSentence rdf:type owl:ObjectProperty .\ncunei:nextWord rdf:type owl:ObjectProperty .\ncunei:consistsOf rdf:type owl:ObjectProperty .\ncunei:prevWord rdf:type owl:ObjectProperty .\ncunei:prevInWord rdf:type owl:ObjectProperty .\ncunei:nextInWord rdf:type owl:ObjectProperty .\ncunei:prev rdf:type owl:ObjectProperty .\nlemon:sense rdf:type owl:ObjectProperty .\nlemon:pos rdf:type owl:ObjectProperty .\nlemon:entry rdf:type owl:ObjectProperty .\nlemon:writtenRepUnicode rdf:type owl:DatatypeProperty .\n lemon:writtenRepASCII rdf:type owl:DatatypeProperty .\n<http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> rdf:type owl:ObjectProperty .<http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> rdf:type owl:ObjectProperty .\n<http://www.cidoc-crm.org/cidoc-crm/P138_represents> rdf:type owl:ObjectProperty .\n lemon:writtenRep rdf:type owl:DatatypeProperty .\ncunei:positionOnTabletSide rdf:type owl:DatatypeProperty .\ncunei:locatedIn rdf:type owl:ObjectProperty .\nlemon:form rdf:type owl:ObjectProperty .\ncunei:positionInWord rdf:type owl:DatatypeProperty .\ncunei:Line rdf:type owl:DatatypeProperty .\ncunei:isAttested rdf:type owl:ObjectProperty .\n"""

corpusid="hbtin"
subdircorp=""
if subdircorp!="":
    rootdir="cams-gkab/cams/gkab/corpusjson"
else:
    rootdir=str(corpusid)+"/corpusjson/"
outpath=str(corpusid)+"_htmls/"
print(cuneify)
print(rootdir)
print(list(os.walk(rootdir)))
if not os.path.isdir(str(corpusid)+"_jtfs"):
    os.mkdir(str(corpusid)+"_jtfs")
if not os.path.isdir(str(corpusid)+"_htmls"):
    os.mkdir(str(corpusid)+"_htmls")
counter=1
for subdir, dirs, files in os.walk(rootdir):
    print(subdir)
    print(dirs)
    print(files)
    if subdir==".":
        continue
    subdirs=str(subdir).replace(".\\","")
    for filee in files:
        try:
            with open(subdir+"/"+filee,encoding='utf-8') as f:
              data = json.load(f)
        except Exception as e:
            print(e)
        ttlresult=analyzeTablet(data,ttlresult)
print("ready")

with open(str(corpusid)+"_htmls/"+corpusid+'_search.js', 'w', encoding='utf-8') as f:
    f.write("var search="+json.dumps(labeltouri,indent=2))
    f.close()

with open(corpusid+'.ttl', 'w', encoding='utf-8') as f:
  f.write(header)
  f.write(ontology)
  f.write("".join(ttlresult))
  f.close()
with open(corpusid+'_dict.ttl', 'w', encoding='utf-8') as f:
  f.write(header)
  f.write(ontology)
  f.write("".join(ttldictresult))
  f.close()
g = Graph()
g.parse(corpusid+'.ttl')
prefixnamespace="http://purl.org/cuneiform/"
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
    #try:
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
    createHTML(outpath+path,g.predicate_objects(subj),subj,prefixnamespace,g.subject_predicates(subj),g,str(corpusid)+"_search.js",str(corpusid)+"_classtree.js",uritolabel)  
    subtorencounter+=1
    print(str(subtorencounter)+"/"+str(subtorenderlen)+" "+str(outpath+path))
    #except:
    #    print("error")
#print(paths)
for path in paths:
    indexhtml="<html><head></head><body><h1>"+str(path)+"</h1><ul style=\"height: 100%; overflow: auto\">"
    for pathlink in paths[path]:
        label=pathlink.replace("/index.html","")
        indexhtml+="<li><a href=\""+str(pathlink)+"\">"+label+"</a></li>"
    indexhtml+="</ul></body></html>"
    print(path)
    with open(path+"index.html", 'w', encoding='utf-8') as f:
        f.write(indexhtml)
        f.close()
g.serialize(destination=corpusid+'.ttl')

