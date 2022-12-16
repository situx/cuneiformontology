function pointPicking(ppoint) {
	let pointIST = null;
	console.log("pickFeature", pickFeature)
	if (!pickFeature) {
		if (ppoint != null) {
			if (!editorgeom) {
				normal_selection(ppoint);
			} else {
				//// Editor Selektion
				console.log("Editor")
				if (selectionmodus == 1) {
					if (pointISTID == 9999999) {
						console.log("viewer.multiplepolygon", viewer.multiplepolygon);
						// Pick Polygon
						//check = false;
						var smax = 1000000;
						var ISTpolygonID = 999999999
						//var pointIST = null;
						for (polygonID in viewer.multiplepolygon) {
							for (pointID in viewer.multiplepolygon[polygonID]) {

								pointSearch = viewer.multiplepolygon[polygonID][pointID];
								s = Math.sqrt(Math.pow(pointSearch[0] - ppoint[0], 2) + Math.pow(pointSearch[1] - ppoint[1], 2) + Math.pow(pointSearch[2] - ppoint[2], 2));

								if (smax > s) {

									smax = s;
									pointIST = pointSearch;
									pointISTID = pointID;
									ISTpolygonID = polygonID;

								}
							}
						}

						selectioneditor.selectionpoint = viewer.multiplepolygon[ISTpolygonID][pointISTID];
						viewer.multiplepolygon = [];

						API.getFeaturesByObjectId("ars3do:" + THISOBJ, getFeaturebyObject);

						$('#btn-confirm-selection').show();
						$('#btn-undo-selection').show();
						$('#btn-reset-selection').show();
						$('#btn-modus').show();
						$('#btn-modus-confirm').show();
						$('#btn-modus-reset').show();
						//visualAll = false;
						visual_ALL();


					} else {
						if (polygons.selectionpolygon.length == 0 && typeof presenter._selectionPoints !== 'undefined') {
							normal_selection(ppoint);
						} else {
							// Pick Point
							console.log("id", presenter._selectionPoints.length)
							if (presenter._selectionPoints.length != 1) {
								console.log("Editor modus 1");
								//console.log(polygons.selectionpolygon);
								var smax = 1000000;
								for (pointID in polygons.selectionpolygon) {

									pointSearch = polygons.selectionpolygon[pointID];
									s = Math.sqrt(Math.pow(pointSearch[0] - ppoint[0], 2) + Math.pow(pointSearch[1] - ppoint[1], 2) + Math.pow(pointSearch[2] - ppoint[2], 2));
									//console.log("s ", s, smax);
									if (smax > s) {

										smax = s;
										pointIST = pointSearch;
										pointISTID = pointID;
										//console.log("next point", pointIST);

									}
								}

								presenter._selectionPoints.push(pointIST);
								//console.log("e", presenter._selectionPoints);
								presenter.repaint()
							} else {

								// Overrite Pick Point

								for (i_polygon in polygons.crackpolygons) {
									for (i_point in polygons.crackpolygons[i_polygon]) {
										if (polygons.selectionpolygon[pointISTID][0] == polygons.crackpolygons[i_polygon][i_point][0]) {

											polygons.crackpolygons[i_polygon][i_point] = ppoint;

										}
									}
								}



								for (i_polygon in polygons.edgepolygons) {
									for (i_point in polygons.edgepolygons[i_polygon]) {

										if (polygons.selectionpolygon[pointISTID][0] == polygons.edgepolygons[i_polygon][i_point][0]) {


											polygons.edgepolygons[i_polygon][i_point] = ppoint;
										}
									}
								}

								for (i_polygon in polygons.overlappolygons) {
									for (i_point in polygons.overlappolygons[i_polygon]) {

										if (polygons.selectionpolygon[pointISTID][0] == polygons.overlappolygons[i_polygon][i_point][0]) {


											polygons.overlappolygons[i_polygon][i_point] = ppoint;
										}
									}
								}

								for (i_polygon in polygons.kinkpolygons) {
									for (i_point in polygons.kinkpolygons[i_polygon]) {

										if (polygons.selectionpolygon[pointISTID][0] == polygons.kinkpolygons[i_polygon][i_point][0]) {

											polygons.kinkpolygons[i_polygon][i_point] = ppoint;
										}
									}
								}

								for (i_polygon in polygons.unnamed6polygons) {
									for (i_point in polygons.unnamed6polygons[i_polygon]) {

										if (polygons.selectionpolygon[pointISTID][0] == polygons.unnamed6polygons[i_polygon][i_point][0]) {
											;

											polygons.unnamed6polygons[i_polygon][i_point] = ppoint;
										}
									}
								}

								for (i_polygon in polygons.unnamed7polygons) {
									for (i_point in polygons.unnamed7polygons[i_polygon]) {

										if (polygons.selectionpolygon[pointISTID][0] == polygons.unnamed7polygons[i_polygon][i_point][0]) {
											console.log("ppoint", polygons.unnamed7polygons[pointISTID]);

											polygons.unnamed7polygons[i_polygon][i_point] = ppoint;
										}
									}
								}

								for (i_polygon in polygons.unnamed8polygons) {
									for (i_point in polygons.unnamed8polygons[i_polygon]) {

										if (polygons.selectionpolygon[pointISTID][0] == polygons.unnamed8polygons[i_polygon][i_point][0]) {

											polygons.unnamed8polygons[i_polygon][i_point] = ppoint;
										}
									}
								}

								for (i_polygon in polygons.unnamed9polygons) {
									for (i_point in polygons.unnamed9polygons[i_polygon]) {

										if (polygons.selectionpolygon[pointISTID][0] == polygons.unnamed9polygons[i_polygon][i_point][0]) {


											polygons.unnamed9polygons[i_polygon][i_point] = ppoint;
										}
									}
								}

								for (i_polygon in polygons.unnamed10polygons) {
									for (i_point in polygons.unnamed10polygons[i_polygon]) {

										if (polygons.selectionpolygon[pointISTID][0] == polygons.unnamed10polygons[i_polygon][i_point][0]) {


											polygons.unnamed10polygons[i_polygon][i_point] = ppoint;
										}
									}
								}
								polygons.selectionpolygon[pointISTID] = ppoint;
								presenter._selectionPoints = [];


							}
							console.log("presenter", polygons);
						}
					}


				} else {

					//check = false;
					var smax = 1000000;
					//var pointIST = null;
					for (pointID in polygons.selectionpolygon) {

						pointSearch = polygons.selectionpolygon[pointID];
						s = Math.sqrt(Math.pow(pointSearch[0] - ppoint[0], 2) + Math.pow(pointSearch[1] - ppoint[1], 2) + Math.pow(pointSearch[2] - ppoint[2], 2));

						if (smax > s) {

							smax = s;
							pointIST = pointSearch;
							pointISTID = pointID;

						}
					}
					if (typeof presenter._selectionPoints !== 'undefined' && presenter._selectionPoints.length > 0) {

						// check for double selection
						//allowed = true;
						console.log("11111");
						for (spoint in presenter._selectionPoints) {

							if (presenter._selectionPoints[spoint] == pointIST) {
								console.log("spoint =")
								console.log(presenter._selectionPoints[spoint])
								console.log("pointSearch =")
								console.log(pointIST)
								//allowed = false;
							}
						}
						console.log("presenter._selectionPoints", presenter._selectionPoints);
						console.log(presenter._selectionPoints.length / 2)
						tmpID = Math.ceil(presenter._selectionPoints.length / 2) - 1;
						console.log("tmpID", tmpID);
						var tmparray = [];
						for (x in presenter._selectionPoints) {
							if (x == tmpID) {

								tmparray.push(presenter._selectionPoints[x]);
								break;
							} else {
								tmparray.push(presenter._selectionPoints[x]);
							}
						}


						presenter._selectionPoints.length = tmpID + 1;
						var tmparray2 = tmparray;
						presenter._selectionPoints.push(pointIST);


						//console.log("tmparray2.length", tmparray2.length);
						for (var x = 0; x < tmparray2.length; x = x + 1) {
							console.log(tmparray2[tmparray.length - 1 - x])
							presenter._selectionPoints.push(tmparray2[tmparray.length - 1 - x]);
						}

						//console.log("tmparray",tmparray);

						//presenter._selectionPoints = tmparray;
						console.log("presenter._selectionPoints", presenter._selectionPoints);

					} else {
						presenter._selectionPoints.push(pointIST);
					}

				}
				//console.log(presenter._selectionPoints)
				presenter.repaint()
			}
		}
	} else {
		console.log("Feature Picking")
		if (pointPickISTID == 9999999) {
			console.log("viewer.multiplepolygon", viewer.multiplepolygon);
			// Pick Polygon
			console.log("spoint", ppoint)
			//check = false;
			var smax = 1000000;
			var ISTpolygonID = 999999999
			//var pointIST = null;
			for (polygonID in viewer.multiplepolygon) {
				for (pointID in viewer.multiplepolygon[polygonID]) {

					pointSearch = viewer.multiplepolygon[polygonID][pointID];
					s = Math.sqrt(Math.pow(pointSearch[0] - ppoint[0], 2) + Math.pow(pointSearch[1] - ppoint[1], 2) + Math.pow(pointSearch[2] - ppoint[2], 2));

					if (smax > s) {

						smax = s;
						pointPickIST = pointSearch;
						pointPickISTID = pointID;
						ISTpolygonID = polygonID;

					}
				}
			}

			//selectioneditor.selectionpoint = viewer.multiplepolygon[ISTpolygonID][pointISTID];
			//viewer.multiplepolygon = [];

			API.getFeaturesByObjectId("ars3do:" + THISOBJ, getFeaturebyObjectPicking);

		}

	}
}


