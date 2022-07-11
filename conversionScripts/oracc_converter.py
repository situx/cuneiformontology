import json
import os
import rdflib
from rdflib import Graph

sensesmap={
    "life":"http://www.wikidata.org/entity/Q3",
    "district":"http://www.wikidata.org/entity/Q149621",
    "flesh":"http://www.wikidata.org/entity/Q13119823",
    "throat":"http://www.wikidata.org/entity/Q16364",
    "country":"http://www.wikidata.org/entity/Q6256",
    "goose":"http://www.wikidata.org/entity/Q16529344",
    "god":"http://www.wikidata.org/entity/Q178885",
    "goatfish":"http://www.wikidata.org/entity/Q6604812",
    "frog":"http://www.wikidata.org/entity/Q3116510",
    "fibre":"http://www.wikidata.org/entity/Q161",
    "fever":"http://www.wikidata.org/entity/Q38933",
    "fetter":"http://www.wikidata.org/entity/Q1478548",
    "father":"http://www.wikidata.org/entity/Q7565",
    "arm":"https://www.wikidata.org/wiki/Q43471",
    "appropriation":"https://www.wikidata.org/wiki/Q212468",
    "army":"https://www.wikidata.org/wiki/Q8473",
    "arousal":"https://www.wikidata.org/wiki/Q379784",
    "arrow":"https://www.wikidata.org/wiki/Q45922",
    "ashes":"https://www.wikidata.org/wiki/Q152079",
    "attack":"https://www.wikidata.org/wiki/Q1174599",
    "badger":"https://www.wikidata.org/wiki/Q638105",
    "bandage":"https://www.wikidata.org/wiki/Q376724",
    "bandit":"https://www.wikidata.org/wiki/Q16144978",
    "basket":"https://www.wikidata.org/wiki/Q201097",
    "bat":"https://www.wikidata.org/wiki/Q28425",
    "battle cry":"https://www.wikidata.org/wiki/Q1433428",
    "bedroom":"https://www.wikidata.org/wiki/Q193837",
    "billy goat":"https://www.wikidata.org/wiki/Q2912137",
    "bow":"https://www.wikidata.org/wiki/Q46311",
    "pelican":"https://www.wikidata.org/wiki/Q19413",
    "peace":"https://www.wikidata.org/wiki/Q454",
    "penis":"https://www.wikidata.org/wiki/Q58",
    "physiognomy":"https://www.wikidata.org/wiki/Q841933",
    "pillage":"https://www.wikidata.org/wiki/Q19841484",
    "planet":"https://www.wikidata.org/wiki/Q634",
    "famine":"http://www.wikidata.org/entity/Q168247",
    "fainting":"http://www.wikidata.org/entity/Q180007",
    "evil":"http://www.wikidata.org/entity/Q15292",
    "Euphrates":"http://www.wikidata.org/entity/Q34589",
    "era":"http://www.wikidata.org/entity/Q6428674",
    "esteem":"http://www.wikidata.org/entity/Q104602026",
    "equipment":"http://www.wikidata.org/entity/Q10273457",
    "eponym":"http://www.wikidata.org/entity/Q204335",
    "dragon":"http://www.wikidata.org/entity/Q7559",
    "enemy":"http://www.wikidata.org/entity/Q289891",
    "employee":"http://www.wikidata.org/entity/Q703534",
    "ebony":"http://www.wikidata.org/entity/Q156005",
    "east":"http://www.wikidata.org/entity/Q684",
    "dusk":"http://www.wikidata.org/entity/Q11288132",
    "drum":"http://www.wikidata.org/entity/Q11404",
    "barley":"http://www.wikidata.org/entity/Q61665121",
    "raisin":"http://www.wikidata.org/entity/Q13186",
    "seizure":"http://www.wikidata.org/entity/Q6279182",
    "scholar":"http://www.wikidata.org/entity/Q2248623",
    "saying":"http://www.wikidata.org/entity/Q3026787",
    "sailor":"http://www.wikidata.org/entity/Q45199",
    "saffron":"http://www.wikidata.org/entity/Q25434",
    "grain":"http://www.wikidata.org/entity/Q2995529",
    "sacrifice":"http://www.wikidata.org/entity/Q179723",
    "saliva":"http://www.wikidata.org/entity/Q155925",
    "roar":"http://www.wikidata.org/entity/Q3177438",
    "robber":"http://www.wikidata.org/entity/Q10659189",
    "voice":"http://www.wikidata.org/entity/Q7390",
    "vomit":"http://www.wikidata.org/entity/Q127076",
    "vinegar":"http://www.wikidata.org/entity/Q41354",
    "victory":"http://www.wikidata.org/entity/Q50000",
    "vein":"http://www.wikidata.org/entity/Q9609",
    "urine":"http://www.wikidata.org/entity/Q40924",
    "universe":"http://www.wikidata.org/entity/Q1",
    "undertaking":"http://www.wikidata.org/entity/Q20921345",
    "room":"http://www.wikidata.org/entity/Q180516",
    "seat":"http://www.wikidata.org/entity/Q2207370",
    "scribe":"http://www.wikidata.org/entity/Q916292",
    "scorpion":"http://www.wikidata.org/entity/Q19125",
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
    "similarity":"http://www.wikidata.org/entity/Q105227892",
    "silver":"http://www.wikidata.org/entity/Q1090",
    "silence":"http://www.wikidata.org/entity/Q502261",
    "gazelle":"http://www.wikidata.org/entity/Q29001815",
    "gathering":"http://www.wikidata.org/entity/Q108634029",
    "garlic":"http://www.wikidata.org/entity/Q23400",
    "furrow":"http://www.wikidata.org/entity/Q1474839",
    "gall bladder":"http://www.wikidata.org/entity/Q64386",
    "fringe":"http://www.wikidata.org/entity/Q1353860",
    "emmer":"http://www.wikidata.org/entity/Q167339",
    "effigy":"http://www.wikidata.org/entity/Q20899864",
    "ear":"http://www.wikidata.org/entity/Q7362",
    "duststorm":"http://www.wikidata.org/entity/Q182878",
    "dropsy":"http://www.wikidata.org/entity/Q152234",
    "dog":"http://www.wikidata.org/entity/Q144",
    "dignity":"http://www.wikidata.org/entity/Q274782",
    "diarrhoea":"http://www.wikidata.org/entity/Q40878",
    "desecendant":"http://www.wikidata.org/entity/Q183905",
    "forehead":"http://www.wikidata.org/entity/Q41055",
    "foam":"http://www.wikidata.org/entity/Q215414",
    "flower":"http://www.wikidata.org/entity/Q506",
    "flute":"http://www.wikidata.org/entity/Q11405",
    "fly":"http://www.wikidata.org/entity/Q859257",
    "flood":"http://www.wikidata.org/entity/Q8068",
    "flock":"http://www.wikidata.org/entity/Q120997",
    "flint":"http://www.wikidata.org/entity/Q83087",
    "finger":"http://www.wikidata.org/entity/Q620207",
    "field":"http://www.wikidata.org/entity/Q188869",
    "fennel":"http://www.wikidata.org/entity/Q43511",
    "fatherhood":"http://www.wikidata.org/entity/Q4540608",
    "fate":"http://www.wikidata.org/entity/Q216774",
    "family":"http://www.wikidata.org/entity/Q8436",
    "falsehood":"http://www.wikidata.org/entity/Q17949",
    "fabric":"http://www.wikidata.org/entity/Q28823",
    "expert":"http://www.wikidata.org/entity/Q381160",
    "extent":"http://www.wikidata.org/entity/Q28733284",
    "excrement":"http://www.wikidata.org/entity/Q496",
    "evening":"http://www.wikidata.org/entity/Q7725",
    "epidemic":"http://www.wikidata.org/entity/Q44512",
    "enmity":"http://www.wikidata.org/entity/Q5275945",
    "sieve":"http://www.wikidata.org/entity/Q381155",
    "shout":"http://www.wikidata.org/entity/Q1932016",
    "shoulder":"http://www.wikidata.org/entity/Q16363",
    "shortfall":"http://www.wikidata.org/entity/Q2184645",
    "shepherd":"http://www.wikidata.org/entity/Q81710",
    "poverty":"http://www.wikidata.org/entity/Q10294",
    "potash":"http://www.wikidata.org/entity/Q10564271",
    "possessor":"http://www.wikidata.org/entity/Q16869121",
    "poplar":"http://www.wikidata.org/entity/Q30456678",
    "poison":"http://www.wikidata.org/entity/Q40867",
    "plum":"http://www.wikidata.org/entity/Q12372598",
    "plant":"http://www.wikidata.org/entity/Q756",
    "pine cone":"http://www.wikidata.org/entity/Q22710",
    "pig":"http://www.wikidata.org/entity/Q787",
    "physician":"http://www.wikidata.org/entity/Q39631",
    "persecution":"http://www.wikidata.org/entity/Q851824",
    "spleen":"http://www.wikidata.org/entity/Q9371",
    "spider":"http://www.wikidata.org/entity/Q1357",
    "speech":"http://www.wikidata.org/entity/Q52946",
    "sow":"http://www.wikidata.org/entity/Q25929307",
    "south":"http://www.wikidata.org/entity/Q667",
    "sorrow":"http://www.wikidata.org/entity/Q2809148",
    "sorcery":"http://www.wikidata.org/entity/Q9198102",
    "goddess":"http://www.wikidata.org/entity/Q178885",
    "girl":"http://www.wikidata.org/entity/Q3031",
    "gift":"http://www.wikidata.org/entity/Q184303",
    "ghost":"http://www.wikidata.org/entity/Q45529",
    "phlegm":"http://www.wikidata.org/entity/Q3746560",
    "perforation":"http://www.wikidata.org/entity/Q1508510",
    "shelter":"http://www.wikidata.org/entity/Q7493941",
    "shade":"http://www.wikidata.org/entity/Q1062554",
    "seller":"http://www.wikidata.org/entity/Q685433",
    "seaweed":"http://www.wikidata.org/entity/Q237169",
    "Saturn":"http://www.wikidata.org/entity/Q193",
    "saltpetre":"http://www.wikidata.org/entity/Q177836",
    "ruler":"http://www.wikidata.org/entity/Q1097498",
    "root":"http://www.wikidata.org/entity/Q41500",
    "river":"http://www.wikidata.org/entity/Q4022",
    "rival":"http://www.wikidata.org/entity/Q64025582",
    "rite":"http://www.wikidata.org/entity/Q628455",
    "rib":"http://www.wikidata.org/entity/Q196672",
    "revolt":"http://www.wikidata.org/entity/Q6107280",
    "retreat":"http://www.wikidata.org/entity/Q1760704",
    "rebellion":"http://www.wikidata.org/entity/Q124734",
    "rear":"http://www.wikidata.org/entity/Q68345931",
    "ram":"http://www.wikidata.org/entity/Q7368",
    "rainbow":"http://www.wikidata.org/entity/Q1052",
    "rain":"http://www.wikidata.org/entity/Q7925",
    "radiance":"http://www.wikidata.org/entity/Q1411145",
    "profit":"http://www.wikidata.org/entity/Q2112073",
    "prayer":"http://www.wikidata.org/entity/Q40953",
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
    "statue":"http://www.wikidata.org/entity/Q179700",
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
    "totality":"http://www.wikidata.org/entity/Q2445511",
    "harvest":"http://www.wikidata.org/entity/Q213753",
    "deer":"http://www.wikidata.org/entity/Q29838690",
    "man":"http://www.wikidata.org/entity/Q8441",
    "front":"http://www.wikidata.org/entity/Q68345460",
    "hill":"http://www.wikidata.org/entity/Q54050",
    "red":"http://www.wikidata.org/entity/Q3142",
    "trial":"http://www.wikidata.org/entity/Q8016240",
    "share":"http://www.wikidata.org/entity/Q11692",
    "strength":"http://www.wikidata.org/entity/Q29713396",
    "bird":"http://www.wikidata.org/entity/Q5113",
    "companion":"http://www.wikidata.org/entity/Q98949102",
    "friend":"http://www.wikidata.org/entity/Q17297777",
    "peg":"http://www.wikidata.org/entity/Q15247824",
    "virgin":"http://www.wikidata.org/entity/Q32859833",
    "tablet":"http://www.wikidata.org/entity/Q16744570",
    "farmer":"http://www.wikidata.org/entity/Q131512",
    "rope":"http://www.wikidata.org/entity/Q31029",
    "flour":"http://www.wikidata.org/entity/Q36465",
    "deer":"http://www.wikidata.org/entity/Q23390",
    "calf":"http://www.wikidata.org/entity/Q2935",
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
    "100":"http://www.wikidata.org/entity/Q37413",
    "102":"http://www.wikidata.org/entity/Q715437",
    "104":"http://www.wikidata.org/entity/Q715425",
    "150":"http://www.wikidata.org/entity/Q644336",
    "200":"http://www.wikidata.org/entity/Q713744",
    "400":"http://www.wikidata.org/entity/Q1535396",
    "510":"http://www.wikidata.org/entity/Q857664",
    "520":"http://www.wikidata.org/entity/Q580062",
    "700":"http://www.wikidata.org/entity/Q721126",
    "800":"http://www.wikidata.org/entity/Q746396",
    "840":"http://www.wikidata.org/entity/Q828726",
    "850":"http://www.wikidata.org/entity/Q1492396"
}

