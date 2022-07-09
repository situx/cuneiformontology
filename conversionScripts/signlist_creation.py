# coding=utf8
import csv
import rdflib
import json
import re
import string
from rdflib import Graph

rdfset=set()

sensesmap={
    "life":"http://www.wikidata.org/entity/Q3",
    "district":"http://www.wikidata.org/entity/Q149621",
    "flesh":"http://www.wikidata.org/entity/Q13119823",
    "throat":"http://www.wikidata.org/entity/Q16364",
    "country":"http://www.wikidata.org/entity/Q6256",
    "barley":"http://www.wikidata.org/entity/Q61665121",
    "raisin":"http://www.wikidata.org/entity/Q13186",
    "wing":"http://www.wikidata.org/entity/Q161358",
    "branch":"http://www.wikidata.org/entity/Q2923673",
    "water":"http://www.wikidata.org/entity/Q283",
    "fire":"http://www.wikidata.org/entity/Q3196",
    "green":"http://www.wikidata.org/entity/Q3133",
    "yellow":"http://www.wikidata.org/entity/Q943",
    "religious ceremony":"http://www.wikidata.org/entity/Q13537604",
    "foundation":"http://www.wikidata.org/entity/Q191360",
    "base":"http://www.wikidata.org/entity/Q82383",
    "garment":"http://www.wikidata.org/entity/Q11460",
    "roof":"http://www.wikidata.org/entity/Q83180",
    "prince":"http://www.wikidata.org/entity/Q2747456",
    "morning":"http://www.wikidata.org/entity/Q7722",
    "breath":"http://www.wikidata.org/entity/Q13428325",
    "hand":"http://www.wikidata.org/entity/Q33767",
    "tendon":"http://www.wikidata.org/entity/Q232358",
    "horn":"http://www.wikidata.org/entity/Q82025",
    "egg":"http://www.wikidata.org/entity/Q93189",
    "tail":"http://www.wikidata.org/entity/Q60960",
    "road":"http://www.wikidata.org/entity/Q34442",
    "caravan":"http://www.wikidata.org/entity/Q203494",
    "clay":"http://www.wikidata.org/entity/Q42302",
    "night":"http://www.wikidata.org/entity/Q575",
    "year":"http://www.wikidata.org/entity/Q577",
    "snake":"http://www.wikidata.org/entity/Q2102",
    "king":"http://www.wikidata.org/entity/Q116",
    "sand":"http://www.wikidata.org/entity/Q34679",
    "dirt":"http://www.wikidata.org/entity/Q21152267",
    "garden":"http://www.wikidata.org/entity/Q1107656",
    "scepter":"http://www.wikidata.org/entity/Q152065",
    "dust":"http://www.wikidata.org/entity/Q165632",
    "ox":"http://www.wikidata.org/entity/Q473194",
    "steppe":"http://www.wikidata.org/entity/Q123991",
    "net":"http://www.wikidata.org/entity/Q986291",
    "shrine":"http://www.wikidata.org/entity/Q697295",
    "sky":"http://www.wikidata.org/entity/Q527",
    "heaven":"http://www.wikidata.org/entity/Q4489450",
    "slave":"http://www.wikidata.org/entity/Q12773225",
    "servant":"http://www.wikidata.org/entity/Q54128",
    "lake":"http://www.wikidata.org/entity/Q23397",
    "leatherworker":"http://www.wikidata.org/entity/Q16402902",
    "tongue":"http://www.wikidata.org/entity/Q9614",
    "linen":"http://www.wikidata.org/entity/Q1426327",
    "milk":"http://www.wikidata.org/entity/Q8495",
    "thread":"http://www.wikidata.org/entity/Q1391831",
    "festival":"http://www.wikidata.org/entity/Q132241",
    "spouse":"http://www.wikidata.org/entity/Q1196129",
    "sea":"http://www.wikidata.org/entity/Q165",
    "song":"http://www.wikidata.org/entity/Q7366",
    "one":"http://www.wikidata.org/entity/Q199",
    "beer":"http://www.wikidata.org/entity/Q44",
    "reed":"http://www.wikidata.org/entity/Q2734060",
    "insult":"http://www.wikidata.org/entity/Q571571",
    "place":"http://www.wikidata.org/entity/Q98929991",
    "netherworld":"http://www.wikidata.org/entity/Q154365",
    "hailstone":"http://www.wikidata.org/entity/Q37602",
    "orchard":"http://www.wikidata.org/entity/Q236371",
    "owner":"http://www.wikidata.org/entity/Q16869121",
    "grain in general":"http://www.wikidata.org/entity/Q2995529",
    "young man":"http://www.wikidata.org/entity/Q1716875",
    "thigh":"http://www.wikidata.org/entity/Q129757",
    "onion":"http://www.wikidata.org/entity/Q3406628",
    "quay":"http://www.wikidata.org/entity/Q828909",
    "man":"http://www.wikidata.org/entity/Q8441",
    "tooth":"http://www.wikidata.org/entity/Q553",
    "month":"http://www.wikidata.org/entity/Q5151",
    "fear":"http://www.wikidata.org/entity/Q44619",
    "fruit":"http://www.wikidata.org/entity/Q3314483",
    "levee":"http://www.wikidata.org/entity/Q105190",
    "judgement":"http://www.wikidata.org/entity/Q12621536",
    "hoe":"http://www.wikidata.org/entity/Q131154",
    "vegetable":"http://www.wikidata.org/entity/Q11004",
    "skin":"http://www.wikidata.org/entity/Q1074",
    "fat":"http://www.wikidata.org/entity/Q127980",
    "palm tree":"http://www.wikidata.org/entity/Q14080",
    "native land":"http://www.wikidata.org/entity/Q16513600",
    "cut of meat":"http://www.wikidata.org/entity/Q6418247",
    "praise":"http://www.wikidata.org/entity/Q1208425",
    "pigeon":"http://www.wikidata.org/entity/Q2984138",
    "sinew":"http://www.wikidata.org/entity/Q64309527",
    "seed":"http://www.wikidata.org/entity/Q4076",
    "black":"http://www.wikidata.org/entity/Q23445",
    "wind":"http://www.wikidata.org/entity/Q8094",
    "box":"http://www.wikidata.org/entity/Q987767",
    "crown":"http://www.wikidata.org/entity/Q170984",
    "mother":"http://www.wikidata.org/entity/Q7560",
    "donkey":"http://www.wikidata.org/entity/Q3537778",
    "bear":"http://www.wikidata.org/entity/Q30090244",
    "plow":"http://www.wikidata.org/entity/Q11464",
    "portion":"http://www.wikidata.org/entity/Q15989253",
    "blood":"http://www.wikidata.org/entity/Q7873",
    "sack":"http://www.wikidata.org/entity/Q1323314",
    "throne":"http://www.wikidata.org/entity/Q189233",
    "knowledge":"http://www.wikidata.org/entity/Q9081",
    "surplus":"http://www.wikidata.org/entity/Q268617",
    "temple":"http://www.wikidata.org/entity/Q44539",
    "plain":"http://www.wikidata.org/entity/Q160091",
    "cedar":"http://www.wikidata.org/entity/Q128550",
    "breast":"http://www.wikidata.org/entity/Q9103",
    "nail":"http://www.wikidata.org/entity/Q37077",
    "river bank":"http://www.wikidata.org/entity/Q2897058",
    "fish":"http://www.wikidata.org/entity/Q152",
    "eye":"http://www.wikidata.org/entity/Q7364",
    "nose":"http://www.wikidata.org/entity/Q7363",
    "tooth":"http://www.wikidata.org/entity/Q553",
    "courtyard":"http://www.wikidata.org/entity/Q309250",
    "buttocks":"http://www.wikidata.org/entity/Q42165",
    "weapon":"http://www.wikidata.org/entity/Q728",
    "honey":"http://www.wikidata.org/entity/Q10987",
    "gentleman":"http://www.wikidata.org/entity/Q749212",
    "corpse":"http://www.wikidata.org/entity/Q48422",
    "quarrel":"http://www.wikidata.org/entity/Q891691",
    "female":"http://www.wikidata.org/entity/Q6581072",
    "face":"http://www.wikidata.org/entity/Q37017",
    "musician":"http://www.wikidata.org/entity/Q639669",
    "fox":"http://www.wikidata.org/entity/Q8331",
    "courage":"http://www.wikidata.org/entity/Q208160",
    "mace":"http://www.wikidata.org/entity/Q272990",
    "tambourine":"http://www.wikidata.org/entity/Q193666",
    "drum":"http://www.wikidata.org/entity/Q11404",
    "reed mat":"http://www.wikidata.org/entity/Q7306720",
    "mouth":"http://www.wikidata.org/entity/Q9635",
    "northwind":"http://www.wikidata.org/entity/Q21332443",
    "sheep":"http://www.wikidata.org/entity/Q7368",
    "envoy":"http://www.wikidata.org/entity/Q11051391",
    "liar":"http://www.wikidata.org/entity/Q62122629",
    "singer":"http://www.wikidata.org/entity/Q177220",
    "boat":"http://www.wikidata.org/entity/Q35872",
    "kid":"http://www.wikidata.org/entity/Q7569",
    "battle":"http://www.wikidata.org/entity/Q178561",
    "herald":"http://www.wikidata.org/entity/Q696819",
    "star":"http://www.wikidata.org/entity/Q523",
    "woman":"http://www.wikidata.org/entity/Q467",
    "stone":"http://www.wikidata.org/entity/Q22731",
    "thirst":"http://www.wikidata.org/entity/Q474187",
    "carpenter":"http://www.wikidata.org/entity/Q154549",
    "sister":"http://www.wikidata.org/entity/Q595094",
    "pouch":"http://www.wikidata.org/entity/Q29480005",
    "lion":"http://www.wikidata.org/entity/Q140",
    "head":"http://www.wikidata.org/entity/Q23640",
    "gate":"http://www.wikidata.org/entity/Q53060",
    "dust":"http://www.wikidata.org/entity/Q165632",
    "individual":"http://www.wikidata.org/entity/Q795052",
    "brick":"http://www.wikidata.org/entity/Q40089",
    "brickwork":"http://www.wikidata.org/entity/Q1131313",
    "wool":"http://www.wikidata.org/entity/Q42329",
    "lamb":"http://www.wikidata.org/entity/Q4575936",
    "beard":"http://www.wikidata.org/entity/Q42804",
    "skin":"http://www.wikidata.org/entity/Q1074",
    "body":"http://www.wikidata.org/entity/Q170494",
    "hide":"http://www.wikidata.org/entity/Q3291230",
    "forest":"http://www.wikidata.org/entity/Q4421",
    "well":"http://www.wikidata.org/entity/Q43483",
    "son":"http://www.wikidata.org/entity/Q177232",
    "food":"http://www.wikidata.org/entity/Q2095",
    "plant":"http://www.wikidata.org/entity/Q756",
    "ewe":"http://www.wikidata.org/entity/Q7368",
    "admiration":"http://www.wikidata.org/entity/Q2824657",
    "day":"http://www.wikidata.org/entity/Q573",
    "storm":"http://www.wikidata.org/entity/Q81054",
    "weather":"http://www.wikidata.org/entity/Q11663",
    "pleasure":"http://www.wikidata.org/entity/Q208195",
    "satisfaction":"http://www.wikidata.org/entity/Q12050977",
    "town":"http://www.wikidata.org/entity/Q3957",
    "copper":"http://www.wikidata.org/entity/Q753",
    "male":"http://www.wikidata.org/entity/Q6581097",
    "border":"http://www.wikidata.org/entity/Q133346",
    "thigh":"http://www.wikidata.org/entity/Q129757",
    "advice":"http://www.wikidata.org/entity/Q2132873",
    "magazine":"http://www.wikidata.org/entity/Q148958",
    "wine":"http://www.wikidata.org/entity/Q282",
    "dagger":"http://www.wikidata.org/entity/Q182780",
    "knife":"http://www.wikidata.org/entity/Q324892",
    "foot":"http://www.wikidata.org/entity/Q15807",
    "path":"http://www.wikidata.org/entity/Q5004679",
    "oar":"http://www.wikidata.org/entity/Q2003749",
    "tree":"http://www.wikidata.org/entity/Q10884",
    "heart":"http://www.wikidata.org/entity/Q1072",
    "knee":"http://www.wikidata.org/entity/Q37425",
    "bracelet":"http://www.wikidata.org/entity/Q201664",
    "silo":"http://www.wikidata.org/entity/Q213643",
    "flax":"http://www.wikidata.org/entity/Q47089651",
    "hunger":"http://www.wikidata.org/entity/Q165947",
    "neck":"http://www.wikidata.org/entity/Q9633",
    "virgin":"http://www.wikidata.org/entity/Q32859833",
    "tablet":"http://www.wikidata.org/entity/Q16744570",
    "farmer":"http://www.wikidata.org/entity/Q131512",
    "rope":"http://www.wikidata.org/entity/Q31029",
    "flour":"http://www.wikidata.org/entity/Q36465",
    "deer":"http://www.wikidata.org/entity/Q23390",
    "calf":"https://www.wikidata.org/wiki/Q2935",
    "brother":"http://www.wikidata.org/entity/Q10861465",  
    "1":"http://www.wikidata.org/entity/Q199",
    "2":"http://www.wikidata.org/entity/Q200",
    "3":"http://www.wikidata.org/entity/Q201",
    "4":"http://www.wikidata.org/entity/Q202",
    "5":"http://www.wikidata.org/entity/Q203",
    "6":"http://www.wikidata.org/entity/Q23488",
    "7":"http://www.wikidata.org/entity/Q23350",
    "8":"http://www.wikidata.org/entity/Q23355",
    "9":"http://www.wikidata.org/entity/Q19108",
    "10":"http://www.wikidata.org/entity/Q23806",
    "11":"http://www.wikidata.org/entity/Q37136",
    "12":"http://www.wikidata.org/entity/Q36977",
    "13":"http://www.wikidata.org/entity/Q37141",
    "14":"http://www.wikidata.org/entity/Q38582",
    "15":"http://www.wikidata.org/entity/Q38701",
    "16":"http://www.wikidata.org/entity/Q40254",
    "17":"http://www.wikidata.org/entity/Q40118",
    "18":"http://www.wikidata.org/entity/Q40118",
    "19":"http://www.wikidata.org/entity/Q39850",
    "20":"http://www.wikidata.org/entity/Q40292",
    "020":"http://www.wikidata.org/entity/Q40292",
    "21":"http://www.wikidata.org/entity/Q712477",
    "22":"http://www.wikidata.org/entity/Q712488",
    "23":"http://www.wikidata.org/entity/Q48240",
    "24":"http://www.wikidata.org/entity/Q79988",
    "25":"http://www.wikidata.org/entity/Q79986",
    "26":"http://www.wikidata.org/entity/Q83264",
    "27":"http://www.wikidata.org/entity/Q433353",
    "28":"http://www.wikidata.org/entity/Q587465",
    "29":"http://www.wikidata.org/entity/Q543929",
    "30":"http://www.wikidata.org/entity/Q42817",
    "31":"http://www.wikidata.org/entity/Q712692",
    "32":"http://www.wikidata.org/entity/Q712701",
    "33":"http://www.wikidata.org/entity/Q712661",
    "34":"http://www.wikidata.org/entity/Q712639",
    "35":"http://www.wikidata.org/entity/Q434712",
    "36":"http://www.wikidata.org/entity/Q712794",
    "37":"http://www.wikidata.org/entity/Q712770",
    "38":"http://www.wikidata.org/entity/Q600809",
    "39":"http://www.wikidata.org/entity/Q712782",
    "40":"http://www.wikidata.org/entity/Q42317",
    "41":"http://www.wikidata.org/entity/Q71262",
    "42":"http://www.wikidata.org/entity/Q812996",
    "43":"http://www.wikidata.org/entity/Q282113",
    "44":"http://www.wikidata.org/entity/Q712706",
    "45":"http://www.wikidata.org/entity/Q627861",
    "46":"http://www.wikidata.org/entity/Q712744",
    "47":"http://www.wikidata.org/entity/Q712687",
    "48":"http://www.wikidata.org/entity/Q712764",
    "49":"http://www.wikidata.org/entity/Q712758",
    "50":"http://www.wikidata.org/entity/Q712519",
    "51":"http://www.wikidata.org/entity/Q895860",
    "52":"http://www.wikidata.org/entity/Q712995",
    "53":"http://www.wikidata.org/entity/Q712808",
    "54":"http://www.wikidata.org/entity/Q290669",
    "55":"http://www.wikidata.org/entity/Q686819",
    "56":"http://www.wikidata.org/entity/Q522994",
    "57":"http://www.wikidata.org/entity/Q713133",
    "58":"http://www.wikidata.org/entity/Q241673",
    "59":"http://www.wikidata.org/entity/Q593011",
    "60":"http://www.wikidata.org/entity/Q79998",
    "61":"http://www.wikidata.org/entity/Q774689",
    "62":"http://www.wikidata.org/entity/Q593966",
    "63":"http://www.wikidata.org/entity/Q712986",
    "64":"http://www.wikidata.org/entity/Q435660",
    "65":"http://www.wikidata.org/entity/Q645260",
    "66":"http://www.wikidata.org/entity/Q712966",
    "67":"http://www.wikidata.org/entity/Q713157",
    "68":"http://www.wikidata.org/entity/Q661982",
    "69":"http://www.wikidata.org/entity/Q713048",
    "070":"http://www.wikidata.org/entity/Q712514",
    "70":"http://www.wikidata.org/entity/Q712514",
    "71":"http://www.wikidata.org/entity/Q586651",
    "72":"http://www.wikidata.org/entity/Q243817",
    "73":"http://www.wikidata.org/entity/Q713122",
    "74":"http://www.wikidata.org/entity/Q713143",
    "75":"http://www.wikidata.org/entity/Q601660",
    "76":"http://www.wikidata.org/entity/Q543190",
    "77":"http://www.wikidata.org/entity/Q713167",
    "78":"http://www.wikidata.org/entity/Q713229",
    "79":"http://www.wikidata.org/entity/Q713148",
    "80":"http://www.wikidata.org/entity/Q712467",
    "81":"http://www.wikidata.org/entity/Q712876",
    "82":"http://www.wikidata.org/entity/Q713217",
    "83":"http://www.wikidata.org/entity/Q713181",
    "84":"http://www.wikidata.org/entity/Q279264",
    "85":"http://www.wikidata.org/entity/Q427730",
    "86":"http://www.wikidata.org/entity/Q713221",
    "87":"http://www.wikidata.org/entity/Q285042",
    "88":"http://www.wikidata.org/entity/Q341102",
    "89":"http://www.wikidata.org/entity/Q535061",
    "90":"http://www.wikidata.org/entity/Q239346",
    "91":"http://www.wikidata.org/entity/Q690992",
    "92":"http://www.wikidata.org/entity/Q277312",
    "93":"http://www.wikidata.org/entity/Q31118",
    "94":"http://www.wikidata.org/entity/Q683782",
    "95":"http://www.wikidata.org/entity/Q595170",
    "96":"http://www.wikidata.org/entity/Q280167",
    "97":"http://www.wikidata.org/entity/Q673849",
    "98":"http://www.wikidata.org/entity/Q713239",
    "99":"http://www.wikidata.org/entity/Q435673",
    "100":"http://www.wikidata.org/entity/Q37413"
}

