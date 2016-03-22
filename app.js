var userAnswers = [];
var correctAnswers = 0;
var totalAnswers = 0;
var userAnswer;
var numberOfGuesses = 0;
var userVelocityGuess;
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
  userAnswer = prompt('My favorite food is sushi. (yes/no)').toLowerCase();
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
//Question 2
function question2() {
  userAnswer = prompt('My favorite color is orange. (yes/no)').toLowerCase();
  userAnswers.push(userAnswer);
  console.log('User Answers so far: ' + userAnswers);
  if (userAnswer === 'no'){
    pTagOne.textContent = 'Correct!';
    correctAnswers++;
    totalAnswers++;
  } else if (userAnswer === 'yes'){
    pTagOne.textContent = 'Incorrect!';
    totalAnswers++;
  } else {
    alert('Please Enter Yes or No');
    totalAnswers++;
  }
}
question2();
//Question 3
function question3() {
  userAnswer = prompt('I am a unicorn (yes/no)').toLowerCase();
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
question3();

//Question 4
function question4() {
  userAnswer = prompt('I was born in Seattle. (yes/no)').toLowerCase();
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
question4();
//Question 5 and 6
function question5and6() {
  userAnswer = prompt('I enjoy long walks on the beach. (yes/no)').toLowerCase();
  userAnswers.push(userAnswer);
  console.log('User Answers so far: ' + userAnswers);
  if (userAnswer === 'yes'){
    pTagOne.textContent = 'Correct!';
    correctAnswers++;
    totalAnswers++;
    //Runs if user gets question 5 correct.
    if (userAnswer === 'no') {
      pTagSix.textContent = 'Correct!';
      correctAnswers++;
      totalAnswers++;
    } else if (userAnswer === 'yes'){
      pTagSix.textContent = 'Incorrect';
      totalAnswers++;
    } else {
      alert('Yes or No');
      totalAnswers++;
    }
  } else if (userAnswer === 'no'){
    pTagOne.textContent = 'Incorrect!';
    totalAnswers++;
  } else {
    alert('Please Enter Yes or No');
    totalAnswers++;
  }
}
question5and6();

function guessingGame(){
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
  }
console.log('Number of correct answers so far: ' + numCorrectAnswers + ' out of ' + totalAnswers);

alert('You got ' + numCorrectAnswers + ' out of ' + totalAnswers + ' questions correct! Thanks for playing!');
