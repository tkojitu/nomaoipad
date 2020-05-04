import Scope from "./Scope.js";

export default class extends Scope {
	constructor(source, canvasName) {
		super(source, canvasName);
	}

	drawSound(ctx) {
		this.drawWave(ctx);
		this.drawXaxis(ctx);
	}

	drawWave(ctx) {
		let data = this.source.getByteTimeDomainData();
		ctx.strokeStyle = "rgb(0, 0, 255)";
		ctx.beginPath();
		ctx.moveTo(0, data[0]);
		for (var i = 0; i < data.length; i++) {
			ctx.lineTo(i, data[i]);
		}
	}

	drawXaxis(ctx) {
		ctx.stroke();
		ctx.strokeStyle = "rgb(255, 0, 0)";
		ctx.beginPath();
		ctx.moveTo(0, 127);
		ctx.lineTo(256, 127);
		ctx.stroke();
	}
}
