var curnamespace="http://purl.org/cuneiform/"

var mappings={"PaleoCode":{"inputtype":"text","regex":"","handler":null,"paleocodage":true,"uri":curnamespace+"PaleoCode"},
"TabletSide":{"inputtype":"select","regex":"","handler":null,"uri":curnamespace+"TabletSide","data":{"selected":"selected","front":"front","back":"back","left":"left","right":"right","top":"top","bottom":"bottom"}},
"SignRotation":{"inputtype":"select","regex":"","handler":null,"uri":curnamespace+"SignRotation","data":{"0°":"0","45°":"45","90°":"90","135°":"135°","180°":"180","225°":"225","270°":"270","315°":"315","360°":"360"}},
"Transliteration":{"inputtype":"text","regex":"","handler":null,"uri":curnamespace+"Transliteration"},
"Column":{"inputtype":"number","regex":"","handler":null,"uri":curnamespace+"Column"},
"Line":{"inputtype":"number","regex":"","handler":null,"uri":curnamespace+"Line"},
"Charindex":{"inputtype":"number","regex":"","handler":null,"uri":curnamespace+"Charindex"},
"Wedgeindex":{"inputtype":"number","regex":"","handler":null,"uri":curnamespace+"Wedgeindex"},
"Wedgetype":{"inputtype":"select","regex":"","handler":null,"uri":curnamespace+"Wedgetype","data":{"undefined":"undefined","a":"Paleocode: A","b":"Paleocode: B","c":"Paleocode: C","d":"Paleocode D","e":"Paleocode E","f":"Paleocode F","w":"Paleocode: W"}},
"Wordindex":{"inputtype":"number","regex":"","handler":null,"uri":curnamespace+"Wordindex"}
}

var recogitomappings={
"Language":{"inputtype":"select","regex":"","handler":null,"uri":curnamespace+"Language","data":{"unknown":"Unknown","akk":"Akkadian","hit":"Hittite","sux":"Sumerian"}},
"Lemma (Citation Form)":{"inputtype":"text","regex":"","handler":null,"uri":curnamespace+"Lemma"},
"Reading":{"inputtype":"text","regex":"","handler":null,"uri":curnamespace+"Reading"},
"Transcription (Babylonian Reading)":{"inputtype":"text","regex":"","handler":null,"uri":curnamespace+"TranscriptionReading"},
"GuideWord":{"inputtype":"text","regex":"","handler":null,"uri":curnamespace+"MainSense"},
"DivergentSense":{"inputtype":"text","regex":"","handler":null,"uri":curnamespace+"Sense"}
}

var dataformatkey="ply_url"

var mlVocabulary=[{"label":"Broken","uri":curnamespace+"Broken"},{"label":"Character","uri":curnamespace+"Character"},{"label":"Line","uri":curnamespace+"Line"},{"label":"Image","uri":curnamespace+"Image"},{"label":"Word","uri":curnamespace+"Word"},{"label":"Seal","uri":curnamespace+"Seal"},{"label":"Phrase","uri":curnamespace+"Phrase"},{"label":"Erased","uri":curnamespace+"Erased"},{"label":"StrikeOut","uri":curnamespace+"StrikeOut"},{"label":"Wordstart","uri":curnamespace+"Wordstart"},{"label":"Wordend","uri":curnamespace+"Wordend"},{"label":"InWord","uri":curnamespace+"InWord"},{"label":"Wedge","uri":curnamespace+"Wedge"},{"label":"UnknownIfWord","uri":curnamespace+"UnknownIfWord"}]

