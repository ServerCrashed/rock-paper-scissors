const a = ["rock", "paper", "scissors"];

let getComputerChoice = () => a[Math.floor(Math.random()*3)];

const message = `Enter the number pertaining to your choice:-
0 : rock
1 : paper
2 : scissors
`;
let getHumanChoice = () => a[+prompt(message)];

function playGame(){
    let humanScore=0, computerScore=0;

    function playRound(hC, cC){
        if(hC===cC) console.log("That's a tie!");

        else if(hC==="rock" && cC==="scissors") {
            win(hC, cC);
            humanScore+=1;
        }
        else if(hC==="rock" && cC==="paper") {
            lose(hC, cC); 
            computerScore+=1;
        }

        else if(hC==="paper" && cC==="rock") {
            win(hC, cC);
            humanScore+=1;
        }
        else if(hC==="paper" && cC==="scissors") {
            lose(hC, cC); 
            computerScore+=1;
        }

        else if(hC==="scissors" && cC==="paper") {
            win(hC, cC);
            humanScore+=1;
        }
        else if(hC==="scissors" && cC==="rock") {
            lose(hC, cC); 
            computerScore+=1;
        }
    }
    function lose(hS, cS){
        console.log(`You lose! ${cS} beats ${hS}.`);
    }
    function win(hS, cS){
        console.log(`You win! ${hS} beats ${cS}.`);
    }

    for(let i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let compSelection = getComputerChoice();
        console.log(compSelection);

        playRound(humanSelection, compSelection);
    }

    if(humanScore > computerScore) console.log("You won the game!");
    else if(humanScore < computerScore) console.log("You lost!");
    else console.log("Tied!");
}

playGame();