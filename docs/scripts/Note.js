export default class {
	constructor(context, note, frequency, gain) {
		this.context = context;
		this.note = note;
		this.frequency = frequency;
		this.gain = gain;
	}

	makeOscillator() {
		let osc = this.context.createOscillator();
		osc.type = "square";
		osc.frequency.value = this.frequency;
		return osc;
	}

	noteOn() {
		console.log(this.note + "on");
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
