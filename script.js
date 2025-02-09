const a = ["rock", "paper", "scissors"];
const na=[0,1,2];

let getComputerChoice = () => a[Math.floor(Math.random()*3)];

const message = `Enter the number pertaining to your choice:-
0 : rock
1 : paper
2 : scissors
`;
let getHumanChoice = () => {
    let pr = +prompt(message);
    if(na.includes(pr)) return a[pr];
    else {
        alert("Invalid choice! Please choose from 0, 1 or 2 for their respective choices.");
        return getHumanChoice();
    }
    
}

function playGame(){
    let humanScore=0, computerScore=0;

    function playRound(hC, cC){
        if(hC===cC) console.log(`That's a tie! Both chose ${hC}.`);

        else if((hC==="rock" && cC==="scissors") || (hC==="paper" && cC==="rock") || (hC==="scissors" && cC==="paper")){
            win(hC, cC);
            humanScore+=1;
        }
        else if((hC==="rock" && cC==="paper") || (hC==="paper" && cC==="scissors") || (hC==="scissors" && cC==="rock")){
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
        playRound(humanSelection, compSelection);
    }

    if(humanScore > computerScore) console.log("You won the game!");
    else if(humanScore < computerScore) console.log("You lost!");
    else console.log("Tied!");
}

playGame();