class Car extends CGFobject
{
	constructor(scene) 
	{
        super(scene);
		this.wheel1 = new Wheel(this.scene);
		this.wheel2 = new Wheel(this.scene);
		this.wheel3 = new Wheel(this.scene);
        this.wheel4 = new Wheel(this.scene);

        this.bottomSquare=1.5;
        this.top = new CarTop(this.scene,0.75,this.bottomSquare,1);  
        this.carBack = new CarTop(this.scene,1,4,2,1);
        this.carMiddleFront = new CarTop(this.scene,0.5,4,3,2);
        
        this.turning=0;
        this.back=0.5;
        this.middle=2.7;
        this.wheelRadius=0.4;  
        this.height=0.8;
        this.leastHeight=0.7;
        this.front=0.2;
        this.flatLength=this.back+this.wheelRadius*2+this.middle;
        this.side = new CarSide(this.scene,16,this.back,this.middle,this.front,this.leastHeight,this.height,this.wheelRadius,0);
        this.side2 = new CarSide(this.scene,16,this.back,this.middle,this.front,this.leastHeight,this.height,this.wheelRadius,1);

        this.cover = new CarCover(this.scene,this.flatLength,this.height,this.leastHeight,this.back,this.front,this.wheelRadius);
   
        this.bottom= new CarBottom(this.scene);

		this.initBuffers();
	};

    display()
    {
        this.scene.pushMatrix();
            super.display();
        this.scene.popMatrix()
        //---------------Wheel 1----------------
        this.scene.pushMatrix();
            this.scene.translate(4,this.wheelRadius,0);
            this.scene.scale(this.wheelRadius,this.wheelRadius,this.wheelRadius);
            this.scene.translate(0,0,1);
            this.scene.rotate((180+this.turning)*degToRad,0,1,0);
            this.wheel1.display();
        this.scene.popMatrix();
        //---------------Wheel 2----------------
        this.scene.pushMatrix();
            this.scene.translate(4,this.wheelRadius,2);
            this.scene.scale(this.wheelRadius,this.wheelRadius,this.wheelRadius);
            this.scene.rotate((this.turning)*degToRad,0,1,0);
            this.wheel2.display();
        this.scene.popMatrix();
        //---------------Wheel 3----------------
        this.scene.pushMatrix();
            this.scene.translate(0.5,this.wheelRadius,0);
            this.scene.scale(this.wheelRadius,this.wheelRadius,this.wheelRadius);
            this.scene.translate(0,0,1);
            this.scene.rotate(180*degToRad,0,1,0);
            this.wheel3.display();
        this.scene.popMatrix();
        //---------------Wheel 4----------------
        this.scene.pushMatrix();
            this.scene.translate(0.5,this.wheelRadius,2);
            this.scene.scale(this.wheelRadius,this.wheelRadius,this.wheelRadius);
            this.wheel4.display();
        this.scene.popMatrix();
        
        //---------------Top--------------------
        this.scene.pushMatrix();
            this.scene.translate(5.9,1.25,3.8225);
            this.scene.scale(2,1,1.3125);
            this.top.display();
        this.scene.popMatrix();
        //--------------Right Side--------------
        this.scene.pushMatrix();
            this.scene.translate(-0.4,0.45,2.2);
            this.side.display();
        this.scene.popMatrix();
        //--------------Left Side---------------
        this.scene.pushMatrix();
            this.scene.translate(-0.4,0.45,0.2);
            this.side2.display();
        this.scene.popMatrix();
        //--------------Cover-------------------
        this.scene.pushMatrix();
            this.cover.display();
        this.scene.popMatrix();
        //--------------Back--------------------
        this.scene.pushMatrix();
            this.scene.translate(-0.9+this.back,1.25,2.2);
            this.scene.rotate(90*degToRad,0,0,1);
            this.scene.scale(0.2,0.2,0.5);
            this.carBack.display();
        this.scene.popMatrix();
        //--------------Front-------------------
        this.scene.pushMatrix();
            this.scene.translate(-0.9+this.back+5,0.45,2.2);
            this.scene.rotate(-90*degToRad,0,0,1);
            this.scene.scale(0.1,0.2,0.5);
            this.carMiddleFront.display();
        this.scene.popMatrix();
        //--------------Bottom-------------------
        this.scene.pushMatrix();
            this.scene.translate(1,1,1);
            this.scene.rotate(90*degToRad,1,0,0);
            //this.scene.scale(0.1,0.2,0.5);
            this.bottom.display();
        this.scene.popMatrix();
        
        
    }

	initBuffers() 
	{
		this.vertices=[];
		this.normals=[];
        this.indices=[];
		this.texCoords=[];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    };
    
    update(direcao)
	{
        this.turning=-direcao;
	}
};