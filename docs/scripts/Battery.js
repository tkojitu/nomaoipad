import ColorGuard from "./ColorGuard.js";

export default class {
	constructor(ground, formation) {
		this.ground = ground;
		this.cguards = this.createCguards(formation);
		this.addEventListeners();
	}

	createCguards(formation) {
		let results = [];
		let size = this.calcCguardSize(formation);
		let y = 0;
		for (let row = 0; row < formation.notes.length; ++row) {
			let x = 0;
			for (let col = 0; col < formation.notes[row].length; ++col) {
				results.push(new ColorGuard(this, x, y, size, size, formation.notes[row][col]));
				x += size
			}
			y += size;
		}
		return results;
	}

	calcCguardSize(formation) {
		let height = Math.floor(this.ground.height / formation.notes.length);
		let width = Math.floor(this.ground.width / formation.notes[0].length);
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

	noteOn(note) {}

	noteOff(note) {}
}
