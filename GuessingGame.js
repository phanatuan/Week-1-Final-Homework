function GuessingGame() 
{
  //Generate Random Number from 0 to 100 
  var randomNumber = Math.floor(Math.random() * 100);  
  var guessCollection = [];
  //Number of Guess is hardc coded, but totally can be an input
  var maxNumberOfGuess = 4;
  //max number of guess = 10 
  for (var i=0; i< maxNumberOfGuess; i++) 
  {
    do 
    {
      var guess = parseInt(prompt('What number do you guess? Please enter a number of I will keep asking until you die'));
    }
      while (isNaN(guess));   
      
      guessCollection.unshift(guess);
      switch (true) 
      { 
        case (guess == randomNumber):
          alert("Nice, Correct Guess");
          i=maxNumberOfGuess; //like this I cannot input at which number of guess did you get it correctly. 
          break;
        case (guess > randomNumber):
          alert(`Wrong, Your Guess of ${guess} is larger than the mystery number. You have ${maxNumberOfGuess-i-1} chance left. Previous Guess were ${guessCollection.join(", ")}`);
          break;
        
        case (guess < randomNumber):
          alert(`Wrong, Your Guess of ${guess} is smaller than the mystery number. You have ${maxNumberOfGuess-i-1} chance left. Previous Guess were ${guessCollection.join(", ")}`);
      }
         
  }
   return `The random number is ${randomNumber}. ${(guessCollection.length > 0) ? `Your previous guess were respectively ${guessCollection.join(", ")}. ` : ''}Hope you have great time playing the game`;
}

GuessingGame();