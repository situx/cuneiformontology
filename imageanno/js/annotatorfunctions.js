visible = true

var TextMapWidget = function(args) {

  var addTag = function(evt) {
    console.log("onKeyUp")
	console.log(evt.srcElement.value)
	console.log(args)
	var removeindex=-1
	for(bod in args.annotation.underlying.body){
		if(args.annotation.underlying.body[bod].purpose==evt.target.id){
			removeindex=bod
		}
	}
  if(removeindex==-1){
	  args.annotation.underlying.body.push({
        type: 'TextualBody',
        purpose: evt.target.id,
        //dimensions: viewer.world.getItemAt(0).getContentSize(), 
        value: evt.srcElement.value
    });
  }else{
    args.annotation.underlying.body[removeindex].value=evt.srcElement.value
    args.annotation.underlying.body[removeindex].dimensions=viewer.world.getItemAt(0).getContentSize()
  }
	console.log(args)
	console.log({
        type: 'TextualBody',
        purpose: evt.target.id,
        //dimensions: viewer.world.getItemAt(0).getContentSize(), 
        value: evt.srcElement.value
    })
  }

  // 4. This part renders the UI elements
  var createTextField = function(key,value) {
    console.log(key+" - "+value)
    var div=document.createElement('table')
    div.style="color:black;background-color:white;border-bottom:1px solid black;"
	div.width="100%"
	var tr=document.createElement('tr')
  tr.style="color:black;background-color:white"
	var td1=document.createElement('td')
  td1.style="color:black;background-color:white"
	var td2=document.createElement('td')
  td2.style="color:black;background-color:white"
	div.appendChild(tr)
	tr.appendChild(td1)
	tr.appendChild(td2)
  var label = document.createElement('label');
  label.style="color:black;background-color:white"
  if(!readOnlyVar){
	  var input = document.createElement('input');
  }else{
    var input = document.createElement('span');
    input.style="color:black;background-color:white"
  }

	console.log(mappings[key])
  if(!readOnlyVar && "inputtype" in mappings[key] && mappings[key]["inputtype"]=="select"){
    input = document.createElement('select');
    input.addEventListener('change',addTag)
    if(!readOnlyVar && "data" in mappings[key]){
       selectedkey=""
       for(bod in args.annotation.underlying.body){
		if(args.annotation.underlying.body[bod].purpose==key){
			selectedkey=args.annotation.underlying.body[bod].value
		}
	  }
        for(keyy in mappings[key]["data"]){
            //console.log(keyy)
            option=document.createElement("option")
            option.value=keyy
            if(selectedkey==keyy){
                option.selected=true
            }
            option.text=mappings[key]["data"][keyy]
            input.appendChild(option)
        }
    }
  }else if(!readOnlyVar && "inputtype" in mappings[key]){
		input.type=mappings[key]["inputtype"]
		input.min=1
	}else if(!readOnlyVar){
		input.type="text"	
	}
  if(!readOnlyVar && "data" in mappings[key] && mappings[key]["inputtype"]=="select"){
    /*for(keyy in mappings[key]["data"]){
      //console.log(keyy)
      option=document.createElement("option")
      option.value=keyy
      option.text=mappings[key]["data"][keyy]
      input.appendChild(option)
    }
    for(bod in args.annotation.underlying.body){
		if(args.annotation.underlying.body[bod].purpose==key){
			  input.value=args.annotation.underlying.body[bod].value
		}
	  }*/
  }else{
    for(bod in args.annotation.underlying.body){
		  if(args.annotation.underlying.body[bod].purpose==key){
        if(!readOnlyVar){
          input.value=args.annotation.underlying.body[bod].value
        }else{
          input.innerHTML=args.annotation.underlying.body[bod].value
        }		  
      }
	  }
    if(!readOnlyVar){
	    input.addEventListener('keyup',addTag)
    }
  }
	input.id=key
	label.innerHTML=key+": "
	td1.appendChild(label)
	td2.appendChild(input)
  if(!readOnlyVar && "paleocodage" in mappings[key]){
    var td3=document.createElement('td')
    tr.appendChild(td3)
    var canvas=document.createElement('canvas')
    td3.appendChild(canvas)
    canvas.id="myCanvas"
    canvas.width=150
    canvas.height=75
    canvas.style="border:1px solid #d3d3d3;"
    input.addEventListener('keyup',function(event){
        paintCharacter(event.target.id)        
        //selectionStart=$('#PaleoCode').prop('selectionStart')
        //selectionEnd=$('#PaleoCode').prop('selectionEnd')
        //strokeParser(document.getElementById('PaleoCode').value)
    });
    input.addEventListener('blur',function(event){
        paintCharacter(event.target.id)        
        //selectionStart=$('#PaleoCode').prop('selectionStart')
        //selectionEnd=$('#PaleoCode').prop('selectionEnd')
        //strokeParser(document.getElementById('PaleoCode').value)
    });
    input.addEventListener("click",function(){
        paintCharacter(event.target.id)
    });
    input.addEventListener("select",function(){
        paintCharacter(event.target.id)
    });
  }
    return div;
  }

  var container = document.createElement('div');
  container.className = 'colorselector-widget';
  idspan=document.createElement('span')
  idlink=document.createElement('a')
  idlink.setAttribute('href',location.protocol + '//' + location.host + location.pathname+"?tabletid="+$('#images option:selected').val()+"&side="+$('#imageside option:selected').text()+"&annotations="+args.annotation.id)
  idspan.appendChild(idlink)
  idlink.innerHTML=args.annotation.id
  container.appendChild(idspan)
  for(map in mappings){
    var curval="";
    for(body of args.annotation.bodies){
		if(body.purpose==map){
			curval=body.value
			break;
		}
	}
	var button1 = createTextField(map,curval);	
	container.appendChild(button1);
  }

  return container;
}


