var annotations3d=[]

function reset3DHopAnnotations(presenter){
    annotations3d=[]
    presenter._selectionPoints=[]
    console.log(annotations3d)
    presenter.repaint()
}

function load3DHopAnnotations(annos,presenter){
    viewer.multiplepolygon=[]
    for(ann in annos){
        presenter._selectionPoints.push(ann["target"]["selector"])
    }
    presenter.repaint()
}

