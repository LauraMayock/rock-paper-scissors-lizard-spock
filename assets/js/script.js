// Selecting elements from HTML.
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

// Storing the scores.
let computerScore = 1;
let playerScore = 1;

//font awsome icons 
let rockIcon = "fas fa-hand-rock";
let paperIcon = "fas fa-hand-paper";
let scissorsIcon = "fas fa-hand-scissors";
let spockIcon = "fa-solid fa-hand-spock";
let lizardIcon = "fa-solid fa-hand-lizard";


const randomClasses = [rockIcon, paperIcon, scissorsIcon, spockIcon, lizardIcon];
// comment on outcome of on each round
const text = document.getElementById('text');
const text2 = document.getElementById("text2");

const tie = ()=>{
    text.innerHTML = "It's a Tie ! ";
    text.style.color = 'orange';
}

const win = ()=>{
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
}

const lose = ()=>{
    text.innerHTML = "You Lost ! ";
    text.style.color = 'red';
}

// Game Functionality.
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and clicked ones for the player
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];

           // If it's a Tie .
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               tie();
           }

           // if it's not a Tie.
           else if(showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               text2.innerHTML = "Rock crushes Scissors";
               win();
           }else if(showIcon.className === rockIcon && computerShowIcon.className === lizardIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               text2.innerHTML = "Rock crushes Lizard";
               win();
           }else if(showIcon.className === rockIcon && computerShowIcon.className === spockIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               text2.innerHTML = "Spock vaporizes Rock";
               lose();
           }else if(showIcon.className === rockIcon && computerShowIcon.className === paperIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               text2.innerHTML = "Paper covers Rock";
               lose();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === spockIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               text2.innerHTML = "Paper disproves Spock";
               win();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === rockIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               text2.innerHTML = "Paper covers Rock";
               win();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon){
                pScore.innerHTML = playerScore;
                text2.innerHTML = "Scissors cuts Paper";
                playerScore++;
                lose();
            }else if(showIcon.className === paperIcon && computerShowIcon.className === lizardIcon){
                cScore.innerHTML = computerScore;
                text2.innerHTML = "Lizard eats Paper";
                computerScore++;
                lose();
            }else if(showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon){
                cScore.innerHTML = computerScore;
                text2.innerHTML = "Scissors cuts Paper";
                computerScore++;
                win();
            }else if(showIcon.className === scissorsIcon && computerShowIcon.className === lizardIcon){
                pScore.innerHTML = playerScore;
                text2.innerHTML = "Scissors decapitates Lizard";
                playerScore++;
                win();
            }else if(showIcon.className === scissorsIcon && computerShowIcon.className === spockIcon){
                cScore.innerHTML = computerScore;
                text2.innerHTML = "Spock smashes Scissors";
                computerScore++;
                lose();
            }else if(showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon){
                pScore.innerHTML = playerScore;
                text2.innerHTML = "Rock crushes Scissors";
                playerScore++;
                lose();
            }else if(showIcon.className === spockIcon && computerShowIcon.className === rockIcon){
                cScore.innerHTML = computerScore;
                text2.innerHTML = "Spock vaporizes Rock";
                computerScore++;
                win();
            }else if(showIcon.className === spockIcon && computerShowIcon.className === scissorsIcon){
                pScore.innerHTML = playerScore;
                text2.innerHTML = "Spock smashes Scissors";
                playerScore++;
                win();
            }else if(showIcon.className === spockIcon && computerShowIcon.className === paperIcon){
                cScore.innerHTML = computerScore;
                text2.innerHTML = "Paper disproves Spock";
                computerScore++;
                lose();
            }else if(showIcon.className === spockIcon && computerShowIcon.className === lizardIcon){
                cScore.innerHTML = computerScore;
                text2.innerHTML = "Lizard poisons Spock";
                computerScore++;
                lose();
            }else if(showIcon.className === lizardIcon && computerShowIcon.className === paperIcon){
                pScore.innerHTML = playerScore;
                text2.innerHTML = "Lizard eats Paper";
                playerScore++;
                win();
            }else if(showIcon.className === lizardIcon && computerShowIcon.className === spockIcon){
                cScore.innerHTML = computerScore;
                text2.innerHTML = "Lizard poisons Spock";
                computerScore++;
                win();
            }else if(showIcon.className === lizardIcon && computerShowIcon.className === rockIcon){
                pScore.innerHTML = playerScore;
                text2.innerHTML = "Rock crushes Lizard";
                playerScore++;
                lose();
            }else if(showIcon.className === lizardIcon && computerShowIcon.className === scissorsIcon){
                cScore.innerHTML = computerScore;
                text2.innerHTML = "Scissors decapitates Lizard";
                computerScore++;
                lose();

           }
        });
    });
}

// Run the game.
game();

// modal button 
let modal = document.getElementById("myModal");

// get the button to opent the modal
let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];
//function runs when the user clicks the button 
myBtn.onclick = function() {
    modal.style.display = "block";
}
//close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

//modal will also close if the user clicks outside the modal area
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}