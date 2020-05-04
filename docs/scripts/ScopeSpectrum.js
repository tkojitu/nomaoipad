import Scope from "./Scope.js";

export default class extends Scope {
	constructor(source, canvasName) {
		super(source, canvasName);
	}

	drawSound(ctx) {
		let data = this.source.getByteFrequencyData();
		ctx.beginPath();
		ctx.moveTo(0,  255 - data[0]);
		for (var i = 0; i < data.length; i++) {
			ctx.lineTo(i * 4, 255 - data[i]); 
		}
		ctx.stroke();
	}
}