function normal_selection(ppoint) {


	console.log("Normale Selektion")
	if (selectionmodus == 1) {
		presenter._selectionPoints.push(ppoint);
	}
	else {
		//check = false;
		var smax = 1000000;
		//var pointIST = null;
		for (pointID in polygons.selectionpolygon) {

			pointSearch = polygons.selectionpolygon[pointID];
			s = Math.sqrt(Math.pow(pointSearch[0] - ppoint[0], 2) + Math.pow(pointSearch[1] - ppoint[1], 2) + Math.pow(pointSearch[2] - ppoint[2], 2));

			if (smax > s) {

				smax = s;
				pointIST = pointSearch;
				pointISTID = pointID;

			}
		}
		if (typeof presenter._selectionPoints !== 'undefined' && presenter._selectionPoints.length > 0) {

			// check for double selection
			//allowed = true;
			console.log("11111");
			for (spoint in presenter._selectionPoints) {

				if (presenter._selectionPoints[spoint] == pointIST) {
					console.log("spoint =")
					console.log(presenter._selectionPoints[spoint])
					console.log("pointSearch =")
					console.log(pointIST)
					//allowed = false;
				}
			}
			console.log("presenter._selectionPoints", presenter._selectionPoints);
			console.log(presenter._selectionPoints.length / 2)
			tmpID = Math.ceil(presenter._selectionPoints.length / 2) - 1;
			console.log("tmpID", tmpID);
			var tmparray = [];
			for (x in presenter._selectionPoints) {
				if (x == tmpID) {

					tmparray.push(presenter._selectionPoints[x]);
					break;
				} else {
					tmparray.push(presenter._selectionPoints[x]);
				}
			}


			presenter._selectionPoints.length = tmpID + 1;
			var tmparray2 = tmparray;
			presenter._selectionPoints.push(pointIST);


			console.log("tmparray2.length", tmparray2.length);
			for (var x = 0; x < tmparray2.length; x = x + 1) {
				console.log(tmparray2[tmparray.length - 1 - x])
				presenter._selectionPoints.push(tmparray2[tmparray.length - 1 - x]);
			}

			//console.log("tmparray",tmparray);

			//presenter._selectionPoints = tmparray;
			console.log("presenter._selectionPoints", presenter._selectionPoints);

		} else {
			presenter._selectionPoints.push(pointIST);
		}

	}
	console.log(presenter._selectionPoints)
	presenter.repaint()
}