function showHideAnno() {
    visible = !visible
    anno.setVisible(visible)
}

approvaltags = []

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function addTag(){
  mytag=$('#comment').val()
  approvaltags.push(mytag)
  if(mytag=="")
    return
  $('#mytags').append("<span style=\"background-color:yellow;color:black;border-radius: 25px;border:1px solid black \">"+mytag+"</span>")
  $('#comment').val("")
}

function sync2D3D() {
    console.log($('#images option:selected').val() + " " + $('#3dimages option:selected').text())
    if ($('#images option:selected').val() in threedimageToIndex) {
        console.log($('#images option:selected').val() + " - " + threedimageToIndex[$('#images option:selected').val()])
        document.getElementById('3dimages').selectedIndex = threedimageToIndex[$('#images option:selected').val()]
    }
}

function rescale(X, A, B, C, D) {
    console.log("Input: " + X)
    retval = (((X - A).toFixed(2) / (B - A)) * (D - C)) + C
    console.log("Scale factor: " + ((B - A) * (D - C)))
    console.log("Rescaled: " + retval)
    return retval
}

function getEXIFData(imageid, targetid) {
    var img2 = document.getElementById(imageid);
    console.log("EXIF click")
    EXIF.getData(img2, function() {
        var allMetaData = EXIF.getAllTags(this);
        console.log(allMetaData)
        var allMetaDataSpan = document.getElementById(targetid);
        allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
        var htmltip = "<ul>"
        for (tag in allMetaData) {
            htmltip += "<li>" + tag + " - " + allMetaData[tag] + "</li>"
        }
        htmltip += "</ul>"
        $("#metadata").tooltip({
            content: htmltip
        });
    });
}

function highlightIndexedChars() {
    console.log(indexedcharids)
    console.log(indexedhiglighted)
    for (indchar of indexedcharids) {
        var element = document.querySelector('.a9s-annotation[data-id="' + indchar + '"]').children
        console.log(element)
        if (!indexedhiglighted) {
            element[1].classList.add("indexhighlight");
        } else {
            element[1].classList.remove("indexhighlight");
        }
    }
    indexedhiglighted = !indexedhiglighted
}

var semantictagsconfig={
    dataSources: [  
        'Wikidata',   
        'VIAF'
    ],
    availableLanguages: [
        'en', 'de', 'fa'
    ],
    limit: 10
    }

function loadRecogito(htmlid,annos){
    var r = Recogito.init({
        content: document.getElementById(htmlid), // ID or DOM element
        locale: 'auto',
      	widgets: [
            { widget: 'COMMENT' },
            { widget: 'TAG', vocabulary: [ 'Place', 'Person', 'Event', 'Organization', 'Animal' ] },
            recogito.SemanticTags(semantictagsconfig)
        ]
    });
    if(annos!=null)
        r.loadAnnotations(annos)
}

