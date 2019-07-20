let factor, axiom, rule1, rule2;
let startx, starty;
let iterations, len, angle, thickness;
let myCanvas;

function preload() {
	myCanvas = createCanvas(windowWidth*0.5, windowHeight);
	myCanvas.parent("mainDiv");
	angleMode(DEGREES);
	factor = document.getElementById("factor");
	axiom = document.getElementById("axiom");
	rule1 = document.getElementById("rule1");
	rule2 = document.getElementById("rule2");
	startx = document.getElementById("startx");
	starty = document.getElementById("starty");
	iterations = document.getElementById("iterations");
	len = document.getElementById("len");
	angle = document.getElementById("angle");
	thickness = document.getElementById("thickness");
}

function setup() {
	myCanvas = createCanvas(windowWidth * 0.6, windowHeight);
	myCanvas.parent("mainDiv");
	background(255);
	fill("#000000");
	rect(0, 0, width, height);	
	keepOld = false;
	let lObject = new lsystem();
	lObject.draw();
	
}