ttlresult=set()
ttldictresult=set()
ttlsignlistresult=set()
ttlresult.add("cunei:Tablet rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdf:type owl:Class . lemon:Sense rdf:type owl:Class .\n <http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph> rdfs:label \"Glyph\"@en .\n")
namespace="http://purl.org/cuneiform"
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

def replaceNonURIChars(myuri):
    res=myuri.replace("$","_").replace("{","_").replace("}","_").replace("̌","_").replace(";","_").replace("̄","_").replace("ʾ","_").replace("̆","_").replace(",","_").replace("'","_").replace("/","_").replace("+","_").replace("(","_").replace(")","_").replace("|","_").replace("@","_").replace("×","_").replace("&","_").replace("+","_").replace(".","_")
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

def cuneifyWord(word,worduri,ttlresult):
    if word in cuneify:
        unicodeword=cuneify[word]
        chars=word.split("-")
        counter=0
        for chara in unicodeword:
            if chara in signmapping:
                ttlresult.add(""+str(worduri)+" cunei:contains <"+str(signmapping[chara]["uri"])+"> .\n")
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"> rdf:type graphemon:Grapheme . \n")
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"> rdfs:label \"Character: "+str(signmapping[chara]["signname"])+"\" . \n")
            if counter<len(chars):
                ttlresult.add(str(worduri)+" graphemon:hasGraphemeReading <"+str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])+"> .\n")
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])+"> rdfs:label \"Grapheme Reading "+str(signmapping[chara]["signname"])+": "+str(chars[counter])+"\" .\n")
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])+"> rdf:type graphemon:GraphemeReading .\n")
                ttlresult.add("<"+str(signmapping[chara]["uri"])+"> graphemon:hasGraphemeReading <"+str(signmapping[chara]["uri"])+"_reading_"+str(chars[counter])+"> .\n")
            counter+=1
        return cuneify[word]

