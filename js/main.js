// start js after DOM
document.addEventListener("DOMContentLoaded", function () {
    // declarations
    const gridContainer = document.querySelector('.grid');
    const startBtn = document.getElementById('playBtn');
    const inputLevel = document.getElementById('inputDifficult')

    // execution logic 
    startBtn.addEventListener('click', function () {
        // remove cards
        gridContainer.innerHTML = '';

        // selected level
        const level = inputLevel.value;

        // generate new grid
        if (level === 'easy') {
            for (let i = 1; i <= 100; i++) {
                let grid = genItems(i)
                gridContainer.append(grid)
            }
        } else if (level === 'medium') {
            for (let i = 1; i <= 81; i++) {
                let grid = genItems(i)
                gridContainer.append(grid)
            }
        } else if (level === 'hard') {
            for (let i = 1; i <= 49; i++) {
                let grid = genItems(i)
                gridContainer.append(grid)
            }
        }

        // add click to card
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.addEventListener('click', clickedBtn));
    });

    //functions
    // gen items function
    function genItems(text) {
        let items = document.createElement('div');
        items.classList.add('card')
        items.innerText = text;
        return items;
    }

    // clicked button function
    function clickedBtn(event) {
        event.target.style.setProperty('background-color', 'var(--senary-color)');
    }
});
