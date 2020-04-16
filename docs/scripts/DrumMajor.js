export default class {
	constructor(battery, brass) {
		this.battery = battery;
		this.brass = brass;
	}

	draw() {
		this.battery.draw();
	}

	noteOn(nid) {
		this.brass.noteOn(nid);
	}

	noteOff(nid) {
		this.brass.noteOff(nid);
	}
}
