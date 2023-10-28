const playerAvailableDecisions = document.querySelectorAll('.selection__area > div');
const selectionArea = document.querySelector('.selection__area');
const decisionArea = document.querySelector('.decision__area');
const scoreOutput = document.querySelector('.score');
const playAgainBtn = document.querySelector('.play__again');
const rulesBtn = document.querySelector('.rules__btn');
const closeRulesBtn = document.querySelector('.close');
const rules = document.querySelector('.rules__backdrop');
const playerDecisionOutput = document.querySelector('.player__decision > div');
const computerDecisionOutput = document.querySelector('.computer__decision > div');
const result = document.querySelector('.result');
const resultStatus = document.querySelector('.result h3');
const computerAvailableDecisions = ['rock', 'paper', 'scissors'];
let computerDecision;
let playerDecision;
let score = parseInt(localStorage.getItem('SCORE')) || 0;
scoreOutput.innerText = score.toString();
playerAvailableDecisions.forEach(playerAvailableDecision => {
    playerAvailableDecision.addEventListener('click', () => {
        decisionArea?.classList.remove('hide');
        selectionArea?.classList.add('hide');
        playerDecision = playerAvailableDecision.id;
        playerDecisionOutput?.classList.add(`${playerDecision}`);
        playerDecisionOutput.innerHTML = `<img src="Assets/images/icon-${playerDecision}.svg" alt="${playerDecision}">`;
        const randomNum = Math.floor(Math.random() * 3);
        computerDecision = computerAvailableDecisions[randomNum];
        computerDecisionOutput?.classList.add(`${computerDecision}`);
        computerDecisionOutput.innerHTML = `<img src="Assets/images/icon-${computerDecision}.svg" alt="${computerDecision}">`;
        if (playerAvailableDecision.id === computerDecision) {
            resultStatus.innerText = 'DRAW';
            playerDecisionOutput?.classList.add('winner');
            computerDecisionOutput?.classList.add('winner');
        }
        else if (playerAvailableDecision.id === 'paper') {
            if (computerDecision === 'scissors') {
                computerDecisionOutput?.classList.add('winner');
                resultStatus.textContent = 'YOU LOSE';
            }
            else if (computerDecision === 'rock') {
                playerDecisionOutput?.classList.add('winner');
                resultStatus.innerText = 'YOU WIN';
                score++;
                localStorage.setItem('SCORE', JSON.stringify(score));
            }
        }
        else if (playerAvailableDecision.id === 'scissors') {
            if (computerDecision === 'paper') {
                playerDecisionOutput?.classList.add('winner');
                resultStatus.innerText = 'YOU WIN';
                score++;
                localStorage.setItem('SCORE', JSON.stringify(score));
            }
            else if (computerDecision === 'rock') {
                computerDecisionOutput?.classList.add('winner');
                resultStatus.innerText = 'YOU LOSE';
            }
        }
        else if (playerAvailableDecision.id === 'rock') {
            if (computerDecision === 'scissors') {
                playerDecisionOutput?.classList.add('winner');
                resultStatus.innerText = 'YOU WIN';
                score++;
                localStorage.setItem('SCORE', JSON.stringify(score));
            }
            else if (computerDecision === 'paper') {
                computerDecisionOutput?.classList.add('winner');
                resultStatus.innerText = 'YOU LOSE';
            }
        }
        scoreOutput.innerText = score.toString();
        result?.classList.remove('hide');
    });
});
playAgainBtn?.addEventListener('click', () => {
    decisionArea?.classList.add('hide');
    selectionArea?.classList.remove('hide');
    computerDecisionOutput?.classList.remove('winner');
    playerDecisionOutput?.classList.remove('winner');
    computerDecisionOutput?.classList.remove(`${computerDecision}`);
    playerDecisionOutput?.classList.remove(`${playerDecision}`);
});
rulesBtn?.addEventListener('click', () => {
    rules?.classList.add('active');
});
closeRulesBtn?.addEventListener('click', () => {
    rules?.classList.remove('active');
});
/* Don't forget to install the typescript compiler,
you can do so by running the command: npm install -g typescript*/ 
