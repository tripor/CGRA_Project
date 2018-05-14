/**
 * CarTop
 * @constructor
 */
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

        const dif = (this.bottomSquare-this.topSquare)/2.830;
        const trapHeightA = Math.sqrt(2*Math.pow(dif,2));
        const trapHeightB = Math.sqrt(Math.pow(trapHeightA,2)+Math.pow(this.height,2));
        this.trapHeight = trapHeightB;
        this.trapHeightA=trapHeightA;
        this.trap = new MyTrapeze(this.scene,this.bottomSquare,this.topSquare,trapHeightB);
        
        this.topTexture = new CGFappearance(this.scene);
        this.topTexture.loadTexture("../resources/images/top.png");
		this.topTexture.setAmbient(0.5,0.5,0.5,1);
		this.topTexture.setDiffuse(0.2,0.2,0.2,1);
		this.topTexture.setSpecular(0.1,0.1,0.1,1);	
        this.topTexture.setShininess(100);

        this.front = new CGFappearance(this.scene);
        this.front.loadTexture("../resources/images/topFront.png");
		this.front.setAmbient(0.5,0.5,0.5,1);
		this.front.setDiffuse(0.2,0.2,0.2,1);
		this.front.setSpecular(0.1,0.1,0.1,1);	
        this.front.setShininess(100);

        this.sides = new CGFappearance(this.scene);
        this.sides.loadTexture("../resources/images/topSides.png");
		this.sides.setAmbient(0.5,0.5,0.5,1);
		this.sides.setDiffuse(0.2,0.2,0.2,1);
		this.sides.setSpecular(0.1,0.1,0.1,1);	
        this.sides.setShininess(100);

        this.carFront = new CGFappearance(this.scene);
        this.carFront.loadTexture("../resources/images/carFront.png");
		this.carFront.setAmbient(0.5,0.5,0.5,1);
		this.carFront.setDiffuse(0.2,0.2,0.2,1);
		this.carFront.setSpecular(0.1,0.1,0.1,1);	
        this.carFront.setShininess(100);

        this.black = new CGFappearance(this.scene);
        this.black.loadTexture("../resources/images/black.png");
		this.black.setAmbient(0.5,0.5,0.5,1);
		this.black.setDiffuse(0.2,0.2,0.2,1);
		this.black.setSpecular(0.1,0.1,0.1,1);	
        this.black.setShininess(100);
        
        
        
	};


    
    display() 
	{
		

		// top quad
        this.scene.pushMatrix();
            this.scene.translate(-2,0,-2);
            this.scene.scale(this.topSquare,1, this.topSquare);
            this.scene.translate(0,this.height,0);
            this.scene.rotate(-90 * degToRad, 1, 0, 0);
            if(this.type==1) this.topTexture.apply();
            else if(this.type==2) this.carFront.apply();
            else this.topTexture.apply();
		    this.quad.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
            this.scene.translate(-2,0,-2);
            this.scene.translate(-this.bottomSquare/2,0,(this.topSquare)/2+this.trapHeightA);
            this.scene.rotate(-(90*degToRad- Math.atan((this.height)/(this.trapHeightA))),1,0,0);
            if(this.type==1) this.topTexture.apply();
            else if(this.type==2) this.black.apply();
            else this.sides.apply();
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
            if(this.type==1) this.topTexture.apply();
            else if(this.type==2) this.black.apply();
            else this.front.apply();
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
