var welcomeName = prompt('Hello, what is your name?');
console.log('User name: ' + welcomeName);

alert('Welcome to my webpage, ' + welcomeName + '! I\'m going to ask you a few questions to help you learn more about me! Please type y or n to answer.');

/* Asks user to answer and changes answer to uppercase, storing it in the variable questionOneUser */
var questionOneUser = prompt('My favorite food is sushi. (y/n)').toUpperCase();
console.log('Answer: ' + questionOneUser);

var questionOneAnswer = 'Y';

while (questionOneUser !== 'Y' || 'N') {
  alert('Please enter your response is the form of \"y or n\"');
  questionOneUser = prompt('My favorite food is sushi. (y/n)').toUpperCase();
}

if (questionOneUser === questionOneAnswer) {
  alert('That is correct!');
}
else {
  alert('Wrong answer!');
}
