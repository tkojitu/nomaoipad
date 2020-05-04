export default class {
	constructor(config, battery, brass) {
		this.config = config;
		this.battery = battery;
		this.brass = brass;
	}

	init() {
		this.initGround();
		this.draw();
	}

	initGround(config) {
		let ground = document.getElementById("ground");
		if (this.config.isMobile()) {
			ground.width = window.innerWidth - 20;
			ground.height = window.innerHeight - 20;
		} else {
			let monitor = document.getElementById("monitor");
			ground.y = monitor.height + 10;
		}
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