def cleanString(strr):
    retstr=strr.lower().replace("š","sz").replace("Š","SZ").replace("[","_").replace("]","_").replace("%","_").replace("{","_").replace("}","_").replace(" ","_").replace("'","_").replace("\"","").replace(",","_").replace("|","_").replace("/","_").replace("-","_").replace("+","_").replace("%","_").replace("(","_").replace(")","_").replace(".","_").replace(":","_").replace("₄","4").replace("₂","2").replace("₃","3").replace("₅","5").replace("₆","6").replace("₇","7").replace("₈","8").replace("₉","9").replace("₁","1").replace("₀","0")
    if retstr.endswith("_"):
        retstr=retstr[:-1]
    if retstr.startswith("_"):
        retstr=retstr[1:]
    return retstr

def toASCII(strr):
    return strr.replace("₄","4").replace("₂","2").replace("₃","3").replace("₅","5").replace("₇","7").replace("₆","6").replace("₈","8").replace("₉","9").replace("₁","1").replace("₀","0").replace("%","_").replace("š","sz").replace("Š","SZ")

def convertToRDF(cuneiformsigndict,nuolenna,aasigndict,rdfset):
    unicodeToURI={}
    signnameToURI={}
    sensescounter=0
    charsensecounter=0
    for entry in cuneiformsigndict:
        print(entry)
        signuri=("http://purl.org/cuneiform/signlist/character_"+cleanString(entry["signname"])).replace("__","_")
        signnameToURI[toASCII(str(entry["signname"])).replace("\"","")]=str(signuri)
        if "unicodename" in entry and len(entry["unicodename"])>1:
            rdfset.add("<"+str(signuri)+"> rdf:type graphemon:GraphemeComposition .\n ")
            rdfset.add("<"+str(signuri)+"> rdfs:label \"Character Composition: "+toASCII(str(entry["signname"])).replace("\"","")+"\" .\n ")
        else:
            rdfset.add("<"+str(signuri)+"> rdf:type graphemon:Grapheme .\n ")
            rdfset.add("<"+str(signuri)+"> rdfs:label \"Character: "+toASCII(str(entry["signname"])).replace("\"","")+"\" .\n ")
        if entry["meszl"]!="":
            rdfset.add("<"+str(signuri)+"> graphemon:meszl \""+str(entry["meszl"]).replace("\"","")+"\" .\n ")
        if entry["slha"]!="":
            rdfset.add("<"+str(signuri)+"> graphemon:slha \""+str(entry["slha"]).replace("\"","")+"\" .\n")
        if entry["hethzl"]!="":
            rdfset.add("<"+str(signuri)+"> graphemon:hethzl \""+str(entry["hethzl"]).replace("\"","")+"\" .\n ")
        if entry["abzl"]!="":
            rdfset.add("<"+str(signuri)+"> graphemon:abzl \""+str(entry["abzl"]).replace("\"","")+"\" .\n ")
        rdfset.add("<"+str(signuri)+"> graphemon:unicodeCodepoint \""+str(entry["unicode"]).replace("\"","")+"\" .\n ")
        rdfset.add("<"+str(signuri)+"> graphemon:unicodeRepresentation \""+str(entry["unicodename"]).replace("\"","")+"\" .\n ")
        unicodeToURI[entry["unicodename"]]={"uri":str(signuri),"signname":toASCII(str(entry["signname"])).replace("\"","")}
    #print(unicodeToURI)
    nuolennamatchcounter=0
    for item in nuolenna:
        if nuolenna[item] in unicodeToURI:
            cururi=unicodeToURI[nuolenna[item]]["uri"]
            cursignname=unicodeToURI[nuolenna[item]]["signname"]
            readinguri=(str(cururi)+"_reading_"+cleanString(str(item))).replace("__","_").replace("__","_")
            if readinguri[-1]=="_":
                readinguri=readinguri[0:-1]
            rdfset.add("<"+str(cururi)+"> graphemon:hasGraphemeReading <"+readinguri+"> .\n ")
            rdfset.add("<"+readinguri+"> rdf:type graphemon:GraphemeReading .\n ")
            rdfset.add("<"+readinguri+"> rdfs:label \"Grapheme Reading "+str(cursignname)+": "+toASCII(str(item)).replace("\"","")+"\" .\n ")
            rdfset.add("<"+readinguri+"> graphemon:readingValue \""+toASCII(str(item)).replace("\"","")+"\" .\n ")
            nuolennamatchcounter+=1
        else:
            if len(nuolenna[item])>1:
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> rdf:type graphemon:GraphemeComposition .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> rdfs:label \"Character Composition: "+toASCII(str(item)).replace("\"","")+"\" .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> graphemon:hasGraphemeReading <http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_reading_"+cleanString(str(item))+"> .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_reading_"+cleanString(str(item))+"> rdf:type graphemon:GraphemeReading .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_reading_"+cleanString(str(item))+"> graphemon:readingValue \""+toASCII(str(item)).replace("\"","")+"\" .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_reading_"+cleanString(str(item))+"> rdfs:label \"Grapheme Reading "+toASCII(str(item)).replace("\"","")+": "+toASCII(str(item)).replace("\"","")+"\" .\n ")
                for chara in nuolenna[item]:
                    if chara in unicodeToURI:
                        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> graphemon:isComposedOf <"+str(unicodeToURI[chara]["uri"])+"> .\n ")
                        rdfset.add("<"+str(unicodeToURI[chara]["uri"])+"> graphemon:partOf <http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> .\n ")  
            else:
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> rdf:type graphemon:Grapheme .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> rdfs:label \"Character: "+toASCII(str(item)).replace("\"","")+"\" .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> graphemon:hasGraphemeReading <http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_reading_"+cleanString(str(item))+"> .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_reading_"+cleanString(str(item))+"> rdf:type graphemon:GraphemeReading .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_reading_"+cleanString(str(item))+"> graphemon:readingValue \""+toASCII(str(item)).replace("\"","")+"\" .\n ")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_reading_"+cleanString(str(item))+"> rdfs:label \"Grapheme Reading "+toASCII(str(item)).replace("\"","")+": "+toASCII(str(item)).replace("\"","")+"\" .\n ")
                for chara in nuolenna[item]:
                    if chara in unicodeToURI:
                        rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> graphemon:isComposedOf <"+str(unicodeToURI[chara]["uri"])+"> .\n ")
                        rdfset.add("<"+str(unicodeToURI[chara]["uri"])+"> graphemon:partOf <http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> .\n ")
            rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> graphemon:unicodeRepresentation \""+str(nuolenna[item]).replace("\"","")+"\" .\n ")     
            if toASCII(str(item)).replace("\"","").isdigit() and toASCII(str(item)).replace("\"","") in sensesmap:
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"> lemon:sense <http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_sense_"+str(toASCII(str(item)).replace("\"",""))+"> .\n")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_sense_"+str(toASCII(str(item)).replace("\"",""))+"> rdf:type graphemon:GraphemeSense .\n")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_sense_"+str(toASCII(str(item)).replace("\"",""))+"> rdfs:label \"Grapheme Sense "+str(toASCII(str(item)).replace("\"",""))+": "+str(toASCII(str(item)).replace("\"",""))+"\" .\n")
                rdfset.add("<http://purl.org/cuneiform/signlist/character_"+cleanString(str(item))+"_sense_"+str(toASCII(str(item)).replace("\"",""))+"> lemon:reference <"+sensesmap[toASCII(str(item)).replace("\"","")]+"> .\n")
                rdfset.add("<"+sensesmap[toASCII(str(item)).replace("\"","")]+"> rdfs:label \"Wikidata: "+str(toASCII(str(item)).replace("\"",""))+"\" .\n")
            unicodeToURI[item]={"uri":"http://purl.org/cuneiform/signlist/character_"+cleanString(str(item)),"signname":toASCII(str(item)).replace("\"","")}
    print("Matched "+str(nuolennamatchcounter)+" items in nuolenna!")
    aalistmatchcounter=0
    for entry in aasigndict:
        sname=str(entry["unicodename"]).strip()
        #print(sname)
        if sname in unicodeToURI:
            cururi=unicodeToURI[sname]["uri"]
            if entry["labat"]!="":
                rdfset.add("<"+str(cururi)+"> graphemon:labat \""+str(entry["labat"])+"\" .\n ")
            if entry["obo"]!="":
                rdfset.add("<"+str(cururi)+"> graphemon:obo \""+str(entry["obo"])+"\" .\n ")
            if entry["lak"]!="":
                rdfset.add("<"+str(cururi)+"> graphemon:lak \""+str(entry["lak"])+"\" .\n ")
            if "meaning" in entry and entry["meaning"]!="":
                meanings=entry["meaning"].replace("v.","").replace("n.","")
                if ";" in entry["meaning"]:
                    meanings=entry["meaning"].split(";")
                else:
                    meanings=[entry["meaning"]]
                for mean in meanings:
                    if mean.strip()!="n." and mean.strip()!="v." and mean.strip()!="adj.":
                        rdfset.add("<"+str(cururi)+"> lemon:sense <"+str(cururi)+"_sense_"+cleanString(str(mean)).replace("n.","").replace("v.","").replace("adj.","")+"> .\n ")
                        rdfset.add("<"+str(cururi)+"_sense_"+cleanString(str(mean))+"> rdfs:label \"Grapheme Sense "+str(entry["unicode"])+": "+str(mean).replace("\"","").strip().replace("n.","").replace("v.","").replace("adj.","")+"\" .\n ")
                        rdfset.add("<"+str(cururi)+"_sense_"+cleanString(str(mean)).replace("n.","").replace("v.","").replace("adj.","")+"> rdf:type graphemon:GraphemeSense .\n ")
                        #print(str(mean).replace("\"","").strip())
                        if str(mean).replace("\"","").strip() in sensesmap:
                            sensescounter+=1
                            rdfset.add("<"+str(cururi)+"_sense_"+cleanString(str(mean)).replace("n.","").replace("v.","").replace("adj.","")+"> lemon:reference <"+str(sensesmap[str(mean).replace("\"","").strip()])+"> .\n ")
                            rdfset.add("<"+str(sensesmap[str(mean).replace("\"","").strip()])+"> rdfs:label \"Wikidata: "+str(mean).replace("\"","").strip()+"\" .\n ")
            terms=[{"term":"oldbab","label":"Old Babylonian","uri":"http://www.wikidata.org/entity/Q733897"},{"term":"lagasz2","label":"Lagasz2","uri":""},{"term":"edIII","label":"EdIII","uri":"http://www.wikidata.org/entity/Q110209565"},{"term":"oldass","label":"Old Assyrian","uri":"http://www.wikidata.org/entity/Q22948607"},{"term":"middleass","label":"Middle Assyrian","uri":""},{"term":"middlebab","label":"Middle Babylonian","uri":"http://www.wikidata.org/entity/Q16530848"}]
            for term in terms:
                #print(term["term"])
                if term["term"] in entry and entry[term["term"]]!="":
                    readings=entry[term["term"]]
                    if ";" in entry[term["term"]]:
                        readings=entry[term["term"]].split(";")
                    else:
                        readings=[entry[term["term"]]]
                    #print(readings)
                    for reading in readings:
                        if reading.replace("__","_").replace("__","_").replace(",","").strip()=="":
                            continue
                        readinguri=(str(cururi)+"_reading_"+cleanString(reading)).replace("__","_").replace("__","_").replace(" ","")
                        if readinguri.endswith("_"):
                            readinguri=readinguri[:-1]
                        pattern=re.compile("^.*_[0-9]+$")
                        if pattern.search(readinguri)!=None:
                            readinguri=readinguri.rstrip(string.digits)
                        if readinguri.endswith("_"):
                            readinguri=readinguri[:-1]
                        if reading.replace("__","_").replace("__","_").replace(",","").strip()=="":
                            continue
                        print(reading)
                        print(readinguri)
                        if "uri" in term:
                            rdfset.add("<"+readinguri+"> graphemon:epoch <"+str(term["uri"])+"> .\n ")
                            rdfset.add("<"+readinguri+"> rdf:type graphemon:GraphemeReading .\n ")
                            if "(" in reading:
                                rdfset.add("<"+readinguri+"> rdfs:label \"Grapheme Reading "+str(unicodeToURI[sname]["signname"])+": "+toASCII(str(reading)[0:reading.index("(")]).strip()+"\" .\n ")
                            else:
                                rdfset.add("<"+readinguri+"> rdfs:label \"Grapheme Reading "+str(unicodeToURI[sname]["signname"])+": "+toASCII(str(reading)).strip()+"\" .\n ")
                            rdfset.add("<"+readinguri[0:readinguri.index("_reading_")].replace("__","_")+"> graphemon:hasGraphemeReading <"+readinguri+"> .\n ")
                            rdfset.add("<"+str(term["uri"])+"> rdf:type cunei:Epoch .\n ")
                            if "label" in term and term["label"]!="":
                                rdfset.add("<"+str(term["uri"])+"> rdfs:label \"Wikidata: "+str(term["label"])+"\" .\n ")
                            else:
                                rdfset.add("<"+str(term["uri"])+"> rdfs:label \"Wikidata: "+str(term["term"])+"\" .\n ")
                        else:
                            rdfset.add("<"+readinguri+"> graphemon:epochId \""+str(term["term"])+"\" .\n ")
            aalistmatchcounter+=1
    with open('../signlist/signmapping.json', mode='w', encoding="utf-8") as f:
        json.dump(unicodeToURI,f,indent=2)
    print("Matched "+str(aalistmatchcounter)+" items in aalist")
    print("Matched "+str(sensescounter)+" senses")

