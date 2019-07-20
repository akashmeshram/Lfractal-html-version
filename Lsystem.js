class lsystem {
	constructor() {
		this.angle = 0;
		this.axiom = "F";
		this.sentence = this.axiom;
		this.len = 400;
		this.factor = 2;
		this.weight = [];
		this.branchValue = 1;
		this.check = false;
		this.alphabet= ["F", "f", "X", "x", "Y", "y", "[", "]", "+", "-"];
		this.rules = [];
		this.rules[0] = {
		  	letter: "",
			becomes: "",
			alternate: ""
		};
		this.rules[1] = {
			letter: "",
			becomes: "",
			alternate: ""
		};
	}

	generate() {
		this.len *= this.factor; 
		this.branchValue += 1;
		let nextSentence = "";
		for (let i = 0; i < this.sentence.length; i++) {
			let current = this.sentence.charAt(i);
			if(current == current.toLowerCase()) {
				current = current.toUpperCase();
			}
			let found = false;
		
			if (current == this.rules[0].letter) {
				found = true;
				if (this.rules[0].alternate != "") {
					if (Math.random() > 0.5) {
						nextSentence += this.rules[0].alternate;
					} else {
						nextSentence += this.rules[0].becomes;
					}
				} else {
					nextSentence += this.rules[0].becomes;
				}
			} else if (current == this.rules[1].letter) {
				found = true;
				if (this.rules[1].alternate != "") {
					if (Math.random() > 0.5) {
						nextSentence += this.rules[1].alternate;
					} else {
						nextSentence += this.rules[1].becomes;
					}
				} else {
					nextSentence += this.rules[1].becomes;
				}
			}
			
			if (!found) {
				nextSentence += current;
			}
		}
		this.sentence = nextSentence;
	}

	draw() {
		resetMatrix();
		translate(startx.value, starty.value);

		this.angle = angle.value;
		this.factor = factor.value;
		this.axiom = axiom.value;
		this.len   = len.value;
		this.weight = thickness.value;

		// For first rule
		let turtles = rule1.value.split("=");
		this.rules[0].letter = turtles[0];
		let rule = turtles[1].split(",");
		this.rules[0].becomes = rule[0];
		if (rule[1])
			this.rules[0].alternate = rule[1];
		else
			this.rules[0].alternate = "";

		// For second rule
		turtles = rule2.value.split("=");
		this.rules[1].letter = turtles[0];
		rule = turtles[1].split(",");
		this.rules[1].becomes = rule[0];
		if (rule[1])
			this.rules[1].alternate = rule[1];
		else
			this.rules[1].alternate = "";

		// Start the L System
		this.sentence = this.axiom;
		this.generate();
		for (let iter = 1; iter < iterations.value; ++iter) {
			this.generate();
		}

		let fromColor = color("#ED5B5B");
		let toColor = color("#5E04A7");
		// Drawing the L System
		for (let i = 0; i < this.sentence.length; i++) {
	    	let current = this.sentence.charAt(i);
		    if (current == "F" || current == "f") {
				strokeWeight(thickness.value);
				stroke(lerpColor(fromColor, toColor, i / this.sentence.length));
		        line(0, 0, 0, -this.len);
				translate(0, -this.len);
				for (let time = 0; time < 1000; ++time){
				};
		    } 
		    else if (current == "+") {
		      	rotate(this.angle);
		    } 
		    else if (current == "-") {
		        rotate(-this.angle);
		    } 
		    else if (current == "[") {
		    	this.branchValue -= 1;	
		        push();
		    } 
		    else if (current == "]") {
		    	this.branchValue += 1;
		        pop();
	    	}
		}
	}

}