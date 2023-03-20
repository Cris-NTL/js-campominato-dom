// declarations
const gridContainer = document.querySelector('.grid');
const startBtn = document.getElementById('playBtn');
const inputLevel = document.getElementById('inputDifficult');
let bombIndexes;
let numSafeCards;

// execution logic 
startBtn.addEventListener('click', function () {
    // remove cards
    gridContainer.innerHTML = '';

    // selected level
    const level = inputLevel.value;

    // generate new grid
    if (level === 'easy') {
        numSafeCards = 84;
        generateGrid(100);
    } else if (level === 'medium') {
        numSafeCards = 65;
        generateGrid(81);
    } else if (level === 'hard') {
        numSafeCards = 33;
        generateGrid(49);
    }
});

//functions
// gen items function
function genItems(index) {
    let items = document.createElement('div');
    items.classList.add('card')
    items.innerText = index;
    if (bombIndexes.includes(index - 1)) {
        items.setAttribute('data-bomb', 'true');
    } else {
        items.setAttribute('data-safe', 'true');
    }
    return items;
}

// clicked button function
function clickedBtn(event) {
    if (event.target.getAttribute('data-bomb') === 'true') {
        // end game
        const bombs = document.querySelectorAll('[data-bomb]');
        bombs.forEach(bomb => bomb.style.setProperty('background-color', 'var(--septenary-color)'));
        alert('Game Over!');
    } else if (event.target.getAttribute('data-safe') === 'true') {
        event.target.removeAttribute('data-safe');
        event.target.style.setProperty('background-color', 'var(--secondary-color)');
        numSafeCards--;
        if (numSafeCards === 0) {
            // win game
            alert('You Win!');
        }
    }
}

function generateGrid(numCards) {
    bombIndexes = [];
    while (bombIndexes.length < 16) {
        let randomIndex = Math.floor(Math.random() * numCards);
        if (!bombIndexes.includes(randomIndex)) {
            bombIndexes.push(randomIndex);
        }
    }
    
    numSafeCards = numCards - 16;
    
    for (let i = 1; i <= numCards; i++) {
        let grid = genItems(i);
        gridContainer.append(grid);
    }

    // add click to card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', clickedBtn));
}

