export default class {
	constructor(config, battery, brass, monitor) {
		this.config = config;
		this.battery = battery;
		this.brass = brass;
		this.monitor = monitor;
	}

	init() {
		this.initGround();
		this.battery.init();
		this.draw();
	}

	initGround(config) {
		let ground = document.getElementById("ground");
		ground.width = this.getGroundWidth();
		ground.height = this.getGroundHeight();
	}

	getGroundWidth() {
		return window.innerWidth - 30;
	}

	getGroundHeight() {
		return window.innerHeight - 30 - this.getMonitorHeight();
	}

	getMonitorHeight() {
		let monitor = document.getElementById("monitor");
		return monitor ? monitor.offsetHeight : 0;
	}

	draw() {
		this.battery.draw();
		this.monitor?.draw();
	}

	noteOn(nid) {
		this.brass.noteOn(nid);
	}

	noteOff(nid) {
		this.brass.noteOff(nid);
	}
}
