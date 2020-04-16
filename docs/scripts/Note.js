export default class {
	constructor(context, nid, frequency, gain) {
		this.context = context;
		this.nid = nid;
		this.frequency = frequency;
		this.gain = gain;
		this.oscillator = null;
	}

	makeOscillator() {
		let osc = this.context.createOscillator();
		osc.type = "square";
		osc.frequency.value = this.frequency;
		return osc;
	}

	noteOn() {
		console.log(this.nid + " on");
		if (this.oscillator) {
			return;
		}
		this.oscillator = this.makeOscillator();
		this.gain.gain.value = 0.5;
		this.oscillator.connect(this.gain);
		this.oscillator.start(0);
	}

	noteOff() {
		if (!this.oscillator) {
			return;
		}
		this.oscillator.stop();
		this.oscillator = null;
	}
}
