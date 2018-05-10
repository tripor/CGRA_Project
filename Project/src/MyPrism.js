class MyPrism extends CGFobject
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
		let tamanho_slices=1.0/this.stacks;
		let z_inicial=0.0,z=0.0,x,y;
		let quantidade=0;
		let normal_x,normal_y;
		for (let i = 1; i <= this.stacks; i++) {
			angulo_onde_estou=0;
			for (var j = 1;j <= this.slices; j++) {


				x=Math.cos(angulo_onde_estou);
				y=Math.sin(angulo_onde_estou);		
				z=z_inicial;
				this.vertices.push(x,y,z);
				z+=tamanho_slices;
				this.vertices.push(x,y,z);


				angulo_onde_estou=angulo_onde_estou+angulo_lados;
				x=Math.cos(angulo_onde_estou);
				y=Math.sin(angulo_onde_estou);
				z=z_inicial;
				this.vertices.push(x,y,z);
				z+=tamanho_slices;
				this.vertices.push(x,y,z);

				this.indices.push(quantidade+1,quantidade+0,quantidade+2);
				this.indices.push(quantidade+2,quantidade+3,quantidade+1);
				quantidade+=4;

				normal_x=Math.cos(angulo_onde_estou-angulo_lados_metade);
				normal_y=Math.sin(angulo_onde_estou-angulo_lados_metade);
				this.normals.push(normal_x,normal_y,0);
				this.normals.push(normal_x,normal_y,0);
				this.normals.push(normal_x,normal_y,0);
				this.normals.push(normal_x,normal_y,0);


			}
			z_inicial+=tamanho_slices;
		}
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
