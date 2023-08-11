const availableChoices = ["Rock", "Paper", "Scissors"];



function getComputerChoice(){
    choice = Math.floor(Math.random()*3);
    return availableChoices[choice];
}

function playerSelection(){
    playerChoice = prompt("Choose Between Rock, Paper, Scissors: ");
    return playerChoice;
}

function playRound(computer, player)
{
    if(computer == "Rock")
    {
        if(player == "Rock"){
            console.log("Tie, Both Chose Rocks");
            return "none";
        }
        else if(player == "Paper"){
            console.log("Player Wins, Paper beats Rock");
            return "player";
        }
        else{
            console.log("Computer Wins, Rock beats Scissors");
            return "computer";
        }
    }
    else if(computer == "Paper")
    {
        if(player == "Paper"){
            console.log("Tie, Both Chose Paper");
            return "none";
        }
        else if(player == "Scissors"){
            console.log("Player Wins, Scissors beats Paper");
            return "player";
        }
        else{
            console.log("Computer Wins, Paper beats Rock");
            return "computer";
        }
    }
    else
    {
        if(player == "Scissors"){
            console.log("Tie, Both Chose Scissors");
            return "none";
        }
        else if(player == "Rock"){
            console.log("Player Wins, Rock beats Scissors");
            return "player";
        }
        else{
            console.log("Computer Wins, Scissors beats Paper");
            return "computer";
        }
    }
}



window.onload=function(){
    
    const rockbtn = document.querySelector('#rock');
    rockbtn.addEventListener('click', () => playRound(getComputerChoice(), availableChoices[0]));

    const paperbtn = document.querySelector('#paper');
    paperbtn.addEventListener('click', () => playRound(getComputerChoice(), availableChoices[1]));

    const scissorsbtn = document.querySelector('#scissors');
    scissorsbtn.addEventListener('click', () => playRound(getComputerChoice(), availableChoices[2]));

  }