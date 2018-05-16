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

		var group=this.gui.addFolder("Lights");
		group.open();

		group.add(this.scene, 'Light_1');
        group.add(this.scene, 'Light_2');
        
        this.gui.add(this.scene, "Eixos");
		this.gui.add(this.scene, 'velocidade', -5, 10).listen();
		this.gui.add(this.scene, 'Estabilizacao', 0, 10);
		this.gui.add(this.scene,'Appearance',this.scene.Appearance);
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