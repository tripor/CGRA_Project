/**
 * SemiCircleCutPush
 * @constructor
 */
class SemiCircleCut extends CGFobject
{
	constructor(scene,curve,height,wheelDiam,direction) 
	{
        super(scene);
        this.height=height;
        this.curve=curve;
        this.wheelDiam=wheelDiam;
        this.direction=direction;

		this.initBuffers();
	};

	initBuffers() 
	{

		this.normals = [];
	
			/*this.texCoords = [
			0 , 1 ,
			1 , 1 ,
			0 , 0 ,
			1 , 0
			]*/
		this.texCoords=[];
		this.vertices=[];
		this.indices=[];
		
        this.angle=360/this.curve*degToRad;
        let h=this.height*3;
        
      

		for(let i=0;i<=this.curve/2;i++){
			this.vertices.push(
				(this.wheelDiam)-(Math.cos(i*this.angle)*(this.wheelDiam)),Math.sin(i*this.angle)*this.wheelDiam,0,
				(this.wheelDiam)-(Math.cos(i*this.angle)*(this.wheelDiam)),this.height,0
			);
			this.texCoords.push(
				(this.wheelDiam)-(Math.cos(i*this.angle)*(this.wheelDiam)),Math.sin(i*this.angle)*this.wheelDiam,
				(this.wheelDiam)-(Math.cos(i*this.angle)*(this.wheelDiam)),this.height
			);
			this.normals.push(0,0,1,0,0,1);
		}
        
    if(this.direction==0){
		for(let i=0;i<=this.curve-1;i+=2){
			this.indices.push(
				i,i+2,i+1,
				i+2,i+3,i+1
			);
        }
    }

    else{
        for(let i=0;i<=this.curve-1;i+=2){
			this.indices.push(
				i,i+1,i+2,
				i+2,i+1,i+3
			);
        }
    }


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
};
};
