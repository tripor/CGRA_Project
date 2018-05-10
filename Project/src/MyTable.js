/**
 * MyTable
 * @constructor
 */
 class MyTable extends CGFobject
 {
	constructor(scene) 
	{
		super(scene);

		this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
		this.materialMesa = new CGFappearance(this.scene);
		this.materialMesa.loadTexture("../resources/images/table.png");
		this.materialMesa.setAmbient(0,0,0,1);
		this.materialMesa.setDiffuse(1,1,1,1);
		this.materialMesa.setSpecular(1,1,1,1);
		this.materialMesa.setShininess(100);

		this.materialPernas = new CGFappearance(this.scene);
		this.materialPernas.setAmbient(0,0,0,1);
		this.materialPernas.setDiffuse(0.3,0.3,0.5,1);
		this.materialPernas.setSpecular(0.8,0.8,0.8,1);
		this.materialPernas.setShininess(50);
	};

	display() 
	{
		// legs
		this.materialPernas.apply();
		this.scene.pushMatrix();
		this.scene.translate(2, 3.5 / 2, 1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2, 3.5 / 2, -1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2, 3.5 / 2, 1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2, 3.5 / 2, -1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		// table top
		this.materialMesa.apply();
		this.scene.pushMatrix();
		this.scene.translate(0, 3.5, 0);
		this.scene.scale(5, 0.3, 3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();
	};
 };

