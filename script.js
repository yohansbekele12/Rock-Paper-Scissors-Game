
const choice=['rock' ,'paper' , 'scissor'];
const playerDisplay=document.getElementById('playerDisplay');
const computerDisplay=document.getElementById('computerDisplay');
const resultDisplay=document.getElementById('resultDisplay');
const playerScore =document.getElementById('playerScoreValue');
const computerScore =document.getElementById('computerScoreValue');
let playerScoreValue=0;
let computerScoreValue=0;

 
function playGame(playerChoice){
    
    const computerChoice=choice[Math.floor(Math.random()*3)];
    let result="";


    if(playerChoice === computerChoice){
        result= "IT'S A TIE !";
    }
    else{
        switch(playerChoice){
            case 'rock':
                result=(computerChoice === 'scissors') ? "YOU WIN 😃 !":"YOU LOSE 😭!";
                break;
            case 'paper':
                result=(computerChoice === 'rock') ? "YOU WIN 😃 !":"YOU LOSE 😭!";
                break;
            case'scissor':
                result=(computerChoice === 'paper') ? "YOU WIN 😃 !":"YOU LOSE 😭!";
                break;
        }
    }
    playerDisplay.textContent=`PLAYER :${playerChoice}`;
    computerDisplay.textContent=`COMPUTER :${computerChoice}`;
    resultDisplay.textContent= result;

       resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case 'YOU WIN 😃 !':
            resultDisplay.classList.add("greenText");
            playerScoreValue ++;
            playerScore.textContent=`PLAYER SCORE ${playerScoreValue}`;
            break;
        case 'YOU LOSE 😭!':
            resultDisplay.classList.add("redText");
            computerScoreValue ++;
            computerScore.textContent=`COMPUTER SCORE ${computerScoreValue}`;
            break;
}
            
    }

    
   