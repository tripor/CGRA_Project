class Wheel extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
        this.slices = 40;
        this.cilindro= new MyCylinder(this.scene,this.slices,3);

        this.wheel_rim_image = new CGFappearance(this.scene);
        this.wheel_rim_image.loadTexture("../resources/images/wheel_rim.png");
		this.wheel_rim_image.setAmbient(0.5,0.5,0.5,1);
		this.wheel_rim_image.setDiffuse(0.2,0.2,0.2,1);
		this.wheel_rim_image.setSpecular(0.1,0.1,0.1,1);	
        this.wheel_rim_image.setShininess(100);
        
        this.tire_image = new CGFappearance(this.scene);
        this.tire_image.loadTexture("../resources/images/tire.png");
		this.tire_image.setAmbient(0.25,0.25,0.25,1);
		this.tire_image.setDiffuse(0.1,0.1,0.1,1);
		this.tire_image.setSpecular(0.1,0.1,0.1,1);	
		this.tire_image.setShininess(100);

		this.initBuffers();
	};

    display()
    {
        this.scene.pushMatrix();
            this.wheel_rim_image.apply();
            super.display();
		this.scene.popMatrix();
        this.scene.pushMatrix();
            this.tire_image.apply();
            this.cilindro.display();
		this.scene.popMatrix();
    }

	initBuffers() 
	{
		this.vertices=[];
		this.normals=[];
        this.indices=[];
		this.texCoords=[];
		var z=1;
		this.vertices.push(0,0,z);
		this.normals.push(0,0,z);
		this.texCoords.push(0.5,0.5);
		var angulo_adicionar=Math.PI*2/this.slices;
		var angulo=0;
		for(let i=0; i<this.slices;i++)
		{
			let x=Math.cos(angulo);
			let y=Math.sin(angulo);
			this.vertices.push(x,y,z);
			this.texCoords.push((x/2)+0.5,1-((y/2)+0.5));
			this.normals.push(0,0,z);
			angulo+=angulo_adicionar;
		}

		for(let i=1;i<=this.slices;i++)
		{
			if(i!=this.slices)
				this.indices.push(0,i,i+1);
			else
				this.indices.push(0,i,1);
		}


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};