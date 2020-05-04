import ScopeOscillo from "./ScopeOscillo.js";
import ScopeSpectrum from "./ScopeSpectrum.js";

export default class {
	constructor(config, source) {
		this.oscillo = new ScopeOscillo(source, config.getNameOscillo());
		this.spectrum = new ScopeSpectrum(source, config.getNameSpectrum());
	}

	draw() {
		let me = this;
		requestAnimationFrame(function() {me.draw();});
		this.oscillo.draw();
		this.spectrum.draw();
	}
}
