$(document).ready(function() {
  $("h1").click(function() {
    alert("Here is the original sentence: " + askUser);
  });

  $("img").click(function() {
    alert("This is the encoded sentence: " + bonus(finalResult));
  });
})


var askUser = prompt("Greetings Agent 007. Please enter your intel here:")
//This asks the user

var userSentence = askUser
//This stores the user's answer in a variable

var firstLastCapitalize = function(userSentence) {
	return userSentence.toUpperCase().charAt(0) +
	userSentence.toUpperCase().slice(-1)
};
//This capitalizes the first and last letter in the user's sentence

var newSentence = firstLastCapitalize(userSentence) //+ lastCapitalize(userSentence)
//This stores both of the previous functions in one variable

var reverseSentence = function(newSentence) {
	return userSentence + newSentence.charAt(1) + newSentence.charAt(0);
};
//Not as elegant as I wanted, but it reverses the two characters.

var countSentence = function(userSentence) {
	return (userSentence.length/2)
};
//This takes the original sentence and counts it, gets a numerical value of how many characters including spaces, and then divides by two.

var addSentence = (countSentence(userSentence)).toFixed(0)
//This variable points to the number from the the countSentence function, but now rounds it up. Note: Maybe combine this repetitive code with the function above? Just add .toFixed? But I wanted to keep it separate to be able to spell out what the rounded number was with this variable.

var singleCharacter = function(addSentence) {
	return userSentence.charAt(addSentence);
};
//This function takes that rounded number specified as the numbered character in the string that we want to add later.

var finalResult = userSentence.charAt(addSentence) + reverseSentence(newSentence)
//This variable points to the original sentence calling on itself the .charAt function with the argument that points to another variable, that points to another function to get the rounded number, concatenates this specified character at this number and adds it to another function, which ends up returning the original sentence and adding at the end, the first and last characters of the original sentence but reversed.

var lastSentenceLength = finalResult.length

var lastSentenceMinus1 = finalResult.substring(lastSentenceLength, lastSentenceLength+1)
var lastSentenceMinus2 = finalResult.substring(lastSentenceLength-1, lastSentenceLength+0)
var lastSentenceMinus3 = finalResult.substring(lastSentenceLength-2, lastSentenceLength-1)
var lastSentenceMinus4 = finalResult.substring(lastSentenceLength-3, lastSentenceLength-2)
var lastSentenceMinus5 = finalResult.substring(lastSentenceLength-4, lastSentenceLength-3)
//I need to conquer my enemy recursion here for sure!



var bonus = function(finalResult) {
	//return Array.from(finalResult).reverse()
  return lastSentenceMinus1 + lastSentenceMinus2 + lastSentenceMinus3 + lastSentenceMinus4 + lastSentenceMinus5
}
//Cheated with this, as stackoverflow mentioned Array.from('string')


//alert("Decoded message of the first and last characters of that sentence is = " + newSentence)
//This tells us what the new string is

//alert("The original sentence with the decoded message in reverse added on at the end = " + reverseSentence(newSentence))
//This displays the reversed characters.

//alert("Ok here we go. The original sentence is " + countSentence(userSentence) + " characters long and when divided by 2 and rounded is " + addSentence + " and the character at this number is none other than dun dun dun..." + singleCharacter(addSentence) + " and the final result that adds this character to the beginning of the original sentence with the first and last characters of the original sentence reversed and capitalized and added unto the end of this sentence...phew...is " + finalResult + "." )

//alert("Sorry one last bonus round. Lastly, this new and improved sentence but now in reverse form is " + bonus(finalResult) + "." )