with open('../signlist/nuolenna.json', encoding="utf-8") as f:
   nuolenna = json.load(f)

print(nuolenna)

cuneiformsigndict = []

with open('../signlist/listofcuneiformsigns_wikipedia.csv', mode='r', encoding="utf-8") as inp:
    reader = csv.reader(inp)
    counter=0
    for rows in reader:
        try:
            cuneiformsigndict.append({"meszl":rows[0],"slha":rows[1],"abzl":rows[2],"hethzl":rows[3],"signname":rows[5],"unicode":rows[6],"unicodename":rows[7]})
        except:
            print("error")

print(cuneiformsigndict)

#CTRL,Bauer et al (pg.),Schneider; Ur III,Rosengarten,LAK,REC,OBO,Labat,Borger (MesZL),unicode,OB Signs,Sign var. (?),OGSL,SIGN NAME,ED III Sumerian (Oracc),ED III Sumerian (Oracc)_att,Lagaš II Sumerian (Oracc),Lagaš II Sumerian (Oracc)_att,Ur III,OB Sumerian,Basic Meaning,Other,Akkadian word equivalent,Uruk,Pre-Sargonic,Ebla,Ebla Meaning,OAkk,OB,OA,OA Meaning,Amarna,MA (Oracc),MA (Oracc)_att,MB (Oracc),MB (Oracc)_att,Nuzi,NA,NA (Oracc),NA (Oracc)_att,NB (Oracc),NB (Oracc)_att,LB (Oracc),LB (Oracc)_att
aasigndict = []

