var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/HS1174_obverse_annotations",
        "parent": "https://www.w3.org/ns/activitystreams#Collection",
        "type": "instance",
        "text": "Image annotations on HS1174 obverse on medium 3D rendering (cuneiex:imgannotations/HS1174_obverse_annotations)",
        "data": {}
      },
      {
        "id": "https://www.w3.org/ns/activitystreams#Collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "collectionclass",
        "text": "Collection (as:Collection) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 115,
              "http://www.w3.org/ns/oa#Annotation": 115
            }
          },
          "from": {}
        },
        "instancecount": 117
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Collection",
        "parent": "#",
        "type": "collectionclass",
        "text": "Collection (skos:Collection) [1]",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0)",
        "data": {}
      },
      {
        "id": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "CoordinateOperation (geocrs:CoordinateOperation) [36]",
        "data": {
          "to": {
            "http://situx.github.io/proj4rdf/ont/crs/parameter": {
              "instancecount": 3,
              "http://situx.github.io/proj4rdf/ont/crs/OperationParameter": 3
            },
            "http://situx.github.io/proj4rdf/ont/crs/sourceCRS": {
              "instancecount": 1,
              "http://www.opengis.net/ont/crs/CartesianCS": 1,
              "https://situx.github.io/proj4rdf/ont/crs/CartesianCS": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.opengis.net/ont/geosparql#coordinateOperation": {
              "instancecount": 0,
              "http://purl.org/meshsparql#PCAReference": 1
            }
          }
        },
        "instancecount": 6
      },
      {
        "id": "http://www.w3.org/ns/prov#Entity",
        "parent": "#",
        "type": "class",
        "text": "Entity (prov:Entity)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_zaxis_translation)",
        "data": {}
      },
      {
        "id": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "OperationParameter (geocrs:OperationParameter) [108]",
        "data": {
          "to": {
            "http://situx.github.io/proj4rdf/ont/crs/usesValue": {
              "instancecount": 1,
              "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://situx.github.io/proj4rdf/ont/crs/parameter": {
              "instancecount": 0,
              "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_09a66ef9-8b3c-488b-ad51-d280404f2a7f_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_1c74c217-b7cb-4ac8-92d8-86051e811659_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_28b2e58a-c464-462e-aa73-a369ffaee903_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_32de1d43-3933-412a-ba17-0f3053a29eee_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_4776df65-3c46-4ae6-a868-1f416c8a544b_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_47fdacc5-6576-4c1e-8743-f93be32e998b_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_4daae4c2-bd2a-4911-86e0-31dfeea22595_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_9249bcca-57c7-4bce-bc99-f1c4416702b1_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_9a3572bc-d972-43e5-8aa3-b18876e717fd_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_aaf1409a-87bb-4dc4-aac6-880be041ad64_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_d48fef72-5219-4b73-bf9d-534c60c62956_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_d79ca86c-6f7a-44b4-b499-3161e787e3d8_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_e57afe5b-16df-4194-b793-8ad5beb74fe0_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "OperationParameterValue (geocrs:OperationParameterValue) [108]",
        "data": {
          "to": {
            "http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://situx.github.io/proj4rdf/ont/crs/usesValue": {
              "instancecount": 0,
              "http://situx.github.io/proj4rdf/ont/crs/OperationParameter": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/cs/cartesian_ax3_mm_axis1",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Cartesian coordinate system with 3 axis in millimetre units: Axis 1 (cartesian_ax3_mm_axis1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/cs/cartesian_ax3_mm_axis2",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Cartesian coordinate system with 3 axis in millimetre units: Axis 2 (cartesian_ax3_mm_axis2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/cs/cartesian_ax3_mm_axis3",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Cartesian coordinate system with 3 axis in millimetre units: Axis 3 (cartesian_ax3_mm_axis3)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "parent": "#",
        "type": "class",
        "text": "CoordinateSystemAxis (geocrs:CoordinateSystemAxis) [3]",
        "data": {
          "to": {
            "http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/crs/abbreviation": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/crs/axisDirection": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/crs/axisOrder": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/abbreviation": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/asSVG": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/axisDirection": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/axisOrder": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.opengis.net/ont/crs/axis": {
              "instancecount": 0,
              "http://www.opengis.net/ont/crs/CartesianCS": 1,
              "https://situx.github.io/proj4rdf/ont/crs/CartesianCS": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/axis": {
              "instancecount": 0,
              "http://www.opengis.net/ont/crs/CartesianCS": 1,
              "https://situx.github.io/proj4rdf/ont/crs/CartesianCS": 1
            }
          }
        },
        "instancecount": 11
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char1_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_W",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 1 wedge 1 (cuneiex:HS1174_obverse_line1_char1_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char1_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_W",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 1 wedge 2 (cuneiex:HS1174_obverse_line1_char1_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char1_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_W",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 1 wedge 3 (cuneiex:HS1174_obverse_line1_char1_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_W",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 1 (cuneiex:HS1174_obverse_line2_char2_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_W",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 3 (cuneiex:HS1174_obverse_line2_char2_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char3_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_W",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 3 wedge 1 (cuneiex:HS1174_obverse_line2_char3_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char2_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_W",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 2 wedge 3 (cuneiex:HS1174_obverse_line3_char2_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char2_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_W",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 2 wedge 4 (cuneiex:HS1174_obverse_line3_char2_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char4_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_W",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 4 wedge 2 (cuneiex:HS1174_obverse_line4_char4_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#PaleoCode_W",
        "parent": "http://www.purl.org/cuneiform#PaleoCodeWedgeType",
        "type": "class",
        "text": "PaleoCode_W (purl:cuneiform#PaleoCode_W) [9]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSource": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#SpecificResource": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "http://www.purl.org/cuneiform#PaleoCodeWedgeType",
        "parent": "http://www.purl.org/cuneiform#WedgeType",
        "type": "class",
        "text": "PaleoCodeWedgeType (purl:cuneiform#PaleoCodeWedgeType)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char2_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 2 wedge 1 (cuneiex:HS1174_obverse_line1_char2_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char2_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 2 wedge 2 (cuneiex:HS1174_obverse_line1_char2_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char2_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 2 wedge 3 (cuneiex:HS1174_obverse_line1_char2_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char3_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 3 wedge 1 (cuneiex:HS1174_obverse_line1_char3_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char3_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 3 wedge 3 (cuneiex:HS1174_obverse_line1_char3_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char3_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 3 wedge 5 (cuneiex:HS1174_obverse_line1_char3_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char3_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 3 wedge 6 (cuneiex:HS1174_obverse_line1_char3_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char4_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 4 wedge 6 (cuneiex:HS1174_obverse_line1_char4_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge10_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 10 (cuneiex:HS1174_obverse_line2_char2_wedge10_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 2 (cuneiex:HS1174_obverse_line2_char2_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge7_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 7 (cuneiex:HS1174_obverse_line2_char2_wedge7_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge9_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 9 (cuneiex:HS1174_obverse_line2_char2_wedge9_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char3_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 3 wedge 2 (cuneiex:HS1174_obverse_line2_char3_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char4_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 4 wedge 1 (cuneiex:HS1174_obverse_line2_char4_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char4_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 4 wedge 4 (cuneiex:HS1174_obverse_line2_char4_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char5_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 5 wedge 4 (cuneiex:HS1174_obverse_line2_char5_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char1_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 1 wedge 3 (cuneiex:HS1174_obverse_line3_char1_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 3 wedge 6 (cuneiex:HS1174_obverse_line3_char3_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_wedge9_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 3 wedge 9 (cuneiex:HS1174_obverse_line3_char3_wedge9_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 1 wedge 1 (cuneiex:HS1174_obverse_line4_char1_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 1 wedge 2 (cuneiex:HS1174_obverse_line4_char1_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 1 wedge 3 (cuneiex:HS1174_obverse_line4_char1_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 1 wedge 4 (cuneiex:HS1174_obverse_line4_char1_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 1 wedge 5 (cuneiex:HS1174_obverse_line4_char1_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 1 wedge 6 (cuneiex:HS1174_obverse_line4_char1_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_wedge7_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 1 wedge 7 (cuneiex:HS1174_obverse_line4_char1_wedge7_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_wedge8_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 1 wedge 8 (cuneiex:HS1174_obverse_line4_char1_wedge8_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_wedge9_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 1 wedge 9 (cuneiex:HS1174_obverse_line4_char1_wedge9_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char2_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 2 wedge 1 (cuneiex:HS1174_obverse_line4_char2_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char2_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 2 wedge 4 (cuneiex:HS1174_obverse_line4_char2_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char2_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 2 wedge 5 (cuneiex:HS1174_obverse_line4_char2_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char3_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 3 wedge 6 (cuneiex:HS1174_obverse_line4_char3_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char4_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 4 wedge 1 (cuneiex:HS1174_obverse_line4_char4_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char4_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 4 wedge 5 (cuneiex:HS1174_obverse_line4_char4_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_A",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char  wedge 6 (cuneiex:HS1174_obverse_line4_char_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#PaleoCode_A",
        "parent": "http://www.purl.org/cuneiform#PaleoCodeWedgeType",
        "type": "class",
        "text": "PaleoCode_A (purl:cuneiform#PaleoCode_A) [35]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSource": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#SpecificResource": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char3_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 3 wedge 2 (cuneiex:HS1174_obverse_line1_char3_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char3_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 3 wedge 4 (cuneiex:HS1174_obverse_line1_char3_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char4_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 4 wedge 1 (cuneiex:HS1174_obverse_line1_char4_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char4_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 4 wedge 2 (cuneiex:HS1174_obverse_line1_char4_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char4_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 4 wedge 3 (cuneiex:HS1174_obverse_line1_char4_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char4_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 4 wedge 4 (cuneiex:HS1174_obverse_line1_char4_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char4_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 1 char 4 wedge 5 (cuneiex:HS1174_obverse_line1_char4_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char1_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 1 wedge 1 (cuneiex:HS1174_obverse_line2_char1_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char1_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 1 wedge 2 (cuneiex:HS1174_obverse_line2_char1_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char1_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 1 wedge 3 (cuneiex:HS1174_obverse_line2_char1_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char1_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 1 wedge 4 (cuneiex:HS1174_obverse_line2_char1_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char1_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 1 wedge 5 (cuneiex:HS1174_obverse_line2_char1_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char1_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 1 wedge 6 (cuneiex:HS1174_obverse_line2_char1_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 4 (cuneiex:HS1174_obverse_line2_char2_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 5 (cuneiex:HS1174_obverse_line2_char2_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 6 (cuneiex:HS1174_obverse_line2_char2_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_wedge8_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 2 wedge 8 (cuneiex:HS1174_obverse_line2_char2_wedge8_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char3_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 3 wedge 3 (cuneiex:HS1174_obverse_line2_char3_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char3_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 3 wedge 5 (cuneiex:HS1174_obverse_line2_char3_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char4_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 4 wedge 2 (cuneiex:HS1174_obverse_line2_char4_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char4_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 4 wedge 3 (cuneiex:HS1174_obverse_line2_char4_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char4_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 4 wedge 5 (cuneiex:HS1174_obverse_line2_char4_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char4_wedge7_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 4 wedge 7 (cuneiex:HS1174_obverse_line2_char4_wedge7_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char5_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 5 wedge 1 (cuneiex:HS1174_obverse_line2_char5_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char5_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 5 wedge 2 (cuneiex:HS1174_obverse_line2_char5_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char5_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 5 wedge 3 (cuneiex:HS1174_obverse_line2_char5_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char1_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 1 wedge 1 (cuneiex:HS1174_obverse_line3_char1_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char1_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 1 wedge 2 (cuneiex:HS1174_obverse_line3_char1_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char2_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 2 wedge 1 (cuneiex:HS1174_obverse_line3_char2_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 3 wedge 1 (cuneiex:HS1174_obverse_line3_char3_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 3 wedge 2 (cuneiex:HS1174_obverse_line3_char3_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 3 wedge 3 (cuneiex:HS1174_obverse_line3_char3_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 3 wedge 4 (cuneiex:HS1174_obverse_line3_char3_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 3 wedge 5 (cuneiex:HS1174_obverse_line3_char3_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_wedge7_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 3 wedge 7 (cuneiex:HS1174_obverse_line3_char3_wedge7_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char2_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 2 wedge 2 (cuneiex:HS1174_obverse_line4_char2_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char2_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 2 wedge 3 (cuneiex:HS1174_obverse_line4_char2_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char3_wedge1_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 3 wedge 1 (cuneiex:HS1174_obverse_line4_char3_wedge1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char3_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 3 wedge 2 (cuneiex:HS1174_obverse_line4_char3_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char3_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 3 wedge 3 (cuneiex:HS1174_obverse_line4_char3_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char3_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 3 wedge 4 (cuneiex:HS1174_obverse_line4_char3_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char3_wedge5_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 3 wedge 5 (cuneiex:HS1174_obverse_line4_char3_wedge5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char4_wedge3_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 4 wedge 3 (cuneiex:HS1174_obverse_line4_char4_wedge3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char4_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_B",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 4 char 4 wedge 4 (cuneiex:HS1174_obverse_line4_char4_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#PaleoCode_B",
        "parent": "http://www.purl.org/cuneiform#PaleoCodeWedgeType",
        "type": "class",
        "text": "PaleoCode_B (purl:cuneiform#PaleoCode_B) [44]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSource": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#SpecificResource": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char1_wedge7_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_C",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 1 wedge 7 (cuneiex:HS1174_obverse_line2_char1_wedge7_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char3_wedge8_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_C",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 3 wedge 8 (cuneiex:HS1174_obverse_line2_char3_wedge8_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char4_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_C",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 4 wedge 6 (cuneiex:HS1174_obverse_line2_char4_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_wedge8_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_C",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 3 wedge 8 (cuneiex:HS1174_obverse_line3_char3_wedge8_glyph)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#PaleoCode_C",
        "parent": "http://www.purl.org/cuneiform#PaleoCodeWedgeType",
        "type": "class",
        "text": "PaleoCode_C (purl:cuneiform#PaleoCode_C) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSource": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#SpecificResource": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char1_wedge8_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_D",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 1 wedge 8 (cuneiex:HS1174_obverse_line2_char1_wedge8_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char4_wedge8_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_D",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 4 wedge 8 (cuneiex:HS1174_obverse_line2_char4_wedge8_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char2_wedge2_glyph",
        "parent": "http://www.purl.org/cuneiform#PaleoCode_D",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 3 char 2 wedge 2 (cuneiex:HS1174_obverse_line3_char2_wedge2_glyph)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#PaleoCode_D",
        "parent": "http://www.purl.org/cuneiform#PaleoCodeWedgeType",
        "type": "class",
        "text": "PaleoCode_D (purl:cuneiform#PaleoCode_D) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSource": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#SpecificResource": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char3_wedge4_glyph",
        "parent": "http://www.purl.org/cuneiform#WedgeGlyph",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 3 wedge 4 (cuneiex:HS1174_obverse_line2_char3_wedge4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char3_wedge6_glyph",
        "parent": "http://www.purl.org/cuneiform#WedgeGlyph",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 3 wedge 6 (cuneiex:HS1174_obverse_line2_char3_wedge6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char3_wedge7_glyph",
        "parent": "http://www.purl.org/cuneiform#WedgeGlyph",
        "type": "instance",
        "text": "Wedge Glyph of cuneiform wedge at HS1174 obverse line 2 char 3 wedge 7 (cuneiex:HS1174_obverse_line2_char3_wedge7_glyph)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#WedgeGlyph",
        "parent": "#",
        "type": "class",
        "text": "WedgeGlyph (purl:cuneiform#WedgeGlyph) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSource": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#SpecificResource": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 7 on 3D rendering (cuneiex:imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/059d6ee0-b203-4059-a996-767b25994eb7",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 2 on 3D rendering (cuneiex:imgannotations/059d6ee0-b203-4059-a996-767b25994eb7)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 4 on 3D rendering (cuneiex:imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 5 wedge 1 on 3D rendering (cuneiex:imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 2 char 8 on 3D rendering (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0d375432-3447-40f2-b1ae-d82104591707",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/0d375432-3447-40f2-b1ae-d82104591707)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 1 char 4 on 3D rendering (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 5 wedge 4 on 3D rendering (cuneiex:imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 8 on 3D rendering (cuneiex:imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 2 on 3D rendering (cuneiex:imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/18233348-81d5-4d69-8977-e5544363b7e8",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/18233348-81d5-4d69-8977-e5544363b7e8)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 9 on 3D rendering (cuneiex:imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 3 char 2 on 3D rendering (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/20238516-d42d-4c23-82f8-94626948d45b",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 4 on 3D rendering (cuneiex:imgannotations/20238516-d42d-4c23-82f8-94626948d45b)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 2 char 7 on 3D rendering (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 8 on 3D rendering (cuneiex:imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 9 on 3D rendering (cuneiex:imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 4 on 3D rendering (cuneiex:imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 8 on 3D rendering (cuneiex:imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 4 on 3D rendering (cuneiex:imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 4 char 4 on 3D rendering (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 10 on 3D rendering (cuneiex:imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 5 on 3D rendering (cuneiex:imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 6 on 3D rendering (cuneiex:imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 2 char 2 on 3D rendering (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 3 char 1 on 3D rendering (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 4 char 3 on 3D rendering (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 1 char 1 on 3D rendering (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 6 on 3D rendering (cuneiex:imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 2 wedge 4 on 3D rendering (cuneiex:imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/55939666-2415-432b-9868-8b13b83042b7",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/55939666-2415-432b-9868-8b13b83042b7)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 5 wedge 2 on 3D rendering (cuneiex:imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/60530cc4-8562-410f-9624-d28fa4576258",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/60530cc4-8562-410f-9624-d28fa4576258)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 5 on 3D rendering (cuneiex:imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 8 on 3D rendering (cuneiex:imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 9 on 3D rendering (cuneiex:imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 8 on 3D rendering (cuneiex:imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74320630-35e8-40e0-b826-766c3940e6fc",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 5 on 3D rendering (cuneiex:imgannotations/74320630-35e8-40e0-b826-766c3940e6fc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 6 on 3D rendering (cuneiex:imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 4 on 3D rendering (cuneiex:imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 3 on 3D rendering (cuneiex:imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/827cde28-5c40-448e-8406-d06bd1012216",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 7 on 3D rendering (cuneiex:imgannotations/827cde28-5c40-448e-8406-d06bd1012216)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 2 on 3D rendering (cuneiex:imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 4 on 3D rendering (cuneiex:imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 1 char 2 on 3D rendering (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 5 on 3D rendering (cuneiex:imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 2 char 1 on 3D rendering (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 5 on 3D rendering (cuneiex:imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 5 on 3D rendering (cuneiex:imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse on 3D rendering (cuneiex:imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9e548954-e3a5-415e-9794-24306e536b5c",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/9e548954-e3a5-415e-9794-24306e536b5c)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 5 wedge 3 on 3D rendering (cuneiex:imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 3 char 3 on 3D rendering (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 1 on 3D rendering (cuneiex:imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 1 on 3D rendering (cuneiex:imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 2 char 3 on 3D rendering (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 6 on 3D rendering (cuneiex:imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 1 on 3D rendering (cuneiex:imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 7 on 3D rendering (cuneiex:imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 7 on 3D rendering (cuneiex:imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 1 char 3 on 3D rendering (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 4 char 2 on 3D rendering (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dc07557b-f507-41df-933e-a980414d76fe",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 7 on 3D rendering (cuneiex:imgannotations/dc07557b-f507-41df-933e-a980414d76fe)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char  wedge 6 on 3D rendering (cuneiex:imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/de61550e-85da-4c06-a8d9-737d46509629",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 5 on 3D rendering (cuneiex:imgannotations/de61550e-85da-4c06-a8d9-737d46509629)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 8 on 3D rendering (cuneiex:imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 4 on 3D rendering (cuneiex:imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e384c172-4242-406e-964c-316b8c4fe59d",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 6 on 3D rendering (cuneiex:imgannotations/e384c172-4242-406e-964c-316b8c4fe59d)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 obverse line 4 char 1 on 3D rendering (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 7 on 3D rendering (cuneiex:imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/eefb61b9-f4c9-4428-89ce-716395059391",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/eefb61b9-f4c9-4428-89ce-716395059391)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f81a66b0-e180-409c-8506-53f42837c34b",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 3 on 3D rendering (cuneiex:imgannotations/f81a66b0-e180-409c-8506-53f42837c34b)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f968847c-2649-4225-8499-8c048c086f96",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 3 on 3D rendering (cuneiex:imgannotations/f968847c-2649-4225-8499-8c048c086f96)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#Annotation",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "Annotation (oa:Annotation) [150]",
        "data": {
          "to": {
            "http://purl.org/dc/terms/creator": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/rights": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#hasBody": {
              "instancecount": 5,
              "http://www.w3.org/ns/oa#TextualBody": 3,
              "http://www.w3.org/ns/oa#SpecificResource": 2
            },
            "http://www.w3.org/ns/oa#hasTarget": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 2
            },
            "https://www.w3.org/ns/activitystreams#generator": {
              "instancecount": 1,
              "http://purl.org/dc/elements/1.1/Software": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "https://www.w3.org/ns/activitystreams#Collection": 1
            }
          }
        },
        "instancecount": 12
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 7 (cuneiex:imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 5 (cuneiex:imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 8 (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type w (cuneiex:imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 5 (cuneiex:imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 8 (cuneiex:imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type d (cuneiex:imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type w (cuneiex:imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 9 (cuneiex:imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 7 (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 8 (cuneiex:imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type c (cuneiex:imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 9 (cuneiex:imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 8 (cuneiex:imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type d (cuneiex:imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 10 (cuneiex:imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type c (cuneiex:imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type w (cuneiex:imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type w (cuneiex:imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 5 (cuneiex:imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type w (cuneiex:imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type w (cuneiex:imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 8 (cuneiex:imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 9 (cuneiex:imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 8 (cuneiex:imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 7 (cuneiex:imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type w (cuneiex:imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 5 (cuneiex:imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 7 (cuneiex:imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 7 (cuneiex:imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 7 (cuneiex:imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type c (cuneiex:imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex  (cuneiex:imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 5 (cuneiex:imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 8 (cuneiex:imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type c (cuneiex:imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type w (cuneiex:imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 6 (cuneiex:imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 1 (cuneiex:imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type w (cuneiex:imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 7 (cuneiex:imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type d (cuneiex:imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 3 (cuneiex:imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 2 (cuneiex:imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type a (cuneiex:imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_wedgetype)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side obverse (cuneiex:imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_wedgeindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge 4 (cuneiex:imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_wedgeindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_wedgetype",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Wedge Type b (cuneiex:imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_wedgetype)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#TextualBody",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "TextualBody (oa:TextualBody) [599]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#motivatedBy": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#purpose": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasBody": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#Annotation": 1
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 4 wedge 7 on 3D rendering (cuneiex:imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 4 wedge 2 on 3D rendering (cuneiex:imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 1 wedge 4 on 3D rendering (cuneiex:imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 5 wedge 1 on 3D rendering (cuneiex:imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 2 char 8 on 3D rendering (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 2 char 8 on 3D rendering (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/0d375432-3447-40f2-b1ae-d82104591707_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 1 char 4 on 3D rendering (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 1 char 4 on 3D rendering (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 5 wedge 4 on 3D rendering (cuneiex:imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 1 wedge 8 on 3D rendering (cuneiex:imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 4 wedge 2 on 3D rendering (cuneiex:imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 1 wedge 9 on 3D rendering (cuneiex:imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 3 char 2 on 3D rendering (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 3 char 2 on 3D rendering (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 4 wedge 4 on 3D rendering (cuneiex:imgannotations/20238516-d42d-4c23-82f8-94626948d45b_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 2 char 7 on 3D rendering (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 2 char 7 on 3D rendering (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 3 wedge 8 on 3D rendering (cuneiex:imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 9 on 3D rendering (cuneiex:imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 1 wedge 4 on 3D rendering (cuneiex:imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 4 wedge 8 on 3D rendering (cuneiex:imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 2 wedge 4 on 3D rendering (cuneiex:imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 4 char 4 on 3D rendering (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 4 char 4 on 3D rendering (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 10 on 3D rendering (cuneiex:imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 2 wedge 5 on 3D rendering (cuneiex:imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 1 wedge 6 on 3D rendering (cuneiex:imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 2 char 2 on 3D rendering (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 2 char 2 on 3D rendering (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 3 char 1 on 3D rendering (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 3 char 1 on 3D rendering (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 4 char 3 on 3D rendering (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 4 char 3 on 3D rendering (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 1 char 1 on 3D rendering (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 1 char 1 on 3D rendering (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 4 wedge 6 on 3D rendering (cuneiex:imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 2 wedge 4 on 3D rendering (cuneiex:imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/55939666-2415-432b-9868-8b13b83042b7_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 5 wedge 2 on 3D rendering (cuneiex:imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/60530cc4-8562-410f-9624-d28fa4576258_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 5 on 3D rendering (cuneiex:imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 1 wedge 8 on 3D rendering (cuneiex:imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 3 wedge 9 on 3D rendering (cuneiex:imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 8 on 3D rendering (cuneiex:imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 1 wedge 5 on 3D rendering (cuneiex:imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 1 wedge 6 on 3D rendering (cuneiex:imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 4 on 3D rendering (cuneiex:imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 4 wedge 3 on 3D rendering (cuneiex:imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 3 wedge 7 on 3D rendering (cuneiex:imgannotations/827cde28-5c40-448e-8406-d06bd1012216_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 4 wedge 2 on 3D rendering (cuneiex:imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 4 wedge 4 on 3D rendering (cuneiex:imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 1 char 2 on 3D rendering (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 1 char 2 on 3D rendering (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 4 wedge 5 on 3D rendering (cuneiex:imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 2 char 1 on 3D rendering (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 2 char 1 on 3D rendering (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 4 wedge 5 on 3D rendering (cuneiex:imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 4 wedge 5 on 3D rendering (cuneiex:imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse on 3D rendering (cuneiex:imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 5 wedge 3 on 3D rendering (cuneiex:imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 3 char 3 on 3D rendering (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 3 char 3 on 3D rendering (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 4 wedge 1 on 3D rendering (cuneiex:imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 4 wedge 1 on 3D rendering (cuneiex:imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 2 char 3 on 3D rendering (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 2 char 3 on 3D rendering (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 6 on 3D rendering (cuneiex:imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 4 wedge 1 on 3D rendering (cuneiex:imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 3 wedge 7 on 3D rendering (cuneiex:imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 1 wedge 7 on 3D rendering (cuneiex:imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 1 char 3 on 3D rendering (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 1 char 3 on 3D rendering (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 4 char 2 on 3D rendering (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 4 char 2 on 3D rendering (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 1 wedge 7 on 3D rendering (cuneiex:imgannotations/dc07557b-f507-41df-933e-a980414d76fe_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char  wedge 6 on 3D rendering (cuneiex:imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 1 wedge 5 on 3D rendering (cuneiex:imgannotations/de61550e-85da-4c06-a8d9-737d46509629_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 3 wedge 8 on 3D rendering (cuneiex:imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 4 wedge 4 on 3D rendering (cuneiex:imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 4 wedge 6 on 3D rendering (cuneiex:imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 obverse line 4 char 1 on 3D rendering (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 obverse line 4 char 1 on 3D rendering (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 2 char 2 wedge 7 on 3D rendering (cuneiex:imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 4 wedge 3 on 3D rendering (cuneiex:imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 1 char 4 wedge 3 on 3D rendering (cuneiex:imgannotations/f968847c-2649-4225-8499-8c048c086f96_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 4 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 obverse line 3 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_body_glyph)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#SpecificResource",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "SpecificResource (oa:SpecificResource) [210]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#hasSource": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#PaleoCode_B": 1
            },
            "http://www.w3.org/ns/oa#motivatedBy": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasBody": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#Annotation": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 7 on 3D rendering (cuneiex:imgannotations/00cda0d2-a7fb-4e22-b367-242a7c8119fc_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 2 on 3D rendering (cuneiex:imgannotations/059d6ee0-b203-4059-a996-767b25994eb7_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 4 on 3D rendering (cuneiex:imgannotations/0753a90c-1198-4ddd-b818-571579b2a7cf_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 5 wedge 1 on 3D rendering (cuneiex:imgannotations/0821f61c-c8f6-4d7e-8f32-976f25af4bb9_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 8 on 3D rendering (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0d375432-3447-40f2-b1ae-d82104591707_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/0d375432-3447-40f2-b1ae-d82104591707_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 4 on 3D rendering (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 5 wedge 4 on 3D rendering (cuneiex:imgannotations/0e8e1d31-9942-4cdf-8f68-e01ff4a51926_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/0f55aeec-eefc-4ac2-baf1-f5d15f762d6b_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 8 on 3D rendering (cuneiex:imgannotations/119e80df-5bb3-4733-9840-65b48dc8a458_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 2 on 3D rendering (cuneiex:imgannotations/13b2fdfc-a233-430e-a2c6-6abeb016aaeb_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/18233348-81d5-4d69-8977-e5544363b7e8_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 9 on 3D rendering (cuneiex:imgannotations/1923adc1-8dc0-48e6-b177-58c1d1d31cc7_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/1c59a341-b59f-4ead-937a-d5dfea54170e_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 3 char 2 on 3D rendering (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/20238516-d42d-4c23-82f8-94626948d45b_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 4 on 3D rendering (cuneiex:imgannotations/20238516-d42d-4c23-82f8-94626948d45b_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/22ce9eb9-dcbb-4bc0-8af0-0dc8e604f2fb_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/2333d226-57d3-4122-82e5-1eb5858315a7_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 7 on 3D rendering (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 8 on 3D rendering (cuneiex:imgannotations/2a8bcac4-2342-40c2-932f-29b5931bd98a_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 9 on 3D rendering (cuneiex:imgannotations/2de86608-03d1-4572-ab60-69a9188f6b1d_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 4 on 3D rendering (cuneiex:imgannotations/2e103f24-158a-4017-bfa6-ad96d5bfac35_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 8 on 3D rendering (cuneiex:imgannotations/2e937f6f-e410-41b8-b5f3-f3eda97915b4_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 4 on 3D rendering (cuneiex:imgannotations/2f7901c7-4ed4-4135-aed7-f2ee7ceedfec_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/302f462b-5a85-4129-ab64-71b9c5e7de77_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 4 on 3D rendering (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/34a4f506-5fb4-4b92-a32a-7278f8f19e40_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 10 on 3D rendering (cuneiex:imgannotations/395cc156-f85f-45be-8786-743a4e6d8a6c_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 5 on 3D rendering (cuneiex:imgannotations/3b4fb577-3201-495a-9f14-0b7bc875a278_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 6 on 3D rendering (cuneiex:imgannotations/44394056-5b4d-4d9a-b917-04c610fea0d0_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 2 on 3D rendering (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 3 char 1 on 3D rendering (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 3 on 3D rendering (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/4a1aed45-24db-4cb9-a760-28486d7f6707_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 1 on 3D rendering (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 6 on 3D rendering (cuneiex:imgannotations/4fde8eef-a86f-42b8-ba81-648d82f07acd_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 2 wedge 4 on 3D rendering (cuneiex:imgannotations/543a567d-b925-4644-a115-da4fbd7cfa12_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/55939666-2415-432b-9868-8b13b83042b7_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/55939666-2415-432b-9868-8b13b83042b7_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/5d9921bb-d810-4885-91c5-18c64d14c511_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/5dd92e14-a9a2-4153-b431-73e2f7832a64_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 5 wedge 2 on 3D rendering (cuneiex:imgannotations/5fca1a08-a8a0-4c7a-b1dd-5746ea72ea71_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/60530cc4-8562-410f-9624-d28fa4576258_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/60530cc4-8562-410f-9624-d28fa4576258_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 5 on 3D rendering (cuneiex:imgannotations/610a351f-143b-4fc7-b89c-3f3373d88f46_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/6775d9df-397d-49bf-ae32-c94bf37b91bf_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/69e6c278-caca-444d-b4bf-7b0ae06c6e98_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 8 on 3D rendering (cuneiex:imgannotations/6d5e30cb-70d8-4295-8bc6-d927c3706a75_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 9 on 3D rendering (cuneiex:imgannotations/6e9d7570-b5e5-44a5-824c-8d68550bda5f_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/701dcc35-84ef-4f69-87a2-04d67071badd_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/70a82f4b-157e-48d4-9e83-d646e488697e_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 8 on 3D rendering (cuneiex:imgannotations/7109412e-1f80-469f-93df-aba62c22e4dd_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 5 on 3D rendering (cuneiex:imgannotations/74320630-35e8-40e0-b826-766c3940e6fc_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/74c24a98-1f7a-4393-85ab-7a2f6519ad86_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 6 on 3D rendering (cuneiex:imgannotations/7a8a8a3f-225b-4102-a306-41143980e4ff_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 4 on 3D rendering (cuneiex:imgannotations/7b837315-b8d6-4b7e-8491-4217efebe15d_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 3 on 3D rendering (cuneiex:imgannotations/7bcf54f2-b0a5-4dcc-b274-95afbae42f08_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/7e496dec-0a73-4273-af45-1a0bc5b5fe4d_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/7f2e6bd5-6a05-475e-841b-e2f8bde1cb54_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/7fd3c5c4-4ef4-41be-8709-9d2c488e32f0_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/827cde28-5c40-448e-8406-d06bd1012216_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 7 on 3D rendering (cuneiex:imgannotations/827cde28-5c40-448e-8406-d06bd1012216_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 2 on 3D rendering (cuneiex:imgannotations/845da737-5586-40c9-b2d3-8bcd0a45f32c_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 4 on 3D rendering (cuneiex:imgannotations/8767417a-3c4c-45c0-a68e-742aa6f5000b_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/87bf3688-62af-4454-a0c5-34abfb87668f_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/88084672-0d9c-4f66-9fb0-8a81165732df_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 2 on 3D rendering (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 5 on 3D rendering (cuneiex:imgannotations/987a5913-1501-41ad-a49f-acd2f9b71b0a_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 1 on 3D rendering (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 5 on 3D rendering (cuneiex:imgannotations/9a961dfe-7891-44ec-b13e-b9f7726819a1_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 5 on 3D rendering (cuneiex:imgannotations/9b910a29-b0d7-4a00-8e7d-8ac16dd8319a_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse on 3D rendering (cuneiex:imgannotations/9cb25054-7a21-4f3b-8d06-6863d14e1c5d_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/9e548954-e3a5-415e-9794-24306e536b5c_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/9f63d152-5f4c-4ab2-975a-df6e89c3054d_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 5 wedge 3 on 3D rendering (cuneiex:imgannotations/a1ae4737-511b-4747-a1ee-6c2d32e11fc3_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/a75e0570-568d-4f41-9c3d-ccd54263c76c_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 3 char 3 on 3D rendering (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/ac299c35-0d28-4d34-919d-8b3bb7863dcd_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 1 on 3D rendering (cuneiex:imgannotations/b62757ff-11db-44a5-b5c4-3b2a16826875_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/b7578865-d9d5-4a16-bff5-b58f112773ce_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/b9ccf5ba-ed50-4281-9f84-2b86b8f9edc9_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 6 on 3D rendering (cuneiex:imgannotations/ba4bd60c-9a11-4577-b712-807036e61a4b_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/ba670c4e-3a5b-4dfb-827a-990c81adb88f_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 1 on 3D rendering (cuneiex:imgannotations/bd9c5134-e3b6-4a7e-9603-91316ec2a7e4_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/be1b3527-e84e-486c-80eb-ce56e316f0be_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/c475f2e0-9bf1-4e94-b6a9-ad7b0158a2a9_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 3 on 3D rendering (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 6 on 3D rendering (cuneiex:imgannotations/c57ebe4a-256f-42a2-91e1-e11eeec90ffe_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 4 wedge 1 on 3D rendering (cuneiex:imgannotations/c745a7af-3396-4d48-9bbb-b2f4aae36105_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/cc0ff0d6-f1fd-48a2-97b9-18f52544cb28_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/cc7b4748-5fd7-40a6-84ae-354cad301886_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 7 on 3D rendering (cuneiex:imgannotations/ce77c897-18f9-4776-a05e-c742be8c95c4_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 2 wedge 1 on 3D rendering (cuneiex:imgannotations/d08674f8-cdbe-47ad-be44-f0b48d7850f2_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 7 on 3D rendering (cuneiex:imgannotations/d15a7179-a4c7-4b4c-a11a-9ee84f4691ec_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 5 on 3D rendering (cuneiex:imgannotations/d3ca46ed-0156-4a04-9c7c-a5d6fbc66144_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 3 on 3D rendering (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 3 wedge 3 on 3D rendering (cuneiex:imgannotations/d59cd306-5b7e-493b-adbf-35c6092d7596_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 2 on 3D rendering (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 1 on 3D rendering (cuneiex:imgannotations/d7a3b6e8-72db-4a59-9e77-0844a88066d9_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dc07557b-f507-41df-933e-a980414d76fe_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 7 on 3D rendering (cuneiex:imgannotations/dc07557b-f507-41df-933e-a980414d76fe_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char  wedge 6 on 3D rendering (cuneiex:imgannotations/dce31708-a467-44e3-b63f-e0a0bf8fcf7f_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/de61550e-85da-4c06-a8d9-737d46509629_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 1 wedge 5 on 3D rendering (cuneiex:imgannotations/de61550e-85da-4c06-a8d9-737d46509629_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 8 on 3D rendering (cuneiex:imgannotations/e0671dc3-f247-4c43-9187-61ec411c25cb_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 4 on 3D rendering (cuneiex:imgannotations/e0948c0d-f255-4382-8304-d8ca05c68dff_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 3 on 3D rendering (cuneiex:imgannotations/e0f5680c-9972-4db0-b693-7b4eb827de86_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 6 on 3D rendering (cuneiex:imgannotations/e384c172-4242-406e-964c-316b8c4fe59d_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/e3e564c3-309b-4d3e-9ca3-6757cef13dcd_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 1 on 3D rendering (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 3 wedge 1 on 3D rendering (cuneiex:imgannotations/e5b147fa-6e22-41e6-a234-a180ddc2efe9_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 3 wedge 2 on 3D rendering (cuneiex:imgannotations/e6ae5599-1a9d-4f50-abb2-970f9428a1e7_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 1 wedge 3 on 3D rendering (cuneiex:imgannotations/e889905d-7796-46b1-b8df-8b4f7cead442_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 2 char 2 wedge 7 on 3D rendering (cuneiex:imgannotations/ea94292a-62c2-4775-bc0a-cbc67f4e311c_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 2 wedge 2 on 3D rendering (cuneiex:imgannotations/eefb61b9-f4c9-4428-89ce-716395059391_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 4 wedge 3 on 3D rendering (cuneiex:imgannotations/f81a66b0-e180-409c-8506-53f42837c34b_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/f8aed9e2-4e01-4ea0-abe9-26bddf84f1b6_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/f968847c-2649-4225-8499-8c048c086f96_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 1 char 4 wedge 3 on 3D rendering (cuneiex:imgannotations/f968847c-2649-4225-8499-8c048c086f96_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 4 char 1 wedge 2 on 3D rendering (cuneiex:imgannotations/fb1d478f-d4d1-484f-8bc2-66a50fe6f6fa_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 obverse line 3 char 3 wedge 4 on 3D rendering (cuneiex:imgannotations/fb75638a-5db1-415f-9d86-bc88d8a3c4dc_target1_selector)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#SvgSelector",
        "parent": "http://www.w3.org/ns/oa#Selector",
        "type": "class",
        "text": "SvgSelector (oa:SvgSelector) [136]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSelector": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://www.w3.org/ns/oa#Selector",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "Selector (oa:Selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 2 char 8 on a 3D Mesh (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 1 char 4 on a 3D Mesh (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 3 char 2 on a 3D Mesh (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 2 char 7 on a 3D Mesh (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 4 char 4 on a 3D Mesh (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 2 char 2 on a 3D Mesh (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 3 char 1 on a 3D Mesh (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 4 char 3 on a 3D Mesh (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 1 char 1 on a 3D Mesh (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 1 char 2 on a 3D Mesh (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 2 char 1 on a 3D Mesh (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 3 char 3 on a 3D Mesh (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 2 char 3 on a 3D Mesh (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 1 char 3 on a 3D Mesh (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 4 char 2 on a 3D Mesh (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 obverse line 4 char 1 on a 3D Mesh (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "http://purl.org/meshsparql#MeshLabelSelector",
        "parent": "http://www.w3.org/ns/oa#Selector",
        "type": "class",
        "text": "MeshLabelSelector (msp:MeshLabelSelector) [36]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSelector": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 2 char 8 on a 3D Mesh (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 1 char 4 on a 3D Mesh (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 3 char 2 on a 3D Mesh (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 2 char 7 on a 3D Mesh (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 4 char 4 on a 3D Mesh (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 2 char 2 on a 3D Mesh (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 3 char 1 on a 3D Mesh (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 4 char 3 on a 3D Mesh (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 1 char 1 on a 3D Mesh (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 1 char 2 on a 3D Mesh (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 2 char 1 on a 3D Mesh (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 3 char 3 on a 3D Mesh (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 2 char 3 on a 3D Mesh (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 1 char 3 on a 3D Mesh (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 4 char 2 on a 3D Mesh (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 obverse line 4 char 1 on a 3D Mesh (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "http://purl.org/meshsparql#MeshReferenceSelector",
        "parent": "http://www.w3.org/ns/oa#Selector",
        "type": "class",
        "text": "MeshReferenceSelector (msp:MeshReferenceSelector) [36]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSelector": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 8 on a 3D Mesh (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 4 on a 3D Mesh (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 3 char 2 on a 3D Mesh (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 7 on a 3D Mesh (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 4 on a 3D Mesh (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 2 on a 3D Mesh (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 3 char 1 on a 3D Mesh (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 3 on a 3D Mesh (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 1 on a 3D Mesh (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 2 on a 3D Mesh (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 1 on a 3D Mesh (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 3 char 3 on a 3D Mesh (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 3 on a 3D Mesh (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 3 on a 3D Mesh (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 2 on a 3D Mesh (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 1 on a 3D Mesh (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target3d_selector)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#WKTSelector",
        "parent": "http://www.w3.org/ns/oa#Selector",
        "type": "class",
        "text": "WKTSelector (oa:WKTSelector) [36]",
        "data": {
          "to": {
            "http://purl.org/meshsparql#computingReference": {
              "instancecount": 1,
              "http://purl.org/meshsparql#PCAReference": 1
            },
            "http://purl.org/meshsparql#pcaValue": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/geosparql#inSRS": {
              "instancecount": 1,
              "http://www.opengis.net/ont/crs/CartesianCS": 1,
              "https://situx.github.io/proj4rdf/ont/crs/CartesianCS": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSelector": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1
            }
          }
        },
        "instancecount": 6
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 8 on a 3D Mesh (cuneiex:imgannotations/09a66ef9-8b3c-488b-ad51-d280404f2a7f_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 4 on a 3D Mesh (cuneiex:imgannotations/0e7063b6-b4a2-4ade-8ad8-a2bf842709d8_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 3 char 2 on a 3D Mesh (cuneiex:imgannotations/1c74c217-b7cb-4ac8-92d8-86051e811659_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 7 on a 3D Mesh (cuneiex:imgannotations/28b2e58a-c464-462e-aa73-a369ffaee903_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 4 on a 3D Mesh (cuneiex:imgannotations/32de1d43-3933-412a-ba17-0f3053a29eee_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 2 on a 3D Mesh (cuneiex:imgannotations/45e343c9-c3a5-4417-ae16-7fa1fb3c0eec_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 3 char 1 on a 3D Mesh (cuneiex:imgannotations/4776df65-3c46-4ae6-a868-1f416c8a544b_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 3 on a 3D Mesh (cuneiex:imgannotations/47fdacc5-6576-4c1e-8743-f93be32e998b_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 1 on a 3D Mesh (cuneiex:imgannotations/4daae4c2-bd2a-4911-86e0-31dfeea22595_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 2 on a 3D Mesh (cuneiex:imgannotations/9249bcca-57c7-4bce-bc99-f1c4416702b1_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 1 on a 3D Mesh (cuneiex:imgannotations/9a3572bc-d972-43e5-8aa3-b18876e717fd_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 3 char 3 on a 3D Mesh (cuneiex:imgannotations/aaf1409a-87bb-4dc4-aac6-880be041ad64_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 2 char 3 on a 3D Mesh (cuneiex:imgannotations/c50c7e91-e1fd-44e0-af0c-e05f3b4de41e_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 1 char 3 on a 3D Mesh (cuneiex:imgannotations/d48fef72-5219-4b73-bf9d-534c60c62956_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 2 on a 3D Mesh (cuneiex:imgannotations/d79ca86c-6f7a-44b4-b499-3161e787e3d8_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 obverse line 4 char 1 on a 3D Mesh (cuneiex:imgannotations/e57afe5b-16df-4194-b793-8ad5beb74fe0_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "http://purl.org/meshsparql#PCAReference",
        "parent": "http://purl.org/meshsparql#ComputingReference",
        "type": "class",
        "text": "PCAReference (msp:PCAReference) [36]",
        "data": {
          "to": {
            "http://purl.org/meshsparql#referenceVector": {
              "instancecount": 1
            },
            "http://purl.org/meshsparql#stable": {
              "instancecount": 1
            },
            "http://purl.org/meshsparql#transformationMatrix": {
              "instancecount": 1
            },
            "http://purl.org/meshsparql#wktTransformation": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/geosparql#coordinateOperation": {
              "instancecount": 1,
              "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://purl.org/meshsparql#computingReference": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#WKTSelector": 1
            }
          }
        },
        "instancecount": 7
      },
      {
        "id": "http://purl.org/meshsparql#ComputingReference",
        "parent": "#",
        "type": "class",
        "text": "ComputingReference (msp:ComputingReference)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/cs/cartesian_ax3_mm",
        "parent": "http://www.opengis.net/ont/crs/CartesianCS",
        "type": "instance",
        "text": "Cartesian coordinate system with 3 axis in millimetre units (cartesian_ax3_mm)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/crs/CartesianCS",
        "parent": "#",
        "type": "class",
        "text": "CartesianCS (geocrs:CartesianCS) [1]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/crs/asSVG": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/crs/asWKT": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/crs/axis": {
              "instancecount": 3,
              "http://www.opengis.net/ont/crs/CoordinateSystemAxis": 3
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/asSVG": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/asWKT": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/axis": {
              "instancecount": 3,
              "http://www.opengis.net/ont/crs/CoordinateSystemAxis": 3
            }
          },
          "from": {
            "http://situx.github.io/proj4rdf/ont/crs/sourceCRS": {
              "instancecount": 0,
              "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation": 16
            },
            "http://www.opengis.net/ont/geosparql#inSRS": {
              "instancecount": 0,
              "http://www.w3.org/ns/oa#WKTSelector": 16
            }
          }
        },
        "instancecount": 13
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_annotorious-openseadragon.html",
        "parent": "http://purl.org/dc/elements/1.1/Software",
        "type": "instance",
        "text": "annotorious-openseadragon (annotorious-openseadragon)",
        "data": {}
      },
      {
        "id": "http://purl.org/dc/elements/1.1/Software",
        "parent": "#",
        "type": "class",
        "text": "Software (dce:Software) [3]",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#FragmentSelector",
        "parent": "http://www.w3.org/ns/oa#Selector",
        "type": "class",
        "text": "FragmentSelector (oa:FragmentSelector)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#WedgeType",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "WedgeType (purl:cuneiform#WedgeType)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_graphemevars",
        "parent": "http://www.purl.org/graphemon#GraphemeVariantCollection",
        "type": "instance",
        "text": "HS1174 Grapheme Variant Collection (cuneiex:HS1174_graphemevars)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#GraphemeVariantCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "class",
        "text": "GraphemeVariantCollection (purl:graphemon#GraphemeVariantCollection) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 25,
              "http://www.purl.org/graphemon#GraphemeVariant": 25
            }
          },
          "from": {}
        },
        "instancecount": 28
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1",
        "parent": "http://www.purl.org/cuneiform#TransliterationLine",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 1 (cuneiex:HS1174_transliteration1_reverse_line1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2",
        "parent": "http://www.purl.org/cuneiform#TransliterationLine",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 2 (cuneiex:HS1174_transliteration1_reverse_line2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3",
        "parent": "http://www.purl.org/cuneiform#TransliterationLine",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 3 (cuneiex:HS1174_transliteration1_reverse_line3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line4",
        "parent": "http://www.purl.org/cuneiform#TransliterationLine",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 4 (cuneiex:HS1174_transliteration1_reverse_line4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5",
        "parent": "http://www.purl.org/cuneiform#TransliterationLine",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 (cuneiex:HS1174_transliteration1_reverse_line5)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1",
        "parent": "http://www.purl.org/cuneiform#TransliterationLine",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 (cuneiex:HS1174_transliteration1_obverse_line1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2",
        "parent": "http://www.purl.org/cuneiform#TransliterationLine",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 (cuneiex:HS1174_transliteration1_obverse_line2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3",
        "parent": "http://www.purl.org/cuneiform#TransliterationLine",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 3 (cuneiex:HS1174_transliteration1_obverse_line3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4",
        "parent": "http://www.purl.org/cuneiform#TransliterationLine",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 (cuneiex:HS1174_transliteration1_obverse_line4)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#TransliterationLine",
        "parent": "http://www.purl.org/cuneiform#TransliterationPart",
        "type": "class",
        "text": "TransliterationLine (purl:cuneiform#TransliterationLine) [9]",
        "data": {
          "to": {
            "http://lemon-model.net/lemon#writtenRepASCII": {
              "instancecount": 1
            },
            "http://lemon-model.net/lemon#writtenRepUnicode": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#consistsOf": {
              "instancecount": 2
            },
            "http://www.purl.org/cuneiform#lineNumber": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#nextLine": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#TransliterationLine": 1
            },
            "http://www.purl.org/cuneiform#prevLine": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#TransliterationLine": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.cidoc-crm.org/cidoc-crm/TXP3_is_rendered_by": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Line": 1
            },
            "http://www.purl.org/cuneiform#nextLine": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#TransliterationLine": 1
            },
            "http://www.purl.org/cuneiform#prevLine": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#TransliterationLine": 1
            }
          }
        },
        "instancecount": 11
      },
      {
        "id": "http://www.purl.org/cuneiform#TransliterationPart",
        "parent": "#",
        "type": "class",
        "text": "TransliterationPart (purl:cuneiform#TransliterationPart)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_Sumerian.html",
        "parent": "http://www.purl.org/cuneiform#language",
        "type": "instance",
        "text": "Sumerian language (purl:cuneiform#Sumerian)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#language",
        "parent": "#",
        "type": "class",
        "text": "language (purl:cuneiform#language) [1]",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_clay.html",
        "parent": "http://www.purl.org/cuneiform#Material",
        "type": "instance",
        "text": "clay (purl:cuneiform#clay)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#Material",
        "parent": "#",
        "type": "class",
        "text": "Material (purl:cuneiform#Material) [1]",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_default.jpg.html",
        "parent": "http://www.purl.org/cuneiform#3DRendering",
        "type": "instance",
        "text": "HS 1174 01 top rendering (default.jpg)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_default.jpg.html",
        "parent": "http://www.purl.org/cuneiform#3DRendering",
        "type": "instance",
        "text": "HS 1174 02 left rendering (default.jpg)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_default.jpg.html",
        "parent": "http://www.purl.org/cuneiform#3DRendering",
        "type": "instance",
        "text": "HS 1174 03 front rendering (default.jpg)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_default.jpg.html",
        "parent": "http://www.purl.org/cuneiform#3DRendering",
        "type": "instance",
        "text": "HS 1174 04 right rendering (default.jpg)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_default.jpg.html",
        "parent": "http://www.purl.org/cuneiform#3DRendering",
        "type": "instance",
        "text": "HS 1174 05 bottom rendering (default.jpg)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_default.jpg.html",
        "parent": "http://www.purl.org/cuneiform#3DRendering",
        "type": "instance",
        "text": "HS 1174 06 back rendering (default.jpg)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#3DRendering",
        "parent": "http://xmlns.com/foaf/0.1/Image",
        "type": "class",
        "text": "3DRendering (purl:cuneiform#3DRendering) [6]",
        "data": {}
      },
      {
        "id": "http://xmlns.com/foaf/0.1/Image",
        "parent": "#",
        "type": "class",
        "text": "Image (foaf:Image)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/a_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: A (cuneiex:a_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/da_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: DA (cuneiex:da_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/dim2_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: GIM (cuneiex:dim2_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/du6_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: DU6 (cuneiex:du6_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/e2_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: E2 (cuneiex:e2_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ga_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: GA (cuneiex:ga_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/gal_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: GAL (cuneiex:gal_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/gurusz_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: GURUSZ (cuneiex:gurusz_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ka_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: KA (cuneiex:ka_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ku3_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: KU3 (cuneiex:ku3_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ku_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: KU (cuneiex:ku_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/lu2_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: LU2 (cuneiex:lu2_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ma_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: MA (cuneiex:ma_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/nu_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: NU (cuneiex:nu_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/pa_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: PA (cuneiex:pa_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ru_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: RU (cuneiex:ru_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/sa6_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: SA6 (cuneiex:sa6_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/szesz_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: SZESZ (cuneiex:szesz_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/szu_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: SZU (cuneiex:szu_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/tum_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: TUM (cuneiex:tum_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/tur_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: TUR (cuneiex:tur_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ud_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: UD (cuneiex:ud_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/um_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: UM (cuneiex:um_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/za_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: ZA (cuneiex:za_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/3(disz)_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: 3(disz) (cuneiex:3(disz)_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/3(u)_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: 3(u) (cuneiex:3(u)_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/9(disz)_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: 9(disz) (cuneiex:9(disz)_charvariant1)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#GraphemeVariant",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "class",
        "text": "GraphemeVariant (purl:graphemon#GraphemeVariant) [67]",
        "data": {
          "to": {
            "http://www.cidoc-crm.org/cidoc-crm/P62_depicted_by": {
              "instancecount": 1,
              "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/graphemon#variant": {
              "instancecount": 0,
              "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.purl.org/graphemon#GraphemeVariantCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "parent": "#",
        "type": "class",
        "text": "TX8_Grapheme (crm:TX8_Grapheme) [31]",
        "data": {
          "to": {
            "http://www.purl.org/graphemon#abzl": {
              "instancecount": 1
            },
            "http://www.purl.org/graphemon#hasUnicodeCodePoint": {
              "instancecount": 1
            },
            "http://www.purl.org/graphemon#hasUnicodeRepresentation": {
              "instancecount": 1
            },
            "http://www.purl.org/graphemon#hethzl": {
              "instancecount": 1
            },
            "http://www.purl.org/graphemon#meszl": {
              "instancecount": 1
            },
            "http://www.purl.org/graphemon#signName": {
              "instancecount": 1
            },
            "http://www.purl.org/graphemon#slha": {
              "instancecount": 1
            },
            "http://www.purl.org/graphemon#variant": {
              "instancecount": 1,
              "http://www.purl.org/graphemon#GraphemeVariant": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.purl.org/graphemon#GraphemeCollection": 1
            }
          }
        },
        "instancecount": 10
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/e2-gal_wordsense",
        "parent": "http://lemon-model.net/lemon#LexicalSense",
        "type": "instance",
        "text": "Word Sense: e2-gal (e2-gal_wordsense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/e2_wordsense",
        "parent": "http://lemon-model.net/lemon#LexicalSense",
        "type": "instance",
        "text": "Word Sense: e2 (e2_wordsense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/lu2_wordsense",
        "parent": "http://lemon-model.net/lemon#LexicalSense",
        "type": "instance",
        "text": "Word Sense: lu2 (lu2_wordsense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/szesz_wordsense",
        "parent": "http://lemon-model.net/lemon#LexicalSense",
        "type": "instance",
        "text": "Word Sense: szesz (szesz_wordsense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/ugula_wordsense",
        "parent": "http://lemon-model.net/lemon#LexicalSense",
        "type": "instance",
        "text": "Word Sense: ugula (ugula_wordsense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/3(disz)_wordsense",
        "parent": "http://lemon-model.net/lemon#LexicalSense",
        "type": "instance",
        "text": "Word Sense: 3(disz) (3(disz)_wordsense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/3(u)_wordsense",
        "parent": "http://lemon-model.net/lemon#LexicalSense",
        "type": "instance",
        "text": "Word Sense: 3(u) (3(u)_wordsense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/9(disz)_wordsense",
        "parent": "http://lemon-model.net/lemon#LexicalSense",
        "type": "instance",
        "text": "Word Sense: 9(disz) (9(disz)_wordsense)",
        "data": {}
      },
      {
        "id": "http://lemon-model.net/lemon#LexicalSense",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "LexicalSense (lemon:LexicalSense) [8]",
        "data": {
          "to": {
            "http://lemon-model.net/lemon#reference": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/e2-gal_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: e2-gal (e2-gal_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/e2_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: e2 (e2_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/gurusz_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: gurusz (gurusz_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/lu2_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: lu2 (lu2_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/szesz_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: szesz (szesz_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/szu_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: szu (szu_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/ugula_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: ugula (ugula_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/3(disz)_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: 3(disz) (3(disz)_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/3(u)_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: 3(u) (3(u)_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/9(disz)_word",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: 9(disz) (9(disz)_word)",
        "data": {}
      },
      {
        "id": "http://lemon-model.net/lemon#Word",
        "parent": "http://lemon-model.net/lemon#LexicalEntity",
        "type": "class",
        "text": "Word (lemon:Word) [11]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://lemon-model.net/lemon#entry": {
              "instancecount": 0,
              "http://lemon-model.net/lemon#Lexicon": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "http://lemon-model.net/lemon#LexicalEntity",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "LexicalEntity (lemon:LexicalEntity)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/e2-gal_wordform_e2_gal",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "Wordform: e2-gal (e2-gal_wordform_e2_gal)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/e2_a_wordform_e2_a",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "Wordform: e2-a (e2_a_wordform_e2_a)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/e2_wordform_e2",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "Wordform 1: e2 (e2_wordform_e2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/ugula_wordform_ugula",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "Wordform: Ugula (ugula_wordform_ugula)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/3(disz)_wordform_3(disz)",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "Wordform: 3(disz) (3(disz)_wordform_3(disz))",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/3(u)_wordform_3(u)",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "Wordform: 3(u) (3(u)_wordform_3(u))",
        "data": {}
      },
      {
        "id": "http://lemon-model.net/lemon#WordForm",
        "parent": "http://lemon-model.net/lemon#LexicalForm",
        "type": "class",
        "text": "WordForm (lemon:WordForm) [27]",
        "data": {
          "to": {
            "http://lemon-model.net/lemon#writtenRep": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://lemon-model.net/lemon#LexicalForm",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "LexicalForm (lemon:LexicalForm)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174",
        "parent": "http://www.purl.org/cuneiform#Tablet",
        "type": "instance",
        "text": "HS 1174 cuneiform artifact (cuneiex:HS1174)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#Tablet",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/E22_ManMadeObject",
        "type": "class",
        "text": "Tablet (purl:cuneiform#Tablet) [1]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#CDLINumber": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#hasSurface": {
              "instancecount": 5,
              "http://www.purl.org/cuneiform#BottomSide": 1,
              "http://www.purl.org/cuneiform#LeftSide": 1,
              "http://www.purl.org/cuneiform#ObverseSide": 1,
              "http://www.purl.org/cuneiform#ReverseSide": 1,
              "http://www.purl.org/cuneiform#Side": 1,
              "http://www.purl.org/cuneiform#RightSide": 1
            },
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#3DMesh": 1
            },
            "http://www.purl.org/cuneiform#material": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#Material": 1
            },
            "http://www.purl.org/cuneiform#museumNumber": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#transliteration": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#Transliteration": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            }
          },
          "from": {}
        },
        "instancecount": 13
      },
      {
        "id": "http://www.cidoc-crm.org/cidoc-crm/E22_ManMadeObject",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "E22_ManMadeObject (crm:E22_ManMadeObject)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_bottom",
        "parent": "http://www.purl.org/cuneiform#BottomSide",
        "type": "instance",
        "text": "HS 1174 bottom side (cuneiex:HS1174_bottom)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#BottomSide",
        "parent": "http://www.purl.org/cuneiform#TabletSurface",
        "type": "class",
        "text": "BottomSide (purl:cuneiform#BottomSide) [1]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#3DRendering": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#hasSurface": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Tablet": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://www.purl.org/cuneiform#TabletSurface",
        "parent": "http://www.purl.org/cuneiform#TabletFeature",
        "type": "class",
        "text": "TabletSurface (purl:cuneiform#TabletSurface)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_left",
        "parent": "http://www.purl.org/cuneiform#LeftSide",
        "type": "instance",
        "text": "HS 1174 left side (cuneiex:HS1174_left)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#LeftSide",
        "parent": "http://www.purl.org/cuneiform#TabletSurface",
        "type": "class",
        "text": "LeftSide (purl:cuneiform#LeftSide) [1]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#3DRendering": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#hasSurface": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Tablet": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_lexicon",
        "parent": "http://lemon-model.net/lemon#Lexicon",
        "type": "instance",
        "text": "Lexicon for tablet HS 1174 (cuneiex:HS1174_transliteration1_lexicon)",
        "data": {}
      },
      {
        "id": "http://lemon-model.net/lemon#Lexicon",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "class",
        "text": "Lexicon (lemon:Lexicon) [3]",
        "data": {
          "to": {
            "http://lemon-model.net/lemon#entry": {
              "instancecount": 9,
              "http://lemon-model.net/lemon#Word": 7
            },
            "http://lemon-model.net/lemon#language": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#language": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 12
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse",
        "parent": "http://www.purl.org/cuneiform#ObverseSide",
        "type": "instance",
        "text": "HS 1174 obverse side (cuneiex:HS1174_obverse)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#ObverseSide",
        "parent": "http://www.purl.org/cuneiform#TabletSurface",
        "type": "class",
        "text": "ObverseSide (purl:cuneiform#ObverseSide) [1]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#3DRendering": 1
            },
            "http://www.purl.org/graphemon#contains": {
              "instancecount": 4,
              "http://www.purl.org/cuneiform#Line": 4
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            },
            "http://xmlns.com/foaf/0.1/image": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#hasSurface": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Tablet": 1
            }
          }
        },
        "instancecount": 10
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1",
        "parent": "http://www.purl.org/cuneiform#Line",
        "type": "instance",
        "text": "HS 1174 obverse side line 1 (cuneiex:HS1174_obverse_line1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2",
        "parent": "http://www.purl.org/cuneiform#Line",
        "type": "instance",
        "text": "HS 1174 observe side line 2 (cuneiex:HS1174_obverse_line2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3",
        "parent": "http://www.purl.org/cuneiform#Line",
        "type": "instance",
        "text": "HS 1174 obverse side line 3 (cuneiex:HS1174_obverse_line3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4",
        "parent": "http://www.purl.org/cuneiform#Line",
        "type": "instance",
        "text": "HS 1174 obverse side line 4 (cuneiex:HS1174_obverse_line4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line1",
        "parent": "http://www.purl.org/cuneiform#Line",
        "type": "instance",
        "text": "HS 1174 reverse side line 1 (cuneiex:HS1174_reverse_line1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line2",
        "parent": "http://www.purl.org/cuneiform#Line",
        "type": "instance",
        "text": "HS 1174 reverse side line 2 (cuneiex:HS1174_reverse_line2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line3",
        "parent": "http://www.purl.org/cuneiform#Line",
        "type": "instance",
        "text": "HS 1174 reverse side line 3 (cuneiex:HS1174_reverse_line3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line4",
        "parent": "http://www.purl.org/cuneiform#Line",
        "type": "instance",
        "text": "HS 1174 reverse side line 4 (cuneiex:HS1174_reverse_line4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line5",
        "parent": "http://www.purl.org/cuneiform#Line",
        "type": "instance",
        "text": "HS 1174 reverse side line 5 (cuneiex:HS1174_reverse_line5)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#Line",
        "parent": "https://situx.github.io/cuneiformontology/examples/hs1174/TX7_WrittenTextFragment",
        "type": "class",
        "text": "Line (purl:cuneiform#Line) [9]",
        "data": {
          "to": {
            "http://www.cidoc-crm.org/cidoc-crm/TXP3_is_rendered_by": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#TransliterationLine": 1
            },
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1
            },
            "http://www.purl.org/cuneiform#nextLine": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#Line": 1
            },
            "http://www.purl.org/cuneiform#prevLine": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#Line": 1
            },
            "http://www.purl.org/graphemon#contains": {
              "instancecount": 8,
              "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph": 8
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            },
            "http://xmlns.com/foaf/0.1/image": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#nextLine": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Line": 1
            },
            "http://www.purl.org/cuneiform#prevLine": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Line": 1
            },
            "http://www.purl.org/graphemon#contains": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#ObverseSide": 1
            }
          }
        },
        "instancecount": 16
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/TX7_WrittenTextFragment",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX1_WrittenText",
        "type": "class",
        "text": "TX7_WrittenTextFragment (cuneiex:TX7_WrittenTextFragment)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char1_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 1 char 1 (cuneiex:HS1174_obverse_line1_char1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char2_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 1 char 2 (cuneiex:HS1174_obverse_line1_char2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char3_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 1 char 3 (cuneiex:HS1174_obverse_line1_char3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char4_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 1 char 4 (cuneiex:HS1174_obverse_line1_char4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char5_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 1 char 5 (cuneiex:HS1174_obverse_line1_char5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line1_char6_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 1 char 6 (cuneiex:HS1174_obverse_line1_char6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char1_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 2 char 1 (cuneiex:HS1174_obverse_line2_char1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char2_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 2 char 2 (cuneiex:HS1174_obverse_line2_char2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char3_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 2 char 3 (cuneiex:HS1174_obverse_line2_char3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char4_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 2 char 4 (cuneiex:HS1174_obverse_line2_char4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char5_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 2 char 5 (cuneiex:HS1174_obverse_line2_char5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char6_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 2 char 6 (cuneiex:HS1174_obverse_line2_char6_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char7_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 2 char 7 (cuneiex:HS1174_obverse_line2_char7_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line2_char8_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 2 char 8 (cuneiex:HS1174_obverse_line2_char8_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char1_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 3 char 1 (cuneiex:HS1174_obverse_line3_char1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char2_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 3 char 2 (cuneiex:HS1174_obverse_line3_char2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char3_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 3 char 3 (cuneiex:HS1174_obverse_line3_char3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line3_char4_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 3 char 4 (cuneiex:HS1174_obverse_line3_char4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char1_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 4 char 1 (cuneiex:HS1174_obverse_line4_char1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char2_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 4 char 2 (cuneiex:HS1174_obverse_line4_char2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char3_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 4 char 3 (cuneiex:HS1174_obverse_line4_char3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char4_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 4 char 4 (cuneiex:HS1174_obverse_line4_char4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_line4_char5_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 obverse side line 4 char 5 (cuneiex:HS1174_obverse_line4_char5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line1_char1_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 1 char 1 (cuneiex:HS1174_reverse_line1_char1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line1_char2_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 1 char 2 (cuneiex:HS1174_reverse_line1_char2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line1_char3_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 1 char 3 (cuneiex:HS1174_reverse_line1_char3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line1_char4_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 1 char 4 (cuneiex:HS1174_reverse_line1_char4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line2_char1_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 2 char 1 (cuneiex:HS1174_reverse_line2_char1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line2_char2_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 2 char 2 (cuneiex:HS1174_reverse_line2_char2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line2_char3_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 2 char 3 (cuneiex:HS1174_reverse_line2_char3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line2_char4_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 2 char 4 (cuneiex:HS1174_reverse_line2_char4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line2_char5_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 2 char 5 (cuneiex:HS1174_reverse_line2_char5_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line3_char1_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 3 char 1 (cuneiex:HS1174_reverse_line3_char1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line3_char2_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 3 char 2 (cuneiex:HS1174_reverse_line3_char2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line3_char3_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 3 char 3 (cuneiex:HS1174_reverse_line3_char3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line3_char4_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 3 char 4 (cuneiex:HS1174_reverse_line3_char4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line4_char1_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 4 char 1 (cuneiex:HS1174_reverse_line4_char1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line4_char2_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 4 char 2 (cuneiex:HS1174_reverse_line4_char2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line4_char3_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 4 char 3 (cuneiex:HS1174_reverse_line4_char3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line5_char1_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 5 char 1 (cuneiex:HS1174_reverse_line5_char1_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line5_char2_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 5 char 2 (cuneiex:HS1174_reverse_line5_char2_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line5_char3_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 5 char 3 (cuneiex:HS1174_reverse_line5_char3_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line5_char4_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 5 char 4 (cuneiex:HS1174_reverse_line5_char4_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse_line5_char5_glyph",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "type": "instance",
        "text": "Glyph at HS1174 reverse side line 5 char 5 (cuneiex:HS1174_reverse_line5_char5_glyph)",
        "data": {}
      },
      {
        "id": "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph",
        "parent": "https://situx.github.io/cuneiformontology/examples/hs1174/TX7_WrittenTextFragment",
        "type": "class",
        "text": "TX9_Glyph (crm:TX9_Glyph) [44]",
        "data": {
          "to": {
            "http://www.cidoc-crm.org/cidoc-crm/TXP3_is_rendered_by": {
              "instancecount": 1
            },
            "http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#isDamaged": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1
            },
            "http://www.purl.org/cuneiform#prevInWord": {
              "instancecount": 1,
              "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph": 1
            },
            "http://www.purl.org/graphemon#nextGlyph": {
              "instancecount": 1,
              "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph": 1
            },
            "http://www.purl.org/graphemon#prevGlyph": {
              "instancecount": 1,
              "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            },
            "http://xmlns.com/foaf/0.1/image": {
              "instancecount": 2
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#prevInWord": {
              "instancecount": 0,
              "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph": 1
            },
            "http://www.purl.org/graphemon#contains": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Line": 1
            },
            "http://www.purl.org/graphemon#nextGlyph": {
              "instancecount": 0,
              "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph": 1
            },
            "http://www.purl.org/graphemon#prevGlyph": {
              "instancecount": 0,
              "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph": 1
            }
          }
        },
        "instancecount": 12
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/3(disz)_charvariant1_ap1",
        "parent": "http://www.purl.org/graphemon#CuneiformWedge",
        "type": "instance",
        "text": "Atomic part 1 of grapheme variant 1 of grapheme 3(disz) (cuneiex:3(disz)_charvariant1_ap1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/3(disz)_charvariant1_ap2",
        "parent": "http://www.purl.org/graphemon#CuneiformWedge",
        "type": "instance",
        "text": "Atomic part 2 of grapheme variant 1 of grapheme 3(disz) (cuneiex:3(disz)_charvariant1_ap2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/3(disz)_charvariant1_ap3",
        "parent": "http://www.purl.org/graphemon#CuneiformWedge",
        "type": "instance",
        "text": "Atomic part 3 of grapheme variant 1 of grapheme 3(disz) (cuneiex:3(disz)_charvariant1_ap3)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#CuneiformWedge",
        "parent": "http://www.purl.org/graphemon#Stroketyped",
        "type": "class",
        "text": "CuneiformWedge (purl:graphemon#CuneiformWedge) [6]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.purl.org/graphemon#CuneiformWedge": 1
            },
            "http://www.purl.org/graphemon#leftOf": {
              "instancecount": 1,
              "http://www.purl.org/graphemon#CuneiformWedge": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/graphemon#leftOf": {
              "instancecount": 0,
              "http://www.purl.org/graphemon#CuneiformWedge": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.purl.org/graphemon#Stroketyped",
        "parent": "http://www.purl.org/graphemon#GraphemeAtomicPart",
        "type": "class",
        "text": "Stroketyped (purl:graphemon#Stroketyped)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_obverse_writtentext",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX1_WrittenText",
        "type": "instance",
        "text": "HS 1174 obverse side written text (cuneiex:HS1174_obverse_writtentext)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_TX1_WrittenText.html",
        "parent": "#",
        "type": "class",
        "text": "written text (crm:TX1_WrittenText)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 2
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reading1",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX5_Reading",
        "type": "instance",
        "text": "HS 1174 reading 1 (cuneiex:HS1174_reading1)",
        "data": {}
      },
      {
        "id": "http://www.cidoc-crm.org/cidoc-crm/TX5_Reading",
        "parent": "#",
        "type": "class",
        "text": "TX5_Reading (crm:TX5_Reading) [2]",
        "data": {
          "to": {
            "http://www.cidoc-crm.org/cidoc-crm/TXP3_is_rendered_by": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#Transliteration": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_reverse",
        "parent": "http://www.purl.org/cuneiform#ReverseSide",
        "type": "instance",
        "text": "HS 1174 reverse side (cuneiex:HS1174_reverse)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#ReverseSide",
        "parent": "http://www.purl.org/cuneiform#TabletSurface",
        "type": "class",
        "text": "ReverseSide (purl:cuneiform#ReverseSide) [1]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#3DRendering": 1
            },
            "http://www.purl.org/graphemon#contains": {
              "instancecount": 5,
              "http://www.purl.org/cuneiform#Line": 5
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            },
            "http://xmlns.com/foaf/0.1/image": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#hasSurface": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Tablet": 1
            }
          }
        },
        "instancecount": 11
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_right",
        "parent": "http://www.purl.org/cuneiform#RightSide",
        "type": "instance",
        "text": "HS 1174 right side (cuneiex:HS1174_right)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#RightSide",
        "parent": "http://www.purl.org/cuneiform#TabletSurface",
        "type": "class",
        "text": "RightSide (purl:cuneiform#RightSide) [1]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#3DRendering": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#hasSurface": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Tablet": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_signlist",
        "parent": "http://www.purl.org/graphemon#GraphemeCollection",
        "type": "instance",
        "text": "HS 1174 Signlist (cuneiex:HS1174_signlist)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#GraphemeCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "class",
        "text": "GraphemeCollection (purl:graphemon#GraphemeCollection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 30,
              "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme": 30
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#signs": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Transliteration": 1
            }
          }
        },
        "instancecount": 33
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_signreadinglist",
        "parent": "http://www.purl.org/graphemon#GraphemeReadingCollection",
        "type": "instance",
        "text": "HS 1174 Sign Readings (cuneiex:HS1174_signreadinglist)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#GraphemeReadingCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "class",
        "text": "GraphemeReadingCollection (purl:graphemon#GraphemeReadingCollection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 44,
              "http://www.purl.org/graphemon#GraphemeReading": 26
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#signreadings": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Transliteration": 1
            }
          }
        },
        "instancecount": 46
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_top",
        "parent": "http://www.purl.org/cuneiform#TopSide",
        "type": "instance",
        "text": "HS 1174 top side (cuneiex:HS1174_top)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#TopSide",
        "parent": "http://www.purl.org/cuneiform#TabletSurface",
        "type": "class",
        "text": "TopSide (purl:cuneiform#TopSide) [1]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#3DRendering": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1",
        "parent": "http://www.purl.org/cuneiform#Transliteration",
        "type": "instance",
        "text": "HS 1174 transliteration 1 (cuneiex:HS1174_transliteration1)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#Transliteration",
        "parent": "http://www.purl.org/cuneiform#Representation",
        "type": "class",
        "text": "Transliteration (purl:cuneiform#Transliteration) [1]",
        "data": {
          "to": {
            "http://purl.org/dc/elements/1.1/creator": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/created": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#signreadings": {
              "instancecount": 1,
              "http://www.purl.org/graphemon#GraphemeReadingCollection": 1
            },
            "http://www.purl.org/cuneiform#signs": {
              "instancecount": 1,
              "http://www.purl.org/graphemon#GraphemeCollection": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 2
            }
          },
          "from": {
            "http://www.cidoc-crm.org/cidoc-crm/TXP3_is_rendered_by": {
              "instancecount": 0,
              "http://www.cidoc-crm.org/cidoc-crm/TX5_Reading": 1
            },
            "http://www.purl.org/cuneiform#transliteration": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Tablet": 1
            }
          }
        },
        "instancecount": 7
      },
      {
        "id": "http://www.purl.org/cuneiform#Representation",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "Representation (purl:cuneiform#Representation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char1",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 char 1 (cuneiex:HS1174_transliteration1_obverse_line1_char1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char2",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 char 2 (cuneiex:HS1174_transliteration1_obverse_line1_char2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char3",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 char 3 (cuneiex:HS1174_transliteration1_obverse_line1_char3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char4",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 char 4 (cuneiex:HS1174_transliteration1_obverse_line1_char4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char5",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 char 5 (cuneiex:HS1174_transliteration1_obverse_line1_char5)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char6",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 char 6 (cuneiex:HS1174_transliteration1_obverse_line1_char6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char1",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 char 1 (cuneiex:HS1174_transliteration1_obverse_line2_char1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char2",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 char 2 (cuneiex:HS1174_transliteration1_obverse_line2_char2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char3",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 char 3 (cuneiex:HS1174_transliteration1_obverse_line2_char3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char4",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 char 4 (cuneiex:HS1174_transliteration1_obverse_line2_char4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char5",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 char 5 (cuneiex:HS1174_transliteration1_obverse_line2_char5)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char6",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 char 6 (cuneiex:HS1174_transliteration1_obverse_line2_char6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char7",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 char 7 (cuneiex:HS1174_transliteration1_obverse_line2_char7)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char8",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 char 8 (cuneiex:HS1174_transliteration1_obverse_line2_char8)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_char1",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 3 char 1 (cuneiex:HS1174_transliteration1_obverse_line3_char1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_char2",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 3 char 2 (cuneiex:HS1174_transliteration1_obverse_line3_char2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_char3",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 3 char 3 (cuneiex:HS1174_transliteration1_obverse_line3_char3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_char4",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 3 char 4 (cuneiex:HS1174_transliteration1_obverse_line3_char4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char1",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 char 1 (cuneiex:HS1174_transliteration1_obverse_line4_char1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char2",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 char 2 (cuneiex:HS1174_transliteration1_obverse_line4_char2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char3",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 char 3 (cuneiex:HS1174_transliteration1_obverse_line4_char3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char4",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 char 4 (cuneiex:HS1174_transliteration1_obverse_line4_char4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char5",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 char 5 (cuneiex:HS1174_transliteration1_obverse_line4_char5)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_char1",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 1 char 1 (cuneiex:HS1174_transliteration1_reverse_line1_char1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_char2",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 1 char 2 (cuneiex:HS1174_transliteration1_reverse_line1_char2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_char3",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 1 char 3 (cuneiex:HS1174_transliteration1_reverse_line1_char3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_char4",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 1 char 4 (cuneiex:HS1174_transliteration1_reverse_line1_char4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char1",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 2 char 1 (cuneiex:HS1174_transliteration1_reverse_line2_char1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char2",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 2 char 2 (cuneiex:HS1174_transliteration1_reverse_line2_char2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char3",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 2 char 3 (cuneiex:HS1174_transliteration1_reverse_line2_char3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char4",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 2 char 4 (cuneiex:HS1174_transliteration1_reverse_line2_char4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char5",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 2 char 5 (cuneiex:HS1174_transliteration1_reverse_line2_char5)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_char1",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 3 char 1 (cuneiex:HS1174_transliteration1_reverse_line3_char1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_char2",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 3 char 2 (cuneiex:HS1174_transliteration1_reverse_line3_char2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_char3",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 3 char 3 (cuneiex:HS1174_transliteration1_reverse_line3_char3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_char4",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 3 char 4 (cuneiex:HS1174_transliteration1_reverse_line3_char4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line4_char1",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 4 char 1 (cuneiex:HS1174_transliteration1_reverse_line4_char1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line4_char2",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 4 char 2 (cuneiex:HS1174_transliteration1_reverse_line4_char2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line4_char3",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 4 char 3 (cuneiex:HS1174_transliteration1_reverse_line4_char3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char1",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 char 1 (cuneiex:HS1174_transliteration1_reverse_line5_char1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char2",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 char 2 (cuneiex:HS1174_transliteration1_reverse_line5_char2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char3",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 char 3 (cuneiex:HS1174_transliteration1_reverse_line5_char3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char4",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 char 4 (cuneiex:HS1174_transliteration1_reverse_line5_char4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char5",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 char 5 (cuneiex:HS1174_transliteration1_reverse_line5_char5)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "parent": "http://www.purl.org/cuneiform#TransliterationPart",
        "type": "class",
        "text": "TransliterationCharOccurrence (purl:cuneiform#TransliterationCharOccurrence) [88]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#charIndex": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#lineNumber": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#prevChar": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#TransliterationCharOccurrence": 1
            },
            "http://www.purl.org/graphemon#hasGraphemeReading": {
              "instancecount": 1,
              "http://www.purl.org/graphemon#GraphemeReading": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#nextChar": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#TransliterationCharOccurrence": 1
            }
          }
        },
        "instancecount": 7
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line1_word1",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 word 1 (HS1174_transliteration1_obverse_line1_word1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line1_word2",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 word 2 (HS1174_transliteration1_obverse_line1_word2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line1_word3",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 word 3 (HS1174_transliteration1_obverse_line1_word3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line1_word4",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 word 4 (HS1174_transliteration1_obverse_line1_word4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line1_word5",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 1 word 5 (HS1174_transliteration1_obverse_line1_word5)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line2_word1",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 word 1 (HS1174_transliteration1_obverse_line2_word1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line2_word2",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 word 2 (HS1174_transliteration1_obverse_line2_word2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line2_word3",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 2 word 3 (HS1174_transliteration1_obverse_line2_word3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line3_word1",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 3 word 1 (HS1174_transliteration1_obverse_line3_word1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line3_word2",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 3 word 2 (HS1174_transliteration1_obverse_line3_word2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line4_word1",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 word 1 (HS1174_transliteration1_obverse_line4_word1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line4_word2",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 word 2 (HS1174_transliteration1_obverse_line4_word2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line4_word3",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 word 3 (HS1174_transliteration1_obverse_line4_word3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line4_word4",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 word 4 (HS1174_transliteration1_obverse_line4_word4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_obverse_line4_word5",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 obverse line 4 word 5 (HS1174_transliteration1_obverse_line4_word5)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line1_word1",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 1 word 1 (HS1174_transliteration1_reverse_line1_word1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line1_word2",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 1 word 2 (HS1174_transliteration1_reverse_line1_word2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line2_word1",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 2 word 1 (HS1174_transliteration1_reverse_line2_word1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line2_word2",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 2 word 2 (HS1174_transliteration1_reverse_line2_word2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line3_word1",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 3 word 1 (HS1174_transliteration1_reverse_line3_word1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line3_word2",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 3 word 2 (HS1174_transliteration1_reverse_line3_word2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line4_word1",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 4 word 1 (HS1174_transliteration1_reverse_line4_word1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line4_word2",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 4 word 2 (HS1174_transliteration1_reverse_line4_word2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line5_word1",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 word 1 (HS1174_transliteration1_reverse_line5_word1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line5_word2",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 word 2 (HS1174_transliteration1_reverse_line5_word2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line5_word3",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 word 3 (HS1174_transliteration1_reverse_line5_word3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/dict/HS1174_transliteration1_reverse_line5_word4",
        "parent": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "type": "instance",
        "text": "HS 1174 transliteration 1 reverse line 5 word 4 (HS1174_transliteration1_reverse_line5_word4)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#TransliterationWordOccurrence",
        "parent": "http://www.purl.org/cuneiform#TransliterationPart",
        "type": "class",
        "text": "TransliterationWordOccurrence (purl:cuneiform#TransliterationWordOccurrence) [27]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#lineNumber": {
              "instancecount": 1
            },
            "http://www.purl.org/cuneiform#nextWord": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#TransliterationWordOccurrence": 1
            },
            "http://www.purl.org/cuneiform#wordIndex": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#prevWord": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#TransliterationWordOccurrence": 1
            }
          }
        },
        "instancecount": 6
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/hs_1174_3dmesh1",
        "parent": "http://www.purl.org/cuneiform#3DMesh",
        "type": "instance",
        "text": "3D Mesh 1 representing HS 1174 (cuneiex:hs_1174_3dmesh1)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#3DMesh",
        "parent": "http://www.purl.org/cuneiform#representation",
        "type": "class",
        "text": "3DMesh (purl:cuneiform#3DMesh) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://xmlns.com/foaf/0.1/image": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#isRepresentedBy": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Tablet": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_representation.html",
        "parent": "#",
        "type": "class",
        "text": "representation (purl:cuneiform#representation)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/3(disz)_charvariant1_apcollection",
        "parent": "http://www.purl.org/graphemon#GraphemeAtomicPartCollection",
        "type": "instance",
        "text": "Atomic part collection of 3(disz) grapheme variant 1 (cuneiex:3(disz)_charvariant1_apcollection)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#GraphemeAtomicPartCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "class",
        "text": "GraphemeAtomicPartCollection (purl:graphemon#GraphemeAtomicPartCollection) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 2
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_a",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: A (character_a)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ak",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: AK (character_ak)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_al",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: AL (character_al)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_da",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: DA (character_da)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_du6",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: DU6 (character_du6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_e2",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: E2 (character_e2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_esz",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: ESZ (character_esz)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ga",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: GA (character_ga)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_gal",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: GAL (character_gal)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_gim",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: GIM (character_gim)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_gurusz",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: GURUSZ (character_gurusz)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_iti",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: ITI (character_iti)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ka",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: KA (character_ka)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ku3",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: KU3 (character_ku3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ku",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: KU (character_ku)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_lu2",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: lu2 (character_lu2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ma",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: MA (character_ma)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_nu",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: NU (character_nu)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_pa",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: PA (character_pa)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ri",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: RI (character_ri)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ru",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: RU (character_ru)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_sa6",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: SA6 (character_sa6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_szesz",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: SZESZ (character_szesz)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_szu",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: SZU (character_szu)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_tum",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: TUM (character_tum)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_tur",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: TUR (character_tur)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ud",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: UD (character_ud)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_um",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: UM (character_um)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_za",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: ZA (character_za)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_3(disz)",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: 3(disz) (character_3(disz))",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_9(disz)",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme",
        "type": "instance",
        "text": "Character: 9(disz) (character_9(disz))",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_a_reading_a",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading A: a (character_a_reading_a)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ak_reading_ak",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading AK: ak (character_ak_reading_ak)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_al_reading_al",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading AL: al (character_al_reading_al)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_da_reading_da",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading DA: da (character_da_reading_da)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_du6_reading_du6",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading DU6: du6 (character_du6_reading_du6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_e2_reading_e2",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading E2: e2 (character_e2_reading_e2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ensi2comp_reading_ensi2",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Composition Reading ENSI2: ensi2 (character_ensi2comp_reading_ensi2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ga_reading_ga",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading GA: ga (character_ga_reading_ga)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_gal_reading_gal",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading GAL: gal (character_gal_reading_gal)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_gim_reading_dim2",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading GIM: dim2 (character_gim_reading_dim2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_gurusz_reading_gurusz",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading GURUSZ: gurusz (character_gurusz_reading_gurusz)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_iti_reading_iti",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading ITI: iti (character_iti_reading_iti)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ka_reading_ka",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading KA: ka (character_ka_reading_ka)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ku3_reading_ku3",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading KU3: ku3 (character_ku3_reading_ku3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ku_reading_dab5",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading KU: dab5 (character_ku_reading_dab5)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_lu2_reading_lu2",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading LU2: lu2 (character_lu2_reading_lu2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ma_reading_ma",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading MA: ma (character_ma_reading_ma)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_nu_reading_nu",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading NU: nu (character_nu_reading_nu)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ru_reading_ru",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading RU: ru (character_ru_reading_ru)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_sa6_reading_sa6",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading SA6: sa6 (character_sa6_reading_sa6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_szesz_reading_szesz",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading SZESZ: szesz (character_szesz_reading_szesz)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_szu_reading_szu",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading SZU: szu (character_szu_reading_szu)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_tum_reading_ib2",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading TUM: ib2 (character_tum_reading_ib2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_tum_reading_tum",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading TUM: tum (character_tum_reading_tum)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_tur_reading_banda3",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading TUR: banda3 (character_tur_reading_banda3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ud_reading_u4",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading UD: u4 (character_ud_reading_u4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ugula_reading_ugula",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading UGULA: ugula (character_ugula_reading_ugula)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_um_reading_um",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading UM: um (character_um_reading_um)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_za_reading_sza3",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading ZA: sza3 (character_za_reading_sza3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_3(disz)_reading_3(disz)",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading 3(disz): 3(disz) (character_3(disz)_reading_3(disz))",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_9(disz)_reading_9(disz)",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading 9(disz): 9(disz) (character_9(disz)_reading_9(disz))",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_esz_reading_3(u)",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading ESZ: 3(u) (character_esz_reading_3(u))",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#GraphemeReading",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX5_Reading",
        "type": "class",
        "text": "GraphemeReading (purl:graphemon#GraphemeReading) [47]",
        "data": {
          "to": {
            "http://www.purl.org/graphemon#readingValue": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/graphemon#hasGraphemeReading": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#TransliterationCharOccurrence": 2,
              "http://www.cidoc-crm.org/cidoc-crm/TX8_Grapheme": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.purl.org/graphemon#GraphemeReadingCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/signlist/character_ensi2comp",
        "parent": "http://www.purl.org/graphemon#GraphemeComposition",
        "type": "instance",
        "text": "Charactercomp: ENSI2 (character_ensi2comp)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#GraphemeComposition",
        "parent": "#",
        "type": "class",
        "text": "GraphemeComposition (purl:graphemon#GraphemeComposition) [1]",
        "data": {
          "to": {
            "http://www.purl.org/graphemon#hasUnicodeCodePoint": {
              "instancecount": 3
            },
            "http://www.purl.org/graphemon#hasUnicodeRepresentation": {
              "instancecount": 1
            },
            "http://www.purl.org/graphemon#signName": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 7
      },
      {
        "id": "http://www.cidoc-crm.org/cidoc-crm/TX2_Writing",
        "parent": "#",
        "type": "class",
        "text": "TX2_Writing (crm:TX2_Writing)",
        "data": {}
      },
      {
        "id": "http://www.cidoc-crm.org/cidoc-crm/TX4_WritingField",
        "parent": "http://www.purl.org/cuneiform#TabletFeature",
        "type": "class",
        "text": "TX4_WritingField (crm:TX4_WritingField)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#TabletFeature",
        "parent": "#",
        "type": "class",
        "text": "TabletFeature (purl:cuneiform#TabletFeature)",
        "data": {}
      },
      {
        "id": "http://www.cidoc-crm.org/cidoc-crm/TX6_Transcription",
        "parent": "http://www.purl.org/cuneiform#representation",
        "type": "class",
        "text": "TX6_Transcription (crm:TX6_Transcription)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#CuneiformArtifactCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "class",
        "text": "CuneiformArtifactCollection (purl:cuneiform#CuneiformArtifactCollection)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#Sentence",
        "parent": "https://situx.github.io/cuneiformontology/examples/hs1174/TX7_WrittenTextFragment",
        "type": "class",
        "text": "Sentence (purl:cuneiform#Sentence)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#WordForm",
        "parent": "https://situx.github.io/cuneiformontology/examples/hs1174/TX7_WrittenTextFragment",
        "type": "class",
        "text": "WordForm (purl:cuneiform#WordForm)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#GraphemeAtomicPart",
        "parent": "http://www.purl.org/graphemon#GraphemePart",
        "type": "class",
        "text": "GraphemeAtomicPart (purl:graphemon#GraphemeAtomicPart)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#GraphemePart",
        "parent": "#",
        "type": "class",
        "text": "GraphemePart (purl:graphemon#GraphemePart)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/Image",
        "parent": "http://www.purl.org/cuneiform#representation",
        "type": "class",
        "text": "Image (cuneiex:Image)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/HS1174_lexicon_None",
        "parent": "http://lemon-model.net/lemon#Lexicon",
        "type": "instance",
        "text": "HS1174_lexicon_None (cuneiex:textannotations/HS1174_lexicon_None)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/HS1174_transliteration1_textannotations",
        "parent": "https://www.w3.org/ns/activitystreams#Collection",
        "type": "instance",
        "text": "Text annotations on HS1174 transliteration 1 (cuneiex:textannotations/HS1174_transliteration1_textannotations)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_Duku_word.html",
        "parent": "http://lemon-model.net/lemon#Word",
        "type": "instance",
        "text": "Word: Duku (Duku_word)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ed62d2e-7780-4817-b037-4514321f5b60",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/1ed62d2e-7780-4817-b037-4514321f5b60)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/3fbd349d-e601-40d2-a0d8-69e44f1e4964",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/3fbd349d-e601-40d2-a0d8-69e44f1e4964)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/97d2d91f-3444-471c-8175-2fbc33916119",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/97d2d91f-3444-471c-8175-2fbc33916119)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/9e05045f-f555-4e35-a264-900ab6a1577d",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/9e05045f-f555-4e35-a264-900ab6a1577d)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/abab8f9a-6b20-45d2-bbc8-682c233d9630",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/abab8f9a-6b20-45d2-bbc8-682c233d9630)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of text passage of transliteration 1 of HS1174  (cuneiex:textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "3 (cuneiex:textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "esz5 / \ud809\udc08 (cuneiex:textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "9 (cuneiex:textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "ilimmu / \ud809\udc46 (cuneiex:textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ed62d2e-7780-4817-b037-4514321f5b60_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/1ed62d2e-7780-4817-b037-4514321f5b60_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ed62d2e-7780-4817-b037-4514321f5b60_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "planning (cuneiex:textannotations/1ed62d2e-7780-4817-b037-4514321f5b60_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ed62d2e-7780-4817-b037-4514321f5b60_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "dimma / \ud808\udc76\ud808\ude20 (cuneiex:textannotations/1ed62d2e-7780-4817-b037-4514321f5b60_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "young man (cuneiex:textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "gurusz / \ud808\udd28 (cuneiex:textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "palace (cuneiex:textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "egal / \ud808\udc8d\ud808\udcf2 (cuneiex:textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/3fbd349d-e601-40d2-a0d8-69e44f1e4964_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "young man (cuneiex:textannotations/3fbd349d-e601-40d2-a0d8-69e44f1e4964_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/3fbd349d-e601-40d2-a0d8-69e44f1e4964_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "gurusz / \ud808\udd28 (cuneiex:textannotations/3fbd349d-e601-40d2-a0d8-69e44f1e4964_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "supervisor (cuneiex:textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "nubanda / \ud808\ude61\ud808\udf09 (cuneiex:textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "9 (cuneiex:textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "ilimmu / \ud809\udc46 (cuneiex:textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/97d2d91f-3444-471c-8175-2fbc33916119_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/97d2d91f-3444-471c-8175-2fbc33916119_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/97d2d91f-3444-471c-8175-2fbc33916119_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "house (cuneiex:textannotations/97d2d91f-3444-471c-8175-2fbc33916119_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/97d2d91f-3444-471c-8175-2fbc33916119_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "\ud808\udc8d / e (cuneiex:textannotations/97d2d91f-3444-471c-8175-2fbc33916119_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/9e05045f-f555-4e35-a264-900ab6a1577d_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/9e05045f-f555-4e35-a264-900ab6a1577d_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/9e05045f-f555-4e35-a264-900ab6a1577d_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "30 (cuneiex:textannotations/9e05045f-f555-4e35-a264-900ab6a1577d_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "supervisor (cuneiex:textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "ugula / \ud808\ude7a (cuneiex:textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/abab8f9a-6b20-45d2-bbc8-682c233d9630_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/abab8f9a-6b20-45d2-bbc8-682c233d9630_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "planning (cuneiex:textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "dimma / \ud808\udc76\ud808\ude20 (cuneiex:textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4_body_class_postag",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body of POSTag classification (cuneiex:textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4_body_class_postag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4_body_class_sense",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "supervisor (cuneiex:textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4_body_class_sense)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4_body_wordform",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "ugula / \ud808\ude7a (cuneiex:textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4_body_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/147fcf81-14df-4578-a917-0e3cefbfd17a_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/1ae487f4-737b-4dab-a46f-6fe74c18a265_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/1ed62d2e-7780-4817-b037-4514321f5b60_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/1ed62d2e-7780-4817-b037-4514321f5b60_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/36f343b2-b2bc-41e7-b3a4-2d8afca8d283_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/3da37ef8-06a5-466a-a609-4f2d9a2b3266_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/3fbd349d-e601-40d2-a0d8-69e44f1e4964_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/3fbd349d-e601-40d2-a0d8-69e44f1e4964_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/673adec3-028d-4d4c-ba56-c666cdbe41d2_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/830c20cc-d59d-4722-949d-6bb1a6e7d8dc_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/97d2d91f-3444-471c-8175-2fbc33916119_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/97d2d91f-3444-471c-8175-2fbc33916119_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/9e05045f-f555-4e35-a264-900ab6a1577d_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/9e05045f-f555-4e35-a264-900ab6a1577d_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/a2f8cb33-c98a-43c9-b8f8-3b94947e839e_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/abab8f9a-6b20-45d2-bbc8-682c233d9630_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/abab8f9a-6b20-45d2-bbc8-682c233d9630_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/f5a98936-6492-4e77-b4c6-ddf57a2e40d2_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4_target1_selector",
        "parent": "http://www.w3.org/ns/oa#TextPositionSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of text section at HS1174 transliteration  line 0 char 0 on transliteration (cuneiex:textannotations/fe8a78fb-5ef1-42e2-a764-bee6cdbf41b4_target1_selector)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#TextPositionSelector",
        "parent": "http://www.w3.org/ns/oa#Selector",
        "type": "class",
        "text": "TextPositionSelector (oa:TextPositionSelector) [14]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#end": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#start": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/oa#hasSelector": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/textannotations/abab8f9a-6b20-45d2-bbc8-682c233d9630_body_lemma",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Lemma: Duku (cuneiex:textannotations/abab8f9a-6b20-45d2-bbc8-682c233d9630_body_lemma)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_recogito-js.html",
        "parent": "http://purl.org/dc/elements/1.1/Software",
        "type": "instance",
        "text": "recogito-js (recogito-js)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#TextQuoteSelector",
        "parent": "http://www.w3.org/ns/oa#Selector",
        "type": "class",
        "text": "TextQuoteSelector (oa:TextQuoteSelector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/HS1174_reverse_annotations",
        "parent": "https://www.w3.org/ns/activitystreams#Collection",
        "type": "instance",
        "text": "Image annotations on HS1174 reverse on medium 3D rendering (cuneiex:imgannotations/HS1174_reverse_annotations)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/CoordinateOperation",
        "type": "instance",
        "text": "Object To PCA (cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_xaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "X-axis translation (cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_xaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_yaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Y-axis translation (cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_yaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_zaxis_translation",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameter",
        "type": "instance",
        "text": "Z-axis translation (cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_zaxis_translation)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_010a9fdd-d84f-435b-9736-9c1f9489aeb8_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_04e1a518-d95f-404b-ba1c-346e651a8985_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_22174ad2-aa62-4696-9539-81830707ed89_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_29405e81-a80b-457c-849b-9168ff597157_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_2f800280-da53-498f-9ef0-7f080c120a41_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_3fed3d50-4a59-4364-99bd-16808d1bb666_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_4331eca8-605d-40cb-a6cd-8783a3f932ef_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_4472679d-dc81-4c16-9a47-210efe111429_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_4aff6617-073c-4153-822d-6760d644ee12_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_4de7e5c7-2270-4359-a7b7-1fbb91988454_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_6b1b7aed-0dea-4987-8138-03bb786ce80c_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_7002d072-d708-43ed-9f7b-fbe5d9d8b600_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_78089804-7a01-470c-b28c-830bf8d5ac8f_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_926bd425-fbcf-4b4a-b532-72083fd53346_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_be0ac301-f23e-47d3-b567-3c618a52bc3d_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_c8fb100a-3ce3-4418-9812-93c7d5c14624_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_c9e827a4-65cc-48b2-a38d-d02ff44328eb_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_d0404773-7f6d-4aa8-84ee-b7450e97ebc6_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_xaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "X-axis translation value (cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_xaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_yaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Y-axis translation value (cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_yaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/crs/crs/operation/cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_zaxis_translation_value",
        "parent": "http://situx.github.io/proj4rdf/ont/crs/OperationParameterValue",
        "type": "instance",
        "text": "Z-axis translation value (cartesian_to_pca_fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_zaxis_translation_value)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 5 char 5 on 3D rendering (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 4 char 3 on 3D rendering (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 3 char 3 on 3D rendering (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 4 char 1 on 3D rendering (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 5 char 1 on 3D rendering (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 1 char 4 on 3D rendering (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 2 char 1 on 3D rendering (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 3 char 4 on 3D rendering (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 5 char 2 on 3D rendering (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 1 char 1 on 3D rendering (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 3 char 1 on 3D rendering (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 1 char 2 on 3D rendering (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 4 char 2 on 3D rendering (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 5 char 3 on 3D rendering (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 2 char 2 on 3D rendering (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 2 char 4 on 3D rendering (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 1 char 3 on 3D rendering (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 5 char 4 on 3D rendering (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 2 char 3 on 3D rendering (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d690cfb7-5851-4f80-85fe-630fb7079cc5",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Wedge at HS1174 reverse on 3D rendering (cuneiex:imgannotations/d690cfb7-5851-4f80-85fe-630fb7079cc5)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of Glyph at HS1174 reverse line 3 char 2 on 3D rendering (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 5 (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 5 (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 5 (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 5 (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 1 (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 4 (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 5 (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 1 (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 4 (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 5 (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 3 (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 2 (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d690cfb7-5851-4f80-85fe-630fb7079cc5_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/d690cfb7-5851-4f80-85fe-630fb7079cc5_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_charindex",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Charindex 2 (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_charindex)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_line",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Line 3 (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_line)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_tabletside",
        "parent": "http://www.w3.org/ns/oa#TextualBody",
        "type": "instance",
        "text": "Annotation Body: Tablet Side reverse (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_tabletside)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 5 char 5 on 3D rendering (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 5 char 5 on 3D rendering (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 4 char 3 on 3D rendering (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 4 char 3 on 3D rendering (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 3 char 3 on 3D rendering (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 3 char 3 on 3D rendering (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 4 char 1 on 3D rendering (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 4 char 1 on 3D rendering (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 5 char 1 on 3D rendering (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 5 char 1 on 3D rendering (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 1 char 4 on 3D rendering (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 1 char 4 on 3D rendering (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 2 char 1 on 3D rendering (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 2 char 1 on 3D rendering (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 3 char 4 on 3D rendering (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 3 char 4 on 3D rendering (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 5 char 2 on 3D rendering (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 5 char 2 on 3D rendering (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 1 char 1 on 3D rendering (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 1 char 1 on 3D rendering (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 3 char 1 on 3D rendering (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 3 char 1 on 3D rendering (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 1 char 2 on 3D rendering (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 1 char 2 on 3D rendering (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 4 char 2 on 3D rendering (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 4 char 2 on 3D rendering (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 5 char 3 on 3D rendering (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 5 char 3 on 3D rendering (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 2 char 2 on 3D rendering (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 2 char 2 on 3D rendering (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 2 char 4 on 3D rendering (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 2 char 4 on 3D rendering (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 1 char 3 on 3D rendering (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 1 char 3 on 3D rendering (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 5 char 4 on 3D rendering (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 5 char 4 on 3D rendering (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 2 char 3 on 3D rendering (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 2 char 3 on 3D rendering (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d690cfb7-5851-4f80-85fe-630fb7079cc5_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Wedge at HS1174 reverse on 3D rendering (cuneiex:imgannotations/d690cfb7-5851-4f80-85fe-630fb7079cc5_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_glyph",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing Glyph at HS1174 reverse line 3 char 2 on 3D rendering (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_glyph)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_translit",
        "parent": "http://www.w3.org/ns/oa#SpecificResource",
        "type": "instance",
        "text": "Annotation body referencing transliteration char occurrence at HS1174 reverse line 3 char 2 on 3D rendering (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_body_translit)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 5 on 3D rendering (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 4 char 3 on 3D rendering (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 3 on 3D rendering (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 4 char 1 on 3D rendering (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 1 on 3D rendering (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 4 on 3D rendering (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 1 on 3D rendering (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 4 on 3D rendering (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 2 on 3D rendering (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 1 on 3D rendering (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 1 on 3D rendering (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 2 on 3D rendering (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 4 char 2 on 3D rendering (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 3 on 3D rendering (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 2 on 3D rendering (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 4 on 3D rendering (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 3 on 3D rendering (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 4 on 3D rendering (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 3 on 3D rendering (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d690cfb7-5851-4f80-85fe-630fb7079cc5_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Wedge at HS1174 reverse on 3D rendering (cuneiex:imgannotations/d690cfb7-5851-4f80-85fe-630fb7079cc5_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target1_selector",
        "parent": "http://www.w3.org/ns/oa#SvgSelector",
        "type": "instance",
        "text": "Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 2 on 3D rendering (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target1_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 5 char 5 on a 3D Mesh (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 4 char 3 on a 3D Mesh (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 3 char 3 on a 3D Mesh (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 4 char 1 on a 3D Mesh (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 5 char 1 on a 3D Mesh (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 1 char 4 on a 3D Mesh (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 2 char 1 on a 3D Mesh (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 3 char 4 on a 3D Mesh (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 5 char 2 on a 3D Mesh (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 1 char 1 on a 3D Mesh (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 3 char 1 on a 3D Mesh (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 1 char 2 on a 3D Mesh (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 4 char 2 on a 3D Mesh (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 5 char 3 on a 3D Mesh (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 2 char 2 on a 3D Mesh (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 2 char 4 on a 3D Mesh (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 1 char 3 on a 3D Mesh (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 5 char 4 on a 3D Mesh (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 2 char 3 on a 3D Mesh (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target3d_labelselector",
        "parent": "http://purl.org/meshsparql#MeshLabelSelector",
        "type": "instance",
        "text": "3D Annotation target labeling selector of Annotation of Glyph at HS1174 reverse line 3 char 2 on a 3D Mesh (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target3d_labelselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 5 char 5 on a 3D Mesh (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 4 char 3 on a 3D Mesh (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 3 char 3 on a 3D Mesh (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 4 char 1 on a 3D Mesh (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 5 char 1 on a 3D Mesh (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 1 char 4 on a 3D Mesh (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 2 char 1 on a 3D Mesh (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 3 char 4 on a 3D Mesh (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 5 char 2 on a 3D Mesh (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 1 char 1 on a 3D Mesh (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 3 char 1 on a 3D Mesh (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 1 char 2 on a 3D Mesh (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 4 char 2 on a 3D Mesh (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 5 char 3 on a 3D Mesh (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 2 char 2 on a 3D Mesh (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 2 char 4 on a 3D Mesh (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 1 char 3 on a 3D Mesh (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 5 char 4 on a 3D Mesh (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 2 char 3 on a 3D Mesh (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target3d_meshrefselector",
        "parent": "http://purl.org/meshsparql#MeshReferenceSelector",
        "type": "instance",
        "text": "3D Annotation target meshref selector of Annotation of Glyph at HS1174 reverse line 3 char 2 on a 3D Mesh (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target3d_meshrefselector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 5 on a 3D Mesh (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 4 char 3 on a 3D Mesh (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 3 on a 3D Mesh (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 4 char 1 on a 3D Mesh (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 1 on a 3D Mesh (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 4 on a 3D Mesh (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 1 on a 3D Mesh (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 4 on a 3D Mesh (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 2 on a 3D Mesh (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 1 on a 3D Mesh (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 1 on a 3D Mesh (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 2 on a 3D Mesh (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 4 char 2 on a 3D Mesh (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 3 on a 3D Mesh (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 2 on a 3D Mesh (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 4 on a 3D Mesh (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 3 on a 3D Mesh (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 4 on a 3D Mesh (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 3 on a 3D Mesh (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target3d_selector",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 2 on a 3D Mesh (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target3d_selector)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 5 on a 3D Mesh (cuneiex:imgannotations/010a9fdd-d84f-435b-9736-9c1f9489aeb8_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 4 char 3 on a 3D Mesh (cuneiex:imgannotations/04e1a518-d95f-404b-ba1c-346e651a8985_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 3 on a 3D Mesh (cuneiex:imgannotations/22174ad2-aa62-4696-9539-81830707ed89_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/29405e81-a80b-457c-849b-9168ff597157_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 4 char 1 on a 3D Mesh (cuneiex:imgannotations/29405e81-a80b-457c-849b-9168ff597157_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 1 on a 3D Mesh (cuneiex:imgannotations/2f800280-da53-498f-9ef0-7f080c120a41_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 4 on a 3D Mesh (cuneiex:imgannotations/3fed3d50-4a59-4364-99bd-16808d1bb666_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 1 on a 3D Mesh (cuneiex:imgannotations/4331eca8-605d-40cb-a6cd-8783a3f932ef_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 4 on a 3D Mesh (cuneiex:imgannotations/4472679d-dc81-4c16-9a47-210efe111429_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 2 on a 3D Mesh (cuneiex:imgannotations/4aff6617-073c-4153-822d-6760d644ee12_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 1 on a 3D Mesh (cuneiex:imgannotations/4de7e5c7-2270-4359-a7b7-1fbb91988454_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 1 on a 3D Mesh (cuneiex:imgannotations/6b1b7aed-0dea-4987-8138-03bb786ce80c_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 2 on a 3D Mesh (cuneiex:imgannotations/7002d072-d708-43ed-9f7b-fbe5d9d8b600_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 4 char 2 on a 3D Mesh (cuneiex:imgannotations/78089804-7a01-470c-b28c-830bf8d5ac8f_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 3 on a 3D Mesh (cuneiex:imgannotations/8d1ad8c9-3d87-4f25-8aa8-ab8b12e9a5cf_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 2 on a 3D Mesh (cuneiex:imgannotations/926bd425-fbcf-4b4a-b532-72083fd53346_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 4 on a 3D Mesh (cuneiex:imgannotations/be0ac301-f23e-47d3-b567-3c618a52bc3d_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 1 char 3 on a 3D Mesh (cuneiex:imgannotations/c8fb100a-3ce3-4418-9812-93c7d5c14624_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 5 char 4 on a 3D Mesh (cuneiex:imgannotations/c9e827a4-65cc-48b2-a38d-d02ff44328eb_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 2 char 3 on a 3D Mesh (cuneiex:imgannotations/d0404773-7f6d-4aa8-84ee-b7450e97ebc6_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target3d_selector_compref0",
        "parent": "http://purl.org/meshsparql#PCAReference",
        "type": "instance",
        "text": "Computing Reference of 3D Annotation target selector of Annotation of Glyph at HS1174 reverse line 3 char 2 on a 3D Mesh (cuneiex:imgannotations/fb9c9d65-e2f6-4ed2-bb8c-620adc0533b1_target3d_selector_compref0)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/nonns_annotorious-openseadragon.html",
        "parent": "http://purl.org/dc/elements/1.1/Software",
        "type": "instance",
        "text": "annotorious-openseadragon (annotorious-openseadragon)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/3(disz)_charvariant1_ap1",
        "parent": "http://www.purl.org/graphemon#CuneiformWedge",
        "type": "instance",
        "text": "Atomic part 1 of grapheme variant 1 of grapheme 3(disz) (3(disz)_charvariant1_ap1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/3(disz)_charvariant1_ap2",
        "parent": "http://www.purl.org/graphemon#CuneiformWedge",
        "type": "instance",
        "text": "Atomic part 2 of grapheme variant 1 of grapheme 3(disz) (3(disz)_charvariant1_ap2)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/3(disz)_charvariant1_ap3",
        "parent": "http://www.purl.org/graphemon#CuneiformWedge",
        "type": "instance",
        "text": "Atomic part 3 of grapheme variant 1 of grapheme 3(disz) (3(disz)_charvariant1_ap3)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/um_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: UM (um_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/za_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: ZA (za_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/tum_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: TUM (tum_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/tur_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: TUR (tur_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/ud_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: UD (ud_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/ru_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: RU (ru_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/sa6_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: SA6 (sa6_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/szesz_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: SZESZ (szesz_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/ga_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: GA (ga_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/ma_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: MA (ma_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/nu_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: NU (nu_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/pa_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: PA (pa_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/gal_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: GAL (gal_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/gurusz_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: GURUSZ (gurusz_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/ka_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: KA (ka_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/ku3_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: KU3 (ku3_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/ku_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: KU (ku_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/lu2_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: LU2 (lu2_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/da_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: DA (da_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/dim2_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: GIM (dim2_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/du6_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: DU6 (du6_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/a_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: A (a_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/9(disz)_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: 9(disz) (9(disz)_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/3(u)_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: 3(u) (3(u)_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/3(disz)_charvariant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme Variant 1: 3(disz) (3(disz)_charvariant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/HS1174_graphemevars",
        "parent": "http://www.purl.org/graphemon#GraphemeVariantCollection",
        "type": "instance",
        "text": "HS1174 Grapheme Variant Collection (HS1174_graphemevars)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/3(disz)_charvariant1_apcollection",
        "parent": "http://www.purl.org/graphemon#GraphemeAtomicPartCollection",
        "type": "instance",
        "text": "Atomic part collection of 3(disz) grapheme variant 1 (3(disz)_charvariant1_apcollection)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1",
        "parent": "http://www.gigamesh.eu/ont#Mesh",
        "type": "instance",
        "text": "HS1174_mesh1 (HS1174_mesh1)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#Mesh",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "Mesh (giga:Mesh) [1]",
        "data": {
          "to": {
            "http://purl.org/dc/terms/contributor": {
              "instancecount": 1,
              "http://xmlns.com/foaf/0.1/Person": 1
            },
            "http://www.gigamesh.eu/ont#NaNVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#NaNVertices": 1
            },
            "http://www.gigamesh.eu/ont#amountOfConnectedComponents": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#ConnectedComponents": 1
            },
            "http://www.gigamesh.eu/ont#borderFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#BorderFaces": 1
            },
            "http://www.gigamesh.eu/ont#borderFacesBridgeTriConnection": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#BorderFacesBridgeTriConnection": 1
            },
            "http://www.gigamesh.eu/ont#borderVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#BorderVertices": 1
            },
            "http://www.gigamesh.eu/ont#boundingBox": {
              "instancecount": 1,
              "http://www.opengis.net/ont/geosparql#Geometry": 1
            },
            "http://www.gigamesh.eu/ont#bridgeBorderFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#BridgeBorderFaces": 1
            },
            "http://www.gigamesh.eu/ont#circleCenterVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#CircleCenterVertices": 1
            },
            "http://www.gigamesh.eu/ont#danglingBorderFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#DanglingBorderFaces": 1
            },
            "http://www.gigamesh.eu/ont#finiteFunctionValueVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#FiniteFunctionValueVertices": 1
            },
            "http://www.gigamesh.eu/ont#invertedFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#InvertedFaces": 1
            },
            "http://www.gigamesh.eu/ont#localFunctionValueMaxVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#LocalFunctionMaxValueVertices": 1
            },
            "http://www.gigamesh.eu/ont#localFunctionValueMinVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#LocalFunctionMinValueVertices": 1
            },
            "http://www.gigamesh.eu/ont#manifoldFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#ManifoldFaces": 1
            },
            "http://www.gigamesh.eu/ont#manuallyAddedVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#ManuallyAddedVertices": 1
            },
            "http://www.gigamesh.eu/ont#nonManifoldFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#NonManifoldFaces": 1
            },
            "http://www.gigamesh.eu/ont#nonManifoldVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#NonManifoldVertices": 1
            },
            "http://www.gigamesh.eu/ont#selectedFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#SelectedFaces": 1
            },
            "http://www.gigamesh.eu/ont#selectedVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#SelectedVertices": 1
            },
            "http://www.gigamesh.eu/ont#singularVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#SingularVertices": 1
            },
            "http://www.gigamesh.eu/ont#soloFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#SoloFaces": 1
            },
            "http://www.gigamesh.eu/ont#stickyFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#StickyFaces": 1
            },
            "http://www.gigamesh.eu/ont#syntheticVertexFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#SyntheticVertexFaces": 1
            },
            "http://www.gigamesh.eu/ont#syntheticVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#SyntheticVertices": 1
            },
            "http://www.gigamesh.eu/ont#threeBorderVertexFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#ThreeBorderVertexFaces": 1
            },
            "http://www.gigamesh.eu/ont#totalArea": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#totalNumberOfFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            },
            "http://www.gigamesh.eu/ont#totalNumberOfVertices": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            },
            "http://www.gigamesh.eu/ont#totalVolumeDX": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#totalVolumeDY": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#totalVolumeDZ": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#vertexIsolated": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#VertexIsolated": 1
            },
            "http://www.gigamesh.eu/ont#vertexNormalLength": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#VertexNormalLength": 1
            },
            "http://www.gigamesh.eu/ont#verticesOnInvertedEdge": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#VerticesOnInvertedEdge": 1
            },
            "http://www.gigamesh.eu/ont#verticesPartOfZeroAreaFace": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#VerticesPartOfZeroAreaFace": 1
            },
            "http://www.gigamesh.eu/ont#zeroAreaFaces": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#ZeroAreaFaces": 1
            },
            "http://www.opengis.net/ont/geosparql#inSRS": {
              "instancecount": 1,
              "https://situx.github.io/proj4rdf/ont/crs/CartesianCS": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 40
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_contributor",
        "parent": "http://xmlns.com/foaf/0.1/Person",
        "type": "instance",
        "text": "HS1174_mesh1 Contributor (HS1174_mesh1_contributor)",
        "data": {}
      },
      {
        "id": "http://xmlns.com/foaf/0.1/Person",
        "parent": "http://www.w3.org/ns/prov#Agent",
        "type": "class",
        "text": "Person (foaf:Person) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://xmlns.com/foaf/0.1/accountName": {
              "instancecount": 1
            }
          },
          "from": {
            "http://purl.org/dc/terms/contributor": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://www.w3.org/ns/prov#Agent",
        "parent": "#",
        "type": "class",
        "text": "Agent (prov:Agent)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_totalNumberOfVertices",
        "parent": "http://www.gigamesh.eu/ont#TotalNumberOfVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Total Number of Vertices (HS1174_mesh1_totalNumberOfVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#TotalNumberOfVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "TotalNumberOfVertices (giga:TotalNumberOfVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#totalNumberOfVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#NaNVertices": 1,
              "http://www.gigamesh.eu/ont#VertexNormalLength": 1,
              "http://www.gigamesh.eu/ont#VertexIsolated": 1,
              "http://www.gigamesh.eu/ont#BorderVertices": 1,
              "http://www.gigamesh.eu/ont#NonManifoldVertices": 1,
              "http://www.gigamesh.eu/ont#SingularVertices": 1,
              "http://www.gigamesh.eu/ont#VerticesOnInvertedEdge": 1,
              "http://www.gigamesh.eu/ont#VerticesPartOfZeroAreaFace": 1,
              "http://www.gigamesh.eu/ont#SyntheticVertices": 1,
              "http://www.gigamesh.eu/ont#ManuallyAddedVertices": 1,
              "http://www.gigamesh.eu/ont#CircleCenterVertices": 1,
              "http://www.gigamesh.eu/ont#SelectedVertices": 1,
              "http://www.gigamesh.eu/ont#FiniteFunctionValueVertices": 1,
              "http://www.gigamesh.eu/ont#LocalFunctionMinValueVertices": 1,
              "http://www.gigamesh.eu/ont#LocalFunctionMaxValueVertices": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://www.gigamesh.eu/ont#GigameshInfo",
        "parent": "#",
        "type": "class",
        "text": "GigameshInfo (giga:GigameshInfo)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_NaNVertices",
        "parent": "http://www.gigamesh.eu/ont#NaNVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of NaN Vertices (HS1174_mesh1_NaNVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#NaNVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "NaNVertices (giga:NaNVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#NaNVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_vertexNormalLength",
        "parent": "http://www.gigamesh.eu/ont#VertexNormalLength",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of Vertices with normal length (HS1174_mesh1_vertexNormalLength)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#VertexNormalLength",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "VertexNormalLength (giga:VertexNormalLength) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#vertexNormalLength": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_vertexIsolated",
        "parent": "http://www.gigamesh.eu/ont#VertexIsolated",
        "type": "instance",
        "text": "HS1174_mesh1 Isolated Vertices (HS1174_mesh1_vertexIsolated)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#VertexIsolated",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "VertexIsolated (giga:VertexIsolated) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#vertexIsolated": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_borderVertices",
        "parent": "http://www.gigamesh.eu/ont#BorderVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of Border Vertices (HS1174_mesh1_borderVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#BorderVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "BorderVertices (giga:BorderVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#borderVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_nonManifoldVertices",
        "parent": "http://www.gigamesh.eu/ont#NonManifoldVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of Non-Manifold Vertices (HS1174_mesh1_nonManifoldVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#NonManifoldVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "NonManifoldVertices (giga:NonManifoldVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#nonManifoldVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_singularVertices",
        "parent": "http://www.gigamesh.eu/ont#SingularVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of Singular Vertices (HS1174_mesh1_singularVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#SingularVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "SingularVertices (giga:SingularVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#singularVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_verticesOnInvertedEdge",
        "parent": "http://www.gigamesh.eu/ont#VerticesOnInvertedEdge",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of Vertices on inverted edges (HS1174_mesh1_verticesOnInvertedEdge)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#VerticesOnInvertedEdge",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "VerticesOnInvertedEdge (giga:VerticesOnInvertedEdge) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#verticesOnInvertedEdge": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_verticesPartOfZeroAreaFace",
        "parent": "http://www.gigamesh.eu/ont#VerticesPartOfZeroAreaFace",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of Vertices which are part of zero area faces (HS1174_mesh1_verticesPartOfZeroAreaFace)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#VerticesPartOfZeroAreaFace",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "VerticesPartOfZeroAreaFace (giga:VerticesPartOfZeroAreaFace) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#verticesPartOfZeroAreaFace": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_syntheticVertices",
        "parent": "http://www.gigamesh.eu/ont#SyntheticVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of synthetic vertices (HS1174_mesh1_syntheticVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#SyntheticVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "SyntheticVertices (giga:SyntheticVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#syntheticVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_manuallyAddedVertices",
        "parent": "http://www.gigamesh.eu/ont#ManuallyAddedVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of manually added vertices (HS1174_mesh1_manuallyAddedVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#ManuallyAddedVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "ManuallyAddedVertices (giga:ManuallyAddedVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#manuallyAddedVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_circleCenterVertices",
        "parent": "http://www.gigamesh.eu/ont#CircleCenterVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of circle center vertices (HS1174_mesh1_circleCenterVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#CircleCenterVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "CircleCenterVertices (giga:CircleCenterVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#circleCenterVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_selectedVertices",
        "parent": "http://www.gigamesh.eu/ont#SelectedVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of selected vertices (HS1174_mesh1_selectedVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#SelectedVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "SelectedVertices (giga:SelectedVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#selectedVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_finiteFunctionValueVertices",
        "parent": "http://www.gigamesh.eu/ont#FiniteFunctionValueVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of finite function value vertices (HS1174_mesh1_finiteFunctionValueVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#FiniteFunctionValueVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "FiniteFunctionValueVertices (giga:FiniteFunctionValueVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#finiteFunctionValueVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_localFunctionMinValueVertices",
        "parent": "http://www.gigamesh.eu/ont#LocalFunctionMinValueVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of local function minimum value vertices (HS1174_mesh1_localFunctionMinValueVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#LocalFunctionMinValueVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "LocalFunctionMinValueVertices (giga:LocalFunctionMinValueVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#localFunctionValueMinVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_localFunctionMaxValueVertices",
        "parent": "http://www.gigamesh.eu/ont#LocalFunctionMaxValueVertices",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of local function maximum value vertices (HS1174_mesh1_localFunctionMaxValueVertices)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#LocalFunctionMaxValueVertices",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "LocalFunctionMaxValueVertices (giga:LocalFunctionMaxValueVertices) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfVertices": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#localFunctionValueMaxVertices": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_totalNumberOfFaces",
        "parent": "http://www.gigamesh.eu/ont#TotalNumberOfFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Total number of faces (HS1174_mesh1_totalNumberOfFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#TotalNumberOfFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "TotalNumberOfFaces (giga:TotalNumberOfFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#totalNumberOfFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#SoloFaces": 1,
              "http://www.gigamesh.eu/ont#BorderFaces": 1,
              "http://www.gigamesh.eu/ont#ThreeBorderVertexFaces": 1,
              "http://www.gigamesh.eu/ont#BorderFacesBridgeTriConnection": 1,
              "http://www.gigamesh.eu/ont#BridgeBorderFaces": 1,
              "http://www.gigamesh.eu/ont#DanglingBorderFaces": 1,
              "http://www.gigamesh.eu/ont#ManifoldFaces": 1,
              "http://www.gigamesh.eu/ont#NonManifoldFaces": 1,
              "http://www.gigamesh.eu/ont#StickyFaces": 1,
              "http://www.gigamesh.eu/ont#ZeroAreaFaces": 1,
              "http://www.gigamesh.eu/ont#InvertedFaces": 1,
              "http://www.gigamesh.eu/ont#SelectedFaces": 1,
              "http://www.gigamesh.eu/ont#SyntheticVertexFaces": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_soloFaces",
        "parent": "http://www.gigamesh.eu/ont#SoloFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of solo faces (HS1174_mesh1_soloFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#SoloFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "SoloFaces (giga:SoloFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#soloFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_borderFaces",
        "parent": "http://www.gigamesh.eu/ont#BorderFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of border faces (HS1174_mesh1_borderFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#BorderFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "BorderFaces (giga:BorderFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#borderFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_threeBorderVertexFaces",
        "parent": "http://www.gigamesh.eu/ont#ThreeBorderVertexFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of three border vertex faces (HS1174_mesh1_threeBorderVertexFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#ThreeBorderVertexFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "ThreeBorderVertexFaces (giga:ThreeBorderVertexFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#threeBorderVertexFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_borderFacesBridgeTriConnection",
        "parent": "http://www.gigamesh.eu/ont#BorderFacesBridgeTriConnection",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of border faces with a bridge tri connection (HS1174_mesh1_borderFacesBridgeTriConnection)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#BorderFacesBridgeTriConnection",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "BorderFacesBridgeTriConnection (giga:BorderFacesBridgeTriConnection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#borderFacesBridgeTriConnection": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_bridgeBorderFaces",
        "parent": "http://www.gigamesh.eu/ont#BridgeBorderFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of bridge border faces (HS1174_mesh1_bridgeBorderFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#BridgeBorderFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "BridgeBorderFaces (giga:BridgeBorderFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#bridgeBorderFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_danglingBorderFaces",
        "parent": "http://www.gigamesh.eu/ont#DanglingBorderFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of dangling border faces (HS1174_mesh1_danglingBorderFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#DanglingBorderFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "DanglingBorderFaces (giga:DanglingBorderFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#danglingBorderFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_manifoldFaces",
        "parent": "http://www.gigamesh.eu/ont#ManifoldFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of manifold faces (HS1174_mesh1_manifoldFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#ManifoldFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "ManifoldFaces (giga:ManifoldFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#manifoldFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_nonManifoldFaces",
        "parent": "http://www.gigamesh.eu/ont#NonManifoldFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of non-manifold faces (HS1174_mesh1_nonManifoldFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#NonManifoldFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "NonManifoldFaces (giga:NonManifoldFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#nonManifoldFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_stickyFaces",
        "parent": "http://www.gigamesh.eu/ont#StickyFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of sticky faces (HS1174_mesh1_stickyFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#StickyFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "StickyFaces (giga:StickyFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#stickyFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_zeroAreaFaces",
        "parent": "http://www.gigamesh.eu/ont#ZeroAreaFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of zero area faces (HS1174_mesh1_zeroAreaFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#ZeroAreaFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "ZeroAreaFaces (giga:ZeroAreaFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#zeroAreaFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_invertedFaces",
        "parent": "http://www.gigamesh.eu/ont#InvertedFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of inverted faces (HS1174_mesh1_invertedFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#InvertedFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "InvertedFaces (giga:InvertedFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#invertedFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_selectedFaces",
        "parent": "http://www.gigamesh.eu/ont#SelectedFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of selected faces (HS1174_mesh1_selectedFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#SelectedFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "SelectedFaces (giga:SelectedFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#selectedFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_syntheticVertexFaces",
        "parent": "http://www.gigamesh.eu/ont#SyntheticVertexFaces",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of synthetic vertex faces (HS1174_mesh1_syntheticVertexFaces)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#SyntheticVertexFaces",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "SyntheticVertexFaces (giga:SyntheticVertexFaces) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.wikidata.org/prop/direct/P361": {
              "instancecount": 1,
              "http://www.gigamesh.eu/ont#TotalNumberOfFaces": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#syntheticVertexFaces": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_connectedComponents",
        "parent": "http://www.gigamesh.eu/ont#ConnectedComponents",
        "type": "instance",
        "text": "HS1174_mesh1 Amount of connected components (HS1174_mesh1_connectedComponents)",
        "data": {}
      },
      {
        "id": "http://www.gigamesh.eu/ont#ConnectedComponents",
        "parent": "http://www.gigamesh.eu/ont#GigameshInfo",
        "type": "class",
        "text": "ConnectedComponents (giga:ConnectedComponents) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#amountOfConnectedComponents": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/HS1174/mesh/HS1174_mesh1_geom",
        "parent": "http://www.opengis.net/ont/geosparql#Geometry",
        "type": "instance",
        "text": "HS1174_mesh1 Bounding Box (HS1174_mesh1_geom)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Geometry",
        "parent": "#",
        "type": "class",
        "text": "Geometry (gsp:Geometry) [1]",
        "data": {
          "to": {
            "http://www.gigamesh.eu/ont#boundingBoxHeight": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#boundingBoxThickness": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#boundingBoxWidth": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#maximumXCoordinate": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#maximumYCoordinate": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#maximumZCoordinate": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#minimumXCoordinate": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#minimumYCoordinate": {
              "instancecount": 1
            },
            "http://www.gigamesh.eu/ont#minimumZCoordinate": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/geosparql#asWKT": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.gigamesh.eu/ont#boundingBox": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 12
      },
      {
        "id": "https://situx.github.io/proj4rdf/ont/crs/CartesianCS",
        "parent": "#",
        "type": "class",
        "text": "CartesianCS [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/asSVG": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/asWKT": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/axis": {
              "instancecount": 3,
              "https://situx.github.io/proj4rdf/ont/crs/CoordinateSystemAxis": 3
            }
          },
          "from": {
            "http://www.opengis.net/ont/geosparql#inSRS": {
              "instancecount": 0,
              "http://www.gigamesh.eu/ont#Mesh": 1
            }
          }
        },
        "instancecount": 7
      },
      {
        "id": "https://situx.github.io/proj4rdf/ont/crs/CoordinateSystemAxis",
        "parent": "#",
        "type": "class",
        "text": "CoordinateSystemAxis [3]",
        "data": {
          "to": {
            "http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/abbreviation": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/asSVG": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/axisDirection": {
              "instancecount": 1
            },
            "https://situx.github.io/proj4rdf/ont/crs/axisOrder": {
              "instancecount": 1
            }
          },
          "from": {
            "https://situx.github.io/proj4rdf/ont/crs/axis": {
              "instancecount": 0,
              "https://situx.github.io/proj4rdf/ont/crs/CartesianCS": 1
            }
          }
        },
        "instancecount": 7
      },
      {
        "id": "http://www.purl.org/cuneiform#GraphemeVariantCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "GraphemeVariantCollection (purl:cuneiform#GraphemeVariantCollection)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_glyphlist",
        "parent": "http://www.purl.org/cuneiform#GlyphCollection",
        "type": "instance",
        "text": "Glyphs of HS1174 (cuneiex:HS1174_glyphlist)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#GlyphCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "class",
        "text": "GlyphCollection (purl:cuneiform#GlyphCollection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 44,
              "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph": 44
            }
          },
          "from": {}
        },
        "instancecount": 46
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_charoccurrences",
        "parent": "http://www.purl.org/cuneiform#CharOccurrenceCollection",
        "type": "instance",
        "text": "Char Occurrences of HS1174 generated from transliteration 1 (cuneiex:HS1174_transliteration1_charoccurrences)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#CharOccurrenceCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "class",
        "text": "CharOccurrenceCollection (purl:cuneiform#CharOccurrenceCollection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 44,
              "http://www.purl.org/cuneiform#TransliterationCharOccurrence": 44
            }
          },
          "from": {}
        },
        "instancecount": 46
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_lexicon_sux",
        "parent": "http://lemon-model.net/lemon#Lexicon",
        "type": "instance",
        "text": "Sumerian Lexicon for HS1174 generated from transliteration 1 (cuneiex:HS1174_transliteration1_lexicon_sux)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_wordformoccurrences",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurrenceCollection",
        "type": "instance",
        "text": "Wordform Occurrences of HS1174 generated from transliteration 1 (cuneiex:HS1174_transliteration1_wordformoccurrences)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#WordFormOccurrenceCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "class",
        "text": "WordFormOccurrenceCollection (purl:cuneiform#WordFormOccurrenceCollection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 21,
              "http://lemon-model.net/lemon#WordForm": 21
            }
          },
          "from": {}
        },
        "instancecount": 23
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_writtenText",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX1_WrittenText",
        "type": "instance",
        "text": "Written Text on HS1174 (cuneiex:HS1174_writtenText)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/3_disz_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: 3(disz) (cuneiex:3_disz_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/3_u_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: 3(u) (cuneiex:3_u_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/9_disz_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: 9(disz) (cuneiex:9_disz_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/da_ak_ru_um_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: da-ak-ru-um (cuneiex:da_ak_ru_um_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/dim2_ma_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: dim2-ma (cuneiex:dim2_ma_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/du6_ku3_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: du6-ku3 (cuneiex:du6_ku3_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/e2_a_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: e2-a (cuneiex:e2_a_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/e2_gal_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: e2-gal (cuneiex:e2_gal_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ensi2_ka_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: ensi2-ka (cuneiex:ensi2_ka_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/gurusz_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: gurusz (cuneiex:gurusz_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ib2_dab5_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: ib2-dab5 (cuneiex:ib2_dab5_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/iti_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: iti (cuneiex:iti_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ku3_sa6_ga_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: ku3-sa6-ga (cuneiex:ku3_sa6_ga_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/lu2_ga_a_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: lu2-ga-a (cuneiex:lu2_ga_a_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/nu_banda3_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: nu-banda3 (cuneiex:nu_banda3_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/sza3_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: sza3 (cuneiex:sza3_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/szesz_da_da_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: szesz-da-da (cuneiex:szesz_da_da_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/szu_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: szu (cuneiex:szu_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/tum_al__TA_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: tum-al!(TA) (cuneiex:tum_al__TA_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/u4_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: u4 (cuneiex:u4_wordform)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/ugula_wordform",
        "parent": "http://lemon-model.net/lemon#WordForm",
        "type": "instance",
        "text": "WordForm: ugula (cuneiex:ugula_wordform)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#Side",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX7_WrittenTextFragment",
        "type": "class",
        "text": "Side (purl:cuneiform#Side) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://xmlns.com/foaf/0.1/image": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#hasSurface": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#Tablet": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://www.cidoc-crm.org/cidoc-crm/TX7_WrittenTextFragment",
        "parent": "#",
        "type": "class",
        "text": "TX7_WrittenTextFragment (crm:TX7_WrittenTextFragment)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_writtenText_reading",
        "parent": "http://www.cidoc-crm.org/cidoc-crm/TX5_Reading",
        "type": "instance",
        "text": "Reading interpretation of the written text of HS1174 (cuneiex:HS1174_writtenText_reading)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_a_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme A: Variant 1 (character_a_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ag_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme AG: Variant 1 (character_ag_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_da_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme DA: Variant 1 (character_da_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_du6_lagar_gun\u00fb_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme DU6 (LAGAR-gun\u00fb): Variant 1 (character_du6_lagar_gun\u00fb_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ka_x_bi_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme KA x BI: Variant 1 (character_ka_x_bi_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ku_d\u00far_tukul_tusz_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme KU (D\u00daR, TUKUL, TUSZ): Variant 1 (character_ku_d\u00far_tukul_tusz_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ma_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme MA: Variant 1 (character_ma_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_nu_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme NU: Variant 1 (character_nu_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ru_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme RU: Variant 1 (character_ru_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_szab6_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme SZAB6: Variant 1 (character_szab6_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_szesz_\u00f9ri_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme SZESZ (\u00d9RI): Variant 1 (character_szesz_\u00f9ri_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_szu_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme SZU: Variant 1 (character_szu_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_tum_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme TUM: Variant 1 (character_tum_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ud_babbar_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme UD (BABBAR): Variant 1 (character_ud_babbar_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_um_variant1",
        "parent": "http://www.purl.org/graphemon#GraphemeVariant",
        "type": "instance",
        "text": "Grapheme UM: Variant 1 (character_um_variant1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ag",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: AG (character_ag)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_du6_lagar_gun\u00fb",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: DU6 (LAGAR-gun\u00fb) (character_du6_lagar_gun\u00fb)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ka_x_bi",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: KA x BI (character_ka_x_bi)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ku_d\u00far_tukul_tusz",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: KU (D\u00daR, TUKUL, TUSZ) (character_ku_d\u00far_tukul_tusz)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_nu",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: NU (character_nu)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ru",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: RU (character_ru)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_szab6",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: SZAB6 (character_szab6)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_szesz_\u00f9ri",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: SZESZ (\u00d9RI) (character_szesz_\u00f9ri)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_tum",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: TUM (character_tum)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_um",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: UM (character_um)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_a",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: A (character_a)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ma",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: MA (character_ma)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ud_babbar",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: UD (BABBAR) (character_ud_babbar)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_da",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: DA (character_da)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_szu",
        "parent": "http://www.purl.org/graphemon#Grapheme",
        "type": "instance",
        "text": "Character: SZU (character_szu)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/graphemon#Grapheme",
        "parent": "#",
        "type": "class",
        "text": "Grapheme (purl:graphemon#Grapheme) [15]",
        "data": {
          "to": {
            "http://www.purl.org/graphemon#hasGraphemeReading": {
              "instancecount": 1,
              "http://www.purl.org/graphemon#GraphemeReading": 1
            },
            "http://www.purl.org/graphemon#variant": {
              "instancecount": 1,
              "http://www.purl.org/graphemon#GraphemeVariant": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.purl.org/cuneiform#contains": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#TransliterationCharOccurrence": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char6_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ma (HS1174[obverse_transliteration1_line1_char6]) (cuneiex:HS1174_transliteration1_obverse_line1_char6_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char8_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: dab5 (HS1174[obverse_transliteration1_line2_char8]) (cuneiex:HS1174_transliteration1_obverse_line2_char8_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_char4_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: da (HS1174[obverse_transliteration1_line3_char4]) (cuneiex:HS1174_transliteration1_obverse_line3_char4_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char5_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ma (HS1174[obverse_transliteration1_line4_char5]) (cuneiex:HS1174_transliteration1_obverse_line4_char5_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_char4_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: a (HS1174[reverse_transliteration1_line1_char4]) (cuneiex:HS1174_transliteration1_reverse_line1_char4_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char5_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ga (HS1174[reverse_transliteration1_line2_char5]) (cuneiex:HS1174_transliteration1_reverse_line2_char5_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_char4_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ka (HS1174[reverse_transliteration1_line3_char4]) (cuneiex:HS1174_transliteration1_reverse_line3_char4_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line4_char3_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: al!(TA) (HS1174[reverse_transliteration1_line4_char3]) (cuneiex:HS1174_transliteration1_reverse_line4_char3_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char5_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: 9(disz) (HS1174[reverse_transliteration1_line5_char5]) (cuneiex:HS1174_transliteration1_reverse_line5_char5_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char2_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: 3(disz) (HS1174[obverse_transliteration1_line1_char2]) (cuneiex:HS1174_transliteration1_obverse_line1_char2_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char3_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: gurusz (HS1174[obverse_transliteration1_line1_char3]) (cuneiex:HS1174_transliteration1_obverse_line1_char3_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char4_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: szu (HS1174[obverse_transliteration1_line1_char4]) (cuneiex:HS1174_transliteration1_obverse_line1_char4_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char5_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: dim2 (HS1174[obverse_transliteration1_line1_char5]) (cuneiex:HS1174_transliteration1_obverse_line1_char5_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char5_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: e2 (HS1174[obverse_transliteration1_line2_char5]) (cuneiex:HS1174_transliteration1_obverse_line2_char5_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char6_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: a (HS1174[obverse_transliteration1_line2_char6]) (cuneiex:HS1174_transliteration1_obverse_line2_char6_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char7_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ib2 (HS1174[obverse_transliteration1_line2_char7]) (cuneiex:HS1174_transliteration1_obverse_line2_char7_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char2_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: gurusz (HS1174[obverse_transliteration1_line4_char2]) (cuneiex:HS1174_transliteration1_obverse_line4_char2_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char3_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: szu (HS1174[obverse_transliteration1_line4_char3]) (cuneiex:HS1174_transliteration1_obverse_line4_char3_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char4_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: dim2 (HS1174[obverse_transliteration1_line4_char4]) (cuneiex:HS1174_transliteration1_obverse_line4_char4_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char3_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ku3 (HS1174[reverse_transliteration1_line2_char3]) (cuneiex:HS1174_transliteration1_reverse_line2_char3_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char4_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: sa6 (HS1174[reverse_transliteration1_line2_char4]) (cuneiex:HS1174_transliteration1_reverse_line2_char4_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_char3_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ensi2 (HS1174[reverse_transliteration1_line3_char3]) (cuneiex:HS1174_transliteration1_reverse_line3_char3_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line4_char2_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: tum (HS1174[reverse_transliteration1_line4_char2]) (cuneiex:HS1174_transliteration1_reverse_line4_char2_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char2_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: du6 (HS1174[reverse_transliteration1_line5_char2]) (cuneiex:HS1174_transliteration1_reverse_line5_char2_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char3_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ku3 (HS1174[reverse_transliteration1_line5_char3]) (cuneiex:HS1174_transliteration1_reverse_line5_char3_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char4_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: u4 (HS1174[reverse_transliteration1_line5_char4]) (cuneiex:HS1174_transliteration1_reverse_line5_char4_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_char1_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: 3(u) (HS1174[obverse_transliteration1_line1_char1]) (cuneiex:HS1174_transliteration1_obverse_line1_char1_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char4_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: um (HS1174[obverse_transliteration1_line2_char4]) (cuneiex:HS1174_transliteration1_obverse_line2_char4_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_char1_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ugula (HS1174[obverse_transliteration1_line3_char1]) (cuneiex:HS1174_transliteration1_obverse_line3_char1_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_char2_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: szesz (HS1174[obverse_transliteration1_line3_char2]) (cuneiex:HS1174_transliteration1_obverse_line3_char2_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_char3_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: da (HS1174[obverse_transliteration1_line3_char3]) (cuneiex:HS1174_transliteration1_obverse_line3_char3_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_char1_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: 9(disz) (HS1174[obverse_transliteration1_line4_char1]) (cuneiex:HS1174_transliteration1_obverse_line4_char1_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_char1_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ugula (HS1174[reverse_transliteration1_line1_char1]) (cuneiex:HS1174_transliteration1_reverse_line1_char1_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_char2_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: lu2 (HS1174[reverse_transliteration1_line1_char2]) (cuneiex:HS1174_transliteration1_reverse_line1_char2_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_char3_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ga (HS1174[reverse_transliteration1_line1_char3]) (cuneiex:HS1174_transliteration1_reverse_line1_char3_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_char2_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: gal (HS1174[reverse_transliteration1_line3_char2]) (cuneiex:HS1174_transliteration1_reverse_line3_char2_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line4_char1_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: sza3 (HS1174[reverse_transliteration1_line4_char1]) (cuneiex:HS1174_transliteration1_reverse_line4_char1_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_char1_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: iti (HS1174[reverse_transliteration1_line5_char1]) (cuneiex:HS1174_transliteration1_reverse_line5_char1_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char2_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ak (HS1174[obverse_transliteration1_line2_char2]) (cuneiex:HS1174_transliteration1_obverse_line2_char2_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char3_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: ru (HS1174[obverse_transliteration1_line2_char3]) (cuneiex:HS1174_transliteration1_obverse_line2_char3_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char1_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: nu (HS1174[reverse_transliteration1_line2_char1]) (cuneiex:HS1174_transliteration1_reverse_line2_char1_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_char2_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: banda3 (HS1174[reverse_transliteration1_line2_char2]) (cuneiex:HS1174_transliteration1_reverse_line2_char2_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_char1_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: e2 (HS1174[reverse_transliteration1_line3_char1]) (cuneiex:HS1174_transliteration1_reverse_line3_char1_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_char1_charocc",
        "parent": "http://www.purl.org/cuneiform#TransliterationCharOccurrence",
        "type": "instance",
        "text": "Char Occurrence: da (HS1174[obverse_transliteration1_line2_char1]) (cuneiex:HS1174_transliteration1_obverse_line2_char1_charocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ag_reading_ak",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading AG: ak (character_ag_reading_ak)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_du6_lagar_gun\u00fb_reading_du\u2086",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading DU6 (LAGAR-gun\u00fb): du\u2086 (character_du6_lagar_gun\u00fb_reading_du\u2086)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ka_x_bi_reading_ka",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading KA x BI: ka (character_ka_x_bi_reading_ka)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ku_d\u00far_tukul_tusz_reading_dab\u2085",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading KU (D\u00daR, TUKUL, TUSZ): dab\u2085 (character_ku_d\u00far_tukul_tusz_reading_dab\u2085)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_nu_reading_nu",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading NU: nu (character_nu_reading_nu)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ru_reading_ru",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading RU: ru (character_ru_reading_ru)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_szab6_reading_sa\u2086",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading SZAB6: sa\u2086 (character_szab6_reading_sa\u2086)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_szesz_\u00f9ri_reading_\u0161e\u0161",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading SZESZ (\u00d9RI): \u0161e\u0161 (character_szesz_\u00f9ri_reading_\u0161e\u0161)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_tum_reading_tum",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading TUM: tum (character_tum_reading_tum)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_um_reading_um",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading UM: um (character_um_reading_um)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_a_reading_a",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading A: a (character_a_reading_a)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ma_reading_ma",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading MA: ma (character_ma_reading_ma)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_ud_babbar_reading_u\u2084",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading UD (BABBAR): u\u2084 (character_ud_babbar_reading_u\u2084)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_da_reading_da",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading DA: da (character_da_reading_da)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/signlist/character_szu_reading_\u0161u",
        "parent": "http://www.purl.org/graphemon#GraphemeReading",
        "type": "instance",
        "text": "Grapheme Reading SZU: \u0161u (character_szu_reading_\u0161u)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_word1_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: 3(u) (HS1174[obverse_line1_word1]) (cuneiex:HS1174_transliteration1_obverse_line1_word1_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_word1_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: ugula (HS1174[obverse_line3_word1]) (cuneiex:HS1174_transliteration1_obverse_line3_word1_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_word1_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: 9(disz) (HS1174[obverse_line4_word1]) (cuneiex:HS1174_transliteration1_obverse_line4_word1_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_word1_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: ugula (HS1174[reverse_line1_word1]) (cuneiex:HS1174_transliteration1_reverse_line1_word1_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line4_word1_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: sza3 (HS1174[reverse_line4_word1]) (cuneiex:HS1174_transliteration1_reverse_line4_word1_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_word1_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: iti (HS1174[reverse_line5_word1]) (cuneiex:HS1174_transliteration1_reverse_line5_word1_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_word4_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: 9(disz) (HS1174[reverse_line5_word4]) (cuneiex:HS1174_transliteration1_reverse_line5_word4_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_word2_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: 3(disz) (HS1174[obverse_line1_word2]) (cuneiex:HS1174_transliteration1_obverse_line1_word2_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_word3_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: gurusz (HS1174[obverse_line1_word3]) (cuneiex:HS1174_transliteration1_obverse_line1_word3_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_word4_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: szu (HS1174[obverse_line1_word4]) (cuneiex:HS1174_transliteration1_obverse_line1_word4_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line1_word5_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: dim2-ma (HS1174[obverse_line1_word5]) (cuneiex:HS1174_transliteration1_obverse_line1_word5_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_word3_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: ib2-dab5 (HS1174[obverse_line2_word3]) (cuneiex:HS1174_transliteration1_obverse_line2_word3_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_word2_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: gurusz (HS1174[obverse_line4_word2]) (cuneiex:HS1174_transliteration1_obverse_line4_word2_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_word3_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: szu (HS1174[obverse_line4_word3]) (cuneiex:HS1174_transliteration1_obverse_line4_word3_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line4_word4_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: dim2-ma (HS1174[obverse_line4_word4]) (cuneiex:HS1174_transliteration1_obverse_line4_word4_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_word1_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: nu-banda3 (HS1174[reverse_line2_word1]) (cuneiex:HS1174_transliteration1_reverse_line2_word1_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_word1_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: e2-gal (HS1174[reverse_line3_word1]) (cuneiex:HS1174_transliteration1_reverse_line3_word1_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line3_word2_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: ensi2-ka (HS1174[reverse_line3_word2]) (cuneiex:HS1174_transliteration1_reverse_line3_word2_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line4_word2_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: tum-al!(TA) (HS1174[reverse_line4_word2]) (cuneiex:HS1174_transliteration1_reverse_line4_word2_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_word3_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: u4 (HS1174[reverse_line5_word3]) (cuneiex:HS1174_transliteration1_reverse_line5_word3_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_word2_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: e2-a (HS1174[obverse_line2_word2]) (cuneiex:HS1174_transliteration1_obverse_line2_word2_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line3_word2_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: szesz-da-da (HS1174[obverse_line3_word2]) (cuneiex:HS1174_transliteration1_obverse_line3_word2_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line1_word2_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: lu2-ga-a (HS1174[reverse_line1_word2]) (cuneiex:HS1174_transliteration1_reverse_line1_word2_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line2_word2_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: ku3-sa6-ga (HS1174[reverse_line2_word2]) (cuneiex:HS1174_transliteration1_reverse_line2_word2_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_reverse_line5_word2_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: du6-ku3 (HS1174[reverse_line5_word2]) (cuneiex:HS1174_transliteration1_reverse_line5_word2_wordformocc)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/cuneiformontology/examples/hs1174/HS1174_transliteration1_obverse_line2_word1_wordformocc",
        "parent": "http://www.purl.org/cuneiform#WordFormOccurance",
        "type": "instance",
        "text": " WordForm Occurrence: da-ak-ru-um (HS1174[obverse_line2_word1]) (cuneiex:HS1174_transliteration1_obverse_line2_word1_wordformocc)",
        "data": {}
      },
      {
        "id": "http://www.purl.org/cuneiform#WordFormOccurance",
        "parent": "#",
        "type": "class",
        "text": "WordFormOccurance (purl:cuneiform#WordFormOccurance) [26]",
        "data": {
          "to": {
            "http://www.purl.org/cuneiform#consistsOf": {
              "instancecount": 3,
              "http://www.purl.org/cuneiform#TransliterationCharOccurrence": 3
            },
            "http://www.purl.org/cuneiform#prevWord": {
              "instancecount": 1,
              "http://www.purl.org/cuneiform#WordFormOccurance": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.cidoc-crm.org/cidoc-crm/TXP3_is_rendered_by": {
              "instancecount": 0
            },
            "http://www.purl.org/cuneiform#consistsOf": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#TransliterationLine": 1
            },
            "http://www.purl.org/cuneiform#isAttested": {
              "instancecount": 0,
              "http://lemon-model.net/lemon#WordForm": 1
            },
            "http://www.purl.org/cuneiform#nextWord": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#WordFormOccurance": 1
            },
            "http://www.purl.org/cuneiform#partOf": {
              "instancecount": 0,
              "http://www.purl.org/cuneiform#TransliterationCharOccurrence": 3
            }
          }
        },
        "instancecount": 7
      }
    ]
  }
}