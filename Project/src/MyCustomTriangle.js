/**
 * MyCustomTriangle
 * @constructor
 */
class MyCustomTriangle extends CGFobject
{
	constructor(scene,minHeight,maxHeight,length,direction) 
	{
        super(scene);
        this.minHeight=minHeight;
        this.maxHeight=maxHeight;
        this.length=length;
        this.direction=direction;

		this.initBuffers();
	};

	initBuffers() 
	{
		this.normals = [
		0 , 0 , 1,
		0 , 0 , 1,
        0 , 0 , 1,
        0,0,1
		


		]

		this.texCoords = [
		0 , 1 ,
		1 , 1 ,
		0 , 0 ,
		1 , 0


		]
		this.vertices = [
        0,0,0,
        this.length,this.maxHeight,0,
        0,this.minHeight,0
		
		];

    if(this.direction==0){
		this.indices = [
		0, 1, 2, 
        ];
    }

    else{
		this.indices = [
		0, 2, 1, 
        ];
    }

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};