function annotationFileFromImageName(curname){
    curnameparts=curname.split("_")
    tabletname=curnameparts[0]+"_"+curnameparts[1]
    tabletside=curnameparts[curnameparts.length-1]
    return tabletname+"_"+tabletside
}

function reinit(param) {
    param = $('#imageside option:selected').val()
    param2 = annotationFileFromImageName($('#imageside option:selected').text())
    $('#referencelink').html("Reference Link")
    $('#referencelink').attr("href", location.protocol + '//' + location.host + location.pathname+"?tabletid="+$('#images option:selected').val()+"&side="+$('#imageside option:selected').text())
    $('#saveannotationsmessage').html("Loaded annotations for "+$('#imageside option:selected').text())
    $('#transliterationdialogmessage').html("Loaded transliteration for "+$('#imageside option:selected').text())
    atftext=transliterations[$('#images option:selected').val()]
    myatftext="&P134316 = TMH NF 1-2, 004 \n#atf: lang sux \n"+atftext
    if($('#images option:selected').val() in transliterations){
        $('#transliterationtextarea').html(formatTransliteration(transliterations[$('#images option:selected').val()].replaceAll("\n", "<br>")))
    }
    if (!($("#images option:selected").text() in transliterations)) {
        $('#translationtextarea').html("No translation available for text " + $('#images option:selected').val())
    }
    //$('#translationtextarea').html(formatTranslation(transliterations[$('#images option:selected').val()].replaceAll("\n", "<br>")))
    $(function() {
        $(document).tooltip({
            track: true
        });
    });
    $('span.imagelink').mouseover(function() {
        console.log("Selecting annotation")
        myid = $(this).attr("id")
        console.log(myid)
        if (myid in curcharindex) {
            console.log(curcharindex[myid])
            anno.disableEditor = true
            anno.selectAnnotation(curcharindex[myid])
        }
    });
    $('span.imagelink').mouseout(function() {
        if (translitwasclicked) {
            translitwasclicked = false
        } else {
            anno.cancelSelected();
            anno.disableEditor = false
        }
    });
    $('span.imagelink').click(function() {
        if (anno.disableEditor) {
            anno.disableEditor = false
        } else {
            anno.disableEditor = true
        }
    });
    $('.imagelink').css({
        "backgroundColor": "#f7f7f9",
        "color": "#bd4147",
        "border": "0px"
    })
    viewer.open({
        type: "image",
        url: param
    });
    //}
    manageApprovals()
    curanno = {}
    curtextanno={}
    curcharindex = {}
    $('#annocomplete').html("Unknown")
    $('#indexingcomplete').html("Unknown")
    $.getJSON("result/" + encodeURIComponent(param2 + ".json"), function(result) {
        console.log(result)
        indexedchars = 0
        indexedhiglighted = false
        indexedcharids = []
        annotations = []
        for (ann in result) {
            line = -1
            charindex = -1
            colindex = -1
            side=-1
            for (bod of result[ann]["body"]) {
                if ("purpose" in bod && bod["purpose"] == "Line") {
                    line = bod["value"]
                } else if ("purpose" in bod && bod["purpose"] == "Charindex") {
                    charindex = bod["value"]
                } else if ("purpose" in bod && bod["purpose"] == "Column") {
                    colindex = bod["value"]
                } else if ("purpose" in bod && bod["purpose"] == "TabletSide") {
                    side = bod["value"]
                }
            }
            if (charindex != -1 && charindex != "" && line != -1 && line != "") {
                indexedcharids.push(ann)
                indexedchars += 1
                if(side==-1 || side=="selected"){
                    side = param2.replace(".png", "")
                    side=side.substring(side.lastIndexOf('_') + 1)
                }
                if (colindex != -1) {
                    curimgindex[ann] = side + "_column_" + colindex + "_" + line + "_" + charindex
                    curcharindex[side + "_column_" + colindex + "_" + line + "_" + charindex] = ann
                } else {
                    curimgindex[ann] = side + "_" + line + "_" + charindex
                    curcharindex[side + "_" + line + "_" + charindex] = ann
                }
            }
            annotations.push(result[ann])
        }
        console.log(curcharindex)
        curanno = result
        anno.setAnnotations(annotations);
        if ($('#imageside option:selected').text() + ".json" in translitcount) {
            if (annotations.length > 0 && translitcount[$('#imageside option:selected').text() + ".json"] > 0) {
                $('#annocomplete').html((annotations.length / translitcount[$('#imageside option:selected').text() + ".json"] * 100).toFixed(2) + "% (" + annotations.length + "/" + translitcount[$('#imageside option:selected').text() + ".json"] + ")")
            } else {
                $('#annocomplete').html("0% (0/" + translitcount[$('#imageside option:selected').text() + ".json"] + ")")
            }
        } else {
            $('#annocomplete').html("Unknown")
        }
        $('#indexingcomplete').html((indexedchars / translitcount[$('#imageside option:selected').text() + ".json"] * 100).toFixed(2) + "% (" + indexedchars + "/" + translitcount[$('#imageside option:selected').text() + ".json"] + ")")
    }).fail(function(jqXHR, textStatus, errorThrown) {
        anno.setAnnotations([]);
    })

    // Attach handlers to listen to events
    anno.on('createAnnotation', function(a) {
        console.log(a)
        console.log(JSON.stringify(a))
        curanno[a["id"]] = a
    });
    anno.on('deleteAnnotation', function(a) {
        delete curanno[a["id"]]
    });
    anno.on('updateAnnotation', function(a) {
        curanno[a["id"]] = a
    });
}

