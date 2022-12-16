function onPickedSpot(id) {
  console.log(id)
  console.log(annos3d)
  if(id in annos3d){
    console.log(annos3d[id])
    content=""
    for(bod in annos3d[id]["body"]){
      content+=annos3d[id]["body"][bod]["value"]+" "
    }
    console.log(content)
    alert(content)
  }
}

function actionsToolbar(action) {
	if(action=='home') presenter.resetTrackball();
//--FULLSCREEN--
	else if(action=='full'  || action=='full_on') fullscreenSwitch();
//--FULLSCREEN--
//--ZOOM--
	else if(action=='zoomin') presenter.zoomIn();
	else if(action=='zoomout') presenter.zoomOut();
//--ZOOM--
//--LIGHTING--
	else if(action=='lighting' || action=='lighting_off') { presenter.enableSceneLighting(!presenter.isSceneLightingEnabled()); lightingSwitch(); }
//--LIGHTING--
//--LIGHT--
	else if(action=='light' || action=='light_on') { presenter.enableLightTrackball(!presenter.isLightTrackballEnabled()); lightSwitch(); }
//--LIGHT--
//--CAMERA--
	else if(action=='perspective' || action=='orthographic') { presenter.toggleCameraType(); cameraSwitch(); }
//--CAMERA--
//--COLOR--
	else if(action=='color' || action=='color_on') { presenter.toggleInstanceSolidColor(HOP_ALL, true); colorSwitch(); }
//--COLOR--
//--MEASURE--
	else if(action=='measure' || action=='measure_on') { presenter.enableMeasurementTool(!presenter.isMeasurementToolEnabled()); measureSwitch(); }
//--MEASURE--
//--POINT PICKING--
	else if(action=='pick' || action=='pick_on') { presenter.enablePickpointMode(!presenter.isPickpointModeEnabled()); pickpointSwitch(); }
//--POINT PICKING--
//--SCREENSHOT--
	else if(action=='screenshot') presenter.saveScreenshot();
//--SCREENSHOT--
//--SECTIONS--
	else if(action=='sections' || action=='sections_on') { sectiontoolReset(); sectiontoolSwitch(); }
//--SECTIONS--
}

//--MEASURE--
function onEndMeasure(measure) {
	// measure.toFixed(2) sets the number of decimals when displaying the measure
	// depending on the model measure units, use "mm","m","km" or whatever you have
	$('#measure-output').html(measure.toFixed(2) + "mm"); 
}
//--MEASURE--

alreadypickedpoints=[]

//--PICKPOINT--
function onEndPick(point) {
	// .toFixed(2) sets the number of decimals when displaying the picked point	
	var x = point[0].toFixed(2);
	var y = point[1].toFixed(2);
	var z = point[2].toFixed(2);
    $('#pickpoint-output').html("[ "+x+" , "+y+" , "+z+" ]");
  alreadypickedpoints.push([x,y,z])
  console.log(alreadypickedpoints)
  presenter._selectionPoints=alreadypickedpoints
  presenter.repaint()
} 
//--PICKPOINT--	

function selectionSwitch(on) {
    if (on === undefined) on = presenter.isSelectionToolEnabel();

    if (on) {
        measureSwitch(false)
        //TODO: Deselect all other Tools

        $('#select').css("visibility", "hidden");
        $('#select_on').css("visibility", "visible");
        $('#draw-canvas').css("cursor", "copy");


    } else {
        $('#select').css("visibility", "visible");
        $('#select_on').css("visibility", "hidden");
        $('#draw-canvas').css("cursor", "default");
        test = presenter.isAnyMeasurementEnabled()
        if (!presenter.isAnyMeasurementEnabled()) $('#draw-canvas').css("cursor", "default");

    }

}
