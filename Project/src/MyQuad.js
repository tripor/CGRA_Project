/**
 * MyQuad
 * @constructor
 */
class MyQuad extends CGFobject
{
	constructor(scene,direction) 
	{
		super(scene);
		this.direction=direction;

		this.initBuffers();
	};

	initBuffers() 
	{ 
		if(this.direction==1){
		this.normals = [
		0 , 0 , -1,
		0 , 0 , -1,
		0 , 0 , -1,
		0 , 0 , -1

		]
	}
		else {
			this.normals = [
				0 , 0 , 1,
				0 , 0 , 1,
				0 , 0 , 1,
				0 , 0 , 1
			]
		}

		this.texCoords = [
		0 , 1 ,
		1 , 1 ,
		0 , 0 ,
		1 , 0


		]
		this.vertices = [
		-0.5, -0.5, 0,
		0.5, -0.5, 0,
		-0.5, 0.5, 0,
		0.5, 0.5, 0
		];
	
	if(this.direction==1){
		this.indices = [
		0, 2, 1, 
		3, 1, 2
		];
	}
	else{
		this.indices = [
			0, 1, 2, 
			3, 2, 1
			];
	}

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

		
	};
};
