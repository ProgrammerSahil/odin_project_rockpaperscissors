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
    const resultContainer = document.querySelector('.resultContainer');

    if(computer == "Rock")
    {
        if(player == "Rock"){
            resultContainer.textContent = "Tie, Both Chose Rocks";
        }
        else if(player == "Paper"){
            resultContainer.textContent = "Player Wins, Paper beats Rock";
        }
        else{
            resultContainer.textContent = "Computer Wins, Rock beats Scissors";
        }
    }
    else if(computer == "Paper")
    {
        if(player == "Paper"){
            resultContainer.textContent = "Tie, Both Chose Paper";
        }
        else if(player == "Scissors"){
            resultContainer.textContent = "Player Wins, Scissors beats Paper";
        }
        else{
            resultContainer.textContent = "Computer Wins, Paper beats Rock";
        }
    }
    else
    {
        if(player == "Scissors"){
            resultContainer.textContent = "Tie, Both Chose Scissors";
        }
        else if(player == "Rock"){
            resultContainer.textContent = "Player Wins, Rock beats Scissors";
        }
        else{
            resultContainer.textContent = "Computer Wins, Scissors beats Paper";
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