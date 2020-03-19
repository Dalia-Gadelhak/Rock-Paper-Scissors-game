// TO UPPERCASE THE FIRST LETTER ONLY:computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};

//play game
function play(e) {
  restart.style.play = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

//get computer choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//get game winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player' && scoreboard.player<10){
    //increment the player score
    scoreboard.player++;
    //show modal result
    result.innerHTML = `
        <h1 class="text-win"> You Win! </h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
           computerChoice.slice(1)}</strong>
         </p>`;

  } else if (scoreboard.computer === 10) {
    result.innerHTML = `
        <h1 class="text-win">Hard Luck!</h1>
         <h2><strong>Computer Wins!</strong></h2>`;
    restartGame();
    
  } else if (scoreboard.player === 10) {
    result.innerHTML = `
        <h2 class="text-win">CONGRATULATIONS!</h2>
        <i class="fas fa-thumbs-up fa-10x"></i>
         <h2><strong>You Win!</strong><h2>`;
    restartGame();

  } else if (winner === 'computer'&& scoreboard.computer<10) {
    //increment the computer score
    scoreboard.computer++;
    //show modal result
    result.innerHTML = `
        <h1 class="text-lose">You Lose!</h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
           computerChoice.slice(1)}</strong>
         </p>`;
  } else {
    result.innerHTML = `
         <h1>It's a Draw!</h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
           computerChoice.slice(1)}</strong>
         </p>`;
  }
  //show score
  score.innerHTML = `<p>Player:${scoreboard.player}</p>
        <p>Computer:${scoreboard.computer}</p>`;

  modal.style.display = 'block';
}

//restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
   <p>Player: 0 </p>
   <p>Computer: 0 </p>
   `;
}

//clear modal
function clearModal(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

/**else if( winner==='computer' && scoreboard.computer === 3) {
            restartGame();
            modal.style.display = 'block';
            result.innerHTML = `
            <h1 class="text-win">Hard luck!</h1>
             <strong>Computer Wins!</strong>
             <i class="fas fa-thumbs-down fa-10x">; */
