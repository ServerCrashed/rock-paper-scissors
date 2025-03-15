const a = ["rock", "paper", "scissors"];
const na = [0,1,2];

let getComputerChoice = () => a[Math.floor(Math.random()*3)];

const message = `Enter the number pertaining to your choice:-
0 : rock
1 : paper
2 : scissors
`;
// let getHumanChoice = () => {
//     let pr = +prompt(message);
//     if(na.includes(pr)) return a[pr];
//     else {
//         alert("Invalid choice! Please choose from 0, 1 or 2 for their respective choices.");
//         return getHumanChoice();
//     }
    
// }

let humanScore=0, computerScore=0, humanSelection;
const rRes = document.querySelector("#resultRound");
const scoreboard = document.querySelector("#score");
scoreboard.textContent = `${humanScore}-${computerScore}`;

function playRound(hC, cC){
    if(hC===cC) rRes.textContent = `In this round: That's a tie! Both chose ${hC}.\n`;

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
    rRes.textContent = `In this round: You lose! ${cS} beats ${hS}.\n`;
}
function win(hS, cS){
    rRes.textContent = `In this round: You win! ${hS} beats ${cS}.\n`;
}

function playGame(){
    const b = document.querySelector(".buttons");
    b.addEventListener('click', (e)=>{
        const target = e.target;
        switch(target.id){
            case "rock" : humanSelection=a[0]; break;
            case "paper" : humanSelection=a[1]; break;
            case "scissors" : humanSelection=a[2]; break;
        }
        let compSelection = getComputerChoice();
        playRound(humanSelection, compSelection);
        scoreboard.textContent = `${humanScore}-${computerScore}`;
        if(humanScore===5 || computerScore===5){
            const gRes = document.querySelector("#resultGame");
            const Res = document.createTextNode(`Game over!`);
            if(humanScore > computerScore) Res.textContent+=" You won the game!";
            else Res.textContent+=" You lost!";
            gRes.appendChild(Res);
            b.style.pointerEvents = "none";
        }
    });
}
playGame();

