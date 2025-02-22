const output = document.querySelector('.output');

const btn = document.querySelector('.btn')

output.textContent = 'Press Button to Start'
btn.textContent = 'Start Game';

btn.addEventListener('click', (e) => {
    createNewElement('input', output, 'input')
    
    
})

function createNewElement(type, parent, className){
    const element = document.createElement(type);
    parent.append(element);
    element.classList.add(className)
}


