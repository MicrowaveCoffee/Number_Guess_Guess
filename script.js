const output = document.querySelector('.output');

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

output.textContent = 'Press Button to Start'
btn.textContent = 'Start Game';

const game = {guesses:0, guessValue:0, randomNum:0};

const random = randomNumber();
game.randomNum = random;



btn.addEventListener('click', (e) => {
    
    
    if(btn.textContent === 'Start Game') {
        output.textContent = 'Guess between 0 - 10';
        btn.textContent = 'Guess Value';
        input.style.display = 'block';
        
    } else if (btn.textContent === 'Guess Value') {
       const num = Number(input.value);
       game.guessValue = num;
       if(!num) {
        Swal.fire('Please Type In A Number Value')
       } return compareGuess()
    };
    
    
    
})

function compareGuess() {
    
    if(game.guessValue === game.randomNum) {
        input.value = ''
        Swal.fire('Congrats You Win')
        btn.textContent = 'Start'
        input.style.display = 'none';
    } else if (game.guessValue > game.randomNum) {
        Swal.fire('Guess Is Too High')
        input.value = ''
    } else if (game.guessValue < game.randomNum) {
        Swal.fire('Guess Is Too Low')
        input.value = ''
    }
    
}

function createNewElement(type, parent, className){
    const element = document.createElement(type);
    parent.append(element);
    element.classList.add(className)
}

function randomNumber() {
    return Math.floor(Math.random() * 10)
   
}


