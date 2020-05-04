export default class {
	constructor(battery, x, y, width, height, groundRect, nid) {
		this.battery = battery;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.groundRect = groundRect;
		this.nid = nid;
		this.ids = [];
	}

	draw(gx) {
		this.fillWhite(gx);
		this.stroke(gx);
	}

	stroke(gx) {
		gx.beginPath();
		gx.rect(this.x, this.y, this.width, this.height);
		gx.stroke();
	}

	fillBlack(gx) {
		gx.fillStyle = "rgb(0, 0, 0)";
		this.fill(gx);
	}

	fillWhite(gx) {
		gx.fillStyle = "rgb(255, 255, 255)";
		this.fill(gx);
	}

	fill(gx) {
		gx.beginPath();
		gx.rect(this.x, this.y, this.width, this.height);
		gx.fill();
	}

	onTouchStart(touches, gx) {
		for (let t of touches) {
			if (!this.includesTouch(t)) {
				continue;
			}
			this.ids.push(t.identifier);
			this.flagUp(gx);
		}
	}

	onTouchMove(touches, gx) {
		for (let t of touches) {
			if (this.includesTouch(t)) {
				if (this.getIdIndex(t) < 0) {
					this.pushId(t);
				}
			} else {
				if (this.getIdIndex(t) >= 0) {
					this.removeId(t);
				}
			}
		}
		if (this.ids.length > 0) {
			this.flagUp(gx);
		} else {
			this.flagDown(gx);
		}
	}

	getIdIndex(t) {
		return this.ids.indexOf(t.identifier);
	}

	pushId(t) {
		this.ids.push(t.identifier);
	}

	removeId(t) {
		let i = this.getIdIndex(t);
		if (i < 0) {
			return;
		}
		this.ids.splice(i, 1);
	}

	onTouchEnd(touches, gx) {
		for (let t of touches) {
			if (this.getIdIndex(t) >= 0) {
				this.removeId(t);
			}
		}
		if (this.ids.length == 0) {
			this.flagDown(gx);
		}
	}

	includesTouch(t) {
		return this.includes(t.pageX, t.pageY);
	}

	includes(x, y) {
		let cx, cy;
		[cx, cy] = this.toClientPos(x, y);
		return this.x <= cx && cx <= this.x + this.width
				&& this.y <= cy && cy <= this.y + this.height;
	}

	toClientPos(x, y) {
		let pos = [];
		pos[0] = x - this.groundRect.x;
		pos[1] = y - this.groundRect.y;
		return pos;
	}

	drawUp(gx) {
		this.fillBlack(gx);
	}

	drawDown(gx) {
		this.fillWhite(gx);
		this.stroke(gx);
	}

	flagUp(gx) {
		this.drawUp(gx);
		this.battery.noteOn(this.nid);
	}

	flagDown(gx) {
		this.drawDown(gx);
		this.battery.noteOff(this.nid);
	}
}