function drawPolygons(gl,xform,renderer,config) {

	// Draw Selectionpolygon
	if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
		for (j = 0; j < 7; j++) {
			// GLstate setup
			gl.depthFunc(gl.LESS);
			xform.model.push();

			var lineUniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uLineColor": [0, config.selectionColor[1], config.selectionColor[2], 1.0],
				"uPointA": presenter._pointA,
				"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
			};
			//console.log(lineUniforms)
			// create poly line model
			// this updates the Polyline model with the current _selectionPoints array
			presenter._createPolyLineModelSelection(j);


			//drawing points and line
			presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel0)



			lineUniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uLineColor": [1, 0, 0, 1],
				"uPointA": [10, -5, 10],// presenter._pointA,
				"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
			};

			gl.depthFunc(gl.GREATER);
			gl.depthMask(false);
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

			//drawing points and line
			presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel0)

			// GLstate cleanup
			gl.disable(gl.BLEND);
			gl.depthMask(true);
			gl.depthFunc(gl.LESS);
			xform.model.pop();

		}
	}
	if (editorgeom || drawgeom) {
		if (polygons.selectionpolygon !== undefined)
			if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
				// GLstate setup
				gl.depthFunc(gl.LESS);
				xform.model.push();

				var lineUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uLineColor": [0, 0, 1, 0.9],
					"uPointA": presenter._pointA,
					"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
				};

				// create poly line model
				// presenter updates the Polyline model with the current _selectionPoints array


				presenter._createPolyLineModel();
				//console.log(presenter._createPolyLineModel());
				//drawing points and line
				presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel1)


				lineUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uLineColor": [0, 0, 1, 0.5],
					"uPointA": [10, -5, 10],// presenter._pointA,
					"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
				};

				gl.depthFunc(gl.GREATER);
				gl.depthMask(false);
				gl.enable(gl.BLEND);
				gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

				//drawing points and line
				presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel1)

			}

		// GLstate cleanup
		gl.disable(gl.BLEND);
		gl.depthMask(true);
		gl.depthFunc(gl.LESS);
		xform.model.pop();



		// Risse / Feature in Scenen
		if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
			// GLstate setup
			for (i in polygons.crackpolygons) {
				for (j = 0; j < 7; j++) {
					gl.depthFunc(gl.LESS);
					xform.model.push();

					var lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [1, 0, 0, 0.9],
						"uPointA": presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					// create poly line model
					// this updates the Polyline model with the current _selectionPoints array
					presenter._createPolyLineModel2(i, j);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel2)


					lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [1, 0, 0, 0.5],
						"uPointA": [10, -5, 10],// presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					gl.depthFunc(gl.GREATER);
					gl.depthMask(false);
					gl.enable(gl.BLEND);
					gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel2)


					// GLstate cleanup
					gl.disable(gl.BLEND);
					gl.depthMask(true);
					gl.depthFunc(gl.LESS);
					xform.model.pop();
				}
			}
		}

		// Bruchkanten
		if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
			for (i in polygons.edgepolygons) {
				for (j = 0; j < 7; j++) {
					// GLstate setup
					gl.depthFunc(gl.LESS);
					xform.model.push();

					var lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [1, 1, 0, 0.9],
						"uPointA": presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};
					// create poly line model
					// this updates the Polyline model with the current _selectionPoints array
					presenter._createPolyLineModel3(i, j);
					//console.log(presenter._selectionPoints);
					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel3)


					lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [1, 1, 0, 0.5],
						"uPointA": [10, -5, 10],// presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					gl.depthFunc(gl.GREATER);
					gl.depthMask(false);
					gl.enable(gl.BLEND);
					gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel3)

					// GLstate cleanup
					gl.disable(gl.BLEND);
					gl.depthMask(true);
					gl.depthFunc(gl.LESS);
					xform.model.pop();
				}
			}
		}

		// feature Überlappung
		if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
			for (i in polygons.overlappolygons) {
				for (j = 0; j < 7; j++) {
					// GLstate setup
					gl.depthFunc(gl.LESS);
					xform.model.push();

					var lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 1, 0, 0.8],
						"uPointA": presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};
					// create poly line model
					// this updates the Polyline model with the current _selectionPoints array
					presenter._createPolyLineModel4(i, j);
					//console.log(presenter._selectionPoints);
					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel4)



					lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 1, 0, 0.5],
						"uPointA": [10, -5, 10],// presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					gl.depthFunc(gl.GREATER);
					gl.depthMask(false);
					gl.enable(gl.BLEND);
					gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel4)


					// GLstate cleanup
					gl.disable(gl.BLEND);
					gl.depthMask(true);
					gl.depthFunc(gl.LESS);
					xform.model.pop();
				}
			}
		}

		// feature an Knick
		if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
			for (i in polygons.kinkpolygons) {
				for (j = 0; j < 7; j++) {
					// GLstate setup
					gl.depthFunc(gl.LESS);
					xform.model.push();

					var lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 1, 1, 0.9],
						"uPointA": presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};
					// create poly line model
					// this updates the Polyline model with the current _selectionPoints array
					presenter._createPolyLineModel5(i, j);
					//console.log(presenter._selectionPoints);
					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel5)



					lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 1, 1, 0.5],
						"uPointA": [10, -5, 10],// presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					gl.depthFunc(gl.GREATER);
					gl.depthMask(false);
					gl.enable(gl.BLEND);
					gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel5)


					// GLstate cleanup
					gl.disable(gl.BLEND);
					gl.depthMask(true);
					gl.depthFunc(gl.LESS);
					xform.model.pop();
				}
			}
		}

		// feature Ergänzung
		if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
			for (i in polygons.unnamed6polygons) {
				for (j = 0; j < 7; j++) {
					// GLstate setup
					gl.depthFunc(gl.LESS);
					xform.model.push();

					var lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [1, 0, 1, 0.9],
						"uPointA": presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};
					// create poly line model
					// this updates the Polyline model with the current _selectionPoints array
					presenter._createPolyLineModel6(i, j);
					//console.log(presenter._selectionPoints);
					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel6)



					lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [1, 0, 1, 0.5],
						"uPointA": [10, -5, 10],// presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					gl.depthFunc(gl.GREATER);
					gl.depthMask(false);
					gl.enable(gl.BLEND);
					gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel6)


					// GLstate cleanup
					gl.disable(gl.BLEND);
					gl.depthMask(true);
					gl.depthFunc(gl.LESS);
					xform.model.pop();
				}
			}
		}

		// feature unbekannt 1
		if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
			for (i in polygons.unnamed7polygons) {
				for (j = 0; j < 7; j++) {
					// GLstate setup
					gl.depthFunc(gl.LESS);
					xform.model.push();

					var lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [1, 1, 1, 0.9],
						"uPointA": presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};
					// create poly line model
					// this updates the Polyline model with the current _selectionPoints array

					presenter._createPolyLineModel7(i, j);
					//console.log(presenter._selectionPoints);
					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel7)



					lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [1, 1, 1, 0.5],
						"uPointA": [10, -5, 10],// presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					gl.depthFunc(gl.GREATER);
					gl.depthMask(false);
					gl.enable(gl.BLEND);
					gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel7)


					// GLstate cleanup
					gl.disable(gl.BLEND);
					gl.depthMask(true);
					gl.depthFunc(gl.LESS);
					xform.model.pop();
				}
			}
		}

		// feature unbekannt 1
		if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
			for (i in polygons.unnamed8polygons) {
				for (j = 0; j < 7; j++) {
					// GLstate setup
					gl.depthFunc(gl.LESS);
					xform.model.push();

					var lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 0, 0, 0.9],
						"uPointA": presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};
					// create poly line model
					// this updates the Polyline model with the current _selectionPoints array
					presenter._createPolyLineModel8(i, j);
					//console.log(presenter._selectionPoints);
					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel8)



					lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 0, 0, 0.5],
						"uPointA": [10, -5, 10],// presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					gl.depthFunc(gl.GREATER);
					gl.depthMask(false);
					gl.enable(gl.BLEND);
					gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel8)


					// GLstate cleanup
					gl.disable(gl.BLEND);
					gl.depthMask(true);
					gl.depthFunc(gl.LESS);
					xform.model.pop();
				}
			}
		}
		// feature unbekannt 1
		if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
			for (i in polygons.unnamed9polygons) {
				for (j = 0; j < 7; j++) {
					// GLstate setup
					gl.depthFunc(gl.LESS);
					xform.model.push();

					var lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 0, 0, 0.9],
						"uPointA": presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};
					// create poly line model
					// this updates the Polyline model with the current _selectionPoints array
					presenter._createPolyLineModel9(i, j);
					//console.log(presenter._selectionPoints);
					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel9)



					lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 0, 0, 0.5],
						"uPointA": [10, -5, 10],// presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					gl.depthFunc(gl.GREATER);
					gl.depthMask(false);
					gl.enable(gl.BLEND);
					gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel9)


					// GLstate cleanup
					gl.disable(gl.BLEND);
					gl.depthMask(true);
					gl.depthFunc(gl.LESS);
					xform.model.pop();
				}
			}
		}

		// feature unbekannt 1
		if (presenter._selectenStage == 1) {// 0=inactive 1=active 2=finisched
			for (i in polygons.unnamed10polygons) {
				for (j = 0; j < 7; j++) {
					// GLstate setup
					gl.depthFunc(gl.LESS);
					xform.model.push();

					var lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 0, 0, 0.5],
						"uPointA": presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};
					// create poly line model
					// this updates the Polyline model with the current _selectionPoints array
					presenter._createPolyLineModel10(i, j);
					//console.log(presenter._selectionPoints);
					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel10)



					lineUniforms = {
						"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
						"uLineColor": [0, 0, 0, 0.5],
						"uPointA": [10, -5, 10],// presenter._pointA,
						"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
					};

					gl.depthFunc(gl.GREATER);
					gl.depthMask(false);
					gl.enable(gl.BLEND);
					gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

					//drawing points and line
					presenter._renderPolygon(renderer, presenter.multiLinesPointsTechnique, lineUniforms, presenter.simplePolyLineModel10)


					// GLstate cleanup
					gl.disable(gl.BLEND);
					gl.depthMask(true);
					gl.depthFunc(gl.LESS);
					xform.model.pop();
				}
			}
		}
	}
	// Draw Selectionpolygon
	if (visualFeature) {
		// GLstate setup
		gl.depthFunc(gl.LESS);
		xform.model.push();

		var lineUniforms = {
			"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
			"uLineColor": [1, config.selectionColor[1], config.selectionColor[2], 1],
			"uPointA": presenter._pointA,
			"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
		};
		//console.log(lineUniforms)
		// create poly line model
		// this updates the Polyline model with the current _selectionPoints array
		presenter._createPolyLineModelVFeature();
		//console.log(presenter._createPolyLineModel());
		//drawing points and line
		renderer.begin();
		renderer.setTechnique(presenter.multiLinesPointsTechnique); //steht der Shader drin
		renderer.setDefaultGlobals();
		renderer.setGlobals(lineUniforms);
		renderer.setPrimitiveMode("LINE");
		renderer.setModel(presenter.simplePolyLineModelVFeature);
		renderer.renderModel();

		renderer.setPrimitiveMode("POINT");
		renderer.setModel(presenter.simplePolyLineModelVFeature);
		renderer.renderModel();
		renderer.end();

		if (transparent_line) {
			if (!visualAll) {
				lineUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uLineColor": [[config.selectionColor[0], config.selectionColor[1], config.selectionColor[2], 1]],
					"uPointA": [10, -5, 10],// presenter._pointA,
					"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
				};
			} else {
				//console.log("colors:",[config.selectionColor[0], config.selectionColor[1], config.selectionColor[2], 1]);
				lineUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uLineColor": [[1, 1, 0.5, 2]],
					"uPointA": [10, -5, 10],// presenter._pointA,
					"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
				};
			}


			gl.depthFunc(gl.GREATER);
			gl.depthMask(false);
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

			//drawing points and line
			renderer.begin();
			renderer.setTechnique(presenter.multiLinesPointsTechnique);
			renderer.setDefaultGlobals();
			renderer.setGlobals(lineUniforms);
			renderer.setPrimitiveMode("LINE");
			renderer.setModel(presenter.simplePolyLineModelVFeature);
			renderer.renderModel();
			//renderer.setPrimitiveMode("POINT");
			//renderer.setModel(presenter.simplePolyLineModelVFeature);
			//renderer.renderModel();

			renderer.end();
		}
		// GLstate cleanup
		gl.disable(gl.BLEND);
		gl.depthMask(true);
		gl.depthFunc(gl.LESS);
		xform.model.pop();

	}


	// Draw multiple features
	if (visualMultipleFeature) {
		for (i in viewer.multiplepolygon_selection) {
			// GLstate setup
			gl.depthFunc(gl.LESS);
			xform.model.push();

			var lineUniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uLineColor": [1, config.selectionColor[1], config.selectionColor[2], 1],
				"uPointA": presenter._pointA,
				"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
			};
			//console.log(lineUniforms)
			// create poly line model
			// this updates the Polyline model with the current _selectionPoints array
			//console.log("paint", viewer.multiplepolygon_selection[i])
			presenter._createPolyLineModelVMultipleFeatures(i);
			//console.log(presenter._createPolyLineModel());
			//drawing points and line
			renderer.begin();
			renderer.setTechnique(presenter.multiLinesPointsTechnique); //steht der Shader drin
			renderer.setDefaultGlobals();
			renderer.setGlobals(lineUniforms);
			renderer.setPrimitiveMode("LINE");
			renderer.setModel(presenter.simplePolyLineModelVMultipleFeatures);
			renderer.renderModel();

			renderer.setPrimitiveMode("POINT");
			renderer.setModel(presenter.simplePolyLineModelVMultipleFeatures);
			renderer.renderModel();
			renderer.end();

			if (transparent_line) {
				lineUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uLineColor": [1, config.selectionColor[1], config.selectionColor[2], 1],
					"uPointA": [10, -5, 10],// presenter._pointA,
					"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
				};


				gl.depthFunc(gl.GREATER);
				gl.depthMask(false);
				gl.enable(gl.BLEND);
				gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

				//drawing points and line
				renderer.begin();
				renderer.setTechnique(presenter.multiLinesPointsTechnique);
				renderer.setDefaultGlobals();
				renderer.setGlobals(lineUniforms);
				renderer.setPrimitiveMode("LINE");
				renderer.setModel(presenter.simplePolyLineModelVMultipleFeatures);
				renderer.renderModel();
				//renderer.setPrimitiveMode("POINT");
				//renderer.setModel(presenter.simplePolyLineModelVMultipleFeatures);
				//renderer.renderModel();

				renderer.end();
			}

			// GLstate cleanup
			gl.disable(gl.BLEND);
			gl.depthMask(true);
			gl.depthFunc(gl.LESS);
			xform.model.pop();
		}
	}

	if (visualAll) {
		for (i in viewer.multiplepolygon) {
			// GLstate setup
			gl.depthFunc(gl.LESS);
			xform.model.push();

			var lineUniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uLineColor": [1, 0, 0, 1],
				"uPointA": presenter._pointA,
				"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
			};
			//console.log(lineUniforms)
			// create poly line model
			// this updates the Polyline model with the current _selectionPoints array
			presenter._createPolyLineModelVScene(i);
			//console.log(presenter._createPolyLineModel());
			//drawing points and line
			renderer.begin();
			renderer.setTechnique(presenter.multiLinesPointsTechnique); //steht der Shader drin
			renderer.setDefaultGlobals();
			renderer.setGlobals(lineUniforms);
			renderer.setPrimitiveMode("LINE");
			renderer.setModel(presenter.simplePolyLineModelVScene);
			renderer.renderModel();

			renderer.setPrimitiveMode("POINT");
			renderer.setModel(presenter.simplePolyLineModelVScene);
			renderer.renderModel();
			renderer.end();

			if (transparent_line) {
				lineUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uLineColor": [1, 0, 0, 1],
					"uPointA": [10, -5, 10],// presenter._pointA,
					"uPointB": (presenter._measurementStage == 2) ? presenter._pointA : presenter._pointB,
				};


				gl.depthFunc(gl.GREATER);
				gl.depthMask(false);
				gl.enable(gl.BLEND);
				gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

				//drawing points and line
				renderer.begin();
				renderer.setTechnique(presenter.multiLinesPointsTechnique);
				renderer.setDefaultGlobals();
				renderer.setGlobals(lineUniforms);
				renderer.setPrimitiveMode("LINE");
				renderer.setModel(presenter.simplePolyLineModelVScene);
				renderer.renderModel();
				//renderer.setPrimitiveMode("POINT");
				//renderer.setModel(presenter.simplePolyLineModelVScene);
				//renderer.renderModel();

				renderer.end();
			}
			// GLstate cleanup
			gl.disable(gl.BLEND);
			gl.depthMask(true);
			gl.depthFunc(gl.LESS);
			xform.model.pop();
		}
	}

}
