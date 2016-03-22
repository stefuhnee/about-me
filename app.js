var userAnswers = [];
var correctAnswers = 0;
var totalAnswers = 0;
var userAnswer;
var favoriteNumber;
var numberOfGuesses = 0;
var pTagOne = document.getElementById('ans-one');
var pTagTwo = document.getElementById('ans-two');
var pTagThree = document.getElementById('ans-three');
var pTagFour = document.getElementById('ans-four');
var pTagFive = document.getElementById('ans-five');
var pTagSix = document.getElementById('ans-six');
var pTagSeven =
document.getElementById('ans-seven');​

//Question 1
function question1() {
  userAnswer = prompt('My favorite food is sushi. (y/n)').toLowerCase();
  userAnswers.push(userAnswer);
  console.log('User Answers so far: ' + userAnswers);
  if (userAnswer === 'yes'){
    pTagOne.textContent = 'Correct!';
    correctAnswers++;
    totalAnswers++;
  } else if (userAnswer === 'no'){
    pTagOne.textContent = 'Incorrect!';
    totalAnswers++;
  } else {
    alert('Please Enter Yes or No');
    totalAnswers++;
  }
}
question1();
​





function amCorrect(){
  if (userAnswers[i] === correctAnswers[i]) {
    numCorrectAnswers++;
    alert('Nice work! You got it right!');
  } else if (userAnswers[i] !== 'Y' && 'N') {
    alert('Please enter y or n.');
  }
  else {
    alert('That is not the right answer :(');
  }
  totalAnswers++;
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}
var conLoop = true;
var i = 0;
while (i < myQuestions.length - 1 && conLoop == true) {
  userAnswers.push((prompt(myQuestions[i])).toUpperCase());
  console.log('User Answers so far: ' + userAnswers);
  amCorrect();
  if (i === 4){
    if (userAnswers[4] === correctAnswers[4]) {
      amCorrect();
      i++;
    } else {
      conLoop = false;
    }
  }
  i++;
}
var guessAttempt = 0;
var userVelocityGuess = prompt(myQuestions[6]);
totalAnswers++;

while (userVelocityGuess !== 24 && guessAttempt < 4) {
  if (userVelocityGuess < 24) {
    alert('Sorry, your guess is too low.');
    guessAttempt++;
    console.log('Guess number: ' + guessAttempt);
  } else if (isNaN(userVelocityGuess)) {
    alert('That is not a number! Try again!');
    console.log('Guess number: ' + guessAttempt);
  } else if (userVelocityGuess > 24) {
    alert('Sorry, your guess is too high!');
    guessAttempt++;
    console.log('Guess number: ' + guessAttempt);
  } else if (guessAttempt > 4) {
    alert('You are out of guesses! The correct airspeed velocity of an unladen swallow is 24mph. (source: http://style.org/unladenswallow/)');
  } else {
    alert('You must be really smart! You got it!');
    numCorrectAnswers++;
    break;
  }
  userVelocityGuess = prompt('What is the airspeed velocity of an unladen swallow? You have 4 tries!');
}

console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);

