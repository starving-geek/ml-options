/*
 * Tyler Deans
 * February 5, 2016
 * This mostly works excpet that if the value of x is a string the double quotes 
 */



function OptionModel(_simModel) {
	// save a link to the model
	this.simModel = _simModel;
}

function getVarValue() {
	var randomValue = getRandomInt(1, 4);
	if (randomValue == 1) {
		return "5";
	} else if (randomValue == 2) {
		return "\"hello\"";
	} else {
		return "true"
	}
}

function getOptionValue() {
	var randomValue = getRandomInt(1, 3);
	if (randomValue == 1) {
		return "SOME";
	} else {
		return "NONE";
	}
}

OptionModel.prototype.randomOptionExpression = function() {
	
	var randQuestion = getRandomInt(1, 3);

    if (randQuestion === 1) { // first question type
        var optionValue = getOptionValue();

        if (optionValue === "SOME") {
            var xValue = getVarValue();
        } else {
            xValue = "NONE";
        }

        // Separate questions based on a value (figure it out)
        // first question x is either SOME or NONE
        if (optionValue == "SOME") {
            this.optionString = "<pre>val x = SOME " + xValue + "\n";
            this.optionString += "val ans = isSOME x";
            this.optionString += "</pre></br>";
            return "true";

        } else { // x is NONE
            this.optionString = "<pre>val x = " + xValue + "\n";
            this.optionString += "val ans = isSOME x";
            this.optionString += "</pre></br>";
            return "false";
        }
    } else { // second question type
    	var xValue = getVarValue();
    	// second question x is SOME with three different value options (string, int, or bool)
		this.optionString = "<pre>val x = SOME " + xValue + "\n";
		this.optionString += "val ans = valOf x";
		this.optionString += "</pre></br>";
		return xValue;
    }
}

OptionModel.prototype.getOptionExpression = function() {
	return this.optionString;
}



