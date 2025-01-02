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

    const currAlphaML = document.getElementById('screen-alpha');
    const crAlpha = currAlphaML.innerText;
    const expectedAlpha = crAlpha.toLowerCase();
    console.log(pressedKey, expectedAlpha);
    // check
    if (pressedKey === expectedAlpha) {
        console.log('get a point');
        continueGame();
        removeBgColorById(pressedKey);

    }
    else {
        console.log('loss');
        addRColorById(pressedKey);
    }

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

