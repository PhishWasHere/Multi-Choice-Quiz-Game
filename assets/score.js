
var saveScoreBtn = document.getElementById('savescore');

var userName = document.getElementById('username');

var recentScore = localStorage.getItem('recentScore');

var finalScore = document.getElementById('finalScore');


var highScores = (JSON.parse(localStorage.getItem('highscore'))) || [];
console.log(highScores);

var topScore = 3;


///////////////////////////////////////////////
function saveHighScore(event) { //i defenetly know how to do this myself
    event.preventDefault();
    console.log("clicked save")

    var score = { //makes new var with recent score and name that input into input box
        score: recentScore,
        name: userName.value,
    };

    highScores.push(score); //pushes result into localstorage(i think, this is all google)

    highScores.sort((a, b) => b.score - a.score); //i didnt know how to refactor this to remove the =>
    //but it arranges the score based on....score
    highScores.splice(3); // splices and only keeps top 3

    console.log(highScores);
    

    localStorage.setItem('highScores', JSON.stringify(highScores)); // updates highscore local storage

    window.location.assign('./highscore.html') // takes user to high score page
};
///////////////////////////////////////////////

finalScore.textContent = 'Your score is: ' + recentScore; 

userName.addEventListener('keyup', function () { //makes sure people cant save scores with no name
    saveScoreBtn.disabled = !userName.value;
})

// saveScoreBtn.addEventListener('click', saveHighScore()); no idea why, but this function would be called on page load
// so i had to use onclick in HTML to fix the issue.