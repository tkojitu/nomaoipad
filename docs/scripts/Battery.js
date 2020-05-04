import ColorGuard from "./ColorGuard.js";

export default class {
	constructor(ground, formation) {
		this.dmajor = null;
		this.cguards = null;
		this.ground = ground;
		this.formation = formation;
	}

	init() {
		this.cguards = this.createCguards(this.formation);
		this.addEventListeners();
	}

	createCguards(formation) {
		let results = [];
		let size = this.calcCguardSize(formation);
		let rect = this.getGroundRect();
		let y = 0;
		for (let row = 0; row < formation.nids.length; ++row) {
			let x = 0;
			for (let col = 0; col < formation.nids[row].length; ++col) {
				results.push(new ColorGuard(this, x, y, size, size, rect, formation.nids[row][col]));
				x += size
			}
			y += size;
		}
		return results;
	}

	getGroundRect() {
		return this.ground.getBoundingClientRect();
	}

	calcCguardSize(formation) {
		let height = Math.floor(this.ground.height / formation.nids.length);
		let width = Math.floor(this.ground.width / formation.nids[0].length);
		return (height < width) ? height : width;
	}

	draw() {
		for (let cguard of this.cguards) {
			cguard.draw(this.getgx());
		}
	}

	getgx() {
		return this.ground.getContext("2d");
	}

	addEventListeners() {
		let that = this;
		window.addEventListener(
			"touchstart",
			function(e) {
				that.onTouchStart(e);
			},
			false);
		window.addEventListener(
			"touchmove",
			function(e) {
				that.onTouchMove(e);
			},
			false);
		window.addEventListener(
			"touchend",
			function(e) {
				that.onTouchEnd(e);
			},
			false);
	}

	onTouchStart(e) {
		for (let cguard of this.cguards) {
			cguard.onTouchStart(e.changedTouches, this.getgx());
		}
	}

	onTouchMove(e) {
		for (let cguard of this.cguards) {
			cguard.onTouchMove(e.changedTouches, this.getgx());
		}
	}

	onTouchEnd(e) {
		for (let cguard of this.cguards) {
			cguard.onTouchEnd(e.changedTouches, this.getgx());
		}
	}

	noteOn(nid) {
		this.dmajor.noteOn(nid);
	}

	noteOff(nid) {
		this.dmajor.noteOff(nid);
	}
}

