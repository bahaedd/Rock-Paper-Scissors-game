// Settiing the scores 
let computerScore = 1;
let playerScore = 1;

const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

// randomClass contains the icons
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissor"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');


//Game functionality
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            // random pick for player and computer
            let clickedBtn = e.target.className;
            showIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random()* randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];

            // Game Score
             // If it's a Tie .
           if(showIcon.className === computerShowIcon.className){
            pScore.innerHTML = pScore.innerHTML;
            cScore.innerHTML = cScore.innerHTML;
            text.innerHTML = "It's a Tie <i class='far fa-smile'></i>  ! ";
            text.style.color = 'orange';
            text2.innerHTML = text.innerHTML;
            text2.style.color = 'orange';
           }
           // if it's not a Tie.
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
            pScore.innerHTML = playerScore;
            playerScore++;
            text.innerHTML = "It's a Win <i class='far fa-smile-wink'></i>  ";
            text.style.color = 'rgb(1, 146, 1)';
            text2.innerHTML = text.innerHTML;
            text2.style.color = 'rgb(1, 146, 1)';
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
            cScore.innerHTML = computerScore;
            computerScore++;
            text.innerHTML = "You Loosed <i class='fas fa-sad-tear'></i>";
            text.style.color = 'red';
            text2.innerHTML = text.innerHTML;
            text2.style.color = 'red';
            }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
            cScore.innerHTML = computerScore;
            computerScore++;
            text.innerHTML = "You Loosed <i class='fas fa-sad-tear'></i>";
            text.style.color = 'red';
            text2.innerHTML = text.innerHTML;
            text2.style.color = 'red';
            }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
            pScore.innerHTML = playerScore;
            playerScore++;
            text.innerHTML = "It's a Win <i class='far fa-smile-wink'></i>  ";
            text.style.color = 'rgb(1, 146, 1)';
            text2.innerHTML = text.innerHTML;
            text2.style.color = 'rgb(1, 146, 1)';
            }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
            cScore.innerHTML = computerScore;
            computerScore++;
            text.innerHTML = "You Loosed <i class='fas fa-sad-tear'></i>";
            text.style.color = 'red';
            text2.innerHTML = text.innerHTML;
            text2.style.color = 'red';
            }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
            pScore.innerHTML = playerScore;
            playerScore++;
            text.innerHTML = "It's a Win <i style='color: yellow' class='far fa-smile-wink'></i>  ";
        }
        });
    });
}

game();

