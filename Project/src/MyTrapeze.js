/**
 * MyTrapeze
 * @constructor
 */
class MyTrapeze extends CGFobject
{
	constructor(scene, base, top, height) 
	{
		super(scene);
        this.base = base;
        this.top = top;
        this.height = height;
        this.initBuffers();
        this.dif = (this.base-this.top)/2;

       /* this.trapT = new CGFappearance(this.scene);
        this.trapT.loadTexture("../resources/images/wheel_rim.png");
		this.trapT.setAmbient(0.5,0.5,0.5,1);
		this.trapT.setDiffuse(0.2,0.2,0.2,1);
		this.trapT.setSpecular(0.1,0.1,0.1,1);	
        this.trapT.setShininess(100);
        */
    };
    
   /* 
   display()
    {
        this.scene.pushMatrix();
            this.trapT.apply();
            super.display();
		this.scene.popMatrix();
        
    }
    */

	initBuffers() 
	{
		this.normals = [
		0 , 0 , 1,
		0 , 0 , 1,
		0 , 0 , 1,
		0 , 0 , 1


		]

		this.texCoords = [
		0 , 1 ,
		1 , 1 ,
		0 , 0 ,
		1 , 0


		]
		/*this.vertices = [
		0, 0, 0,
		this.base, 0, 0,
		this.dif, this.height, 0,
		this.dif + this.top, this.height, 0
        ];*/
        
        this.vertices = [
		0, 0, 0,
		this.base, 0, 0,
		(this.base-this.top)/2, this.height, 0,
		(this.base-this.top)/2 + this.top, this.height, 0
		];

		this.indices = [
		0, 1, 2, 
		3, 2, 1
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};