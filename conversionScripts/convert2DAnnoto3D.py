import json
import sys
import os
import copy
import numpy as np
import pandas as pd
from PIL import Image
from plyfile import PlyData
from sklearn.decomposition import PCA

reduce_factors=[1]

reduce_factor = 1

def findZCoordinate():
    print("Find Z coordinates for points")

def rescale(self, X, A, B, C, D, force_float=False):
    retval = ((float(X - A) / (B - A)) * (D - C)) + C
    if not force_float and all(map(lambda x: type(x) == int, [X, A, B, C, D])):
        return int(round(retval))
    return retval

def csToWKT():
    wktString=""
    wktString+="CS[\"cartesian\",3],"
    wktString+="""AXIS["X", "geocentricX", ORDER[1],
        LENGTHUNIT["millimetre",1],
        ANGLEUNIT["degree", 0.0174532925199433]
    ],
    AXIS["Y", "geocentricY", ORDER[2],
        LENGTHUNIT["millimetre",1],
        ANGLEUNIT["degree", 0.0174532925199433]
    ],
    AXIS["Z", "geocentricZ", ORDER[3],
        LENGTHUNIT["millimetre",1]
    ]]"""
    return wktString

def pcaToWKT(translationvector, rotationmatrix, scaling):

    wktTransformation="COORDINATEOPERATION[\"Object To PCA\",SOURCECRS[CS[\"cartesian\", 3],"
    wktTransformation+="""  METHOD["Geocentric translations", ID["EPSG", 1031]],
    PARAMETER["X-axis translation",  """+str(translationvector[0])+""", LENGTHUNIT["metre", 1]],
    PARAMETER["Y-axis translation",  """+str(translationvector[1])+""", LENGTHUNIT["metre", 1]],
    PARAMETER["Z-axis translation",  """+str(translationvector[2])+""", LENGTHUNIT["metre", 1]],
    AREA["Object extent"],
    BBOX[-43.7, 112.85, -9.87, 153.68]]"""
    """    
    COORDINATEOPERATION["Object To PCA",
  SOURCECRS[CS["cartesian", 3],
    AXIS["X", "geocentricX", ORDER[1],
        LENGTHUNIT["millimetre",1],
        ANGLEUNIT["degree", 0.0174532925199433]
    ],
    AXIS["Y", "geocentricY", ORDER[2],
        LENGTHUNIT["millimetre",1],
        ANGLEUNIT["degree", 0.0174532925199433]
    ],
    AXIS["Z", "geocentricZ", ORDER[3],
        LENGTHUNIT["millimetre",1]
    ]],
  TARGETCRS[CS["cartesian", 3],
    AXIS["X", "geocentricX", ORDER[1],
        LENGTHUNIT["millimetre",1],
        ANGLEUNIT["degree", 0.0174532925199433]
    ],
    AXIS["Y", "geocentricY", ORDER[2],
        LENGTHUNIT["millimetre",1],
        ANGLEUNIT["degree", 0.0174532925199433]
    ],
    AXIS["Z", "geocentricZ", ORDER[3],
        LENGTHUNIT["millimetre",1]
    ]],
  METHOD["Geocentric translations", ID["EPSG", 1031]],
  PARAMETER["X-axis translation", -128.5, LENGTHUNIT["metre", 1]],
  PARAMETER["Y-axis translation",  -53.0, LENGTHUNIT["metre", 1]],
  PARAMETER["Z-axis translation",  153.4, LENGTHUNIT["metre", 1]]
  OPERATIONACCURACY[5],

"""    
    return wktTransformation


def do_PCA(mesh): 
  pca = PCA()
  pca.fit(mesh)
  PCA(copy=True, n_components=3, whiten=False)
  print("Fake Annotation: [ 1 1 1 ]")
  #f.write("Vector "+meshname+"\n")
  counter=1
  resultmatrix=[0,1,2,3]
  length=[]
  for variance, vector in zip(pca.explained_variance_, pca.components_):
    v = vector * 3 * np.sqrt(variance)
    #f.write("["+str(pca.mean_)+","+str(pca.mean_+v)+"] Length: "+str(np.linalg.norm(pca.mean_-(pca.mean_+v)))+"\n")
    length.append(str(np.linalg.norm(pca.mean_-(pca.mean_+v))))
    resultmatrix[0]=pca.mean_
    resultmatrix[counter]=pca.mean_+v
    counter+=1
  print(resultmatrix)
  print("Fake Annotation Translated: [ "+str(1+pca.mean_[0])+" "+str(1+pca.mean_[1])+" "+str(1+pca.mean_[2])+" ]")
  print("Fake Annotation Translated: [ "+str(1+pca.mean_[0])+" "+str(1+pca.mean_[1])+" "+str(1+pca.mean_[2])+" ]")
  reducedMesh = pca.transform(mesh)
  return [reducedMesh,pca,resultmatrix,length]
    

def getImageBBOX(imagepath):
    im = np.array(Image.open(imagepath))
    return {"minX":0,"maxX":im.shape[0],"minY":0,"maxY":im.shape[1]}

