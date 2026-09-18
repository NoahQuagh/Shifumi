const actionList = ['rock', 'paper', 'scissor'];
let win = 0;
let draw = 0;
let lose = 0;
const winZone = document.getElementById('win');
const drawZone = document.getElementById('draw');
const loseZone = document.getElementById('lose');
const section = document.getElementById('result-display');



document.addEventListener("DOMContentLoaded", () => {
    const shifumiAction = document.querySelectorAll('.choice-btn');

    for (const action of shifumiAction) {
        action.addEventListener('click', () => {
            const playerChoice = action.id;
            const bot = botChoice();


            if (playerChoice === bot) {
                draw++;
            } else if (
                (playerChoice === 'rock' && bot === 'scissor') ||
                (playerChoice === 'paper' && bot === 'rock') ||
                (playerChoice === 'scissor' && bot === 'paper')
            ) {
                win++;
            } else {
                lose++;
            }

            winZone.textContent = win+" victoire";
            drawZone.textContent = draw+" égalité";
            loseZone.textContent = lose+" défaite";
        });
    }
});

/**
 * Choix du robot
 * @returns {string} retourne le choix du bot
 */
function botChoice() {
    const randomIndex = Math.floor(Math.random() * actionList.length);
    return actionList[randomIndex];
}

/**
 * Remise à 0 du score
 */
function resetScore(){
    win = 0;
    draw = 0;
    lose = 0;
    winZone.textContent = "0 victoire";
    drawZone.textContent = "0 égalité";
    loseZone.textContent = "0 défaite";
}