class MyTerrain extends Plane
{
	constructor(scene,divisions,altimetry) 
	{
		super(scene,divisions,divisions,altimetry);

        this.material_ground = new CGFappearance(this.scene);
		this.material_ground.loadTexture("../resources/geral/terrain.png");
		this.material_ground.setAmbient(0.3,0.3,0.3,1);
		this.material_ground.setDiffuse(1,1,1,1);
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
			super.display();
		this.scene.popMatrix();
    }

	/*initBuffers() 
	{
		this.vertices=[];
		this.normals=[];
		this.indices=[];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};*/
};