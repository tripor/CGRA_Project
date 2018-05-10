class MyLamp extends CGFobject
{
	constructor(scene,slices,stacks) 
	{
		super(scene);
		this.slices = slices;
		this.stacks = stacks;
		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices=[];
		this.normals=[];
		this.indices=[];
		const converte=Math.PI/180.0;
		const angulo_lados=(360.0/this.slices)*converte;
		const angulo_lados_metade=angulo_lados/2.0;
		let angulo_onde_estou=0;
		let z_inicial=0.0,z=0.0,x,y,angulo_z;
		let quantidade=0;
		let normal_x,normal_y;
		let tamanho_slices=1.0/this.stacks;
		for (let i = 1; i <= this.stacks+1; i++) {
			angulo_onde_estou=0;
			if(i!=1)
			{
				angulo_z=Math.asin(((i-1)*tamanho_slices));
			}
			for (let j = 1;j <= this.slices; j++) {
				if(i!=1)
				{
					x=Math.cos(angulo_onde_estou)*Math.cos(angulo_z);
					y=Math.sin(angulo_onde_estou)*Math.cos(angulo_z);	
					z=z_inicial;
					this.vertices.push(x,y,z);
					this.normals.push(x,y,angulo_z);
				}
				else
				{
					x=Math.cos(angulo_onde_estou);
					y=Math.sin(angulo_onde_estou);		
					z=z_inicial;
					this.vertices.push(x,y,z);
					this.normals.push(x,y,0);
				}

				if(j!=this.slices && i!=this.stacks+1)
				{
					this.indices.push(quantidade+this.slices,quantidade+0,quantidade+1);
					this.indices.push(quantidade+this.slices,quantidade+1,quantidade+this.slices+1);
					quantidade++;
				}
				else if(i!=this.stacks+1)
				{
					this.indices.push(quantidade+this.slices,quantidade,this.slices*(i-1));
					this.indices.push(quantidade+this.slices,this.slices*(i-1),this.slices*(i-1)+this.slices);
					quantidade++;
				}

				angulo_onde_estou=angulo_onde_estou+angulo_lados;


			}
			z_inicial+=tamanho_slices;
		}
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};