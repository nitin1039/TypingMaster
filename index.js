let score = 0
let time = 6;


window.addEventListener("DOMContentLoaded",init)



function init(){
    // console.log("GAME START!!!")
    showWords(words)
    wordInput.addEventListener("input",startMatch)
    setInterval(countdown,1000)
}



//DOM Elements
const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const message = document.querySelector("#message")


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];

    
function showWords(words){
    let randomIdx = Math.floor(Math.random()*words.length)

    currentWord.innerHTML = words[randomIdx]
}

function matchWords(){
    if(currentWord.innerHTML === wordInput.value){
        message.innerHTML = "Correct!!!"
        return true;
    }else{
        message.innerHTML = ""
        return false;
    }
}

function startMatch(){
    if(matchWords()){
        showWords(words)
        wordInput.value = ''
        score++;
        time = 6

    }
    scoreDisplay.innerHTML = score
}

function countdown(){
    if(time>0){
        time--;
    }
    timeDisplay.innerHTML = time
}