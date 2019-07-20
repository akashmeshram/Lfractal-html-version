function setValues(f, ax, r1, r2, sx, sy, iter, l, ang) {
	factor.value = f;
	axiom.value = ax;
	rule1.value = r1;
	rule2.value = r2;
	startx.value = sx;
	starty.value = sy;
	iterations.value = iter;
	len.value = l;
	angle.value = ang;	
}

function setPattern(event) {
	let p = patterns[event.target.innerText];
	setValues(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]);	
	setup();
}

let patterns = {
	"Peano Curve" : [0.3, "X",
				"X=XFYFX+F+YFXFY-F-XFYFX",
				"Y=YFXFY-F-XFYFX+F+YFXFY",
				130, 700, 1, 950, 90],
	"Hilbert's Curve" : [0.5, "X",
				"X=+YF-XFX-FY+",
				"Y=-XF+YFY+FX-",
				140, 680, 1, 680, 90],
	"Quadratic Gosper" : [0.2, "-YF",
				"X=XFX-YF-YF+FX+FX-YF-YFFX+YF+FXFXYF-FX+YF+FXFX+YF-FXYF-YF-FX+FX+YFYF-",
				"Y=+FXFX-YF-YF+FX+FXYF+FX-YFYF-FX-YF+FXYFYF-FX-YFFX+FX+YF-YF-FX+FX+YFY",
				770, 660, 1, 600, 90],
	"Quadratic Koch Island" : [0.25, "F+F+F+F",
				"F=F+F-F-FF+F+F-F",
				"X=X",
				240, 580, 1, 430, 90],
	"Pentaplexity" : [0.4, "F++F++F++F++F",
				"F=F++F++F+++++F-F++F",
				"X=X",
				180, 550, 1, 350, 36],
	"Dragon Curve" : [0.7, "FX",
				"X=X+YF+",
				"Y=-FX-Y",
				300, 400, 1, 500, 90],
	"Square Sierpinski" : [0.5, "F+XF+F+XF",
				"X=XF-F+F-XF+F+XF-F+F-X",
				"Y=Y",
				110, 370, 1, 180, 90],
	"Terdragon" : [0.6, "F",
				"F=F+F-F",
				"Y=Y",
				600, 120, 1, 450, 120],
	"Hexagonal Gosper" : [0.4, "XF",
				"X=X+YF++YF-FX--FXFX-YF+",
				"Y=-FX+YFYF++YF+FX--FX-Y",
				150, 270, 1, 460, 60],
	"Weed" : [0.5, "F",
				"F=F[-F]F[+F]F",
				"X=X",
				400, 800, 1, 150, 30],
	"Stick" : [0.5, "X",
				"X=F+[[X]-X]-F[-FX]+X",
				"F=FF",
				500, 800, 1, 300, 25],
	"Tree" : [0.5, "F",
				"F=FF[++F[-F]+F][F[+F]-F][--F[+F]-F]",
				"X=X",
				450, 700, 1, 250, 25],
	"Bush" : [0.5, "F",
				"F=FF[--F+FF+F][+F-F-F]",
				"X=X",
				580, 720, 1, 180, 25]
};


for(let key in patterns) {
	let $cell = $("<button>", { class: "lItem", onclick: "setPattern(event);" });
	$cell.html(key);
	$('#rightSidebar').append($cell);
};