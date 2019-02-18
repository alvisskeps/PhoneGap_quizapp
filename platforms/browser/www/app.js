function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1 id='heading'>Result</h1>";
    gameOverHTML += "<h2 id='score1'> Your score: " + quiz.score + "<a href='game.html' class='btn btn-lg btn-block' id='restartButton' role='button'>RESTART</a>" +
                    "<a href='index.html' class='btn btn-lg btn-block' id='restartButton1' role='button'>BACK TO START</a>" + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("The United Kingdom is comprised of how many countries?", ["5", "6","8", "4"], "4"),
    new Question("Which of the following countries do not border France?", ["Spain", "Netherlands", "Italy", "Germany"], "Netherlands"),
    new Question("Which U.S. state is the Grand Canyon located in?", ["New Mexico", "Arizona","Nevada", "Wyoming"], "Arizona"),
    new Question("Which is the longest river in the world?", ["Yellow River", "Amazon River", "Nile River", "Congo River"], "Nile River"),
    new Question("Which is the largest body of water?", ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Baltic Sea"], "Pacific Ocean"),
    new Question("Which is the smallest country, measured by total land area?", ["Vatican City", "Tuvalu", "Monaco", "Maldives"], "Vatican City"),
    new Question("What is the approximate size of Earth's equator?", ["40,000 km", "20,000 km", "30,000 km", "50,000 km"], "40,000 km"),
];

// create quiz
var quiz = new Quiz(questions);

function exitFromApp()
 {
    navigator.app.exitApp();
 }

// display quiz
populate();