function loadVariants() {
    console.log($('#images option:selected').val())
    console.log(transliterations)
    toappend = ""
    if ($('#images option:selected').val() in periods) {
        toappend += periods[$('#images option:selected').val()] + " " //$('#period').html(periods[$('#images option:selected').val()])
    }
    if ($('#images option:selected').val() in languages) {
        toappend += languages[$('#images option:selected').val()]["language"] + " " + languages[$('#images option:selected').val()]["genre"]
        if (languages[$('#images option:selected').val()]["subgenre"] != "") {
            toappend += "<br/>" + languages[$('#images option:selected').val()]["subgenre"]
        }
        if (languages[$('#images option:selected').val()]["provenience"] != "") {
            toappend += "<br/>Provenience: " + languages[$('#images option:selected').val()]["provenience"]
        }
    }
    if ($('#images option:selected').val() in transliterations) {
        console.log(transliterations[$('#images option:selected').val()])
        if (transliterations[$('#images option:selected').val()] == "" || transliterations[$('#images option:selected').val()] == "@Tablet") {
            $('#transliterationtextarea').html("No transliteration available for text " + $('#images option:selected').val())
            if ($('#images option:selected').val() in hs2CDLI) {
                $('#textid').html("" + $('#images option:selected').val() + " - <a target=\"_blank\" href=\"https://cdli.ucla.edu/search/search_results.php?SearchMode=Text&ObjectID=" + hs2CDLI[$('#images option:selected').val()] + "\">" + hs2CDLI[$('#images option:selected').val()] + "</a>")
                $('#cdlilink').html("<a target=\"_blank\" href=\"https://cdli.ucla.edu/search/search_results.php?SearchMode=Text&ObjectID=" + hs2CDLI[$('#images option:selected').val()] + "\">" + hs2CDLI[$('#images option:selected').val()] + "</a>")
            } else {
                $('#textid').html("" + $('#images option:selected').val() + "")
            }
        } else {
            if ($('#images option:selected').val() in hs2CDLI) {
                $('#textid').html("" + $('#images option:selected').val() + " - <a target=\"_blank\" href=\"https://cdli.ucla.edu/search/search_results.php?SearchMode=Text&ObjectID=" + hs2CDLI[$('#images option:selected').val()] + "\">" + hs2CDLI[$('#images option:selected').val()] + "</a>")
                $('#cdlilink').html("<a target=\"_blank\" href=\"https://cdli.ucla.edu/search/search_results.php?SearchMode=Text&ObjectID=" + hs2CDLI[$('#images option:selected').val()] + "\">" + hs2CDLI[$('#images option:selected').val()] + "</a>")
            } else {
                $('#textid').html("" + $('#images option:selected').val() + "")
            }
        }
    } else {
        $('#textid').html("" + $('#images option:selected').val() + "")
        $('#transliterationtextarea').html("No transliteration available for text " + $('#images option:selected').val())
    }
    imgside = ""
    for (obj of urls[$('#images option:selected').val()]["variants"]) {
        if (obj["label"].includes("front")) {
            imgside += "<option value=\"" + obj["url"] + "\" selected=\"selected\">" + obj["label"] + "</option>"
        } else {
            imgside += "<option value=\"" + obj["url"] + "\">" + obj["label"] + "</option>"
        }
    }
    $('#imageside').html(imgside)
    $('#period').html(toappend)
    reinit("abc");
}

	character_postags={}
