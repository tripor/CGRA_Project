var degToRad = Math.PI / 180.0;

var FPS=60;

class LightingScene extends CGFscene 
{
	constructor()
	{
		super();
	};

	init(application) 
	{
		super.init(application);

		this.enableTextures(true);

		this.initCameras();

		this.initLights();

		this.gl.clearColor(0.5, 0.5, 0.9, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		//-----------------------------------Scene elements------------------------------------------
		this.car = new Car(this);
		this.terrain =  new MyTerrain(this,50,50);
		
		//this.boardA = new Plane(this, BOARD_A_DIVISIONS);
		//this.boardB = new Plane(this, BOARD_B_DIVISIONS);
		//-----------------------------------End Scene elements--------------------------------------
		//-----------------------------------Materials-----------------------------------------------
		this.materialDefault = new CGFappearance(this);
		
		/*this.materialA = new CGFappearance(this);
		this.materialA.setAmbient(0.3,0.3,0.3,1);
		this.materialA.setDiffuse(0.6,0.6,0.6,1);
		this.materialA.setSpecular(0,0.2,0.8,1);//RGB 0..1 X 0..255
		this.materialA.setShininess(120);

		this.materialB = new CGFappearance(this);
		this.materialB.setAmbient(0.3,0.3,0.3,1);
		this.materialB.setDiffuse(0.6,0.6,0.6,1);
		this.materialB.setSpecular(0.8,0.8,0.8,1);	
		this.materialB.setShininess(120);
		
		this.materialChao = new CGFappearance(this);
		this.materialChao.setAmbient(0.5,0.5,0.5,1);
		this.materialChao.setDiffuse(0.3,0.3,0.3,1);
		this.materialChao.setSpecular(0.1,0.1,0.1,1);	
		this.materialChao.setShininess(100);
		
		this.materialParede = new CGFappearance(this);
		this.materialParede.loadTexture("../resources/images/table.png");
		this.materialParede.setAmbient(0.5,0.5,0.5,1);
		this.materialParede.setDiffuse(0.6,0.6,0.6,1);
		this.materialParede.setSpecular(0.1,0.1,0.1,1);	
		this.materialParede.setShininess(100);*/
		//----------------------------------End Materials------------------------------------------
		
		this.setUpdatePeriod(1000/FPS);
	};

	initCameras() 
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights() 
	{
		this.setGlobalAmbientLight(1,1,1, 1.0);

		this.lights[0].setPosition(10.5, 6.0, 5.0, 1.0);
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)

		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1, 1, 1, 1);
		//this.lights[0].setConstantAttenuation(0);
		//this.lights[0].setLinearAttenuation(0);
		//this.lights[0].setQuadraticAttenuation(0);
		this.lights[0].enable();
	};

	updateLights() 
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}


	display() 
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
		this.axis.display();

		//this.materialDefault.apply();

		// ---- END Background, camera and axis setup

		//-------------------------BEGIN Scene drawing section------------------------------------
		/*
		this.pushMatrix();
			
		this.popMatrix();
		*/

		//---------------Car-------------------
		this.pushMatrix();
			this.translate(2, 0, 2);
			this.car.display();
		this.popMatrix();

		this.pushMatrix();
			this.terrain.display();
		this.popMatrix();

		//----------------------------END Scene drawing section----------------------------------
	};

	update(currTime)
	{
		this.lasttime=this.lasttime || 0;
		this.deltatime =currTime - this.lasttime;
		this.lasttime=currTime;
		// primeiro valor é enorme
	}
};
