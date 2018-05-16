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

		//Code for 4x4 quad
		/*for(let i=0;i!=5;i++){
			for(let j=0;j!=5;j++){
				this.vertices.push(-0.5+j*0.25,-0.5+i*0.25,0);
			}
			for(let j=0;j!=5;j++){
				this.texCoords.push(j*0.25,1-i*0.25);
			}
			if(this.direction==1){
				this.normals.push(0,0,-1);
				
			}
				else {
					this.normals.push(0,0,1);
				}
			}
		
		this.indices = [];
			
		if(this.direction==1){
			for(let i = 0; i!=4; i++){
				for(let j = 0; j!=4; j++){
					this.indices.push(
						i*5+j,i*5+j+5,i*5+j+1,
						i*5+j+1,i*5+j+5,i*5+j+6
					);
				}
			}
		}
		else{
			for(let i = 0; i!=4; i++){
				for(let j = 0; j!=4; j++){
					this.indices.push(
						i*5+j,i*5+j+1,i*5+j+5,
						i*5+j+1,i*5+j+6,i*5+j+5
					);
				}
			}
		}
		*/
	};
};
