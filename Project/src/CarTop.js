/**
 * CarTop
 * @constructor
 */
//-----this 3D trapeze is made with 2D trapezes and a quad. This is editable giving us the chance to use a bigger base
//or smaller therefore extensive calculations
 class CarTop extends CGFobject
{
	constructor(scene,height,bottomSquare,topSquare,type) 
	{
		super(scene);
        this.bottomSquare=bottomSquare;
        this.height=height;
        this.topSquare=topSquare;
        this.type=type;

        this.quad = new MyQuad(this.scene);

        //----------Variables and calculations-------
        const dif = (this.bottomSquare-this.topSquare)/2.830;  //2.830 is a const found to ensure there are no gaps or intersections betweet 2D trapezes
        const trapHeightA = Math.sqrt(2*Math.pow(dif,2));
        const trapHeightB = Math.sqrt(Math.pow(trapHeightA,2)+Math.pow(this.height,2));
        this.trapHeight = trapHeightB;
        this.trapHeightA=trapHeightA;
        this.trap = new MyTrapeze(this.scene,this.bottomSquare,this.topSquare,trapHeightB);
        
        
        
	};


    
    display() 
	{
		

		// top quad
        this.scene.pushMatrix();
            this.scene.translate(-2,0,-2);
            this.scene.scale(this.topSquare,1, this.topSquare);
            this.scene.translate(0,this.height,0);
            this.scene.rotate(-90 * degToRad, 1, 0, 0);
            if(this.type==1) this.scene.vehicleAppearances[this.scene.currVehicleAppearance].topTexture.apply();
            else if(this.type==2) this.scene.vehicleAppearances[this.scene.currVehicleAppearance].carFront.apply();
            else this.scene.vehicleAppearances[this.scene.currVehicleAppearance].snake.apply();
		    this.quad.display();
        this.scene.popMatrix();
        
        //-------All 4 2D Trapezes-------
        this.scene.pushMatrix();
            this.scene.translate(-2,0,-2);
            this.scene.translate(-this.bottomSquare/2,0,(this.topSquare)/2+this.trapHeightA);
            this.scene.rotate(-(90*degToRad- Math.atan((this.height)/(this.trapHeightA))),1,0,0);
            if(this.type==1) this.scene.vehicleAppearances[this.scene.currVehicleAppearance].topTexture.apply();
            else if(this.type==2) this.scene.vehicleAppearances[this.scene.currVehicleAppearance].black.apply();
            else this.scene.vehicleAppearances[this.scene.currVehicleAppearance].sides.apply();
            this.trap.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-2,0,-2);
            this.scene.translate(this.bottomSquare/2,0,-(this.topSquare)/2-this.trapHeightA);
            this.scene.rotate(180*degToRad,0,1,0);
            this.scene.rotate(-(90*degToRad- Math.atan((this.height)/(this.trapHeightA))),1,0,0);
            this.trap.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-2,0,-2);
            this.scene.translate(this.topSquare/2+this.trapHeightA,0,this.bottomSquare/2);
            this.scene.rotate(90*degToRad,0,1,0);
            this.scene.rotate(-(90*degToRad- Math.atan((this.height)/(this.trapHeightA))),1,0,0);
            if(this.type==1) this.scene.vehicleAppearances[this.scene.currVehicleAppearance].topTexture.apply();
            else if(this.type==2) this.scene.vehicleAppearances[this.scene.currVehicleAppearance].black.apply();
            else this.scene.vehicleAppearances[this.scene.currVehicleAppearance].front.apply();
            this.trap.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
            this.scene.translate(-2,0,-2);
            this.scene.translate(-this.topSquare/2-this.trapHeightA,0,-this.bottomSquare/2);
            this.scene.rotate(-90*degToRad,0,1,0);
            this.scene.rotate(-(90*degToRad- Math.atan((this.height)/(this.trapHeightA))),1,0,0);
            this.trap.display();
        this.scene.popMatrix();
		
	};
};
