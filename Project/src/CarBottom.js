class CarBottom extends CGFobject
{
	 //back middle and front are the length of the car before the wheels after the wheels and in between
	constructor(scene)   
	{
		super(scene);
                
        this.bottom = new Plane(scene,10,1);

	};


	display() 
	{
        this.scene.pushMatrix();
            this.bottom.display();
		this.scene.popMatrix();

		

	};
};