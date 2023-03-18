

var highScoresList = document.getElementById('highscoreslist');

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// highScoresList.innerHTML = highScores
//This doesnt work, im pretty much out of time,
//you can see what i have attempted. i am tired and would like to sleep. 



highScores.forEach(score => {
    const li = document.createElement('li');
    li.textContent = score;
    highScoresList.appendChild(li);
});


// highScores.forEach(highScores => {

//     console.log('')
//     const li = document.createElement('li');
//     li.textContent = highScores;
//     highScores.appendChild(li);
//     // for (var i = 0; i < localStorage.length; i++){
//     //     var item = document.createElement("li");
//     //     item.textContent = localStorage.getItem(localStorage.key(i));
//     // }

// })

console.log(localStorage.getItem('highScores'))