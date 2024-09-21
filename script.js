const emojis = ["😁", "😁", "😎", "😎", "🎶", "🎶", "🫠", "🫠", "🤡", "🤡", "👽", "👽", "💩", "💩", "❤️", "❤️"];
const timerElement = document.getElementById('time');
let timeRemaining = 60; 
let timer; 


function startTimer() {
    timer = setInterval(function () {
        timeRemaining--;
        timerElement.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert('You Lose! Time is up.');
            resetGame();
        }
    }, 1000);
}

function startGame() {
    document.querySelector('.play').disabled = true; 
    startTimer(); 
}
function resetGame() {
    clearInterval(timer);
    window.location.reload();
}

function handleWin() {
    alert('You Win!');
    clearInterval(timer);
    document.querySelector('.play').disabled = false;
}

var randomEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement(`div`)
    box.className = `item`;
    box.innerHTML = randomEmojis[i];
    box.onclick = function () {
        this.classList.add(`boxOpen`);
        setTimeout(function () {
            if (document.querySelectorAll(`.boxOpen`).length > 1) {
                if (document.querySelectorAll(`.boxOpen`)[0].innerHTML == document.querySelectorAll(`.boxOpen`)[1].innerHTML) {
                    document.querySelectorAll(`.boxOpen`)[0].classList.add(`boxMatch`);
                    document.querySelectorAll(`.boxOpen`)[1].classList.add(`boxMatch`);
                    document.querySelectorAll(`.boxOpen`)[1].classList.remove(`boxOpen`);
                    document.querySelectorAll(`.boxOpen`)[0].classList.remove(`boxOpen`);
                    if (document.querySelectorAll(`.boxMatch`).length == emojis.length) {
                        handleWin();
                    }
                } else {
                    document.querySelectorAll(`.boxOpen`)[1].classList.remove(`boxOpen`);
                    document.querySelectorAll(`.boxOpen`)[0].classList.remove(`boxOpen`);
                }
            }
        }, 500);
    }

    document.querySelector(`.game`).appendChild(box);
}
