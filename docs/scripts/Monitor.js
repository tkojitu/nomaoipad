import ScopeOscillo from "./ScopeOscillo.js";
import ScopeSpectrum from "./ScopeSpectrum.js";

export default class {
	constructor(source) {
		this.oscillo = new ScopeOscillo(source, "oscillo");
		this.spectrum = new ScopeSpectrum(source, "spectrum");
	}

	draw() {
		let me = this;
		requestAnimationFrame(function() {me.draw();});
		this.oscillo.draw();
		this.spectrum.draw();
	}
}