with open('../signlist/aa_signlist.csv', mode='r', encoding="utf-8") as inp:
    reader = csv.reader(inp)
    counter=0
    for rows in reader:
        aasigndict.append({"meszl":rows[10],"labat":rows[9],"obo":rows[8],"rec":rows[7],"lak":rows[6],"unicode":rows[13],"unicodename":rows[11],"edIII":rows[14]+";"+rows[15],"lagasz2":rows[16]+";"+rows[17],"oldbab":rows[19]+","+rows[28],"meaning":rows[20],"akkword":rows[22],"oldass":rows[29],"middleass":rows[32]+","+rows[33],"middlebab":rows[34]+","+rows[35]})

print(aasigndict)

convertToRDF(cuneiformsigndict,nuolenna,aasigndict,rdfset)

with open('../signlist/signlist.ttl', mode='w', encoding="utf-8") as f:
    f.write("@prefix graphemon: <http://purl.org/graphemon/> .\n ")
    f.write("@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n ")
    f.write("@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n ")
    f.write("@prefix lemon: <http://lemon-model.net/lemon#> .\n ")
    f.write("@prefix cuneisignlist: <http://purl.org/cuneiform/signlist/> .\n ")
    f.write("@prefix cunei: <http://purl.org/cuneiform/> .\n ")
    f.write("@prefix owl: <http://www.w3.org/2002/07/owl#> .\n ")
    f.write("graphemon:SignlistOntology rdf:type owl:Ontology .\n ")
    f.write("graphemon:GraphemeReading rdf:type owl:Class .\n ")
    f.write("graphemon:Grapheme rdf:type owl:Class .\n ")
    f.write("cunei:Epoch rdf:type owl:Class .\n ")
    f.write("graphemon:GraphemeComposition rdf:type owl:Class .\n ")
    f.write("graphemon:hasGraphemeReading rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:isComposedOf rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:partOf rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:hethzl rdf:type owl:DatatypeProperty .\n ")
    f.write("lemon:writtenRep rdf:type owl:DatatypeProperty .\n ")
    f.write("lemon:sense rdf:type owl:ObjectProperty .\n ")    
    f.write("lemon:reference rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:abzl rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:epoch rdf:type owl:ObjectProperty .\n ")
    f.write("graphemon:lak rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:obo rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:labat rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:readingValue rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:meszl rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:slha rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:unicodeCodepoint rdf:type owl:DatatypeProperty .\n ")
    f.write("graphemon:unicodeRepresentation rdf:type owl:DatatypeProperty .\n ")
    f.write("".join(rdfset))

g = Graph()
g.parse("../signlist/signlist.ttl")
g.serialize(destination="../signlist/signlist.ttl")
