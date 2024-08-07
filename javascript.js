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

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumer = Math.floor((Math.random() * 3) + 1);
    let volba;
    switch(randomNumer) {
        case 1:
            volba = rock;
        break;
        case 2:
            volba = paper;
        break;
        case 3:
            volba = scissors;
        break;
    }
    return volba;
}

function getHumanChoice() {
    let volba = prompt('Choose: rock, paper or scissors').toLocaleLowerCase();
    if(volba === rock || volba === paper || volba === scissors) {
        return volba;
    } else {
        alert(`Wrong input. Let's try it again.`)
        getHumanChoice();
    }
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
    console.log(vysledek);
    console.log(`YOU: ${humanScore} COMPUTER: ${computerScore}`);
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > computerScore) console.log("YOU WON!!")
    else if (humanScore < computerScore) console.log("YOU LOSE!!");
    else console.log("TIE!!")
}

playGame();