
/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
class Plane extends CGFobject{

	constructor(scene, nrDivs, propocao,altimetry) 
	{
		super(scene);

		this.altimetry=altimetry;
		// nrDivs = 1 if not provided
		nrDivs = typeof nrDivs !== 'undefined' ? nrDivs : 1;

		this.propocao=propocao || 1;
		this.nrDivs = nrDivs;
		this.patchLength = 1.0 / nrDivs;

		this.initBuffers();
	};

	initBuffers()
	{

		this.vertices = [];
		this.normals = [];
		this.texCoords = [];

		var yCoord = 0;
		var y=0;

		for (var j = 0; j <= this.nrDivs; j++) 
		{
			var xCoord = 0;
			var x=0;
			for (var i = 0; i <= this.nrDivs; i++) 
			{
				console.log(j+" "+i)
				this.vertices.push(xCoord, yCoord, this.altimetry[j][i]);
				this.texCoords.push(x,y);
				
				this.normals.push(0,0,1);

				xCoord += this.patchLength; 
				x+=(this.patchLength*this.propocao);
			}
			yCoord += this.patchLength;
			y+=(this.patchLength*this.propocao);
		}
		this.indices = [];
		var ind=0;
		for (var j = 0; j < this.nrDivs; j++) 
		{
			for (var i = 0; i < this.nrDivs; i++) 
			{
				this.indices.push(ind, ind+1, ind+this.nrDivs+1);
				this.indices.push(ind+1, ind+this.nrDivs+2, ind+this.nrDivs+1);

				ind++;
			}
			ind++;
		}

		this.primitiveType = this.scene.gl.TRIANGLES;
	

		this.initGLBuffers();
	};

};