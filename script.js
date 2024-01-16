let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_asnwer": 3,
    },
    {
        "question": "Wer hat Javascript erfunden?",
        "answer_1": "Ronaldo",
        "answer_2": "Donald Trump",
        "answer_3": "Kim Jong Un",
        "answer_4": "Brendan Eich",
        "right_asnwer": 4,
    },
    {
        "question": "Wer hat Python erfunden?",
        "answer_1": "Jesus",
        "answer_2": "Guido van Rossum",
        "answer_3": "Oliver Khan",
        "answer_4": "Franz Beckenbauer",
        "right_asnwer": 2,
    },
    {
        "question": "Wer hat C++ erfunden?",
        "answer_1": "Bjarne Stroustrup",
        "answer_2": "Vasco Da Gama",
        "answer_3": "Roger Federer",
        "answer_4": "Zeus",
        "right_asnwer": 1,
    },
];

let currentQuestion = 0

function render() {
    document.getElementById('question-box').innerHTML += /*html*/`
        <button id="start-button" type="button" class="btn btn-warning btn-custom-design" onclick="startQuiz(currentQuestion)">START NOW</button>
    `
}

function startQuiz(currentQuestion) {
    document.getElementById('question-box').innerHTML = '';

    let question = questions[currentQuestion];
    let qBox = document.getElementById('question-box');
    
    qBox.innerHTML += generateQuestionHtml(question);  
    for (let i = 1; i < Object.keys(questions[0]).length -1; i++) {
        qBox.innerHTML += generateAnswerHtml(question, i);
    }
    qBox.innerHTML += generateNextPrevHtml();
}

function nextPrevQuestion(id) {
    if (id == 'next') {
        startQuiz(currentQuestion += 1)
    } else {
        startQuiz(currentQuestion -= 1)
    }

}


function generateQuestionHtml(question) {
    return /*htlm*/`
    <h1 id="question" class="font-style-h1">${question['question']}</h1>
` 
}


function generateAnswerHtml(question, i) {
    return /*html*/`
    <div id="answer-${i}" class="question-button">
        <div class="nr-box">A</div>
        <h2 class="font-style-h2">${question[`answer_${i}`]}</h2>
    </div>
    `
}


function generateNextPrevHtml() {
    return /*html*/ `
        <div class="question-control">
        <button id="prev" type="button" class="btn btn-info btn-next-prev" onclick="nextPrevQuestion('prev')"><</button>
        <button id="next" type="button" class="btn btn-info btn-next-prev" onclick="nextPrevQuestion('next')">></button>
    </div>
    `
}





