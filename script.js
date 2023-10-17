function fadeIn(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear'
    });
}

function fadeOut(element) {
    anime({
        targets: element,
        opacity: [1, 0],
        duration: 1000,
        easing: 'linear',
        complete: function() {
            element.style.display = 'none';
        }
    });
}

function checkAnswer(roomId) {
    var userInput = document.getElementById(roomId + '-input').value.toLowerCase();

    switch(roomId) {
        case 'room1':
            if (userInput === 'answer1') {
                fadeOut(document.getElementById(roomId));
                fadeIn(document.getElementById('room2'));
            } else {
                alert('Incorrect answer. Try again!');
            }
            break;
        case 'room2':
            if (userInput === 'answer2') {
                fadeOut(document.getElementById(roomId));
                fadeIn(document.getElementById('room3'));
            } else {
                alert('Incorrect answer. Try again!');
            }
            break;
        case 'room3':
            if (userInput === 'answer3') {
                showWinner();
            } else {
                alert('Incorrect answer. Try again!');
            }
            break;
        default:
            break;
    }
}

function showWinner() {
    var winnerElement = document.getElementById('winner');
    winnerElement.style.display = 'block';

    anime({
        targets: winnerElement,
        scale: [1, 1.2],
        opacity: [1, 0],
        duration: 1000,
        easing: 'easeOutCubic'
    });
}
