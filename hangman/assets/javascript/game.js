//Array of word choices
var words = ["JASON MICHAEL", "MICHAEL", "TJ SAENZ"];
//Array of letters in the alphabet
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Define variables needed, e.g. wins, losses, letters guessed, guesses remaining
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var wordToGuess = words[Math.floor(Math.random() * words.length)];
var userGuess = null;
var letterObject = [];
var letterArray = [];
var html = "<p><h3>";

/*Create function to break apart the word 
chosen into an array of 
the letters it contains.
Set the spaces to "true" and letters to "false"
Later, a user's guess will change the letters' values to "true"
and display the letter*/

function breakWord() {
    for (i = 0; i < wordToGuess.length; i += 1) {
        var letterObject = {}
        letterObject.letter = wordToGuess.charAt(i);
        letterArray.push(letterObject);
        if (wordToGuess.charAt(i) != " ") { letterObject.guessedYet = false }
        else { letterObject.guessedYet = true };
        console.log(letterObject)
    }
}
breakWord();

//function that turns the word into spaces
function spaceLine() {
    for (var i = 0; i < wordToGuess.length; i += 1) {
        if (wordToGuess.charAt(i) === " ") {
            htmlGame += "&nbsp;&nbsp;";
        }
        else {
            htmlGame += "_&nbsp;";
        };
    };
}
/*Create function to begin game
function should include a random word,
the function that creates the new array,
sets all the variables above to their beginning values,
the function that turns the word into spaces
Be sure to put the breakWord function low in the function so 
it doesn't destroy your world.
*/
function reset() {
    wordToGuess = words[Math.floor(Math.random() * words.length)];
    lettersGuessed = [];
    letterObject = [];
    letterArray = [];
    breakWord();
    userGuess = null;
}
//function to check the user's guess

//function to update progress

//create function to check if the user won

//create function to check if the user lost

//run functions