function formatTranslation(transliteration) {
    result = ""
    termmap = {
        "@obverse": "front",
        "@reverse": "back",
        "@left": "left",
        "@right": "right",
        "@top": "top",
        "@bottom": "bottom"
    }
    linecounter = 0
    charcounter = 0
    currentside = ""
    currentcolumn = ""
    curterm = ""
    for (line of transliteration.split("<br>")) {
        if (line.trim().startsWith("@")) {
            if (line.trim() in termmap) {
                currentside = termmap[line.trim()]
                curterm = line.trim()
            } else {
                currentside = line.trim()
                cuterm = currentside
            }
            linecounter = 0
            charcounter = 0
            result += line.trim() + "<br/>"
        } else if (line.trim().startsWith("column") || line.trim().startsWith("@column")) {
            currentside = currentside.replace(currentcolumn, "")
            currentcolumn = line.trim().replace(" ", "_")
            currentside = currentside + "_" + currentcolumn
            currentside = currentside.replace("__", "_")
            linecounter = 0
            charcounter = 0
            result += line.trim() + "<br/>"
        } else if (line.trim().match(/^\d/)) {
            linecounter += 1
            charcounter = 0
            newline = line.trim()
            splitted = line.trim().split(" ")
            for (word of splitted) {
                word = word.replace("{", "-{").replace("}", "}-").trim()
                if (word.slice(-1) == "-") {
                    word = word.substring(0, word.length - 1)
                }
                word = word.replace("--", "-")
                lasttranslation = ""
                if (word.includes("-") || word.includes(".")) {
                    for (charr of word.split(/[-\.]+/)) {
                        if (char != "") {
                            console.log(curterm)
                            console.log(currentside + "_" + linecounter + "_" + charcounter)
                            if (($("#images option:selected").text() in character_postags) && curterm in character_postags[$("#images option:selected").text()] && currentside + "_" + linecounter + "_" + charcounter in character_postags[$("#images option:selected").text()][curterm]) {
                                titleobj = character_postags[$("#images option:selected").text()][curterm][currentside + "_" + linecounter + "_" + charcounter]
                            }
                            if (typeof titleobj !== 'undefined' && titleobj["translation"] != lasttranslation) {
                                console.log(titleobj)
                                result += "<span id=\"" + currentside + "_" + linecounter + "_" + charcounter + "\" class=\"imagelink\" title=\"" + titleobj["word"] + " "
                                if (titleobj["translation"] != "_") {
                                    result += "[" + titleobj["translation"] + "] (" + titleobj["pos"] + ")\">"
                                    if (titleobj["translation"].includes("[") && !titleobj["translation"].includes("[1]")) {
                                        result += titleobj["translation"].substring(titleobj["translation"].indexOf("[") + 1, titleobj["translation"].indexOf("]")) + "</span>"
                                    } else {
                                        result += titleobj["translation"].replace("[1]", "") + "</span>"
                                    }
                                    lasttranslation = titleobj["translation"]
                                } else {
                                    result += "(" + titleobj["pos"] + ")\">"
                                    if (titleobj["translation"].includes("[") && !titleobj["translation"].includes("[1]")) {
                                        result += titleobj["translation"].substring(titleobj["translation"].indexOf("[") + 1, titleobj["translation"].indexOf("]")) + "</span>"
                                    } else {
                                        result += titleobj["translation"].replace("[1]", "") + "</span>"
                                    }
                                    lasttranslation = titleobj["translation"]
                                }
                            } else {
                                result += "<span id=\"" + currentside + "_" + linecounter + "_" + charcounter + "\" class=\"imagelink\">" + char + "</span>"
                            }
                            if (!char.endsWith("}")) {
                                result += "&nbsp;"
                            }
                            charcounter += 1
                        }
                    }
                } else {
                    if (($("#images option:selected").text() in character_postags) && curterm in character_postags[$("#images option:selected").text()] && currentside + "_" + linecounter + "_" + charcounter in character_postags[$("#images option:selected").text()][curterm]) {
                        titleobj = character_postags[$("#images option:selected").text()][curterm][currentside + "_" + linecounter + "_" + charcounter]
                    }
                    console.log(character_postags)
                    console.log($("#images option:selected").text())
                    console.log(curterm)
                    console.log(currentside + "_" + linecounter + "_" + charcounter)
                    if (typeof titleobj !== 'undefined' && titleobj["translation"] != lasttranslation) {
                        console.log(titleobj)
                        result += "<span id=\"" + currentside + "_" + linecounter + "_" + charcounter + "\" class=\"imagelink\" title=\"" + titleobj["word"] + " "
                        if (titleobj["translation"] != "_") {
                            result += "[" + titleobj["translation"] + "] (" + titleobj["pos"] + ")\">" + titleobj["translation"] + "</span>&nbsp;"
                            lasttranslation = titleobj["translation"]
                        } else {
                            result += "(" + titleobj["pos"] + ")\">" + titleobj["translation"] + "</span>&nbsp;"
                            lasttranslation = titleobj["translation"]
                        }
                    } else {
                        result += "<span id=\"" + currentside + "_" + linecounter + "_" + charcounter + "\" class=\"imagelink\">" + word + "</span>&nbsp;"
                    }
                    charcounter += 1
                }
            }
            result += "<br/>"
        } else {
            result += line + "<br/>"
        }
    }
    return result
}

