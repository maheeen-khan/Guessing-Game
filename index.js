
// Questions array
var questions = [
    {
        answer: "<img src='../images/paint.jpg' alt='Palette' class='image'> + &nbsp <img src='../images/e.png' alt='E' class='image'> &nbsp + <img src='../images/r.png' alt='R' class='image'> =",
        correctAnswer: "painter"
    },
    {
        answer: "<img src='../images/foot.png' alt='Foot' class='image'> + &nbsp &nbsp <img src='../images/ball.jpg' alt='ball' class='image'> &nbsp &nbsp &nbsp=",
        correctAnswer: "football"
    },
    {
        answer: "<img src='../images/sun.jpg' alt='sun' class='image'> + &nbsp &nbsp <img src='../images/flower.jpg' alt='flower' class='image'> &nbsp &nbsp =",
        correctAnswer: "sunflower"
    }
];

// Current question index
var currentQuestion = 0;

// Display current question
function displayQuestion() {
    var question = questions[currentQuestion];
    document.getElementById("question").textContent = "Can you guess the word?";
    document.getElementById("answer").innerHTML = question.answer;
}

// Check answer and display result
function checkAnswer() {
    var guess = document.getElementById("guess").value.toLowerCase();
    var result = document.getElementById("result");
    var correctAnswer = questions[currentQuestion].correctAnswer;

    if (guess === correctAnswer) {
        result.textContent = "Correct!";
        result.classList.add("correct");
        result.classList.remove("incorrect");
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            result.textContent = "Congratulations! You've completed all questions.";
        }
    } else {
        result.textContent = "Incorrect! Try again.";
        result.classList.add("incorrect");
        result.classList.remove("correct");
    }
}

// Display first question
displayQuestion();
