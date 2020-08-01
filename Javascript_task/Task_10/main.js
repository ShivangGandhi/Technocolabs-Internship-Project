//function to get users choice
const getUserChoice = userInput => {
 userInput = userInput.toLowerCase(); 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } 
  else {
    console.log('Error!');
  }
};

//function to generate random computer choice
function getComputerChoice() {
 switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
	}
};

//determining winner by comparision
function determineWinner(userChoice, computerChoice){
	if(userChoice === computerChoice){
		return "Game is a tie!."
	}
	
	else if(userChoice === "rock" & computerChoice === "paper"){
		return "You loose!";
	}
	
	else if(userChoice === "paper" & computerChoice === "scissors"){
		return "You loose!";
	}
	
	else if(userChoice === "scissors" & computerChoice === "rock"){
		return "You loose!";
	}
	
	else{
		return "You Win!!!!"
	}
}

//all the functions are called by playgame function
function playGame(){
	let userChoice = getUserChoice('paper');
	const computerChoice = getComputerChoice();
	console.log('You threw: ' + userChoice);
	console.log('The computer threw: ' + computerChoice);
	console.log(determineWinner(userChoice,computerChoice));
}
	
playGame();

