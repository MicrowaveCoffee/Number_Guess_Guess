const output = document.querySelector('.output');

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

output.textContent = 'Press Button to Start'
btn.textContent = 'Start Game';

const game = {guesses:0, guessValue:0}

btn.addEventListener('click', (e) => {
    
    if(btn.textContent === 'Start Game') {
        output.textContent = 'Guess between 0 - 10';
        btn.textContent = 'Guess Value';
        input.style.display = 'block';
        
    } else if (btn.textContent === 'Guess Value') {
       const num = parseInt(input.value);
       console.log(typeof(num));
    }
    
    
    // const returnedRandomValue = randomNumber();
    
    
    
})

function compareGuess() {

}

function createNewElement(type, parent, className){
    const element = document.createElement(type);
    parent.append(element);
    element.classList.add(className)
}

function randomNumber() {
    const random = Math.floor(Math.random() * 10)
    return random
}


