export default class {
	constructor(source, canvasName) {
		this.source = source;
		this.canvasName = canvasName;
		this.initCanvas();
	}

	initCanvas() {
		let canvas = this.getCanvas();
		let ctx = canvas.getContext("2d");
		ctx.lineWidth =  1;
		ctx.strokeStyle = "rgb(0, 0, 255)";
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.clearRect(0, 0, canvas.width, canvas.height); 
	}

	draw() {
		let canvas = this.getCanvas();
		let ctx = canvas.getContext("2d");
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		this.drawSound(ctx);
	}

	drawSound(ctx) {
	}

	getCanvas() {
		return document.getElementById(this.canvasName);
	}
}