def handleLineElements(data,ttlresult,currentside,currentsentence,currenttabletid):
    currentline=-1
    currentwordindex=0
    currentcharindex=0
    currentrelcharindex=0
    for lineitem in data["cdl"]:
        #print(lineitem)
        #print("=======================")
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
            #print(lineitem)
        if "node" in lineitem and lineitem["node"]=="l":
            #print(lineitem)
            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+" rdf:type cunei:Line .\n")
            if "f" in lineitem and "form" in lineitem["f"]:
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc rdf:type cunei:WordFormOccurance .\n")
                if "norm" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdf:type cunei:Word.\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdf:type cunei:Word.\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["norm"]))+"\" .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["norm"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["norm"]))+"\" .\n")
                else:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdf:type cunei:Word.\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdf:type cunei:Word.\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:form "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["form"]))+"\" .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word rdfs:label \"Word: "+replaceNonURIChars(str(lineitem["f"]["form"]))+"\" .\n")
                if "pos" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word <http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> \""+str(lineitem["f"]["pos"])+"\".\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word <http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> \""+str(lineitem["f"]["pos"])+"\".\n")
                if "sense" in lineitem["f"]:
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:sense "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word lemon:sense "+str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense .\n")
                    ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdf:type lemon:Sense .\n")
                    ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_word_sense rdf:type lemon:Sense .\n")
                    print(lineitem["f"]["sense"])
                    if str(lineitem["f"]["sense"]) in sensesmap:
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
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRepUnicode \""+str(cuneifyWord(str(lineitem["f"]["form"]),str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_wordformocc",ttlresult))+"\" .\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRepASCII \""+str(format_ascii(str(lineitem["f"]["form"])))+"\" .\n")
                ttldictresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform lemon:writtenRepASCII \""+str(format_ascii(str(lineitem["f"]["form"])))+"\" .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc cunei:Line \""+str(currentline)+"\"^^xsd:integer .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc cunei:locatedIn "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+".\n")
                ttlresult.add(str(namespaceshortdict)+":"+replaceNonURIChars(str(lineitem["f"]["form"]))+"_wordform cunei:isAttested "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+replaceNonURIChars(str(currentline))+" cunei:consistsOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc .\n")
                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc rdfs:label \" WordForm Occurrence: "+str(lineitem["f"]["form"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"])\" .\n")
                if currentwordindex>0:
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc cunei:prevWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex-1)+"_wordformocc .\n")
                if currentwordindex<=len(data["cdl"]):
                    ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc cunei:nextWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex+1)+"_wordformocc .\n")
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
                            #ttlresult.add(str(namespaceshortsignlist)+":character_"+replaceNonURIChars(str(charr["v"]))+" rdf:type graphemon:Grapheme .\n")
                            #ttlresult.add(str(namespaceshortsignlist)+":character_"+replaceNonURIChars(str(charr["v"]))+" rdfs:label \"Character: "+str(charr["v"])+"\" .\n")
                            #ttlresult.add(str(namespaceshortsignlist)+":character_"+replaceNonURIChars(str(charr["v"]))+"_reading_"+replaceNonURIChars(str(charr["v"]))+" graphemon:occurrence "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_character .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph rdf:type cidoc:TX9_Glyph .\n")
                            if "break" in charr and "damaged" in charr["break"]:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"true\"^^xsd:boolean .\n")
                            else:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:isDamaged \"false\"^^xsd:boolean .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> cunei:"+str(currenttabletid)+"_writtenText .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph rdfs:label \"Glyph at "+str(currenttabletid)+"["+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"])\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> "+namespaceshort+":"+currenttabletid+" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph <http://www.cidoc-crm.org/cidoc-crm/P138_represents> "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc cunei:consistsOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc rdf:type cunei:TransliterationCharOccurrence .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc rdfs:label \"Char Occurrence: "+str(charr["v"])+" ("+str(currenttabletid)+"["+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"])\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc lemon:writtenRep \""+str(charr["v"])+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc lemon:writtenRepUnicode \""+str(cuneifyWord(str(charr["v"]),str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc",ttlresult))+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc lemon:writtenRepASCII \""+str(format_ascii(str(charr["v"])))+"\" .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc cunei:partOf "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentwordindex)+"_wordformocc .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc cunei:positionOnTabletSide \""+str(currentcharindex)+"\"^^xsd:integer .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc cunei:Line \""+str(currentline)+"\"^^xsd:integer .\n")
                            ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc cunei:positionInWord \""+str(currentrelcharindex)+"\"^^xsd:integer .\n")
                            if currentcharindex>0:
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc cunei:prevInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex-1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:prevInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex-1)+"_glyph .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc cunei:prev "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex-1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:prev "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex-1)+"_glyph .\n")
                            if currentrelcharindex<=len(lineitem["f"]["gdl"]):
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc cunei:next "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex+1)+"_charocc .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_glyph cunei:next "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex+1)+"_glyph .\n")
                                ttlresult.add(str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex)+"_charocc cunei:nextInWord "+str(namespaceshort)+":"+str(currenttabletid)+"_"+str(currentside)+"_"+str(currentline).replace("'","_")+"_"+str(currentcharindex+1)+"_charocc .\n")
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

