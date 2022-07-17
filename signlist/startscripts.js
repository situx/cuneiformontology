
  var baseurl="http://purl.org/cuneiform/dict/"
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
        if(data.includes("http://purl.org/cuneiform/dict/")){
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
