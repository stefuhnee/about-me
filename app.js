var welcomeName = prompt('Hello, what is your name?');
console.log('User name: ' + welcomeName);

alert('Welcome to my webpage, ' + welcomeName + '! I\'m going to ask you a few questions to help you learn more about me! Please type y or n to answer.');

/* Asks user to answer and changes answer to uppercase, storing it in the variable questionOneUser */
var questionOneUser = prompt('My favorite food is sushi. (y/n)').toUpperCase();
console.log('Answer: ' + questionOneUser);

var questionTwoUser = prompt('My favorite color is orange. (y/n)').toUpperCase();
console.log('Answer: ' + questionTwoUser);

var questionThreeUser = prompt('I am a unicorn (y/n)').toUpperCase();
console.log('Answer: ' + questionThreeUser);

var questionFourUser = prompt('I was born in Seattle. (y/n)').toUpperCase();
console.log('Answer: ' + questionFourUser);

var questionFiveUser = prompt('I enjoy long walks on the beach. (y/n)').toUpperCase();
console.log('Answer: ' + questionFiveUser);

var questionSixUser = prompt('Coding bores me (y/n)').toUpperCase();
console.log('Answer: ' + questionSixUser);

var questionOneAnswer = 'Y';
var questionTwoAnswer = 'N';
var questionThreeAnswer = 'Y';
var questionFourAnswer = 'Y';
var questionFiveAnswer = 'Y';
var questionSixAnswer = 'N';

if (questionOneUser === questionOneAnswer) {
  alert('Great job! You guessed correctly!');
}
else {
  alert('Nope, that\'s not right.');
}
