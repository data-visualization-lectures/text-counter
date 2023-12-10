function processText() {

		var paragraphArray = [];
		var countingArray = [];
		var countingDone = "";
		var text = "";

		document.getElementById("userOutput").value = "";
		text = document.getElementById("userInput").value;

		paragraphArray = text.split(/\n/);

		for (var i=0; i<paragraphArray.length; i++) {
			console.log(i+1 + "," + (paragraphArray[i].length - 1) );
			// countingArray[i] = i+1 + "," + paragraphArray[i].length;
			countingArray[i] = i+1 + "\t" + (paragraphArray[i].length-1);
		}

		countingDone = countingArray.join("\n");
		document.getElementById("userOutput").value = countingDone;

};