class Texture extends CGFobject
{
    constructor(scene,folder)
    {
        super(scene);

        this.topTexture = new CGFappearance(this.scene);
        this.topTexture.loadTexture("../resources/"+folder+"/top.png");
		this.topTexture.setAmbient(0.5,0.5,0.5,1);
		this.topTexture.setDiffuse(0.2,0.2,0.2,1);
		this.topTexture.setSpecular(0.1,0.1,0.1,1);	
        this.topTexture.setShininess(100);

        this.front = new CGFappearance(this.scene);
        this.front.loadTexture("../resources/"+folder+"/topFront.png");
		this.front.setAmbient(0.5,0.5,0.5,1);
		this.front.setDiffuse(0.2,0.2,0.2,1);
		this.front.setSpecular(0.1,0.1,0.1,1);	
        this.front.setShininess(100);

        this.sides = new CGFappearance(this.scene);
        this.sides.loadTexture("../resources/"+folder+"/topSides.png");
		this.sides.setAmbient(0.5,0.5,0.5,1);
		this.sides.setDiffuse(0.2,0.2,0.2,1);
		this.sides.setSpecular(0.1,0.1,0.1,1);	
        this.sides.setShininess(100);

        this.carFront = new CGFappearance(this.scene);
        this.carFront.loadTexture("../resources/"+folder+"/carFront.png");
		this.carFront.setAmbient(0.5,0.5,0.5,1);
		this.carFront.setDiffuse(0.2,0.2,0.2,1);
		this.carFront.setSpecular(0.1,0.1,0.1,1);	
        this.carFront.setShininess(100);

        this.black = new CGFappearance(this.scene);
        this.black.loadTexture("../resources/"+folder+"/black.png");
		this.black.setAmbient(0.5,0.5,0.5,1);
		this.black.setDiffuse(0.2,0.2,0.2,1);
		this.black.setSpecular(0.1,0.1,0.1,1);	
        this.black.setShininess(100);
		
		this.doors = new CGFappearance(this.scene);
        this.doors.loadTexture("../resources/"+folder+"/doors.png");
		this.doors.setAmbient(0.5,0.5,0.5,1);
		this.doors.setDiffuse(0.2,0.2,0.2,1);
		this.doors.setSpecular(0.1,0.1,0.1,1);	
        this.doors.setShininess(100);

        this.lights = new CGFappearance(this.scene);
        this.lights.loadTexture("../resources/"+folder+"/light.png");
		this.lights.setAmbient(0.5,0.5,0.5,1);
		this.lights.setDiffuse(0.2,0.2,0.2,1);
		this.lights.setSpecular(0.1,0.1,0.1,1);	
        this.lights.setShininess(100);

        this.connection = new CGFappearance(this.scene);
        this.connection.loadTexture("../resources/"+folder+"/connection.png");
		this.connection.setAmbient(0.5,0.5,0.5,1);
		this.connection.setDiffuse(0.2,0.2,0.2,1);
		this.connection.setSpecular(0.1,0.1,0.1,1);	
        this.connection.setShininess(100);

        this.gray = new CGFappearance(this.scene);
        this.gray.loadTexture("../resources/"+folder+"/top.png");
		this.gray.setAmbient(0.5,0.5,0.5,1);
		this.gray.setDiffuse(0.2,0.2,0.2,1);
		this.gray.setSpecular(0.1,0.1,0.1,1);	
        this.gray.setShininess(100);

        this.wheel_rim_image = new CGFappearance(this.scene);
        this.wheel_rim_image.loadTexture("../resources/"+folder+"/wheel_rim.png");
		this.wheel_rim_image.setAmbient(0.5,0.5,0.5,1);
		this.wheel_rim_image.setDiffuse(0.2,0.2,0.2,1);
		this.wheel_rim_image.setSpecular(0.1,0.1,0.1,1);	
        this.wheel_rim_image.setShininess(100);
        
        this.tire_image = new CGFappearance(this.scene);
        this.tire_image.loadTexture("../resources/"+folder+"/tire.png");
		this.tire_image.setAmbient(0.25,0.25,0.25,1);
		this.tire_image.setDiffuse(0.1,0.1,0.1,1);
		this.tire_image.setSpecular(0,0,0,1);	
        this.tire_image.setShininess(100);

        this.darkGray = new CGFappearance(this.scene);
        this.darkGray.loadTexture("../resources/"+folder+"/darkGray.png");
		this.darkGray.setAmbient(0.5,0.5,0.5,1);
		this.darkGray.setDiffuse(0.2,0.2,0.2,1);
		this.darkGray.setSpecular(0.1,0.1,0.1,1);	
        this.darkGray.setShininess(100);

        this.snake = new CGFappearance(this.scene);
        this.snake.loadTexture("../resources/"+folder+"/carTopExtra.png");
		this.snake.setAmbient(0.5,0.5,0.5,1);
		this.snake.setDiffuse(0.2,0.2,0.2,1);
		this.snake.setSpecular(0.1,0.1,0.1,1);	
        this.snake.setShininess(100);
        
    }
}