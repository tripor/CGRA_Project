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

		//this.gui.add(this.scene, 'speed', -5, 5);

		return true;
	};

	/**
	 * processKeyboard
	 * @param event {Event}
	 */
	processKeyboard(event) {
		// call CGFinterface default code (omit if you want to override)
		super.processKeyboard(event);

		// Check key codes e.g. here: http://www.asciitable.com/
		// or use String.fromCharCode(event.keyCode) to compare chars

		// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
		switch (event.keyCode)
		{
			case (65):	// only works for capital 'A', as it is
				console.log("Key 'A' pressed");
		};
    };

};