function formatTransliteration(transliteration) {
    result = ""
    termmap = {
        "@obverse": "front",
        "@reverse": "back",
        "@left": "left",
        "@right": "right",
        "@top": "top",
        "@bottom": "bottom"
    }
    linecounter = 0
    charcounter = 0
    currentside = ""
    currentcolumn = ""
    curterm = ""
    for (line of transliteration.split("<br>")) {
        if (line.trim().startsWith("@")) {
            if (line.trim() in termmap) {
                currentside = termmap[line.trim()]
                curterm = line.trim()
            } else {
                currentside = line.trim()
                cuterm = currentside
            }
            linecounter = 0
            charcounter = 0
            result += line.trim() + "<br/>"
        } else if (line.trim().startsWith("column") || line.trim().startsWith("@column")) {
            currentside = currentside.replace(currentcolumn, "")
            currentcolumn = line.trim().replace(" ", "_")
            currentside = currentside + "_" + currentcolumn
            currentside = currentside.replace("__", "_")
            linecounter = 0
            charcounter = 0
            result += line.trim() + "<br/>"
        } else if (line.trim().match(/^\d/)) {
            linecounter += 1
            charcounter = 0
            newline = line.trim()
            splitted = line.trim().split(" ")
            for (word of splitted) {
                if (result.endsWith("-")) {
                    result = result.substring(0, result.length - 1) + "&nbsp;"
                }
                word = word.replace("{", "-{").replace("}", "}-").trim()
                if (word.slice(-1) == "-") {
                    word = word.substring(0, word.length - 1)
                }
                word = word.replace("--", "__-")
                if (word.includes("-") || word.includes(".")) {
                    wordsplitted = word.split(/[-\.]+/)
                    wordlen = wordsplitted.length
                    wordlencounter = 0
                    console.log(word)
                    console.log("WORDSPLIT: ")
                    console.log(wordsplitted)
                    indexcounter=0
                    for (char of wordsplitted) {
                        indexcounter+=char.length            
                        if (char != "") {
                            console.log(curterm)
                            console.log(currentside + "_" + linecounter + "_" + charcounter)
                            if (($("#images option:selected").text() in character_postags) && curterm in character_postags[$("#images option:selected").text()] && currentside + "_" + linecounter + "_" + charcounter in character_postags[$("#images option:selected").text()][curterm]) {
                                titleobj = character_postags[$("#images option:selected").text()][curterm][currentside + "_" + linecounter + "_" + charcounter]
                            }
                            if (typeof titleobj !== 'undefined') {
                                console.log(titleobj)
                                result += "<span id=\"" + currentside + "_" + linecounter + "_" + charcounter + "\" class=\"imagelink\" title=\"" + titleobj["word"] + " "
                                if (titleobj["translation"] != "_") {
                                    result += "[" + titleobj["translation"] + "] (" + titleobj["pos"] + ")\">" + char + "</span>"
                                } else {
                                    result += "(" + titleobj["pos"] + ")\">" + char + "</span>"
                                }
                            } else {
                                result += "<span id=\"" + currentside + "_" + linecounter + "_" + charcounter + "\" class=\"imagelink\">" + char + "</span>"
                            }
                            charcounter += 1
                            wordlencounter += 1
                            console.log(word + " - " + wordsplitted[wordlencounter])
                            if (wordlencounter >= wordlen || typeof(wordsplitted[wordlencounter]) == "undefined") {
                                result += "&nbsp;"
                            } else if (wordlencounter < wordlen && char.endsWith("__")) {
                                if(word.charAt(indexcounter)=="-"  || word.charAt(indexcounter)=="."){
                                    result += word.charAt(indexcounter)
                                } 
                                if(word.charAt(indexcounter+1)=="-" || word.charAt(indexcounter+1)=="."){
                                    result += word.charAt(indexcounter+1)
                                }                              
                            } else if (wordlencounter < wordlen && char.slice(-1) != "}" && wordsplitted[wordlencounter].charAt(0) != "{") {
                                if(word.charAt(indexcounter)=="-" || word.charAt(indexcounter)=="."){
                                    result += word.charAt(indexcounter)
                                }
                                if(word.charAt(indexcounter+1)=="-" || word.charAt(indexcounter+1)=="."){
                                    result += word.charAt(indexcounter+1)
                                }
                            }
                            indexcounter+=1
                        }
                    }
                    result += "&nbsp;"
                } else {
                    if (($("#images option:selected").text() in character_postags) && curterm in character_postags[$("#images option:selected").text()] && currentside + "_" + linecounter + "_" + charcounter in character_postags[$("#images option:selected").text()][curterm]) {
                        titleobj = character_postags[$("#images option:selected").text()][curterm][currentside + "_" + linecounter + "_" + charcounter]
                    }
                    console.log(character_postags)
                    console.log($("#images option:selected").text())
                    console.log(curterm)
                    console.log(currentside + "_" + linecounter + "_" + charcounter)
                    if (typeof titleobj !== 'undefined') {
                        console.log(titleobj)
                        result += "<span id=\"" + currentside + "_" + linecounter + "_" + charcounter + "\" class=\"imagelink\" title=\"" + titleobj["word"] + " "
                        if (titleobj["translation"] != "_") {
                            result += "[" + titleobj["translation"] + "] (" + titleobj["pos"] + ")\">" + word + "</span>&nbsp;"
                        } else {
                            result += "(" + titleobj["pos"] + ")\">" + word + "</span>&nbsp;"
                        }
                    } else {
                        result += "<span id=\"" + currentside + "_" + linecounter + "_" + charcounter + "\" class=\"imagelink\">" + word + "</span>&nbsp;"
                    }
                    charcounter += 1
                }
            }
            result += "<br/>"
        } else {
            result += line + "<br/>"
        }
    }
    result = result.replaceAll("-<br/>", "<br/>")
    result = result.replaceAll("__", "").replaceAll("__", "")
    return result
}

