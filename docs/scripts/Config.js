export default class {
	isMobile() {
		let e = document.getElementById("padtype");
		return e.value == "mobile";
	}

	isDesktop() {
		let e = document.getElementById("padtype");
		return e.value == "desktop";
	}

	getOscilloName() {
		return "oscillo";
	}

	getSpectrumName() {
		return "spectrum";
	}
}
