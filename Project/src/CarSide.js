/**
 * CarSide
 * @constructor
 */
class CarSide extends CGFobject
{
	 //back middle and front are the length of the car before the wheels after the wheels and in between
	constructor(scene,curve,back,middle,front,leastHeight,height,wheelDiam,direction)   
	{
		super(scene);

		this.quad = new MyQuad(this.scene);
		this.quad2=new MyQuad(this.scene,1);
		this.tria = new MyTriangle(this.scene,0);
		this.tria2 = new MyTriangle(this.scene,1);
		
		this.wheelSpace = new SemiCircleCut(this.scene,curve,height,wheelDiam,direction);
		this.wheelSpace2 = new SemiCircleCut(this.scene,curve,leastHeight,wheelDiam,direction);
		
		this.curve=curve;
		this.back=back;
		this.middle=middle;
		this.front=front;
		this.leastHeight=leastHeight;
		this.height=height;
		this.wheelDiam=2*wheelDiam;
		this.direction=direction;
				
	};


	display() 
	{

		//back square
		this.scene.pushMatrix();
			this.scene.scale(this.back,this.height,1);
			this.scene.translate(0.5,0.5,0);
			this.scene.vehicleAppearances[this.scene.currVehicleAppearance].topTexture.apply();
			if(this.direction==1) this.quad2.display();
			else this.quad.display();
		this.scene.popMatrix();

		//middle square
		this.scene.pushMatrix();
			//this.scene.translate(0.5,0.5,0);
			this.scene.scale(this.middle,this.height,1);
			this.scene.translate(0.5,0.5,0);
			this.scene.translate(1/this.middle*(this.back+this.wheelDiam),0,0);
			this.scene.vehicleAppearances[this.scene.currVehicleAppearance].doors.apply();
			if(this.direction==1) this.quad2.display();
			else this.quad.display();
		this.scene.popMatrix();

		//front square		
		this.scene.pushMatrix();
			this.scene.scale(this.front,this.leastHeight,1);
			this.scene.translate(0.5,0.5,0);			
			this.scene.translate(1/this.front*(this.back+this.wheelDiam+this.middle+this.wheelDiam),0,0);
			this.scene.vehicleAppearances[this.scene.currVehicleAppearance].topTexture.apply();
			if(this.direction==1) this.quad2.display();
			else this.quad.display();
		this.scene.popMatrix();

		//triangle
		this.scene.pushMatrix();
			this.scene.scale(this.wheelDiam+this.front,this.height-this.leastHeight,1);
			this.scene.translate(1/(this.wheelDiam+this.front)*(this.back+this.wheelDiam+this.middle),1/(this.height-this.leastHeight)*(this.leastHeight),0);
			this.scene.vehicleAppearances[this.scene.currVehicleAppearance].topTexture.apply();
			if(this.direction==0) this.tria.display();
			else this.tria2.display();
		this.scene.popMatrix();

		//back semi circle
		this.scene.pushMatrix();
			this.scene.translate(this.back,0,0);
			this.scene.vehicleAppearances[this.scene.currVehicleAppearance].topTexture.apply();
			this.wheelSpace.display();
		this.scene.popMatrix();

		//front semi circle
		this.scene.pushMatrix();
			this.scene.translate(this.back+this.middle+this.wheelDiam,0,0);
			this.scene.vehicleAppearances[this.scene.currVehicleAppearance].topTexture.apply();
			this.wheelSpace2.display();
		this.scene.popMatrix();

		

	};
};
