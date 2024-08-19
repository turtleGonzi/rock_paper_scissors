/* 
getComputerChoice()
vytvorim si promennou pro volbu
dam si do promennych moznosti vyberu kamen,nuzky,papir
vygeneruji nahodne cislo, vynasobim ho 3 a vynasobim 10, zaroven ho zaokrouhlim, aby to bylo cele cislo
priradim kazde hodnote moznost vyberu
dle cisla ulozim volbu


getHumanChoice()
dotaz uzivatele na volbu
ulozit volbu do nove promenne
odeslat volbu
*/

let humanScore = 0;
let computerScore = 0;
const textOutput = document.querySelector('div');
let score = document.createElement('p');
score.textContent = 'SCORE: YOU: 0 COMPUTER: 0';
textOutput.appendChild(score);

function reset(){
    humanScore = 0;
    computerScore = 0;
    score.textContent = 'SCORE: YOU: 0 COMPUTER: 0';
    //odstranuje logy o hre
    ps = document.querySelectorAll('.log');
    ps.forEach(p =>
        p.remove()
    )
}


function createP(text) {
    const p = document.createElement('p');
    p.classList = "log";
    p.textContent = text;
    textOutput.appendChild(p);
}


function getComputerChoice() {
    let randomNumer = Math.floor((Math.random() * 3) + 1);
    let volba;
    switch(randomNumer) {
        case 1:
            volba = 'rock';
        break;
        case 2:
            volba = 'paper';
        break;
        case 3:
            volba = "scissors";
        break;
    }
    return volba;
}


function playRound(humanChoice, computerChoice) {
    let vysledek;
    if(humanChoice === computerChoice) {
        vysledek = "Tie!"
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        vysledek = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        vysledek = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }

    
    createP(vysledek);
    score.textContent = `SCORE: YOU: ${humanScore} COMPUTER: ${computerScore}`;
}

function declaresWinner() {
    if(humanScore > computerScore && (humanScore === 5 || computerScore === 5)) {
        alert("YOU WIN!!");
        reset();
    }
    else if (humanScore < computerScore && (humanScore === 5 || computerScore === 5)) {
        alert("YOU LOSE!!");
        reset();
    }
}


const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const choice = event.target.textContent.toLowerCase();
        playGame(choice);
    })
})


function playGame(choice) {
    playRound(choice, getComputerChoice());
declaresWinner();
}