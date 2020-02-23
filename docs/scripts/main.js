import DrumMajor from "./DrumMajor.js";
import Container from "./Container.js";
import Battery from "./Battery.js";
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
			"dmajor",
			function(c) {
				return new DrumMajor(c.geti("battery"));
			});
		c.geti("dmajor").draw();
	});
