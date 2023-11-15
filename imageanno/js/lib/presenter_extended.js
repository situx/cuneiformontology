class Presenter_extended extends Presenter{

    _selectionRefresh(button, x, y, e) {
		var ppoint = this._drawScenePickingXYZ();
		pointPicking(ppoint);

    }
    
    _startSelection() {
		console.log('statSelection_neu');
		if (this._isSeletionPolygon) return;
		this._stopMeasurement()
		this._isMeasuring = this._isSeletionPolygon = true;
		this._selectenStage = 1 // 0=inactive 1 pickingsPoints 3= selection ready
		this._selectionPoints = [];


		//
		this.repaint();
	}

	_stopSelection() {
		console.log('stopSelection');

		this._isSeletionPolygon = false;
		this._selectenStage = 0;
		this._selectionPoints = [];
		if (!this._isMeasuringPickpoint || !this._isMeasuringDistance) {
			this._isMeasuring = true
		} else {
			this._isMeasuring = this._isSeletionPolygon
		}
		this.repaint();

	}

	_resetSelectionPoints() {
		this._selectionPoints = [];
		this.repaint();
	}

	_undoSelection() {
		if (selectionmodus == 1) {

			this._selectionPoints.splice(-1, 1);

		} else {
			tmp = [];
			console.log("this._selectionPoints A", this._selectionPoints);
			for (let k in this._selectionPoints) {
				if (k < (this._selectionPoints.length / 2) - 1) {
					tmp.push(this._selectionPoints[k]);
				}

				if (k > ((this._selectionPoints.length / 2) + 1)) {
					tmp.push(this._selectionPoints[k]);
				}


			}
			this._selectionPoints = [];
			this._selectionPoints = tmp;
			console.log("this._selectionPoints B", this._selectionPoints);
		}
		this.repaint();
	}

	_renderPolygon(renderer, multiLinesPointsTechnique, lineUniforms, simplePolyLineModel) {

		renderer.begin();
		renderer.setTechnique(multiLinesPointsTechnique); //steht der Shader drin
		renderer.setDefaultGlobals();
		renderer.setGlobals(lineUniforms);
		renderer.setPrimitiveMode("LINE");
		renderer.setModel(simplePolyLineModel);
		renderer.renderModel();
		renderer.setPrimitiveMode("POINT");
		renderer.setModel(simplePolyLineModel);
		renderer.renderModel();
		renderer.end();
	}

	_createPolyLineModelBOLD(i, j, polygon) {
		var gl = this.ui.gl;
		let simplePolyLineModelX;
		if (j == 0) {
			simplePolyLineModelX = new SglModel(gl, {
				vertices: {
					//position: this._selectionPoints.flat(),
					position: polygon[i].flat(),
					//normal: [0, 0, 0,	0, 0, 0],
					color: { value: [0.0, 0.0, 0.0] }
				},

				primitives: ["lineLoop", "points", "triangle"]
			});
		} else {
			let tmppolygon = polygon[i];

			for (let tmppoint in tmppolygon) {
				if (j == 1) {
					tmppolygon[tmppoint][0] = tmppolygon[tmppoint][0] + 0.001;
				} else if (j == 2) {
					tmppolygon[tmppoint][0] = tmppolygon[tmppoint][0] - 0.001;
				} else if (j == 3) {
					tmppolygon[tmppoint][1] = tmppolygon[tmppoint][1] + 0.001;
				} else if (j == 4) {
					tmppolygon[tmppoint][1] = tmppolygon[tmppoint][1] - 0.001;
				} else if (j == 5) {
					tmppolygon[tmppoint][2] = tmppolygon[tmppoint][2] + 0.001;
				} else {
					tmppolygon[tmppoint][2] = tmppolygon[tmppoint][2] - 0.001;
				}

				simplePolyLineModelX = new SglModel(gl, {
					vertices: {
						//position: this._selectionPoints.flat(),
						position: tmppolygon.flat(),
						//normal: [0, 0, 0,	0, 0, 0],
						color: { value: [0.0, 0.0, 0.0] }
					},


					primitives: ["lineLoop", "points", "triangle"]
				});

			}
		}
		return simplePolyLineModelX;
	}

	_createPolyLineModelSelection(j) {
		var gl = this.ui.gl;
		if (j == 0) {
			this.simplePolyLineModel0 = new SglModel(gl, {
				vertices: {
					//position: this._selectionPoints.flat(),
					position: this._selectionPoints.flat(),
					//normal: [0, 0, 0,	0, 0, 0],
					color: { value: [0.0, 0.0, 0.0] }
				},

				primitives: ["lineLoop", "points", "triangle"]
			});
		} else {
			let tmppolygon = this._selectionPoints;

			for (let tmppoint in tmppolygon) {
				if (j == 1) {
					tmppolygon[tmppoint][0] = tmppolygon[tmppoint][0] + 0.001;
				} else if (j == 2) {
					tmppolygon[tmppoint][0] = tmppolygon[tmppoint][0] - 0.001;
				} else if (j == 3) {
					tmppolygon[tmppoint][1] = tmppolygon[tmppoint][1] + 0.001;
				} else if (j == 4) {
					tmppolygon[tmppoint][1] = tmppolygon[tmppoint][1] - 0.001;
				} else if (j == 5) {
					tmppolygon[tmppoint][2] = tmppolygon[tmppoint][2] + 0.001;
				} else {
					tmppolygon[tmppoint][2] = tmppolygon[tmppoint][2] - 0.001;
				}

				this.simplePolyLineModel0 = new SglModel(gl, {
					vertices: {
						//position: this._selectionPoints.flat(),
						position: tmppolygon.flat(),
						//normal: [0, 0, 0,	0, 0, 0],
						color: { value: [0.0, 0.0, 0.0] }
					},


					primitives: ["lineLoop", "points", "triangle"]
				});

			}
		}
	}

	_createPolyLineModel() {
		var gl = this.ui.gl;
		this.simplePolyLineModel1 = new SglModel(gl, {
			vertices: {
				position: polygons.selectionpolygon.flat(),
				//normal: [0, 0, 0,	0, 0, 0],
				color: { value: [0.0, 0.0, 0.0] }
			},
			primitives: ["lineLoop", "points", "triangle"]
		});
	}

	_createPolyLineModel2(i, j) {

		this.simplePolyLineModel2 = this._createPolyLineModelBOLD(i, j, polygons.crackpolygons);
	}

	_createPolyLineModel3 (i, j) {

		this.simplePolyLineModel3 = this._createPolyLineModelBOLD(i, j, polygons.edgepolygons);
	}

	_createPolyLineModel4 (i, j) {

		this.simplePolyLineModel4 = this._createPolyLineModelBOLD(i, j, polygons.overlappolygons);
	}

	_createPolyLineModel5 (i, j) {

		this.simplePolyLineModel5 = this._createPolyLineModelBOLD(i, j, polygons.kinkpolygons);
	}

	_createPolyLineModel6 (i, j) {

		this.simplePolyLineModel6 = this._createPolyLineModelBOLD(i, j, polygons.unnamed6polygons);
	}

	_createPolyLineModel7 (i, j) {

		this.simplePolyLineModel7 = this._createPolyLineModelBOLD(i, j, polygons.unnamed7polygons);
	}

	_createPolyLineModel8 (i, j) {

		this.simplePolyLineModel8 = this._createPolyLineModelBOLD(i, j, polygons.unnamed8polygons);
	}

	_createPolyLineModel9 (i, j) {

		this.simplePolyLineModel9 = this._createPolyLineModelBOLD(i, j, polygons.unnamed9polygons);
	}

	_createPolyLineModel10 (i, j) {

		this.simplePolyLineModel10 = this._createPolyLineModelBOLD(i, j, polygons.unnamed10polygons);
	}

	_createPolyLineModelVFeature () {
		var gl = this.ui.gl;
		this.simplePolyLineModelVFeature = new SglModel(gl, {
			vertices: {
				//position: this._selectionPoints.flat(),
				position: viewer.polygon.flat(),
				//normal: [0, 0, 0,	0, 0, 0],
				color: { value: [0.0, 0.0, 0.0] }
			},
			primitives: ["lineLoop", "points", "triangle"]
		});


	}

	_createPolyLineModelVMultipleFeatures (i) {
		var gl = this.ui.gl;
		this.simplePolyLineModelVMultipleFeatures = new SglModel(gl, {
			vertices: {
				//position: this._selectionPoints.flat(),
				position: viewer.multiplepolygon_selection[i].flat(),
				//normal: [0, 0, 0,	0, 0, 0],
				color: { value: [0.0, 0.0, 0.0] }
			},
			primitives: ["lineLoop", "points", "triangle"]
		});
	}


	_createPolyLineModelVScene () {
		var gl = this.ui.gl;
		this.simplePolyLineModelVScene = new SglModel(gl, {
			vertices: {
				//position: this._selectionPoints.flat(),
				position: viewer.multiplepolygon[i].flat(),
				//normal: [0, 0, 0,	0, 0, 0],
				color: { value: [0.0, 0.0, 0.0] }
			},
			primitives: ["lineLoop", "points", "triangle"]
		});
	}

	// polygon selection
	enableSelectionTool(on) {
		if (on) {
			this._startSelection();

		}
		else
			this._stopSelection();
	}

	isSelectionToolEnabel() {
		return this._isSeletionPolygon;
	}

	//--------------- Changed original functions ------------

	enableMeasurementTool(on) {
		if (on) {
			this._startMeasurement();
		}
		else
			this._stopMeasurement();
	}

	// multiple lines/points rendering
	_createMultiLinesPointstechnique() {
		var gl = this.ui.gl;
		var technique = new SglTechnique(gl, {
			vertexShader: "\
			precision highp float;                                                \n\
																				  \n\
			uniform   mat4 uWorldViewProjectionMatrix;                            \n\
																				  \n\
			attribute vec3 aPosition;                                             \n\
			attribute vec3 aNormal;                                               \n\
			attribute vec4 aColor;                                                \n\
																				  \n\
			varying   vec3 vNormal;                                               \n\
			varying   vec4 vColor;                                                \n\
																				  \n\
			void main(void)                                                       \n\
			{                                                                     \n\
				vColor      = aColor;                                             \n\
				gl_Position = uWorldViewProjectionMatrix * vec4(aPosition, 1.0);  \n\
				gl_PointSize = 8.0;	                 							  \n\
			}                                                                     \n\
		",
			fragmentShader: "\
			precision highp float;                                                \n\
																				  \n\
			varying   vec4 vColor;                                                \n\
			uniform   vec4 uLineColor;      																	  \n\
			void main(void)                                                       \n\
			{                                                                     \n\
				gl_FragColor = uLineColor;                                            \n\
			}                                                                     \n\
		",
			vertexStreams: {
				"aNormal": [0.0, 0.0, 0.0, 0.0],
				"aColor": [0.4, 0.0, 0.4, 0.75]
			},
			globals: {
				"uWorldViewProjectionMatrix": { semantic: "uWorldViewProjectionMatrix", value: SglMat4.identity() },
				"uLineColor": { semantic: "uLineColor", value: [0.0, 1.0, 0.5, 1.0] }
			}
		});

		return technique;
	}

	_startMeasurement() {
		if (this._isMeasuringDistance) return;
		this._stopSelection()
		this._isMeasuring = this._isMeasuringDistance = true;
		this._measurementStage = 1; // 0=inactive 1=picking pointA 2=picking pointB 3=measurement ready
		this._pointA = [0.0, 0.0, 0.0];
		this._pointB = [0.0, 0.0, 0.0];
		this.measurement = 0.0;
		this.repaint();
	}

	_stopMeasurement() {
		this._isMeasuringDistance = false;
		if (!this._isMeasuringPickpoint || !this._isSeletionPolygon) {
			this._isMeasuring = true
		} else this._isMeasuring = this._isMeasuringDistance
		this._measurementStage = 0; // 0=inactive 1=picking pointA 2=picking pointB 3=measurement ready
		this._pointA = [0.0, 0.0, 0.0];
		this._pointB = [0.0, 0.0, 0.0];
		this.measurement = 0.0;
		this.repaint();
	}

	_drawScene1() {
		var gl = this.ui.gl;
		var width = this.ui.width;
		var height = this.ui.height;
		var xform = this.xform;
		var renderer = this.renderer;
		var CurrFaceProgram = this.faceNXSProgram;
		var CurrPointProgram = this.pointNXSProgram;
		var CurrFaceTechnique = this.facePLYTechnique;
		var CurrPointTechnique = this.pointPLYTechnique;
		var CCProgram = this.colorShadedNXSProgram;
		var CCTechnique = this.colorShadedPLYTechnique;
		var lineTechnique = this.simpleLineTechnique;
		var meshes = this._scene.meshes;
		var instances = this._scene.modelInstances;
		var spots = this._scene.spots;
		var space = this._scene.space;
		var config = this._scene.config;
		var bkg = this._scene.background.color;

		// basic setup, matrices for projection & view
		this._setupDraw();

		// clear buffer
		gl.clearColor(bkg[0], bkg[1], bkg[2], bkg[3]);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
		gl.enable(gl.DEPTH_TEST);

		// draw non-transparent geometries
		for (var inst in instances) {
			var instance = instances[inst];
			var mesh = meshes[instance.mesh];
			if (!mesh) continue;
			var renderable = mesh.renderable;
			if (!renderable) continue;
			if (!instance.visible) continue;
			if (instance.useTransparency) continue;

			// GLstate setup
			xform.model.push();
			xform.model.multiply(space.transform.matrix);
			xform.model.multiply(instance.transform.matrix);
			xform.model.multiply(mesh.transform.matrix);

			var modelMatrix = SglMat4.identity();
			modelMatrix = SglMat4.mul(modelMatrix, space.transform.matrix);
			modelMatrix = SglMat4.mul(modelMatrix, instance.transform.matrix);
			modelMatrix = SglMat4.mul(modelMatrix, mesh.transform.matrix);
			var thisClipAxis = instance.clippable ? this._clipAxis : [0.0, 0.0, 0.0];
			var thisClipPlane = instance.clippable ? this._clipPlane : [0.0, 0.0, 0.0, 0.0];
			var thisClipBordersize = config.showClippingBorder ? config.clippingBorderSize : 0.0;

			var uniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uViewSpaceNormalMatrix": xform.viewSpaceNormalMatrix,
				"uModelMatrix": modelMatrix,
				"uWorldViewMatrix": xform.modelViewMatrix,
				"uViewSpaceLightDirection": this._lightDirection,
				"uPointSize": config.pointSize,
				"uAlpha": 1.0,
				"uUseSolidColor": instance.useSolidColor,
				"uUseLighting": space.sceneLighting && instance.useLighting,
				"uBackFaceColor": instance.backfaceColor,
				"uSpecularColor": instance.specularColor,
				"uSolidColor": instance.color,
				"uClipPoint": this._clipPoint,
				"uClipAxis": thisClipAxis,
				"uClipPlane": thisClipPlane,
				"uClipColor": config.clippingBorderColor,
				"uClipColorSize": thisClipBordersize
			};

			if (mesh.isNexus) {
				if (!renderable.isReady) continue;

				var nexus = renderable;
				nexus.updateView([0, 0, width, height], xform.projectionMatrix, xform.modelViewMatrix);

				var program;
				if (instance.rendermode == "FILL")
					program = CurrFaceProgram;
				else
					program = CurrPointProgram;
				program.bind();
				program.setUniforms(uniforms);
				nexus.setPrimitiveMode(instance.rendermode);
				nexus.render();
				program.unbind();
			}
			else { //drawing ply
				var technique;
				if (instance.rendermode == "FILL")
					technique = CurrFaceTechnique;
				else
					technique = CurrPointTechnique;
				renderer.begin();
				renderer.setTechnique(technique);
				renderer.setDefaultGlobals();
				renderer.setPrimitiveMode(instance.rendermode);
				renderer.setGlobals(uniforms);
				renderer.setModel(renderable);
				renderer.setTexture(0, renderable.texture);
				renderer.renderModel();
				renderer.end();
			}

			// GLstate cleanup
			xform.model.pop();
		}

		// draw transparent geometries
		for (var inst in instances) {
			var instance = instances[inst];
			var mesh = meshes[instance.mesh];
			if (!mesh) continue;
			var renderable = mesh.renderable;
			if (!renderable) continue;
			if (!instance.visible) continue;
			if (!instance.useTransparency) continue;

			// GLstate setup
			gl.depthMask(false);
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

			xform.model.push();
			xform.model.multiply(space.transform.matrix);
			xform.model.multiply(instance.transform.matrix);
			xform.model.multiply(mesh.transform.matrix);

			var modelMatrix = SglMat4.identity();
			modelMatrix = SglMat4.mul(modelMatrix, space.transform.matrix);
			modelMatrix = SglMat4.mul(modelMatrix, instance.transform.matrix);
			modelMatrix = SglMat4.mul(modelMatrix, mesh.transform.matrix);
			var thisClipAxis = instance.clippable ? this._clipAxis : [0.0, 0.0, 0.0];
			var thisClipPlane = instance.clippable ? this._clipPlane : [0.0, 0.0, 0.0, 0.0];
			var thisClipBordersize = config.showClippingBorder ? config.clippingBorderSize : 0.0;

			var uniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uViewSpaceNormalMatrix": xform.viewSpaceNormalMatrix,
				"uModelMatrix": modelMatrix,
				"uWorldViewMatrix": xform.modelViewMatrix,
				"uViewSpaceLightDirection": this._lightDirection,
				"uPointSize": config.pointSize,
				"uAlpha": instance.alpha,
				"uUseSolidColor": instance.useSolidColor,
				"uUseLighting": space.sceneLighting && instance.useLighting,
				"uBackFaceColor": instance.backfaceColor,
				"uSpecularColor": instance.specularColor,
				"uSolidColor": instance.color,
				"uClipPoint": [0.0, 0.0, 0.0],
				"uClipPoint": this._clipPoint,
				"uClipAxis": thisClipAxis,
				"uClipPlane": thisClipPlane,
				"uClipColor": config.clippingBorderColor,
				"uClipColorSize": thisClipBordersize
			};

			if (mesh.isNexus) {
				if (!renderable.isReady) continue;

				var nexus = renderable;
				nexus.updateView([0, 0, width, height], xform.projectionMatrix, xform.modelViewMatrix);

				var program;
				if (instance.rendermode == "FILL")
					program = CurrFaceProgram;
				else
					program = CurrPointProgram;
				program.bind();
				program.setUniforms(uniforms);
				nexus.setPrimitiveMode(instance.rendermode);
				nexus.render();
				program.unbind();
			}
			else { //drawing ply
				var technique;
				if (instance.rendermode == "FILL")
					technique = CurrFaceTechnique;
				else
					technique = CurrPointTechnique;
				renderer.begin();
				renderer.setTechnique(technique);
				renderer.setDefaultGlobals();
				renderer.setPrimitiveMode(instance.rendermode);
				renderer.setGlobals(uniforms);
				renderer.setModel(renderable);
				renderer.setTexture(0, renderable.texture);
				renderer.renderModel();
				renderer.end();
			}

			// GLstate cleanup
			gl.disable(gl.BLEND);
			gl.depthMask(true);

			xform.model.pop();
		}

		// draw picked point (if valid)
		if (this._pickValid) {
			// GLstate setup
			gl.depthFunc(gl.LESS);
			xform.model.push();

			var lineUniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uLineColor": [config.pickedpointColor[0], config.pickedpointColor[1], config.pickedpointColor[2], 1.0],
				"uPointA": this._pickedPoint,
				"uPointB": this._pickedPoint
			};

			//drawing points
			renderer.begin();
			renderer.setTechnique(lineTechnique);
			renderer.setDefaultGlobals();
			renderer.setGlobals(lineUniforms);
			renderer.setPrimitiveMode("POINT");
			renderer.setModel(this.simpleLineModel);
			renderer.renderModel();
			renderer.end();

			lineUniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uLineColor": [config.pickedpointColor[0] * 0.4, config.pickedpointColor[1] * 0.5, config.pickedpointColor[2] * 0.6, 0.5],
				"uPointA": this._pickedPoint,
				"uPointB": this._pickedPoint
			};

			gl.depthFunc(gl.GREATER);
			gl.depthMask(false);
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

			//drawing points and line
			renderer.begin();
			renderer.setTechnique(lineTechnique);
			renderer.setDefaultGlobals();
			renderer.setGlobals(lineUniforms);
			renderer.setPrimitiveMode("POINT");
			renderer.setModel(this.simpleLineModel);
			renderer.renderModel();
			renderer.end();

			// GLstate cleanup
			gl.disable(gl.BLEND);
			gl.depthMask(true);
			gl.depthFunc(gl.LESS);
			xform.model.pop();
		}

		// draw measurement line (if any)
		if (this._measurementStage >= 2) {// 0=inactive 1=picking pointA 2=picking pointB 3=measurement ready
			// GLstate setup
			gl.depthFunc(gl.LESS);
			xform.model.push();

			var lineUniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uLineColor": [config.measurementColor[0], config.measurementColor[1], config.measurementColor[2], 1.0],
				"uPointA": this._pointA,
				"uPointB": (this._measurementStage == 2) ? this._pointA : this._pointB,
			};

			//drawing points and line
			renderer.begin();
			renderer.setTechnique(lineTechnique);
			renderer.setDefaultGlobals();
			renderer.setGlobals(lineUniforms);
			renderer.setPrimitiveMode("LINE");
			renderer.setModel(this.simpleLineModel);
			renderer.renderModel();
			renderer.setPrimitiveMode("POINT");
			renderer.setModel(this.simpleLineModel);
			renderer.renderModel();
			renderer.end();

			lineUniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uLineColor": [config.measurementColor[0] * 0.4, config.measurementColor[1] * 0.5, config.measurementColor[2] * 0.6, 0.5],
				"uPointA": this._pointA,
				"uPointB": (this._measurementStage == 2) ? this._pointA : this._pointB,
			};

			gl.depthFunc(gl.GREATER);
			gl.depthMask(false);
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

			//drawing points and line
			renderer.begin();
			renderer.setTechnique(lineTechnique);
			renderer.setDefaultGlobals();
			renderer.setGlobals(lineUniforms);
			renderer.setPrimitiveMode("LINE");
			renderer.setModel(this.simpleLineModel);
			renderer.renderModel();
			renderer.setPrimitiveMode("POINT");
			renderer.setModel(this.simpleLineModel);
			renderer.renderModel();
			renderer.end();

			// GLstate cleanup
			gl.disable(gl.BLEND);
			gl.depthMask(true);
			gl.depthFunc(gl.LESS);
			xform.model.pop();
		}
		// Änderung
		drawPolygons(gl,xform,renderer,config);

		// draw transparent spot geometries
		for (var spt in spots) {
			var spot = spots[spt];
			var mesh = meshes[spot.mesh];
			if (!mesh) continue;
			var renderable = mesh.renderable;
			if (!renderable) continue;
			if (!spot.visible) continue;

			// GLstate setup
			gl.depthMask(false);
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

			xform.model.push();
			xform.model.multiply(space.transform.matrix);
			xform.model.multiply(spot.transform.matrix);
			xform.model.multiply(mesh.transform.matrix);

			var uniforms = {
				"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
				"uViewSpaceNormalMatrix": xform.viewSpaceNormalMatrix,
				"uViewSpaceLightDirection": this._lightDirection,
				"uPointSize": config.pointSize,
				"uColorID": [spot.color[0], spot.color[1], spot.color[2], spot.alpha]
			}

			if (mesh.isNexus) {
				if (!renderable.isReady) continue;
				var nexus = renderable;
				nexus.updateView([0, 0, width, height], xform.projectionMatrix, xform.modelViewMatrix);

				var program = CCProgram;
				program.bind();
				program.setUniforms(uniforms);
				nexus.setPrimitiveMode(spot.rendermode);
				nexus.render();
				program.unbind();
			}
			else { //drawing ply
				renderer.begin();
				renderer.setTechnique(CCTechnique);
				renderer.setDefaultGlobals();
				renderer.setPrimitiveMode(spot.rendermode);
				renderer.setGlobals(uniforms);
				renderer.setModel(renderable);
				if (spot.useStencil) {
					gl.clear(gl.STENCIL_BUFFER_BIT); //reset stencil
					//first pass
					gl.colorMask(false, false, false, false);
					gl.enable(gl.STENCIL_TEST);
					gl.stencilFunc(gl.ALWAYS, 0, 255);
					gl.stencilOp(gl.KEEP, gl.KEEP, gl.INVERT);

					renderer.renderModel();

					//second pass
					gl.colorMask(true, true, true, true);
					gl.stencilOp(gl.KEEP, gl.KEEP, gl.INVERT); // Don't change the stencil buffer...
					gl.stencilFunc(gl.EQUAL, 1, 0x01); // The stencil buffer contains the shadow values...

					renderer.renderModel();

					gl.disable(gl.STENCIL_TEST);
				}
				else {
					renderer.renderModel();
				}
				renderer.end();
			}

			// GLstate cleanup
			gl.disable(gl.BLEND);
			gl.depthMask(true);
			xform.model.pop();
		}

		// draw clipping plane (if any)
		if (config.showClippingPlanes) {
			// GLstate setup
			gl.depthMask(false);
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

			if (SglVec3.length([this._clipPlane[0], this._clipPlane[1], this._clipPlane[2]]) > 0.0) {
				var planepoint = [0.0, 0.0, 0.0];

				var k = SglVec3.dot(this._sceneBboxCenter, [this._clipPlane[0], this._clipPlane[1], this._clipPlane[2]]) + this._clipPlane[3];
				planepoint[0] = this._sceneBboxCenter[0] - (this._clipPlane[0] * k);
				planepoint[1] = this._sceneBboxCenter[1] - (this._clipPlane[1] * k);
				planepoint[2] = this._sceneBboxCenter[2] - (this._clipPlane[2] * k);

				var rotm = SglMat4.identity();
				rotm = SglMat4.mul(rotm, SglMat4.rotationAngleAxis(sglDegToRad(this._clipPlaneAH), [0.0, -1.0, 0.0]));
				rotm = SglMat4.mul(rotm, SglMat4.rotationAngleAxis(sglDegToRad(this._clipPlaneAV), [0.0, 0.0, 1.0]));

				var psize = this._sceneBboxDiag;

				xform.model.push();
				xform.model.translate(planepoint);
				xform.model.multiply(rotm);
				xform.model.scale([psize, psize, psize]);

				var QuadUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uViewSpaceNormalMatrix": xform.viewSpaceNormalMatrix,
					"uViewSpaceLightDirection": this._lightDirection,
					"uColorID": [1.0, 0.0, 1.0, 0.25]
				};

				renderer.begin();
				renderer.setTechnique(CCTechnique);
				renderer.setDefaultGlobals();
				renderer.setPrimitiveMode("FILL");
				renderer.setGlobals(QuadUniforms);
				renderer.setModel(this.simpleQuadXModel);
				renderer.renderModel();
				renderer.end();

				xform.model.pop();
			}

			if (this._clipAxis[0] != 0.0) {
				xform.model.push();
				xform.model.translate([this._clipPoint[0], this._sceneBboxCenter[1], this._sceneBboxCenter[2]]);
				xform.model.scale([(this._sceneBboxMax[0] - this._sceneBboxMin[0]),
				(this._sceneBboxMax[1] - this._sceneBboxMin[1]),
				(this._sceneBboxMax[2] - this._sceneBboxMin[2])]);

				var QuadUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uViewSpaceNormalMatrix": xform.viewSpaceNormalMatrix,
					"uViewSpaceLightDirection": this._lightDirection,
					"uColorID": [1.0, 0.0, 0.0, 0.25]
				};

				renderer.begin();
				renderer.setTechnique(CCTechnique);
				renderer.setDefaultGlobals();
				renderer.setPrimitiveMode("FILL");
				renderer.setGlobals(QuadUniforms);
				renderer.setModel(this.simpleQuadXModel);
				renderer.renderModel();
				renderer.end();

				xform.model.pop();
			}

			if (this._clipAxis[1] != 0.0) {
				xform.model.push();
				xform.model.translate([this._sceneBboxCenter[0], this._clipPoint[1], this._sceneBboxCenter[2]]);
				xform.model.scale([(this._sceneBboxMax[0] - this._sceneBboxMin[0]),
				(this._sceneBboxMax[1] - this._sceneBboxMin[1]),
				(this._sceneBboxMax[2] - this._sceneBboxMin[2])]);

				var QuadUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uViewSpaceNormalMatrix": xform.viewSpaceNormalMatrix,
					"uViewSpaceLightDirection": this._lightDirection,
					"uColorID": [0.0, 1.0, 0.0, 0.25]
				};

				renderer.begin();
				renderer.setTechnique(CCTechnique);
				renderer.setDefaultGlobals();
				renderer.setPrimitiveMode("FILL");
				renderer.setGlobals(QuadUniforms);
				renderer.setModel(this.simpleQuadYModel);
				renderer.renderModel();
				renderer.end();

				xform.model.pop();
			}

			if (this._clipAxis[2] != 0.0) {
				xform.model.push();
				xform.model.translate([this._sceneBboxCenter[0], this._sceneBboxCenter[1], this._clipPoint[2]]);
				xform.model.scale([(this._sceneBboxMax[0] - this._sceneBboxMin[0]),
				(this._sceneBboxMax[1] - this._sceneBboxMin[1]),
				(this._sceneBboxMax[2] - this._sceneBboxMin[2])]);

				var QuadUniforms = {
					"uWorldViewProjectionMatrix": xform.modelViewProjectionMatrix,
					"uViewSpaceNormalMatrix": xform.viewSpaceNormalMatrix,
					"uViewSpaceLightDirection": this._lightDirection,
					"uColorID": [0.0, 0.0, 1.0, 0.25]
				};


				renderer.begin();
				renderer.setTechnique(CCTechnique);
				renderer.setDefaultGlobals();
				renderer.setPrimitiveMode("FILL");
				renderer.setGlobals(QuadUniforms);
				renderer.setModel(this.simpleQuadZModel);
				renderer.renderModel();
				renderer.end();

				xform.model.pop();
			}

			// GLstate cleanup
			gl.disable(gl.BLEND);
			gl.depthMask(true);
		}
	}


	onClick(button, x, y, e) {
		var xy = this.ui._getMouseClientPos(e);

		this.ui._clickPrevPos = this.ui._clickPos;
		this.ui._clickPos = xy;

		var clickDeltaPos = [this.ui._clickPos[0] - this.ui._clickPrevPos[0], this.ui._clickPos[1] - this.ui._clickPrevPos[1]];
		var clickDeltaTime = this.ui._clickPos[3] - this.ui._clickPrevPos[3];

		var clickDeltaDist = SpiderGL.Math.Vec2.length(clickDeltaPos);

		if (this._clickable) {
			this._pickingRefresh(x, y);

			if (clickDeltaDist <= 30 && clickDeltaTime <= 250) {
				if (this.trackball.recenter) {
					var ppoint = this._drawScenePickingXYZ();
					if (ppoint != null) {
						this.ui.animateRate = 30;
						this.trackball.recenter(ppoint);
						this.repaint();
					}
				}
			}

			if (this._onPickedSpot && this._pickedSpot != null) this._onPickedSpot(this._pickedSpot);
			if (this._onPickedInstance && this._pickedInstance != null) this._onPickedInstance(this._pickedInstance);
			if (this._isMeasuringPickpoint) this._pickpointRefresh(0, x, y, e);
			if (this._isMeasuringDistance) this._measureRefresh(0, x, y, e);
			if (this._isSeletionPolygon) this._selectionRefresh(0, x, y, e);
		}
		this._clickable = false;
	}

	setScene(options) {
		if (!options) return;

		// scene reset, if already present
		if (this._scene != null) {
			this._scene = null;
			this._sceneParsed = false;
			this._sceneReady = false;
			this._instancesProgressiveID = 1;
			this._spotsProgressiveID = 1;
			this._objectsToLoad = 0;
			this._stopMeasurement();
			this._stopPickPoint();
			this._clipAxis = [0.0, 0.0, 0.0];
			this._clipPoint = [0.0, 0.0, 0.0];
			this.enableLightTrackball(false);
		}

		var scene = this._parseScene(options);
		if (!scene) return;
		this._scene = scene;

		this._objectsToLoad = 0;
		for (var m in scene.meshes) {
			var mesh = scene.meshes[m];
			if (mesh.url) {
				this._objectsToLoad++;
			}
		}

		for (var t in scene.texturedQuads) {
			var tex = scene.texturedQuads[t];
			if (tex.url) {
				this._objectsToLoad++;
			}
		}

		if (scene.background.image) {
			this._objectsToLoad++;
		}

		// creating the desired trackball
		this.trackball = new this._scene.trackball.type();
		this.trackball.setup(this._scene.trackball.trackOptions);

		var that = this;
		var gl = this.ui.gl;

		for (var m in scene.meshes) {
			var mesh = scene.meshes[m];

			if (!mesh.url) continue;
			if ((String(mesh.url).lastIndexOf(".nxs") == (String(mesh.url).length - 4)) || (String(mesh.url).lastIndexOf(".nxz") == (String(mesh.url).length - 4))) {
				Nexus.setTargetError(gl, this._nexusTargetError);
				Nexus.setTargetFps(gl, this._nexusTargetFps);
				Nexus.setMaxCacheSize(gl, this._nexusCacheSize);

				var nexus_instance = new Nexus.Renderer(gl);
				nexus_instance.onLoad = function () { that._onMeshReady(); };
				nexus_instance.onUpdate = this.ui.postDrawEvent;

				mesh.renderable = nexus_instance;
				mesh.isNexus = true;

				nexus_instance.open(mesh.url);
			}
			else {
				mesh.renderable = null;
				mesh.isNexus = false;
				sglRequestBinary(mesh.url, {
					onSuccess: (function (m) { return function (req) { that._onPlyLoaded(req, m, gl); }; })(mesh)
				});
			}
		}

		for (var t in scene.texturedQuads) {
			var quad = scene.texturedQuads[t];
			if (!tex.url) continue;
			scene.quad.texture = new SglTexture2D(gl, {
				internalFormat: gl.RGBA,
				format: gl.RGBA,
				type: gl.UNSIGNED_BYTE,
				generateMipmap: true,
				onSuccess: function () { that._onTextureReady(); },
				url: tex.url
			});
		}

		if (scene.background.image) {
			scene.background.texture = new SglTexture2D(gl, {
				internalFormat: gl.RGBA,
				format: gl.RGBA,
				type: gl.UNSIGNED_BYTE,
				generateMipmap: true,
				onSuccess: function () { that._onBackgroundReady(); },
				url: scene.background.image
			});
		}

		// create point-to-point line model
		this._createLineModel();
		// create quad models
		this._createQuadModels();
		// create poly line model
		this._createPolyLineModel();

		this._sceneParsed = true;
	}

	onInitialize() {
		var gl = this.ui.gl;

		// debug mode
		this._isDebugging = HOP_DEBUGMODE;

		gl.getExtension('EXT_frag_depth');
		gl.clearColor(0.5, 0.5, 0.5, 1.0);
		gl.clearStencil(0);
		gl.depthFunc(gl.LESS);

		// scene rendering support data
		this.renderer = new SglModelRenderer(gl);
		this.xform = new SglTransformationStack();
		this.viewMatrix = SglMat4.identity();

		// nexus parameters
		this._nexusTargetFps = 15.0;
		this._nexusTargetError = 1.0;
		this._nexusCacheSize = 50000000;

		// shaders
		this.faceNXSProgram = this._createStandardFaceNXSProgram();
		this.pointNXSProgram = this._createStandardPointNXSProgram();
		this.colorShadedNXSProgram = this._createColorShadedNXSProgram();
		this.colorCodedIDNXSProgram = this._createColorCodedIDNXSProgram();
		this.colorCodedXYZNXSProgram = this._createXYZNXSProgram();

		this.facePLYTechnique = this._createStandardFacePLYtechnique();
		this.pointPLYTechnique = this._createStandardPointPLYtechnique();
		this.colorShadedPLYTechnique = this._createColorShadedPLYtechnique();
		this.colorCodedIDPLYTechnique = this._createColorCodedIDPLYtechnique();
		this.colorCodedXYZPLYTechnique = this._createXYZPLYtechnique();

		this.simpleLineTechnique = this._createSimpleLinetechnique();
		this.multiLinesPointsTechnique = this._createMultiLinesPointstechnique();

		// handlers
		this._onPickedInstance = 0;
		this._onPickedSpot = 0;
		this._onEnterInstance = 0;
		this._onEnterSpot = 0;
		this._onLeaveInstance = 0;
		this._onLeaveSpot = 0;
		this._onEndPickingPoint = 0;
		this._onEndMeasurement = 0;

		// animation
		this.ui.animateRate = 0;

		// current cursor XY position
		this.x = 0.0;
		this.y = 0.0;

		this._keycombo = false;

		// SCENE DATA
		this._scene = null;
		this._sceneParsed = false;
		this._sceneReady = false;
		this._objectsToLoad = 0;

		this._instancesProgressiveID = 1;
		this._spotsProgressiveID = 1;

		this._lightDirection = HOP_DEFAULTLIGHT;

		this.sceneCenter = [0.0, 0.0, 0.0];
		this.sceneRadiusInv = 1.0;

		this._targetInstanceName = null;
		this._targetHotSpotName = null;

		this._animating = false;
		this._movingLight = false;

		this._resizable = true;

		this._clickable = false;
		this._onHover = false;

		this._lastCursor = "default";
		this._pickedInstance = null;
		this._pickedSpot = null;
		this._lastPickedInstance = null;
		this._lastPickedSpot = null;
		this._lastInstanceID = 0;
		this._lastSpotID = 0;
		this._pickpoint = [1, 1];

		// global measurement data
		this._isMeasuring = false;

		// point2point measurement data
		this._isMeasuringDistance = false;
		this._measurementStage = 0; // 0=inactive 1=picking pointA 2=picking pointB 3=measurement ready
		this._pointA = [0.0, 0.0, 0.0];
		this._pointB = [0.0, 0.0, 0.0];
		this.measurement = 0;

		// polygon selection data
		this._isSeletionPolygon = false;
		this._selectenStage = 0 // 0=inactive 1 pickingsPoints 3= selection ready
		this._selectionPoints = [10, 50, 45, 10, 40, 10, 0, 12, 12];


		// point picking measurement data
		this._isMeasuringPickpoint = false;
		this._pickValid = false;
		this._pickedPoint = [0.0, 0.0, 0.0];

		// plane section
		this._clipPoint = [0.0, 0.0, 0.0];
		this._clipAxis = [0.0, 0.0, 0.0];
		this._clipPlane = [0.0, 0.0, 0.0, 0.0];
		this._sceneBboxMin = [0.0, 0.0, 0.0]
		this._sceneBboxMax = [0.0, 0.0, 0.0];
		this._sceneBboxCenter = [0.0, 0.0, 0.0];
		this._sceneBboxDiag = 0.0;
	}
	

}
