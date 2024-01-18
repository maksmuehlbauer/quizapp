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
let AUDIO_SUCCESS = new Audio('./audio/success.mp3')
let AUDIO_WRONG = new Audio('./audio/wrong.mp3')


function render() {
    document.getElementById('question-box').innerHTML = '';
    document.getElementById('next').classList.remove('d-none')
    document.getElementById('next').innerHTML = `next Question`
    document.getElementById('question-box').innerHTML += generateRenderHtml();
}

function generateRenderHtml() {
    return /*html*/`
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
    if (proofOfCorrentAnswer(selectionNumber, question)) {
        score += 1
        AUDIO_SUCCESS.play();
        document.getElementById(selection).classList.add('correct-answer')
    } else {
        AUDIO_WRONG.play();
        document.getElementById(selection).classList.add('wrong-answer')
        document.getElementById(idOfRightAnswer).classList.add('correct-answer')
    };
    disableAnswerButtons();
    enableSkipButton();
}

function proofOfCorrentAnswer(selectionNumber, question) {
    return selectionNumber == question['right_answer']
}

function disableAnswerButtons() {
    document.getElementById('answer_1').style = "pointer-events:none";
    document.getElementById('answer_2').style = "pointer-events:none";
    document.getElementById('answer_3').style = "pointer-events:none";
    document.getElementById('answer_4').style = "pointer-events:none";
}


function enableSkipButton() {
    document.getElementById('next').disabled = false;
}


function disableSkipButton() {
    document.getElementById('next').disabled = true;
}


function nextQuestion() {
    currentQuestion += 1;
    if (currentQuestion == questions.length) {
        showScore();
        disableSkipButton();
    } else {
        if (currentQuestion == questions.length - 1){
            document.getElementById('next').innerHTML = `finish`
        }
        startQuiz();
        disableSkipButton();
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
    document.getElementById('next').classList.add('d-none')
}


function generateShowScoreHtml() {
    return /*html*/ `
    <img src="./img/brain-result.png" class="complete-img">
    <h1 class="score-h1">Complete<br>HTML Quiz</h1>
    <h2 class="score-h2"><span class="text-success px-5 custom-padding-h2">your score: <br class="br-none"></span> ${score} / 4</h2>
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