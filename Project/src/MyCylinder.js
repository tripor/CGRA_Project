class MyCylinder extends CGFobject
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
		this.texCoords=[];
		const converte=Math.PI/180.0;
		const angulo_lados=(360.0/this.slices)*converte;
		const angulo_lados_metade=angulo_lados/2.0;
		let angulo_onde_estou=0;
		let tamanho_slices=1.0/this.stacks;
		let z_inicial=0.0,z=0.0,x,y;
		let quantidade=0;
		let normal_x,normal_y;
		for (let i = 0; i <= this.stacks; i++) {
			angulo_onde_estou=0;
			for (let j = 0;j <= this.slices; j++) {


				x=Math.cos(angulo_onde_estou);
				y=Math.sin(angulo_onde_estou);		
				z=z_inicial;
				this.vertices.push(x,y,z);
				this.texCoords.push(1-(angulo_onde_estou/(2*Math.PI)),z);
				this.normals.push(x,y,0);

				if(j!=this.slices && i!=this.stacks)
				{
					this.indices.push(((this.slices+1)*i)+j+0,((this.slices+1)*i)+j+1,((this.slices+1)*i)+j+(this.slices+1)+1);
					this.indices.push(((this.slices+1)*i)+j+0,((this.slices+1)*i)+j+(this.slices+1)+1,((this.slices+1)*i)+j+(this.slices+1)+0);
				}
				angulo_onde_estou=angulo_onde_estou+angulo_lados;


			}
			z_inicial+=tamanho_slices;
		}
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};