header="""@prefix xsd:<http://www.w3.org/2001/XMLSchema#> .\n@prefix graphemon:<http://purl.org/graphemon/> .\n@prefix cunei:<http://purl.org/cuneiform/> .\n@prefix cuneidict:<http://purl.org/cuneiform/dict/> .\n@prefix cuneisignlist:<http://purl.org/cuneiform/signlist/> .\n@prefix cidoc:<http://www.cidoc-crm.org/cidoc-crm/> .\n@prefix owl:<http://www.w3.org/2002/07/owl#> .\n@prefix rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:<http://www.w3.org/2000/01/rdf-schema#> .\n@prefix lemon:<http://lemon-model.net/lemon#> .\n"""
ontology="""cunei:isDamaged rdf:type owl:DatatypeProperty .\ngraphemon:hasGraphemeReading rdf:type owl:ObjectProperty .\n<http://lexinfo.net/ontology/2.0/lexinfo#partOfSpeech> rdf:type owl:ObjectProperty .\ncunei:hasLine rdf:type owl:ObjectProperty.\ncidoc:P56_found_on rdf:type owl:ObjectProperty.\ncidoc:TXP10_read_by rdf:type owl:ObjectProperty.\ncidoc:TXP3_is_rendered_by rdf:type owl:ObjectProperty .\ncunei:writtenText rdf:type owl:ObjectProperty .\ncunei:hasSide rdf:type owl:ObjectProperty .\ncunei:partOf rdf:type owl:ObjectProperty .\ncunei:next rdf:type owl:ObjectProperty .\ncunei:prevLine rdf:type owl:ObjectProperty .\ncunei:nextLine rdf:type owl:ObjectProperty .\ncunei:prevSentence rdf:type owl:ObjectProperty .\nlemon:reference rdf:type owl:ObjectProperty .\ncunei:nextSentence rdf:type owl:ObjectProperty .\ncunei:nextWord rdf:type owl:ObjectProperty .\ncunei:consistsOf rdf:type owl:ObjectProperty .\ncunei:prevWord rdf:type owl:ObjectProperty .\ncunei:prevInWord rdf:type owl:ObjectProperty .\ncunei:nextInWord rdf:type owl:ObjectProperty .\ncunei:prev rdf:type owl:ObjectProperty .\nlemon:sense rdf:type owl:ObjectProperty .\nlemon:pos rdf:type owl:ObjectProperty .\nlemon:entry rdf:type owl:ObjectProperty .\nlemon:writtenRepUnicode rdf:type owl:DatatypeProperty .\n lemon:writtenRepASCII rdf:type owl:DatatypeProperty .\n<http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of> rdf:type owl:ObjectProperty .<http://www.cidoc-crm.org/cidoc-crm/P56_isFoundOn> rdf:type owl:ObjectProperty .\n<http://www.cidoc-crm.org/cidoc-crm/P138_represents> rdf:type owl:ObjectProperty .\n lemon:writtenRep rdf:type owl:DatatypeProperty .\ncunei:positionOnTabletSide rdf:type owl:DatatypeProperty .\ncunei:locatedIn rdf:type owl:ObjectProperty .\nlemon:form rdf:type owl:ObjectProperty .\ncunei:positionInWord rdf:type owl:DatatypeProperty .\ncunei:Line rdf:type owl:DatatypeProperty .\ncunei:isAttested rdf:type owl:ObjectProperty .\n"""

corpusid="ccpo"
subdircorp=""
if subdircorp!="":
    rootdir="cams-gkab/cams/gkab/corpusjson"
else:
    rootdir=str(corpusid)+"/corpusjson/"

print(cuneify)
print(rootdir)
print(list(os.walk(rootdir)))
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

with open(corpusid+'.ttl', 'w', encoding='utf-8') as f:
  f.write(header)
  f.write(ontology)
  f.write("".join(sorted(list(dict.fromkeys(ttlresult)))))
  f.close()
with open(corpusid+'_dict.ttl', 'w', encoding='utf-8') as f:
  f.write(header)
  f.write(ontology)
  f.write("".join(sorted(list(dict.fromkeys(ttldictresult)))))
  f.close()
g = Graph()
g.parse(corpusid+'.ttl')
g.serialize(destination=corpusid+'.ttl')
