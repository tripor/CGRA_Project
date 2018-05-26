/**
 * CarCover
 * @constructor
 */
class CarCover extends CGFobject
{
	 //back middle and front are the length of the car before the wheels after the wheels and in between
	constructor(scene,flatLength,height,leastHeight,back,front,wheelRadius)   
	{
        super(scene);
        this.flatLength=flatLength;
        this.height=height;
        this.leastHeight=leastHeight;
        this.back=back;
        this.front=front;
        this.wheelDiam=wheelRadius*2;
      

        this.squarLength=Math.sqrt(Math.pow(this.height-this.leastHeight,2)+Math.pow(this.wheelDiam+this.front,2));
        this.rot=Math.atan((this.height-this.leastHeight)/(this.wheelDiam+this.front));
        this.squarLength2=Math.sqrt(Math.pow(this.height-this.leastHeight+0.15,2)+Math.pow(this.wheelDiam+this.front,2));
        this.rot2=Math.atan((this.height-this.leastHeight+0.15)/(this.wheelDiam+this.front));

        this.quad=new MyQuad(this.scene,0);

        this.tria=new MyCustomTriangle(this.scene,(this.leastHeight-0.4)/2,this.height-this.leastHeight+(this.leastHeight-0.4)/2,this.front+this.wheelDiam,1);
        this.tria2=new MyCustomTriangle(this.scene,(this.leastHeight-0.4)/2,this.height-this.leastHeight+(this.leastHeight-0.4)/2,this.front+this.wheelDiam,0);
        
						
	};


	display() 
	{
        //cover quad
        this.scene.pushMatrix();
            this.scene.translate(1.6,this.height+0.45,1.2);
            this.scene.rotate(-90*degToRad,1,0,0);
            this.scene.scale(this.flatLength,2,0);
            this.quad.display();
        this.scene.popMatrix();
        
        //Right Light quad
        this.scene.pushMatrix();
            this.scene.translate(4.6,1,2.05);
            this.scene.rotate(90*degToRad,0,1,0);
            this.scene.scale(this.leastHeight-0.4,this.leastHeight-0.4,1);
            this.scene.vehicleAppearances[this.scene.currVehicleAppearance].lights.apply();
            this.quad.display();
        this.scene.popMatrix();
        //Left Light quad
        this.scene.pushMatrix();
            this.scene.translate(4.6,1,0.35);
            this.scene.rotate(90*degToRad,0,1,0);
            this.scene.scale(this.leastHeight-0.4,this.leastHeight-0.4,1);
            this.quad.display();
        this.scene.popMatrix();

        //Lights Connection
        this.scene.pushMatrix();
            this.scene.translate(4.6,0.925,1.2);
            this.scene.rotate(90*degToRad,0,1,0);
            this.scene.scale(2-(this.leastHeight-0.4)*2,(this.leastHeight-0.4)/2,1);
            this.scene.vehicleAppearances[this.scene.currVehicleAppearance].connection.apply();
            this.quad.display();
        this.scene.popMatrix();
        
        //Right Light cover
        this.scene.pushMatrix();
            this.scene.translate(4.1,1.2,2.05);
            this.scene.rotate(-90*degToRad,1,0,0);
            this.scene.rotate(this.rot,0,1,0);
            this.scene.scale(this.squarLength,this.leastHeight-0.4,1);
            this.scene.vehicleAppearances[this.scene.currVehicleAppearance].gray.apply();
            this.quad.display();
        this.scene.popMatrix();
        
        //Left Light Cover
        this.scene.pushMatrix();
            this.scene.translate(4.1,1.2,0.35);
            this.scene.rotate(-90*degToRad,1,0,0);
            this.scene.rotate(this.rot,0,1,0);
            this.scene.scale(this.squarLength,this.leastHeight-0.4,1);
            this.quad.display();
        this.scene.popMatrix();
        
        //Front cover
        this.scene.pushMatrix();
            this.scene.translate(4.1,1.125,1.2);
            this.scene.rotate(-90*degToRad,1,0,0);
            this.scene.rotate(this.rot2,0,1,0);
            this.scene.scale(this.squarLength2,1.4,1);
            this.quad.display();
        this.scene.popMatrix();

        //Left triangle     Used to close the front gap for the lights and front cover
        this.scene.pushMatrix();
            this.scene.translate(4.6,1,0.5);
            this.scene.rotate(180*degToRad,0,1,0);
            this.tria.display();
        this.scene.popMatrix();
        
        //Right Triangle    Used to close the front gap for the lights and front cover
        this.scene.pushMatrix();
            this.scene.translate(4.6,1,1.9);
            this.scene.rotate(180*degToRad,0,1,0);
            this.tria2.display();
        this.scene.popMatrix();

      
	};
};
