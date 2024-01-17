let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },
    {
        "question": "Wer hat Javascript erfunden?",
        "answer_1": "Ronaldo",
        "answer_2": "Donald Trump",
        "answer_3": "Kim Jong Un",
        "answer_4": "Brendan Eich",
        "right_answer": 4,
    },
    {
        "question": "Wer hat Python erfunden?",
        "answer_1": "Jesus",
        "answer_2": "Guido van Rossum",
        "answer_3": "Oliver Khan",
        "answer_4": "Franz Beckenbauer",
        "right_answer": 2,
    },
    {
        "question": "Wer hat C++ erfunden?",
        "answer_1": "Bjarne Stroustrup",
        "answer_2": "Vasco Da Gama",
        "answer_3": "Roger Federer",
        "answer_4": "Zeus",
        "right_answer": 1,
    },
];


let currentQuestion = 0;
let score = 0;


function render() {
    document.getElementById('question-box').innerHTML = '';
    document.getElementById('question-box').innerHTML += /*html*/`
         <h1>Welcome to <br> The Awesome HTML Quiz</h1>
          <h2>Ready for the Challenge?</h2>
          <button id="start-button" type="button" class="btn btn-warning btn-custom-design" onclick="startQuiz(currentQuestion)">START NOW</button>
    `
}

function startQuiz() {
    highlightedQuestion();
    let question = questions[currentQuestion];
    let qBox = document.getElementById('question-box'); 

    qBox.innerHTML = '';
    qBox.innerHTML += generateQuizHtml(question);
}


function answerLogic(selection) {
    let question = questions[currentQuestion];
    let selectionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectionNumber == question['right_answer']) {
        score += 1
        document.getElementById(selection).classList.add('correct-answer')
    } else {
        document.getElementById(selection).classList.add('wrong-answer')
        document.getElementById(idOfRightAnswer).classList.add('correct-answer')
    };
    enableButtons();
}


function enableButtons() {
    document.getElementById('next').disabled = false;
}


function disableButtons() {
    document.getElementById('next').disabled = true;
}


function nextQuestion() {
    
    currentQuestion += 1;
    if (currentQuestion == questions.length) {
        showScore();
        disableButtons();
    } else {
        
        startQuiz();
        disableButtons();
    }
}

function highlightedQuestion() {
    let liId = `li_${currentQuestion}`;
    let previousId = `li_${currentQuestion - 1}`;
    document.getElementById(liId).classList.add('highlight')
    if (currentQuestion == 1) {
        document.getElementById(previousId).classList.remove('highlight')
    }
    if (currentQuestion == 2) {
        document.getElementById(previousId).classList.remove('highlight')
    }
    if (currentQuestion == 3) {
        document.getElementById(previousId).classList.remove('highlight')
    }
}

function showScore() {
    let qBox = document.getElementById('question-box'); 
    qBox.innerHTML = '';
    qBox.innerHTML += generateShowScoreHtml();
    document.getElementById('li_3').classList.remove('highlight')
}

function generateShowScoreHtml() {
    return /*html*/ `
    <img src="./img/brain-result.png" class="complete-img">
    <h1 class="score-h1">Complete<br>HTML Quiz</h1>
    <h2 class="score-h2"><span class="text-success px-5">your score:</span> ${score} / 4</h2>
    <button type="button" class="btn btn-primary mt-4 px-5 f-custom">SHARE</button>
    <button type="button" class="btn btn-light mt-1 px-5 f-custom text-primary" onclick="startNewGame()">Replay</button>
`
}

function startNewGame() {
    currentQuestion = 0;
    score = 0;
    render();
}

function generateQuizHtml(question) {
    return /*html*/ `
    <h1>${question['question']}</h1>

    <div id="answer_1" class="card answer-design" onclick="answerLogic('answer_1')">
        <div class="nr-box">A</div>
        <div class="card-body">
            ${question['answer_1']}
        </div>
    </div>

    <div id="answer_2" class="card answer-design" onclick="answerLogic('answer_2')">
        <div class="nr-box">B</div>
        <div class="card-body">
            ${question['answer_2']}
        </div>
    </div>

    <div id="answer_3" class="card answer-design" onclick="answerLogic('answer_3')">
        <div class="nr-box">C</div>
        <div class="card-body">
            ${question['answer_3']}
        </div>
    </div>

    <div id="answer_4" class="card answer-design" onclick="answerLogic('answer_4')">
        <div class="nr-box">D</div>    
        <div class="card-body">
            ${question['answer_4']}
        </div>
    </div>
`;
}