alert('You got ' + numCorrectAnswers + ' out of ' + totalAnswers + ' questions correct! Thanks for playing!');
/* var questionSixUser = prompt('Coding bores me (y/n)').toUpperCase();
    console.log('User Answer: ' + questionSixUser);
    totalAnswers++;
    var questionSixAnswer = 'N';
    var numCorrectAnswers = 0;
var totalAnswers = 0;
var welcomeName = prompt('Hello, what is your name?');
console.log('User name: ' + welcomeName);

alert('Welcome to my webpage, ' + welcomeName + '! I\'m going to ask you a few questions to help you learn more about me! Please type y or n to answer.');

// Asks user to answer and changes answer to uppercase, storing it in the variable questionOneUser
var questionOneUser = prompt('My favorite food is sushi. (y/n)').toUpperCase();
totalAnswers++;
console.log('Do you think my favorite food is sushi?: ' + questionOneUser);
var questionOneAnswer = 'Y';

if (questionOneUser === questionOneAnswer) {
  alert('Great job! You guessed correctly!');
  numCorrectAnswers++;
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}
else {
  alert('Nope, that\'s not right.');
  console.log('Number of correct answers so far: ' + numCorrectAnswers);
}
console.log('Equality evaluated as: ' + (questionOneUser === questionOneAnswer));

var questionTwoUser = prompt('My favorite color is orange. (y/n)').toUpperCase();
totalAnswers++;
console.log('Do you think my favorite color orange?: ' + questionTwoUser);
var questionTwoAnswer = 'N';

if (questionTwoUser === questionTwoAnswer) {
  alert('Great job! You guessed correctly!');
  numCorrectAnswers++;
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}
else {
  alert('Nope, that\'s not right.');
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}
console.log('Equality evaluated as: ' + (questionTwoUser === questionTwoAnswer));

var questionThreeUser = prompt('I am a unicorn (y/n)').toUpperCase();
totalAnswers++;
console.log('User Answer: ' + questionThreeUser);
var questionThreeAnswer = 'Y';

if (questionThreeUser === questionThreeAnswer) {
  alert('Great job! You guessed correctly!');
  numCorrectAnswers++;
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}
else {
  alert('Nope, that\'s not right.');
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}
console.log('Equality evaluated as: ' + (questionThreeUser === questionThreeAnswer));

var questionFourUser = prompt('I was born in Seattle. (y/n)').toUpperCase();
totalAnswers++;
console.log('User Answer: ' + questionFourUser);
var questionFourAnswer = 'Y';

if (questionFourUser === questionFourAnswer) {
  alert('Great job! You guessed correctly!');
  numCorrectAnswers++;
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}
else {
  alert('Nope, that\'s not right.');
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}
console.log('Equality evaluated as: ' + (questionFourUser === questionFourAnswer));

var questionFiveUser = prompt('I enjoy long walks on the beach. (y/n)').toUpperCase();
totalAnswers++;
console.log('User Answer: ' + questionFiveUser);
var questionFiveAnswer = 'Y';

if (questionFiveUser === questionFiveAnswer) {
  alert('Great job! You guessed correctly! One more bonus question!');
  console.log('Equality evaluated as: ' + (questionFiveUser === questionFiveAnswer));
  numCorrectAnswers++;
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
  var questionSixUser = prompt('Coding bores me (y/n)').toUpperCase();
  console.log('User Answer: ' + questionSixUser);
  totalAnswers++;
  var questionSixAnswer = 'N';
 Only executes if the user correctly answers Question 5
if (questionSixUser === questionSixAnswer) {
    alert('Great job! You guessed correctly! That\'s the end! You rock!');
    numCorrectAnswers++;
    console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
  }
  else {
    alert('Nope, that\'s not right.');
    console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
  }
  console.log('Equality evaluated as: ' + (questionSixUser === questionSixAnswer));
}
else {
  alert('Nope, that\'s not right. That\'s it! No more questions!');
  console.log('Equality evaluated as: ' + (questionFiveUser === questionFiveAnswer));
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}

 Guessing game

var guessAttempt = 0;
var userVelocityGuess = prompt('What is the airspeed velocity of an unladen swallow in mph? You have 4 tries!');
totalAnswers++;

while (userVelocityGuess !== 24 || guessAttempt < 4) {
  if (userVelocityGuess < 24) {
    alert('Sorry, your guess is too low.');
    guessAttempt++;
    console.log('Guess number: ' + guessAttempt);
  } else if (isNaN(userVelocityGuess)) {
    alert('That is not a number! Try again!');
    console.log('Guess number: ' + guessAttempt);
  } else if (userVelocityGuess > 24) {
    alert('Sorry, your guess is too high!');
    guessAttempt++;
    console.log('Guess number: ' + guessAttempt);
  } else if (guessAttempt > 4) {
    alert('You are out of guesses! The correct airspeed velocity of an unladen swallow is 24mph. (source: http://style.org/unladenswallow/)');
  } else {
    alert('You must be really smart! You got it!');
    numCorrectAnswers++;
    break;
  }
  userVelocityGuess = prompt('What is the airspeed velocity of an unladen swallow? You have 4 tries!');
}

console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);

alert('You got ' + numCorrectAnswers + ' out of ' + totalAnswers + ' questions correct, ' + welcomeName + '! Thanks for playing!');

 Bonus goal
var favoriteGames = [];
var gameAnswer;
while (favoriteGames.length < 5) {
  gameAnswer = prompt('What is one of your top five favorite games?');
  favoriteGames.push(gameAnswer);
  console.log('Games stored so far: ' + favoriteGames);
}
alert('You listed your top 5 games as: ' + favoriteGames);
var numCorrectAnswers = 0;
var totalAnswers = 0;

var myQuestions = ['My favorite food is sushi. (y/n)', 'My favorite color is orange. (y/n)', 'I am a unicorn (y/n)', 'I was born in Seattle. (y/n)', 'I enjoy long walks on the beach. (y/n)', 'Coding bores me (y/n)'];
var myAnswers = ['Y', 'N', 'Y', 'Y', 'Y', 'N'];
var userAnswers = [];

for (var i = 0; i < myQuestions.length; i++) {
  userAnswers.push((prompt(myQuestions[i])).toUpperCase());
  console.log('User Answers so far: ' + userAnswers);
  totalAnswers++;
  if (userAnswers[i] === myAnswers[i]) {
    numCorrectAnswers++;
    alert('Nice work! You got it right!');
  } else if (userAnswers[i] !== 'Y' || 'N') {
    alert('Please enter y or n.');
    i--;
  }
  else {
    alert('That is not the right answer :(');
  }
  console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);
}
*/
