export default class {
	constructor(battery, bmaster) {
		this.battery = battery;
		this.bmaster = bmaster;
	}

	draw() {
		this.battery.draw();
	}

	noteOn(note) {
		this.bmaster.noteOn(note);
	}

	noteOff(note) {
		this.bmaster.noteOff(note);
	}
}
