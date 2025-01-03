// hide element by id
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// show element by id
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// continue
function continueGame() {
    // generate random alphabet
    const alpaStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphas = alpaStr.split('');
    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);
    const alphabet = alphas[index];
    const scrAlpha = document.getElementById('screen-alpha');
    scrAlpha.innerText = alphabet;
    // bg color setting
    addBgColorById(alphabet);
}
// keyboard function 
function handleKeyPress(event) {
    const pressedKey = event.key;
    console.log('Player pressed', pressedKey);
    if(pressedKey==='Escape'){
        gameOver();
    }

    const currAlphaML = document.getElementById('screen-alpha');
    const crAlpha = currAlphaML.innerText;
    const expectedAlpha = crAlpha.toLowerCase();
    console.log(pressedKey, expectedAlpha);
    // check
    if (pressedKey === expectedAlpha) {
        console.log('get a point');
        continueGame();
        removeBgColorById(pressedKey);
        const currentScoreElement = document.getElementById('score');
        const currScoreText = currentScoreElement.innerText;
        const currScore = parseInt(currScoreText);
        const newScore = currScore + 1;
        currentScoreElement.innerText = newScore;
    }
    else {
        console.log('loss');
        const lifeElement = document.getElementById('life');
        const lifeText = lifeElement.innerText;
        const life = parseInt(lifeText);
        const newLife = life - 1;
        if (newLife === 0) {
            gameOver();
        }
        lifeElement.innerText = newLife;
    }

}



// play again function
function playAgain() {
    hideElementById('score-screen');
    showElementById('playground');
    const lifeElement = document.getElementById('life');
    lifeElement.innerText = 5;
    const currentScoreElement = document.getElementById('score');
    currentScoreElement.innerText = 0;

}
// game over function
function gameOver() {
    hideElementById('playground');
    showElementById('score-screen');
    const lastScoreElement = document.getElementById('score');
    const lastScore = lastScoreElement.innerText;
    const finalScore = document.getElementById('final-score');
    finalScore.innerText = lastScore;
}

document.addEventListener('keyup', handleKeyPress)


function play() {
    hideElementById('home');
    showElementById('playground');
    continueGame();
}
// add bg color by id
function addBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function addRColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-red-400');
}
function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

