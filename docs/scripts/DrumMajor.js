export default class {
	constructor(battery, brass) {
		this.battery = battery;
		this.brass = brass;
	}

	draw() {
		this.battery.draw();
	}

	noteOn(note) {
		this.brass.noteOn(note);
	}

	noteOff(note) {
		this.brass.noteOff(note);
	}
}