var combined=[
{"label":"Noun (N)","uri":"http://purl.org/olia/Sumerian.owl#Noun"},
{"label":"Verb (V)","uri":"http://purl.org/olia/Sumerian.owl#Verb"},
{"label":"Adjective (AJ)","uri":"http://purl.org/olia/Sumerian.owl#Adjective"},
{"label":"Adverb (AV)","uri":"http://purl.org/olia/Sumerian.owl#Adverb"},
{"label":"Number (NU)","uri":"http://purl.org/olia/Sumerian.owl#Number"},
{"label":"Preposition (PRP)","uri":"http://purl.org/olia/Sumerian.owl#Preposition"},
{"label":"Demonstrative Pronoun (DP)","uri":"http://purl.org/olia/Sumerian.owl#DemonstrativePronoun"},
{"label":"Independent Pronoun (IP)","uri":"http://purl.org/olia/Sumerian.owl#IndependentPronoun"},
{"label":"Possessive Pronoun (IP)","uri":"http://purl.org/olia/Sumerian.owl#PossessivePronoun"},
{"label":"Interrogative Pronoun (QP)","uri":"http://purl.org/olia/Sumerian.owl#InterrogativePronoun"},
{"label":"Reflexive Pronoun (RP)","uri":"http://purl.org/olia/Sumerian.owl#ReflexivePronoun"},
{"label":"Indefinite Pronoun (XP)","uri":"http://purl.org/olia/Sumerian.owl#IndefinitePronoun"},
{"label":"Relative Pronoun (RP)","uri":"http://purl.org/olia/Sumerian.owl#RelativePronoun"},
{"label":"Determinative Pronoun (DET)","uri":"http://purl.org/olia/Sumerian.owl#DeterminativePronoun"},
{"label":"Conjunction (CNJ)","uri":"http://purl.org/olia/Sumerian.owl#Conjunction"},
{"label":"Interjection (J)","uri":"http://purl.org/olia/Sumerian.owl#Interjection"},
{"label":"Modal (MOD)","uri":"http://purl.org/olia/Sumerian.owl#ModalParticle"},
{"label":"Subjunction (SBJ)","uri":"http://purl.org/olia/Sumerian.owl#Subjunction"},
{"label":"Named Entity (NE)","uri":"http://purl.org/olia/Sumerian.owl#NamedEntity"},
{"label":"Agricultural Name (AG)","uri":"http://purl.org/olia/Sumerian.owl#AgriculturalName"},
{"label":"Celestial Name (CN)","uri":"http://purl.org/olia/Sumerian.owl#CelestialName"},
{"label":"Divine Name (DN)","uri":"http://purl.org/olia/Sumerian.owl#DivineName"},
{"label":"Ethnos Name (EN)","uri":"http://purl.org/olia/Sumerian.owl#EthnosName"},
{"label":"Field Name (FN)","uri":"http://purl.org/olia/Sumerian.owl#FieldName"},
{"label":"Geographical Name (GN)","uri":"http://purl.org/olia/Sumerian.owl#GeographicalName"},
{"label":"Line Name (LN)","uri":"http://purl.org/olia/Sumerian.owl#LineName"},
{"label":"Month Name (MN)","uri":"http://purl.org/olia/Sumerian.owl#MonthName"},
{"label":"Object Name (ON)","uri":"http://purl.org/olia/Sumerian.owl#ObjectName"},
{"label":"Person Name (PN)","uri":"http://purl.org/olia/Sumerian.owl#PersonName"},
{"label":"Quarter Name (QN)","uri":"http://purl.org/olia/Sumerian.owl#QuarterName"},
{"label":"Royal Name (RN)","uri":"http://purl.org/olia/Sumerian.owl#RoyalName"},
{"label":"Settlement Name (SN)","uri":"http://purl.org/olia/Sumerian.owl#SettlementName"},
{"label":"Temple Name (TN)","uri":"http://purl.org/olia/Sumerian.owl#TempleName"},
{"label":"Watercourse Name (WN)","uri":"http://purl.org/olia/Sumerian.owl#WatercourseName"},
{"label":"Year Name (YN)","uri":"http://purl.org/olia/Sumerian.owl#YearName"},
{"label":"plural","uri":"http://purl.org/olia/Sumerian.owl#Plural"},
{"label":"singular","uri":"http://purl.org/olia/Sumerian.owl#Singular"},
{"label":"possessive case (POSS)","uri":"http://purl.org/olia/Sumerian.owl#Possessive"},
{"label":"Broken","uri":curnamespace+"Broken"},
{"label":"Character","uri":curnamespace+"Character"},
{"label":"Line","uri":curnamespace+"Line"},
{"label":"Image","uri":curnamespace+"Image"},
{"label":"Word","uri":curnamespace+"Word"},
{"label":"Seal","uri":curnamespace+"Seal"},
{"label":"Phrase","uri":curnamespace+"Phrase"},
{"label":"Erased","uri":curnamespace+"Erased"},
{"label":"StrikeOut","uri":curnamespace+"StrikeOut"},
{"label":"Wordstart","uri":curnamespace+"Wordstart"},
{"label":"Wordend","uri":curnamespace+"Wordend"},
{"label":"InWord","uri":curnamespace+"InWord"},
{"label":"Wedge","uri":curnamespace+"Wedge"},
{"label":"UnknownIfWord","uri":curnamespace+"UnknownIfWord"}
]

