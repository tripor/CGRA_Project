class Car extends CGFobject
{
	constructor(scene) 
	{
        super(scene);
		this.wheel1 = new Wheel(this.scene);
		this.wheel2 = new Wheel(this.scene);
		this.wheel3 = new Wheel(this.scene);
		this.wheel4 = new Wheel(this.scene);
        

		this.initBuffers();
	};

    display()
    {
        this.scene.pushMatrix();
            super.display();
        this.scene.popMatrix();
        //---------------Wheel 1----------------
        this.scene.pushMatrix();
            this.scene.translate(4,0.7,0);
            this.scene.scale(0.7,0.7,0.7);
            this.scene.translate(0,0,1);
            this.scene.rotate(180*degToRad,0,1,0);
            this.wheel1.display();
        this.scene.popMatrix();
        //---------------Wheel 2----------------
        this.scene.pushMatrix();
            this.scene.translate(4,0.7,3.5);
            this.scene.scale(0.7,0.7,0.7);
            this.wheel2.display();
        this.scene.popMatrix();
        //---------------Wheel 3----------------
        this.scene.pushMatrix();
            this.scene.translate(0.5,0.7,0);
            this.scene.scale(0.7,0.7,0.7);
            this.scene.translate(0,0,1);
            this.scene.rotate(180*degToRad,0,1,0);
            this.wheel3.display();
        this.scene.popMatrix();
        //---------------Wheel 4----------------
        this.scene.pushMatrix();
            this.scene.translate(0.5,0.7,3.5);
            this.scene.scale(0.7,0.7,0.7);
            this.wheel4.display();
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
};