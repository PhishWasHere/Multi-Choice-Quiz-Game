// known bugs:
// High Score page.

// this looks like hot dog water, but im pretty much out of time and very tired.
//if i have time later in the course, ill try to fix everything and resubmit

var score = 0;
// ammend score to somewhere so score is displayed

var index = 0

var questions = [{ //questions array, very original
  "qHeader": "What are my feelings towards JavaScript?",
  "a1": "Positive",
  "a2": "Neutral",
  "a3": "Negative",
  "a4": "Hostile",
  "correct": "Hostile" //dont know how to assign correct with a2 / a1 etc
},
{
  "qHeader": "Question 2",
  "a1": "answer 1",
  "a2": "answer 2",
  "a3": "answer 3",
  "a4": "answer 4",
  "correct": "answer 1"
},
{
  "qHeader": "Question 3",
  "a1": "answer 1",
  "a2": "answer 2",
  "a3": "answer 3",
  "a4": "answer 4",
  "correct": "answer 3"
}];

var questionPage = document.getElementById('questionline')

var qHeaderEl = document.getElementById('questionHeader')

var time = 35; 
var lastQuestion = questions.length - 1; 

var timerCountEl = document.getElementById("timer")

var startButton = document.getElementById("startButton");

var showAnswerEl = document.getElementById('showAnswer') 

var showScoreEl = document.getElementById('show-score')


//choice Elements assigned to buttons in html
var choice1El = document.getElementById("answer");
var choice2El = document.getElementById("answer2");
var choice3El = document.getElementById("answer3");
var choice4El = document.getElementById("answer4");


//funct to hide all questions on load
function hideQ() {
  questionPage.style.display = 'none';
}

/////////////////////////////// GAME /////////////////////////////////////////////////

// func that starts upon start quiz button click,hides start button and shows questions
function startGame(event) {
  event.preventDefault();

  questionPage.style.display = 'block';
  
  var x = document.getElementById("container"); // loads questions

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  console.log(time,'1s test');
  timeLeft()
  
}

function timeLeft() { // time interval func, 
  var timerInterval = setInterval(function () {
    time--;
    console.log(time,'1s passed');
    timerCountEl.textContent = "Time Left: " + time;
    
    if (time === 0 || questions.length === index) {
      clearInterval(timerInterval);
      showFinalResult();
      console.log(time,'1s test');
    }
  }, 1000);

  timerCountEl.textContent = 'Time left: ' + time;
}


//renders questions, based on question index
function renderQuestions() {
    var q = questions[index];

    questions.innerHTML = "<p>"+ q.question +"</p>";


    qHeaderEl.innerHTML = q.qHeader; 
    console.log(q.qHeader)
    choice1El.innerHTML = q.a1
    choice1El.setAttribute('data-answer', q.a1)
    choice2El.innerHTML = q.a2
    choice2El.setAttribute('data-answer', q.a2)
    choice3El.innerHTML = q.a3
    choice3El.setAttribute('data-answer', q.a3)
    choice4El.innerHTML = q.a4
    choice4El.setAttribute('data-answer', q.a4)
}

renderQuestions(); //once answer is clicked, calls checkAnswer func
  choice1El.addEventListener("click", function (e) {
    checkAnswer(e);
  })
  choice2El.addEventListener("click", function (e) {
    checkAnswer(e);
  })

  choice3El.addEventListener("click", function (e) {
    checkAnswer(e);
  })

  choice4El.addEventListener("click", function (e) {
    checkAnswer(e);
  
})


function checkAnswer(e) {  // checks answers
  e.preventDefault();

  var answer = e.currentTarget.dataset.answer;
  console.log(answer)

  if ( answer == questions[index].correct){  //i dont know why the .correct array doesnt work properly
    //need to mark .correct with the full answer or it breaks
    console.log(score)
    answerCorrect(); 
  }else {
    answerWrong(); 
    time -= 10 //if answer is wrong, reduces time
    if (time < 0) {
        time = 0;
    }
  }

  if (index < lastQuestion) { // if the array index is smaller than the array, adds 1 to index and calls renderquestions
    index++;
    renderQuestions()
  } else { // if not, show final results page
    showFinalResult()
  }

}

function answerCorrect() {//if correct, load next question and adds 1 to score
  score++;
  console.log('correct')
}

//uf wribg, it just does a log. I dont have time to implament a feature that shows the user if a answer is correct :< 
function answerWrong () {
  console.log('incorrect')

}

function showFinalResult () {
  questionPage.style.display = 'none'; //hides questions
  
  console.log('final')

  localStorage.setItem('recentScore', score); //sends score to local storage

  window.location.assign('./score.html') // loads score.html when out of questions or time
}

startButton.addEventListener("click", startGame)

hideQ()

