
var correctGuess=0; // counter variable
var question;
var answer;
var response;
var results;
var correct = []; // empty array to include list questions got right
var wrong = [];// empty array to include list questions got wrong

function textQuestion () {
  var userInput= prompt("Welcome to my App, What is Your Name?");

alert ('Hello ' + userInput + ',  let\'s play guessing game, if you guess correctly you will get a medal');

//Two dimensional array with text question and answer
var questions = [
 ['Have I been to Turkey,?', 'yes'],
 ['Which Sport is my Favorite Sport Tennis or Rugby?', 'tennis'],
 ['Is Aquire my favorite board game,?', 'yes'],
 ['Do I live in South Seattle?', 'yes']
];
  for (var i = 0; i < questions.length; i++) {
  question= questions[i][0];// accessing the question/1st index i.e 0
  answer=questions [i][1]; //accessing the answer/2nd index i.e 1

  response=(prompt(question)).toLowerCase();
  if (response===answer) {
    alert('You got it right');
    correctGuess+= 1;
     correct.push (question);
  } else {
    alert('You got it wrong');
      wrong.push (question);
  }
}
}
textQuestion ();

function numberQuestion ()  {
var question5 = ('Guess what is my favorite number between 1 & 9');
var response= prompt (question5);
var guess= 3
var guessLeft = '[' + guess + ' Guess(es) Left]';


while (guess > -1) {       //  while loop to keep prompting Q's 4 times
  if ( parseInt(response)=== 6) {
    alert ('You got it Right');
    correctGuess+=1;
    correct.push (question5);
    break;
  } else if (guess===0){
      alert ('Sorry, You got it wrong!');
      wrong.push (question5);
      guess-=1;
  }  else if (response > 6) {
    response= prompt ('Your guess is too High, Guess again ' + guessLeft)
    guess-=1;
    var guessLeft = '[' + guess + ' Guess(es) Left]';
  } else if (response < 6) {
    response = prompt ('Your guess is too Low, Guess again ' + guessLeft)
    guess-=1;
    var guessLeft = '[' + guess + ' Guess(es) Left]';
  }

 }
  }

numberQuestion ();

  function stateQuestion () {
  var statesLived=['montana','california', 'florida', 'oregon'];
  var answerWasFound=false; // this var helps to alert- You guessed it wrong when it is switched to false
  var question6= ('What states have I lived in besides Washington?');
  var response= prompt (question6);
      for (var i = 0; i < statesLived.length; i++) {
    if (response.toLowerCase() === statesLived[i]) {
      alert('You guessed it right');
      answerWasFound=true;
      correctGuess+= 1;
      correct.push (question6);
      break;
    }
  }
    if (answerWasFound===false) {
    alert('You guessed it wrong');
    wrong.push (question6);
  }
}
stateQuestion ();

 function displayResults (message) {
   var printHTML= document.getElementById('outcome');
 printHTML.innerHTML=message;
  }

 var results= '<p>You got ' + correctGuess + ' question(s) right';
 if (correctGuess >= 4) { results += "<strong> and You Earned a Gold Medal</strong></p>"; displayResults(results);
  }
 else if
 (correctGuess >= 3) { results += "<strong> and You Earned a Silver Medal</strong></p>"; displayResults(results);
 }
 else if
 (correctGuess >= 2) { results += "<strong> and You Earned a Bronze Medal</strong></p>"; displayResults(results);
 }
 else
 {
  results += "<strong> and You Earned No Medal</strong></p>";

}
function buildList (arr) {
  var listHTML="<ol>";
  for (var i=0; i <arr.length; i+=1) {
    listHTML+= '<li>' + arr[i] + '</li>';

  }
  listHTML+='</ol>';
  return listHTML;
}

  results += '<h2>You got these questions correct:</h2>';
  results += buildList(correct);
  results += '<h2>You got these questions wrong:</h2>';
  results += buildList(wrong);
  displayResults(results);
