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

function play() {
    hideElementById('home');
    showElementById('playground');
    continueGame();
}
// add bg color by id
function addBgColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');

}

