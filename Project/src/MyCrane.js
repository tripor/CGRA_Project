class MyCrane extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
        this.slices = 40;
		this.cilindro= new Wheel(this.scene,1);
		this.cube=new MyUnitCubeQuad(this.scene);
		this.car = new Car(this.scene);
		
		//----------Variables(Editable)----------
		//All Variables are connected and therefore can be changed easily
		this.baseHeight=6;
		this.baseAngle=30*degToRad;
		this.armLength=2;
		this.ropeSize=2;

		this.groundHeightSubtraction=0; //THIS IS THE ANIMATION VARIABLE AND GOES UP TO 1.134
		this.armAngle=Math.asin(this.groundHeightSubtraction/this.armLength);
		//-----------------------------
		this.carDisplay=false;
		this.carX=0;
		this.carY=0;
		this.carRot=0;
		this.drop=0; //goes to 1.134
		
		this.initBuffers();
	};

    display()
    {
		//----------------Base--------------------------
		this.scene.pushMatrix();
			this.scene.translate(0,0.125,0);
			this.scene.scale(0.5,0.4,0.5);
			this.scene.rotate(90*degToRad,1,0,0);
			this.cilindro.display();
		this.scene.popMatrix();
		//----------------Base Cube---------------------
		this.scene.pushMatrix();
			this.scene.translate(0,this.baseHeight/2-(this.baseHeight-(Math.cos(this.baseAngle)*this.baseHeight))/2,Math.sin(this.baseAngle)*this.baseHeight/2);
			this.scene.rotate(this.baseAngle,1,0,0);
			this.scene.scale(0.3,this.baseHeight,0.3);
			this.cube.display();
		this.scene.popMatrix();
		//----------------Rotation cilinder-------------
		this.scene.pushMatrix();
			this.scene.translate(-0.075,0,0);
			this.scene.translate(0,Math.cos(this.baseAngle)*this.baseHeight,Math.sin(this.baseAngle)*this.baseHeight);
			this.scene.rotate(90*degToRad,0,1,0);
			this.scene.scale(0.4,0.4,0.4);
			this.cilindro.display();
		this.scene.popMatrix();
		//----------------Arm---------------------------
		this.scene.pushMatrix();
			this.scene.translate(0,Math.cos(this.baseAngle)*this.baseHeight,Math.sin(this.baseAngle)*this.baseHeight+this.armLength/2);
			this.scene.translate(0,-Math.sin(this.armAngle)*this.armLength/2,-(this.armLength-Math.cos(this.armAngle)*this.armLength)/2);
			this.scene.rotate(this.armAngle,1,0,0);
			this.scene.scale(0.3,0.3,this.armLength);
			this.cube.display();
		this.scene.popMatrix();
		//----------------Rope--------------------------
		this.scene.pushMatrix();
			this.scene.translate(0,Math.cos(this.baseAngle)*this.baseHeight,Math.sin(this.baseAngle)*this.baseHeight+this.armLength-0.1);
			this.scene.translate(0,-Math.sin(this.armAngle)*this.armLength,-(this.armLength-Math.cos(this.armAngle)*this.armLength));
			this.scene.rotate(90*degToRad,1,0,0);
			this.scene.scale(0.05,0.05,this.ropeSize);
			this.scene.translate(0,0,0.250);
			this.cilindro.display();
		this.scene.popMatrix();
		//----------------Iman--------------------------
		this.scene.pushMatrix();
			this.scene.translate(0,0.05,0);
			this.scene.translate(0,Math.cos(this.baseAngle)*this.baseHeight-this.ropeSize,Math.sin(this.baseAngle)*this.baseHeight+this.armLength-0.1);
			this.scene.translate(0,-Math.sin(this.armAngle)*this.armLength,-(this.armLength-Math.cos(this.armAngle)*this.armLength));
			this.scene.rotate(90*degToRad,1,0,0);
			this.scene.scale(1,1,0.15);
			this.cilindro.display();
		this.scene.popMatrix();
		//----------------Car---------------------------
		this.scene.pushMatrix();
			this.scene.translate(0,Math.cos(this.baseAngle)*this.baseHeight-this.ropeSize-Math.sin(this.armAngle)*this.armLength,-(this.armLength-Math.cos(this.armAngle)*this.armLength)+0.352564417);  //0.3525... = inverso
			this.scene.translate(-this.carX+27,-2.06-this.drop,-this.carY+25);
			this.scene.rotate(this.carRot+180*degToRad,0,1,0);
			this.scene.translate(0,0,1);
			if(this.carDisplay==true) this.car.display();
		this.scene.popMatrix();
	}
	
	updateCrane(end,value,final)
	{	
		if(end==false){
			this.groundHeightSubtraction+=value;
			this.armAngle=Math.asin(this.groundHeightSubtraction/this.armLength);
		}
		else {
			this.groundHeightSubtraction=final;
			this.armAngle=Math.asin(this.groundHeightSubtraction/this.armLength);
		}
	}

	carOn(carX,carY,carRot)
	{
		this.carDisplay=true;
		this.carX=carX;
		this.carY=carY;
		this.carRot=carRot;
		this.drop=0;
	}

	dropCar()
	{
		if(this.drop>=1.134){
			this.carDisplay=false;
			this.drop=1.134;
			return true;
		}
		else {
			this.drop=(this.drop+0.01)*1.1;
			return false;
		}
	}

	

};