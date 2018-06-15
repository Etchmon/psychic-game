var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;;
var guessesLeft = 9;
var guessed = [];

var computerGuess = alph[Math.floor(Math.random() * alph.length)];


document.onkeyup = function(event) {
    
    var userGuess = event.key;
    console.log(userGuess);
    console.log(computerGuess);

    guessed.push(userGuess);

    if(userGuess === computerGuess){
        wins++;
        guessesLeft = 10;
        guessed = [];
        computerGuess = alph[Math.floor(Math.random() * alph.length)];
        alert("WELL DONE M8! IT WAS " + computerGuess);
    }

    if(userGuess != computerGuess){
        guessesLeft--;

    }

    if(guessesLeft === 0){
        alert("GAME OVER");
        losses++;
        guessed = [];
        guessesLeft = 9;

    }

    var html = 
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses:  " + losses + "</p>" +
    "<p>Guesses Left:  " + guessesLeft + "</p>" +
    "<p>Your Guesses so far: " + guessed + "</p>";

    document.querySelector("#game").innerHTML = html;    





}
    