function manageApprovals() {
    tabletnumber = $('#images option:selected').val()
    side = $('#imageside option:selected').text().replace(".png", "").replace(tabletnumber + "_", "")
    if (!(tabletnumber in approvals)) {
        approvals[tabletnumber] = {}
    }
    if (!(side in approvals[tabletnumber])) {
        approvals[tabletnumber][side] = {}
    }
    if ("tags" in approvals[tabletnumber][side]) {
        approvaltags = approvals[tabletnumber][side]["tags"]
        taghtml = ""
        for (tag in approvaltags) {
            taghtml += "<span style=\"background-color:yellow;color:black;border-radius: 25px;border:1px solid black \">" + approvaltags[tag] + "</span>"
        }
        $('#mytags').html(taghtml)
    }
    if ("positioningcorrect" in approvals[tabletnumber][side]) {
        $('#positioningcorrect').val(approvals[tabletnumber][side]["positioningcorrect"]).change();
    }
    if ("transliterationcorrect" in approvals[tabletnumber][side]) {
        $('#transliterationcorrect').val(approvals[tabletnumber][side]["transliterationcorrect"]).change();
    }
    if ("indexingcorrect" in approvals[tabletnumber][side]) {
        $('#indexingcorrect').val(approvals[tabletnumber][side]["indexingcorrect"]).change();
    }
    if ("annotationscorrect" in approvals[tabletnumber][side]) {
        $('#annotationscorrect').val(approvals[tabletnumber][side]["annotationscorrect"]).change();
    }
    if ("annotationscomplete" in approvals[tabletnumber][side]) {
        $('#annotationscomplete').val(approvals[tabletnumber][side]["annotationscomplete"]).change();
    }
}