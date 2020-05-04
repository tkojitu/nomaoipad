import Battery from "./Battery.js";
import Brass from "./Brass.js";
import Config from "./Config.js";
import Container from "./Container.js";
import DrumMajor from "./DrumMajor.js";
import Formation from "./Formation.js";

window.addEventListener(
	"load",
	function() {
		let c = new Container();
		c.define(
			"config",
			function(c) {
				return new Config();
			});
		c.define(
			"ground",
			function(c) {
				return document.getElementById("ground");
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
				let dmajor = new DrumMajor(c.geti("config"), battery, c.geti("brass"));
				battery.dmajor = dmajor;
				return dmajor;
			});
		c.geti("dmajor").init();
	});
