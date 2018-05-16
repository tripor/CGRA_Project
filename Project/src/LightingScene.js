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
		//-----------------------------------Values--------------------------------------------------
		this.velocidade=0;
		this.pos_x=2;
		this.pos_y=0;
		this.direcao=0;
		this.turn=0;
		this.Estabilizacao=5;
		this.isTurning=false;
		this.wheel_rad=0;
		//-----------------------------------Interface-----------------------------------------------

		this.speed=5;
		this.Light_1=true;
		this.Light_2=true;
		this.Eixos=true;

		//-----------------------------------Materials-----------------------------------------------
		this.materialDefault = new CGFappearance(this);
		
		this.vehicleAppearances=[];

		this.vehicleAppearances.push(new Texture(this,"images"));

		this.Appearance=[];
		this.Appearance.push("Basic");

		this.currVehicleAppearance=this.Appearance.indexOf("Basic");

		//----------------------------------End Materials------------------------------------------
		//-----------------------------------Scene elements------------------------------------------
		this.car = new Car(this);
		this.terrain =  new MyTerrain(this,50,50);

		//-----------------------------------End Scene elements--------------------------------------
		this.setUpdatePeriod(1000/FPS);
	};

	initCameras() 
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights() 
	{
		this.setGlobalAmbientLight(0.7,0.7,0.7, 1.0);

		this.lights[0].setPosition(10.5, 6.0, 5.0, 1.0);
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)

		this.lights[0].setAmbient(0.1, 0.1, 0.1, 1);
		this.lights[0].setDiffuse(0.5, 0.5, 0.5, 1.0);
		this.lights[0].setSpecular(0.5, 0.5, 0.5, 1);
		this.lights[0].enable();

		this.lights[1].setPosition(30, 6.0, 30, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[1].setAmbient(0.1, 0.1, 0.1, 1);
		this.lights[1].setDiffuse(1, 0, 0, 1.0);
		this.lights[1].setSpecular(0.5, 0.5, 0.5, 1);
		this.lights[1].enable();
	};

	updateLights() 
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();

		if(this.Light_1)
			this.lights[0].enable();
		else 
			this.lights[0].disable();
		if(this.Light_2)
			this.lights[1].enable();
		else 
			this.lights[1].disable();
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
		if(this.Eixos==true)
			this.axis.display();


		// ---- END Background, camera and axis setup

		//-------------------------BEGIN Scene drawing section------------------------------------
		/*
		this.pushMatrix();
			
		this.popMatrix();
		*/

		//---------------Car-------------------
		this.pushMatrix();
			this.translate(this.pos_x, 0, this.pos_y);
			this.rotate(-this.turn*degToRad,0,1,0);
			this.car.display();
		this.popMatrix();

		this.pushMatrix();
			this.terrain.display();
		this.popMatrix();

		//----------------------------END Scene drawing section----------------------------------


	};
	checkKeys()
	{
		if (this.gui.isKeyPressed("KeyW"))
		{
			this.velocidade+=0.1;
			if(this.velocidade>10)
				this.velocidade=10;
		}
		if (this.gui.isKeyPressed("KeyS"))
		{
			this.velocidade-=0.1;
			if(this.velocidade<-5)
				this.velocidade=-5;
		}
		if (this.gui.isKeyPressed("KeyA"))
		{
			this.direcao-=2;
			if(this.direcao<-50)
				this.direcao=-50;
			this.isTurning=true;
		}
		else
			this.isTurning=false;
		if (this.gui.isKeyPressed("KeyD"))
		{
			this.direcao+=2;
			if(this.direcao>50)
				this.direcao=50;
			this.isTurning=true;
		}
		else
			this.isTurning=this.isTurning || false;
	};


	update(currTime)
	{
		this.lasttime=this.lasttime || currTime;
		this.deltatime =currTime - this.lasttime;
		this.lasttime=currTime;
		this.turn+=this.direcao*(this.velocidade/4)*(this.deltatime/1000);
		if(this.direcao!=0 && this.isTurning==false)
		{
			if(this.direcao<0)
			{
				this.direcao+=this.Estabilizacao*(Math.abs(this.velocidade))*(this.deltatime/1000)
				if(this.direcao>0) this.direcao=0;
			}
			else
			{
				this.direcao-=this.Estabilizacao*(Math.abs(this.velocidade))*(this.deltatime/1000)
				if(this.direcao<0)this.direcao=0;
			}
		}
		this.pos_x+=this.velocidade*this.deltatime/1000 * Math.cos(this.turn*degToRad);
		this.pos_y+=this.velocidade*this.deltatime/1000 * Math.sin(this.turn*degToRad);
		this.car.update(this.direcao,this.velocidade);
		this.checkKeys();
	};
};
