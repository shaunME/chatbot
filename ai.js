 function robotResponse(userInput) {

 	var response = "I'm sorry but I could not determine your salary. Please try again.";
 	var helpWords = ["help", "assist", "aid"];

 	for (var i=0; i < helpWords.length; i++) {
 		var helpWord = helpWords[i];
 		if (userInput.toLowerCase().indexOf(helpWord) != -1) {
 			return "It seems like you need assistance. Please visit http://www.test.com/help for further help";
 			
 		}
 	}

 	var age = userInput.match(/[0-9]{1,3}/g);
 	if (null == age) {
 		return "I'm sorry. I could not determine your age";
 	} else {
 		if (parseInt(age[0]) > 125) {
 			return "Your age is: " + age[0] + ". Are you sure?";
 		}
 		else {
 			return "Your age is: " + age[0];
 		}
 		
 	}

 }