var postaggingVocabulary=[
{"label":"Noun (N)","uri":"http://purl.org/olia/Sumerian.owl#Noun"},
{"label":"Verb (V)","uri":"http://purl.org/olia/Sumerian.owl#Verb"},
{"label":"Adjective (AJ)","uri":"http://purl.org/olia/Sumerian.owl#Adjective"},
{"label":"Adverb (AV)","uri":"http://purl.org/olia/Sumerian.owl#Adverb"},
{"label":"Number (NU)","uri":"http://purl.org/olia/Sumerian.owl#Number"},
{"label":"Preposition (PRP)","uri":"http://purl.org/olia/Sumerian.owl#Preposition"},
{"label":"Demonstrative Pronoun (DP)","uri":"http://purl.org/olia/Sumerian.owl#DemonstrativePronoun"},
{"label":"Independent Pronoun (IP)","uri":"http://purl.org/olia/Sumerian.owl#IndependentPronoun"},
{"label":"Possessive Pronoun (IP)","uri":"http://purl.org/olia/Sumerian.owl#PossessivePronoun"},
{"label":"Interrogative Pronoun (QP)","uri":"http://purl.org/olia/Sumerian.owl#InterrogativePronoun"},
{"label":"Reflexive Pronoun (RP)","uri":"http://purl.org/olia/Sumerian.owl#ReflexivePronoun"},
{"label":"Indefinite Pronoun (XP)","uri":"http://purl.org/olia/Sumerian.owl#IndefinitePronoun"},
{"label":"Relative Pronoun (RP)","uri":"http://purl.org/olia/Sumerian.owl#RelativePronoun"},
{"label":"Determinative Pronoun (DET)","uri":"http://purl.org/olia/Sumerian.owl#DeterminativePronoun"},
{"label":"Conjunction (CNJ)","uri":"http://purl.org/olia/Sumerian.owl#Conjunction"},
{"label":"Interjection (J)","uri":"http://purl.org/olia/Sumerian.owl#Interjection"},
{"label":"Modal (MOD)","uri":"http://purl.org/olia/Sumerian.owl#ModalParticle"},
{"label":"Subjunction (SBJ)","uri":"http://purl.org/olia/Sumerian.owl#Subjunction"},
{"label":"Named Entity (NE)","uri":"http://purl.org/olia/Sumerian.owl#NamedEntity"},
{"label":"Agricultural Name (AG)","uri":"http://purl.org/olia/Sumerian.owl#AgriculturalName"},
{"label":"Celestial Name (CN)","uri":"http://purl.org/olia/Sumerian.owl#CelestialName"},
{"label":"Divine Name (DN)","uri":"http://purl.org/olia/Sumerian.owl#DivineName"},
{"label":"Ethnos Name (EN)","uri":"http://purl.org/olia/Sumerian.owl#EthnosName"},
{"label":"Field Name (FN)","uri":"http://purl.org/olia/Sumerian.owl#FieldName"},
{"label":"Geographical Name (GN)","uri":"http://purl.org/olia/Sumerian.owl#GeographicalName"},
{"label":"Line Name (LN)","uri":"http://purl.org/olia/Sumerian.owl#LineName"},
{"label":"Month Name (MN)","uri":"http://purl.org/olia/Sumerian.owl#MonthName"},
{"label":"Object Name (ON)","uri":"http://purl.org/olia/Sumerian.owl#ObjectName"},
{"label":"Person Name (PN)","uri":"http://purl.org/olia/Sumerian.owl#PersonName"},
{"label":"Quarter Name (QN)","uri":"http://purl.org/olia/Sumerian.owl#QuarterName"},
{"label":"Royal Name (RN)","uri":"http://purl.org/olia/Sumerian.owl#RoyalName"},
{"label":"Settlement Name (SN)","uri":"http://purl.org/olia/Sumerian.owl#SettlementName"},
{"label":"Temple Name (TN)","uri":"http://purl.org/olia/Sumerian.owl#TempleName"},
{"label":"Watercourse Name (WN)","uri":"http://purl.org/olia/Sumerian.owl#WatercourseName"},
{"label":"Year Name (YN)","uri":"http://purl.org/olia/Sumerian.owl#YearName"},
{"label":"plural","uri":"http://purl.org/olia/Sumerian.owl#Plural"},
{"label":"singular","uri":"http://purl.org/olia/Sumerian.owl#Singular"},
{"label":"possessive case (POSS)","uri":"http://purl.org/olia/Sumerian.owl#Possessive"}
]

