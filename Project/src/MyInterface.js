class MyInterface extends CGFinterface {


	/**
	 * MyInterface
	 * @constructor
	 */
 	constructor () {
 		super();
     }
     
	
	/**
	 * init
	 * @param {CGFapplication} application
	 */
	init(application) {
		super.init(application);

		this.gui = new dat.GUI();
		this.cona=10;

		var group=this.gui.addFolder("Lights");
		group.open();

		group.add(this.scene, 'Light_1');
		group.add(this.scene, 'Light_2');
		
		var group2= this.gui.addFolder("Useless Options");
		group2.add(this.scene, 'Inercia_Cancelation');
		group2.add(this.scene, 'Atrito');
		group2.add(this.scene, 'atrito_valor',0.0,2.0);
		group2.add(this.scene, 'Turning_hack');
        
        this.gui.add(this.scene, "Eixos");
		this.gui.add(this.scene, 'velocidade', -5.0, 10.0).listen();
		this.gui.add(this.scene, 'Estabilizacao', 0, 10);
		this.controler= this.gui.add(this.scene,'Appearance',this.scene.VehicleAppearanceList);
        this.initKeys();
		return true;
	};

	initKeys() {
        this.scene.gui=this;
        this.processKeyboard=function(){};
        this.activeKeys={};
    }
    processKeyDown(event) {
        this.activeKeys[event.code]=true;
    };
    processKeyUp(event) {
        this.activeKeys[event.code]=false;
    };
    isKeyPressed(keyCode) {
        return this.activeKeys[keyCode] || false;
    }
        

};