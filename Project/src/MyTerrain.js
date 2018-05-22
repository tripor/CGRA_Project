class MyTerrain extends Plane
{
	constructor(scene,divisions,altimetry) 
	{
		super(scene,divisions,divisions,altimetry);
		this.altimetry=altimetry;
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
			this.scene.scale(50,1,50);
			this.scene.rotate(-90*degToRad,1,0,0);
            this.material_ground.apply();
			super.display();
		this.scene.popMatrix();
    }

	/*initBuffers() 
	canGoHere(pos_y,pos_x,width,height,turn)
	{
		this.vertices=[];
		this.normals=[];
		this.indices=[];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};*/
		pos_x = 50-pos_x;

		let conta=(this.altimetry.length-1)/50;

		var ponto2x=Math.sin(turn*degToRad)*-width+pos_x;
		var ponto2y=Math.cos(turn*degToRad)*width+pos_y;

		var ponto3x=Math.sin((turn-90)*degToRad)*height+pos_x;
		var ponto3y=Math.cos((turn-90)*degToRad)*-height+pos_y;

		var angulo=-turn*degToRad - Math.tanh(height/width);
		var comprimento=Math.sqrt(height*height+width*width);

		var ponto4x=Math.sin(angulo)*comprimento+pos_x;
		var ponto4y=Math.cos(angulo)*comprimento+pos_y;

		pos_x=pos_x*conta;
		pos_y=pos_y*conta;

		if(this.altimetry[Math.floor(pos_x)][Math.floor(pos_y)]==0 && this.altimetry[ Math.floor(pos_x)][ Math.ceil(pos_y)]==0 && this.altimetry[Math.ceil(pos_x)][Math.floor(pos_y)]==0 && this.altimetry[ Math.ceil(pos_x)][ Math.ceil(pos_y)]==0)
		{
			ponto2x=ponto2x*conta;
			ponto2y=ponto2y*conta;
			if(this.altimetry[Math.floor(ponto2x)][Math.floor(ponto2y)]==0 && this.altimetry[ Math.floor(ponto2x)][ Math.ceil(ponto2y)]==0 && this.altimetry[Math.ceil(ponto2x)][Math.floor(ponto2y)]==0 && this.altimetry[ Math.ceil(ponto2x)][ Math.ceil(ponto2y)]==0)
			{
				ponto3x=ponto3x*conta;
				ponto3y=ponto3y*conta;
				if(this.altimetry[Math.floor(ponto3x)][Math.floor(ponto3y)]==0 && this.altimetry[ Math.floor(ponto3x)][ Math.ceil(ponto3y)]==0 && this.altimetry[Math.ceil(ponto3x)][Math.floor(ponto3y)]==0 && this.altimetry[ Math.ceil(ponto3x)][ Math.ceil(ponto3y)]==0)
				{
					ponto4x=ponto4x*conta;
					ponto4y=ponto4y*conta;
					if(this.altimetry[Math.floor(ponto4x)][Math.floor(ponto4y)]==0 && this.altimetry[ Math.floor(ponto4x)][ Math.ceil(ponto4y)]==0 && this.altimetry[Math.ceil(ponto4x)][Math.floor(ponto4y)]==0 && this.altimetry[ Math.ceil(ponto4x)][ Math.ceil(ponto4y)]==0)
					{
						return true;
					}
				}
			}
		}
		return false;
	}
};