def getMeshBBOX(mesh):
    vertex_data = mesh['vertex'].data
    vertices = np.zeros([vertex_data.shape[0], 3], dtype=np.float32)
    bbox={"minX":9999,"minY":9999,"maxX":0,"maxY":0}
    for i in range(vertices.shape[0]):
        for j in range(3):
            #vertices[i, j] = vertex_data[i][j]
            if i<bbox["minX"]:
                bbox["minX"]=i
            if i>bbox["maxX"]:
                bbox["maxX"]=i
            if j<bbox["minY"]:
                bbox["minY"]=j
            if j>bbox["maxY"]:
                bbox["maxY"]=j
    print(bbox)
    return bbox

def transform(bbox2D,bbox3D,coordinates):
    i = 0
    for point in coordinates:
        print(point)
        point[0] = rescale(point[0], bbox2D["minX"], bbox2D["maxX"], bbox3D["minX"], bbox3D["maxX"], True)
        point[1] = rescale(point[1], bbox2D["minY"], bbox2D["maxY"], bbox3D["minY"], bbox3D["maxY"], True)
        point.append(0)
        i += 1
    return copy.deepcopy(coordinates)

def processAnnotations(annojson):
    charannos=[]
    wedgeannos=[]
    for anno in annojson:
        annotype=None
        annopolygon=None
        if "body" in annojson[anno]:
            for bodyitem in annojson[anno]["body"]:
                if "type" in bodyitem and bodyitem["type"]=="SpecificResource":
                    annotype=bodyitem["source"]["label"]
        if "target" in annojson[anno]:
            if "selector" in annojson[anno]["target"] and annojson[anno]["target"]["selector"]["type"]=="SvgSelector":
                annopolygon=extractPolgyonfromSVG(annojson[anno]["target"]["selector"]["value"])
        if annotype!=None and annopolygon!=None:
            if annotype=="Character":
                charannos.append({"polygon":annopolygon,"anno":annojson[anno],"id":anno})
            if annotype=="Wedge":
                wedgeannos.append({"polygon":annopolygon,"anno":annojson[anno],"id":anno})
    return {"charannos":charannos,"wedgeannos":{}}

def extractPolgyonfromSVG(svgpolygon):
    svgpolygon=svgpolygon.replace("<svg><polygon points=\"","").replace("\"></polygon></svg>","")
    result=[]
    for xypair in svgpolygon.split(" "):
        spl=xypair.split(",")
        result.append([float(spl[0]),float(spl[1])])
    return result
    
def create3DAnnotation(anno,anno3d,meshsource):
    anno["target"]["selector"]["type"]="WKTSelector"
    annovalue="POLYGON Z(("
    for coord in anno3d:
        annovalue+=str(coord[0])+" "+str(coord[1])+" 0, "
    annovalue=annovalue[0:-2]
    annovalue+="))"
    anno["target"]["selector"]["value"]=annovalue
    anno["target"]["source"]=meshsource
    return anno
    
def export3DAnnotationsAsWebAnnotation(annos3d):
    print("Convert to 3D Web Anno")

annotationfile="../examples/HS1174/ttl/annotations_front.json"  
meshfile="../examples/HS1174/mesh/HS_1174_HeiCuBeDa_GigaMesh.ply"
imagefile="../examples/HS1174/images/front.jpg" 
print("Loading Mesh "+str(meshfile))
mesh = PlyData.read(meshfile)
meshframe = pd.DataFrame({
'x':mesh['vertex']['x'][::reduce_factor],
'y':mesh['vertex']['y'][::reduce_factor],
'z':mesh['vertex']['z'][::reduce_factor]
})
print("Calculating BBOX of "+str(meshfile))
meshbbox=getMeshBBOX(mesh)
print(meshbbox)
print("Calulating PCA vectors of mesh")
pca = do_PCA(meshframe)
print(pca)
p0_pca_A = pca[2][0]
p1_pca_A = pca[2][1]
p2_pca_A = pca[2][2]
p3_pca_A = pca[2][3]
# pca-Koordinaten
p0_pca_B= np.array([0,0,0])
p1_pca_B= np.subtract(p1_pca_A, p0_pca_A)
p2_pca_B= np.subtract(p2_pca_A, p0_pca_A)
p3_pca_B= np.subtract(p3_pca_A, p0_pca_A)
# Matrizen
A = np.matrix([p0_pca_A , p1_pca_A, p2_pca_A, p3_pca_A])
B = np.matrix([p0_pca_B , p1_pca_B, p2_pca_B, p3_pca_B])
print(A)
print(B)
print("Getting Image BBOX")
imgbbox=getImageBBOX(imagefile)
print(imgbbox)
if len(sys.argv)>1:
    annotationfile=sys.argv[1]
  
with open(annotationfile,"r",encoding="utf-8") as json_file:
    annotations = json.load(json_file)    
res=processAnnotations(annotations)
print(res)
annoresjson={}
for anno in res["charannos"]:
    transanno=transform(imgbbox,meshbbox,anno["polygon"])
    webanno3d=create3DAnnotation(anno["anno"],transanno,meshfile)
    annoresjson[anno["id"]]=webanno3d
print(json.dumps(annoresjson))
