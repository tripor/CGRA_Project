/**
 * SemiCylinderPush
 * @constructor
 */
class SemiCylinder extends CGFobject
{
	constructor(scene,curve,wheelDiam) 
	{
        super(scene);
        
        this.curve=curve;
        this.WheelRadius=wheelDiam/2;
       

		this.initBuffers();
	};

	initBuffers() 
	{

		this.normals = [];
		this.texCoords=[];
		this.vertices=[];
		this.indices=[];
		
        this.angle=360/this.curve*degToRad;
             

		for(let i=0;i<=this.curve/2;i++){
			this.vertices.push(
				(this.WheelRadius)-(Math.cos(i*this.angle)*(this.WheelRadius)),Math.sin(i*this.angle)*this.WheelRadius,0,
				(this.WheelRadius)-(Math.cos(i*this.angle)*(this.WheelRadius)),Math.sin(i*this.angle)*this.WheelRadius,2
			);
			this.texCoords.push(
				(this.WheelRadius)-(Math.cos(i*this.angle)*(this.WheelRadius)),Math.sin(i*this.angle)*this.WheelRadius,
				(this.WheelRadius)-(Math.cos(i*this.angle)*(this.WheelRadius)),2
			);
			
				this.normals.push(0,1,0,0,1,0);
			
		}
        
    
		for(let i=0;i<=this.curve-1;i+=2){
			this.indices.push(
				i,i+2,i+1,
				i+2,i+3,i+1
			);
        }
    

    


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
};
};