var gitlabhost="https://fcgl.gitlab.io/"
var repositoryid=28015
var branch="master"
var readOnlyVar=false
const gitlabtoken=""
const { Gitlab } = gitbeaker;
const api = new Gitlab({
  token: gitlabtoken,
  host: 'https://fcgl.gitlab.io/',
  version: 4
});


var threedimageToIndex={};
var indexedcharids=[]
var indexedhiglighted=false
var indexedchars=0
var presenter = null;

var annos3d={};

async function saveTransliteration(translitid,translits){
    var users= await api.RepositoryFiles.edit(repositoryid, "js/data/transliterations.js",branch,"var transliterations="+JSON.stringify(translits,null,2),"Committed Transliteration "+translitid)
}

function annotationFileFromImageName(curname){
    curnameparts=curname.split("_")
    tabletname=curnameparts[0]+"_"+curnameparts[1]
    tabletside=curnameparts[curnameparts.length-1]
    return tabletname+"_"+tabletside
}

async function getAnnotation(path){
  var users= await api.RepositoryFiles.show(repositoryid, "result/"+annotationFileFromImageName($('#imageside option:selected').text())+".json",branch);
  console.log(users)
  console.log(atob(users["content"]))
  return JSON.parse(atob(users["content"]))
}

async function getTextAnnotation(path){
  var users= await api.RepositoryFiles.show(repositoryid, "result/"+annotationFileFromImageName($('#images option:selected').val())+".json",branch);
  console.log(users)
  console.log(atob(users["content"]))
  return JSON.parse(atob(users["content"]))
}

async function commitData(){
    console.log(curanno)
    try{
    var users= await api.RepositoryFiles.create(repositoryid, "result/"+annotationFileFromImageName($('#imageside option:selected').text())+".json",branch,JSON.stringify(curanno,null,2),"Committed "+$('#imageside option:selected').text()+".json")
      $('#saveannotationsmessage').html("Annotations for "+$('#imageside option:selected').text()+" have been saved in Git!")
    }catch (e) {
    var users= await api.RepositoryFiles.edit(repositoryid, "result/"+annotationFileFromImageName($('#imageside option:selected').text())+".json",branch,JSON.stringify(curanno,null,2),"Committed "+$('#imageside option:selected').text()+".json")
      $('#saveannotationsmessage').html("Annotations for "+$('#imageside option:selected').text()+" have been saved in Git!")
    }
    reinit(null) 
    console.log(users)
}

async function commitTextAnnotationData(){
    try{
    var users= await api.RepositoryFiles.create(repositoryid, "resulttextanno/"+annotationFileFromImageName($('#images option:selected').val())+".json",branch,JSON.stringify(curtextanno,null,2),"Committed "+$('#images option:selected').val()+".json")
      $('#saveannotationsmessage').html("Text Annotations for "+$('#images option:selected').val()+" have been saved in Git!")
    }catch (e) {
    var users= await api.RepositoryFiles.edit(repositoryid, "resulttextanno/"+annotationFileFromImageName($('#images option:selected').val())+".json",branch,JSON.stringify(curtextanno,null,2),"Committed "+$('#images option:selected').val()+".json")
      $('#saveannotationsmessage').html("Text Annotations for "+$('#images option:selected').val()+" have been saved in Git!")
    } 
    console.log(users)
}

async function commit3DBBOX(){
  var users= await api.RepositoryFiles.edit(repositoryid, "js/hs23D.js",branch,"var hs23D="+JSON.stringify(hs23D,null,2),"Committed js/hs23D.js")
}

async function saveApprovals(){
    tabletnumber=$('#images option:selected').val()
    side=$('#imageside option:selected').text().replace(".png","").replace(tabletnumber+"_","")
    if(!(tabletnumber in approvals)){
      approvals[tabletnumber]={}
    }
    if(!(side in approvals[tabletnumber])){
      approvals[tabletnumber][side]={}
    }
    approvals[tabletnumber][side]["tags"]=$('#tags').val()
    approvals[tabletnumber][side]["positioningcorrect"]=$('#positioningcorrect').val()
    approvals[tabletnumber][side]["transliterationcorrect"]=$('#transliterationcorrect').val()
    approvals[tabletnumber][side]["indexingcorrect"]=$('#indexingcorrect').val()
    approvals[tabletnumber][side]["annotationscorrect"]=$('#annotationscorrect').val()
    approvals[tabletnumber][side]["annotationscomplete"]=$('#annotationscomplete').val()
    var users= await api.RepositoryFiles.edit(repositoryid, "js/approvals.js",branch,"var approvals="+JSON.stringify(approvals,null,2),"Committed approvals for "+$('#imageside option:selected').text()+".json");
}
