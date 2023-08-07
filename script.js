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

function game(){
    let P = 0;
    let C = 0;

    for(let i = 0; i < 5; i++){
        if(playRound(getComputerChoice(), playerSelection()) == "computer"){ C++;}
        else if(playRound(getComputerChoice(), playerSelection())== "player"){ P++;}
    }
    if(P>C){
        console.log("Player Wins");
    }
    else if(C>P){
        console.log("Computer Wins");
    }
    else{
        console.log("NObody Won")
    }
}

game();