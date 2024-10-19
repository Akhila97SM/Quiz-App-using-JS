const quizData = [
    {
        question: "Which is the smallest prime number?",
        choices: ["0", "1", "2", "3"],
        correct: "2"
    },
    {
        question: "Which is the capital of India?",
        choices: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        correct: "Delhi"
    },
    {
        question: "What is the chemical symbol of Gold?",
        choices: ["Au", "Ag", "Fe", "Hg"],
        correct: "Au"
    },
    {
        question: " What is the square root of 64?",
        choices: ["6", "7", "8", "9"],
        correct: "8"
    },
    {
        question: "Who is the first woman Prime Minister of India?",
        choices: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
        correct: " Indira Gandhi"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H₂", "O₂", "H₂O", "CO₂"],
        correct: "H₂O"
    },
    {
        question: "What is the chemical symbol of Gold?",
        choices: ["Au", "Ag", "Fe", "Hg"],
        correct: "Au"
    },
    {
        question: " What is the square root of 64?",
        choices: ["6", "7", "8", "9"],
        correct: "8"
    },
    {
        question: "Who is the first woman Prime Minister of India?",
        choices: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
        correct: " Indira Gandhi"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H₂", "O₂", "H₂O", "CO₂"],
        correct: "H₂O"
    },
    {
        question: "In which year did India gain independence?",
        choices: ["1947", "1950", "1936", "1965"],
        correct: "1947"
    },
    {
        question: " Which is the largest continent by area?",
        choices: ["Africa", "Asia", "Europe", "North America"],
        correct: "Asia"
    },
    {
        question: "Which programming language is known as the backbone of web development?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        correct: " JavaScript"
    },
    {
        question: "Who has won the most Grand Slam titles in men's tennis (as of 2024)?",
        choices: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
        correct: "Novak Djokovic"
    },
    {
        question: "What is the chemical symbol of Silver?",
        choices: ["Au", "Ag", "Fe", "Hg"],
        correct: "Ag"
    },
];

let currentQuestionIndex = 0;
let score = 0;
 
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitBtn = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");

function loadQuestion () {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    choicesElement.innerHTML = "";
    
    currentQuestion.choices.forEach(choice => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = choice;
        li.appendChild(input);
        li.appendChild(document.createTextNode(choice));
        choicesElement.appendChild(li);
        li.style.listStyleType = "none";
    }); 
}

function checkAnswer () {
 const selectedChoice = document.querySelector('input[name="choice"]:checked');
 if (selectedChoice) {
    if (selectedChoice.value === quizData[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        displayScore();
    }
} else {
    alert("Please select an answer.");
}
}


function displayScore () {
    questionElement.innerText = "Quiz Over!";
    choicesElement.innerHTML="";
    submitButton.style.display = "none";
    scoreElement.innerText = `Your score is ${score} out of ${quizData.length}`;
}

submitButton.addEventListener("click" , checkAnswer);
loadQuestion();




