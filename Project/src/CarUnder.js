/**
 * CarUnder
 * @constructor
 */
class CarUnder extends CGFobject
{
	 //back middle and front are the length of the car before the wheels after the wheels and in between
	constructor(scene,back,middle,front,wheelRadius,curve)   
	{
        super(scene);
        this.middle=middle;
        this.back=back;
        this.front=front;
        this.curve=curve;
        this.wheelDiam=wheelRadius*2;
      

        this.quad=new MyQuad(this.scene,0);
        this.semiCylinder=new SemiCylinder(this.scene,this.curve,this.wheelDiam);

       						
	};


	display() 
	{
        //back cylinderCut
        this.scene.pushMatrix();
        this.scene.vehicleAppearances[this.scene.currVehicleAppearance].darkGray.apply();
            this.semiCylinder.display();
        this.scene.popMatrix();
        //front cylinderCut
        this.scene.pushMatrix();
            this.scene.translate(this.middle+this.wheelDiam,0,0);
            this.semiCylinder.display();
        this.scene.popMatrix();
        //back quad
        this.scene.pushMatrix();
            this.scene.translate(-this.back/2,0,1);
            this.scene.rotate(90*degToRad,1,0,0);
            this.scene.scale(this.back,2,1);
            this.quad.display();
        this.scene.popMatrix();
        //middle quad
        this.scene.pushMatrix();
            this.scene.translate(this.middle/2+this.wheelDiam,0,1);
            this.scene.rotate(90*degToRad,1,0,0);
            this.scene.scale(this.middle,2,1);
            this.quad.display();
        this.scene.popMatrix();
        //front quad
        this.scene.pushMatrix();
            this.scene.translate(this.middle+this.wheelDiam*2+this.front/2,0,1);
            this.scene.rotate(90*degToRad,1,0,0);
            this.scene.scale(this.front,2,1);
            this.quad.display();
        this.scene.popMatrix();
       

	};
};