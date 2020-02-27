import Battery from "./Battery.js";
import Brass from "./Brass.js";
import Container from "./Container.js";
import DrumMajor from "./DrumMajor.js";
import Formation from "./Formation.js";

window.addEventListener(
	"load",
	function() {
		let c = new Container();
		c.define(
			"ground",
			function(c) {
				let canvas = document.getElementById("ground");
				canvas.width = window.innerWidth - 20;
				canvas.height = window.innerHeight - 20;
				return canvas;
			});
		c.define(
			"formation",
			function(c) {
				return new Formation();
			});
		c.define(
			"battery",
			function(c) {
				return new Battery(c.geti("ground"), c.geti("formation"));
			});
		c.define(
			"brass",
			function(c) {
				return new Brass();
			});
		c.define(
			"dmajor",
			function(c) {
				let battery = c.geti("battery");
				let dmajor = new DrumMajor(battery, c.geti("brass"));
				battery.dmajor = dmajor;
				return dmajor;
			});
		c.geti("dmajor").draw();
	});
