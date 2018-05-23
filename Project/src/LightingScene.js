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
		//-----------------------------------Car Values--------------------------------------------------
		this.velocidade=0.0;
		this.pos_x=8; //5
		this.pos_y=7; //4
		this.direcao=0;
		this.turn=0;
		this.Estabilizacao=5;
		this.isTurning=false;
		this.wheel_rad=0;
		this.Inercia_Cancelation=false;
		this.Atrito=false;
		this.atrito_valor=0.1;
		this.Turning_hack=false;
		//-----------------------------------Crane Values--------------------------------------------
		this.craneAnim=false;
		this.craneRotation=0;
		this.ropeAnim=false;
		this.craneRope=false;
		this.return=false;
		this.ropeDrop=0;
		this.armAngle=0;
		//Car related
		this.carUp=false;
		this.carDisplay=true;
		this.carRot = false;
		this.carDrop=false;
		this.pos_z=0;
		this.keyBlock=false;
		//-----------------------------------Interface-----------------------------------------------

		this.speed=5;
		this.Light_1=true;
		this.Light_2=true;
		this.Eixos=true;

		//-----------------------------------Materials-----------------------------------------------
		this.materialDefault = new CGFappearance(this);
		
		this.vehicleAppearances=[];

		this.vehicleAppearances.push(new Texture(this,"images"));
		this.vehicleAppearances.push(new Texture(this,"images2"));
		this.vehicleAppearances.push(new Texture(this,"images3"));

		this.VehicleAppearanceList=[];
		this.VehicleAppearanceList.push('Basic');
		this.VehicleAppearanceList.push('Flames');
		this.VehicleAppearanceList.push('Jungle');

		this.Appearance='Basic';
		this.currVehicleAppearance=0;

		//----------------------------------Terrain altimetry----------------------------------------
		//example for nrDivs = 8 -> grid of 9x9 vertices     
		this.altimetry= [
			[ this.randomValue() , this.randomValue() , this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue()],
			[ this.randomValue() , this.randomValue() , this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue()],
		   	[ this.randomValue() , 0.0                , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , 0.0                , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , 0.0                , 0.0               , 0.0               , 0.0               , 0.0				  , 0.0				  , 0.0               , 0.0               , 0.0				  , 0.0               , 0.0               , 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , 0.0                , 0.0               , 0.0               , this.randomValue(), 0.0				  , 0.0				  , 0.0               , 0.0               , 0.0				  , 0.0				  , 0.0               , 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , 0.0                , 0.0               , this.randomValue(), this.randomValue(), this.randomValue(), 0.0				  , 0.0               , 0.0               , 0.0				  , 0.0				  , this.randomValue(), 0.0               , 0.0               , this.randomValue()], 
			[ this.randomValue() , 0.0                , 0.0               , this.randomValue(), this.randomValue(), this.randomValue(), 0.0				  , 0.0               , 0.0               , 0.0				  , 0.0				  , this.randomValue(), 0.0               , 0.0               , this.randomValue()], 
			[ this.randomValue() , 0.0                , 0.0               , this.randomValue(), this.randomValue(), this.randomValue(), 0.0				  , 0.0               , 0.0               , 0.0				  , 0.0				  , this.randomValue(), 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , 0.0                , 0.0               , this.randomValue(), this.randomValue(), this.randomValue(), 0.0				  , 0.0               , 0.0               , 0.0				  , 0.0				  , this.randomValue(), 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , 0.0                , 0.0               , 0.0               , this.randomValue(), 0.0				  , 0.0				  , 0.0               , 0.0               , 0.0				  , 0.0				  , 0.0               , 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , 0.0                , 0.0               , 0.0               , 0.0               , 0.0				  , 0.0				  , 0.0               , 0.0               , 0.0				  , 0.0               , 0.0               , 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , 0.0                , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , 0.0                , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , 0.0               , this.randomValue()],
			[ this.randomValue() , this.randomValue() , this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue(), this.randomValue()]
		];
		//-----------------------------------Scene elements------------------------------------------
		this.car = new Car(this);
		this.terrain =  new MyTerrain(this,this.altimetry.length-1,this.altimetry);
		this.crane = new MyCrane(this);
		this.quad = new MyQuad(this,0);

		//-----------------------------------End Scene elements--------------------------------------
		this.setUpdatePeriod(1000/FPS);
	};

	randomValue()
	{
		var num = Math.floor(Math.random()*4) + 1;
		num *= Math.floor(Math.random()*2) == 1 ? 1 : 0;
		var num = Math.floor(Math.random()*7) + 4;
		//num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
		return num ;
	}

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
		this.currVehicleAppearance=this.VehicleAppearanceList.indexOf(this.Appearance);
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		//this.camera.rotate(CGFcameraAxis.X,90*degToRad);
		/*var comprimento=Math.sqrt(this.car.valorHeight()*this.car.valorHeight()/4+this.car.valorWidth()*this.car.valorWidth());
		var angulo=-this.turn*degToRad-Math.tanh((this.car.valorHeight()/2)/this.car.valorWidth());
		console.log(Math.cos(angulo)*comprimento)
		this.camera.setPosition(vec3.fromValues(this.pos_x+1.5,2.5,this.pos_y+this.car.valorHeight()/2));
		this.camera.setTarget(vec3.fromValues(Math.cos(angulo)*comprimento+this.pos_x,2,-Math.sin(angulo)*comprimento+this.pos_y));*/

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
			//this.translate(25,0,18.2);
			this.translate(this.pos_x, this.pos_z, this.pos_y);
			this.rotate(-this.turn*degToRad,0,1,0);
			this.translate(0,0,1);
			if(this.carDisplay==true) this.car.display();
		this.popMatrix();
		//--------------Terrain----------------
		this.pushMatrix();
			this.terrain.display();
		this.popMatrix();
		//--------------Crane------------------
		this.pushMatrix();
			this.translate(27,0,25);
			//this.rotate(180*degToRad,0,1,0);
			this.rotate(this.craneRotation*degToRad,0,1,0);
			this.crane.display();
		this.popMatrix();
		//----------Crane Pick up and Drop-----
		this.pushMatrix();
			this.translate(27,0.01,20.5);
			this.scale(4,1,4);
			this.rotate(-90*degToRad,1,0,0);
			this.vehicleAppearances[this.currVehicleAppearance].black.apply();
			this.quad.display();
		this.popMatrix();
		this.pushMatrix();
			this.translate(27,0.01,29.5);
			this.scale(6,1,6);
			this.rotate(-90*degToRad,1,0,0);
			this.vehicleAppearances[this.currVehicleAppearance].black.apply();
			this.quad.display();
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
		else if(this.Inercia_Cancelation==true && this.velocidade>0)
		{
			this.velocidade=0;
		}
		if (this.gui.isKeyPressed("KeyS"))
		{
			this.velocidade-=0.1;
			if(this.velocidade<-5)
				this.velocidade=-5;
		}
		else if(this.Inercia_Cancelation==true && this.velocidade<0)
		{
			this.velocidade=0;
		}
		if (this.gui.isKeyPressed("KeyA"))
		{
			this.direcao-=2;
			if(this.direcao<-50 || this.Turning_hack==true)
				this.direcao=-50;
			this.isTurning=true;
		}
		else
			this.isTurning=false;
		if (this.gui.isKeyPressed("KeyD"))
		{
			this.direcao+=2;
			if(this.direcao>50 || this.Turning_hack==true)
				this.direcao=50;
			this.isTurning=true;
		}
		else
			this.isTurning=this.isTurning || false;
		//------------Crane-------------
		if (this.gui.isKeyPressed("KeyQ"))
		{
			console.log(this.pos_x);
			console.log(this.pos_y);
			if(this.pos_x>=23.5 && this.pos_x <=67.5 && this.pos_y>=17.7 && this.pos_y<=21.7 && this.velocidade==0){
			this.craneAnim=true;
			this.keyBlock=true;
			}
		}
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
		var novo_x=this.pos_x+this.velocidade*this.deltatime/1000 * Math.cos(this.turn*degToRad);
		var novo_y=this.pos_y+this.velocidade*this.deltatime/1000 * Math.sin(this.turn*degToRad);
		if(this.terrain.canGoHere(novo_x,novo_y,this.car.valorWidth(),this.car.valorHeight(),this.turn))
		{
			this.pos_x=novo_x;
			this.pos_y=novo_y;
		}
		else
			this.velocidade=0;
		if(this.Atrito==true && this.velocidade!=0)
		{
			if(this.velocidade<0)
			{
				this.velocidade+=this.atrito_valor*this.deltatime/1000;
				if(this.velocidade>0)this.velocidade=0;

			}
			else
			{
				this.velocidade-=this.atrito_valor*this.deltatime/1000;
				if(this.velocidade<0)this.velocidade=0;
			}
		}

		this.car.update(this.direcao,this.velocidade);

		//-------------------Crane Animation--------------
		if(this.craneAnim==true){
			if(this.craneRotation>=180) {
				this.craneAnim=false;
				this.craneRope=true;
				this.craneRotation=180;
			}
			else{
			this.craneRotation+=0.8;
			}
		}

		if(this.craneRope==true){
			
				if(this.ropeDrop>=1.134){
					this.reverse = true;
					this.craneRope=false;
					this.crane.updateCrane(true,0.01,1.134);
					this.carUp=true;
				}
				else{
					this.ropeDrop+=0.01;
					this.crane.updateCrane(false,0.01,1.134);
				}			
		}

		if(this.reverse==true){

			if(this.ropeDrop<=0){
				this.reverse=false;
				this.return=true;
				this.crane.updateCrane(true,-0.01,0);
				
			}
			else{
				this.ropeDrop-=0.01;
				this.crane.updateCrane(false,-0.01,0);
			}
		}
		
		if(this.return==true){
			if(this.craneRotation<=0) {
				this.return=false;
				this.craneRotation=0;
				this.carDrop=true;
			}
			else{
			this.craneRotation-=0.8;
			}
		}

		//--------------------Car on Crane----------

		if(this.carUp==true){
			this.carDisplay=false;		
			this.crane.carOn(this.pos_x,this.pos_y,-this.turn*degToRad);
			this.speed=0;
			
		}
		
		if(this.carDrop==true){
			this.carUp=false;
			if(this.crane.dropCar()) this.updateCarPos();
		}
		//this.turn+=0.5;

		if(this.keyBlock==false) this.checkKeys();
	};

	updateCarPos(x,y){
		this.pos_x=27+27-this.pos_x;
		this.pos_y=25+25-this.pos_y+0.35;
		this.turn+=180;
		this.carUp=false;
		this.carDrop=false;
		this.carDisplay=true;
		this.keyBlock=false;
	}
};
