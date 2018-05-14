class MyTerrain extends CGFobject
{
	constructor(scene,divisions,size) 
	{
		super(scene);
        this.plano=new Plane(scene,divisions,50);

        this.material_ground = new CGFappearance(this.scene);
		this.material_ground.loadTexture("../resources/geral/terrain.png");
		this.material_ground.setAmbient(0.5,0.5,0.5,1);
		this.material_ground.setDiffuse(0.6,0.6,0.6,1);
		this.material_ground.setSpecular(0.1,0.1,0.1,1);
		this.material_ground.setShininess(100);
    };
    
    display()
    {
        this.scene.pushMatrix();
            this.scene.translate(0,0,50);
            this.scene.scale(50,1,50);
            this.scene.rotate(-90*degToRad,1,0,0);
            this.material_ground.apply();
			this.plano.display();
		this.scene.popMatrix();
    }

	initBuffers() 
	{
		this.vertices=[];
		this.normals=[];
		this.indices=[];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};