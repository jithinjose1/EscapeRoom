function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    var fadeInterval = setInterval(function() {
        element.style.opacity = parseFloat(element.style.opacity) + 0.1;
        if (parseFloat(element.style.opacity) >= 1) {
            clearInterval(fadeInterval);
        }
    }, 100);
}

function fadeOut(element) {
    element.style.opacity = 1;

    var fadeInterval = setInterval(function() {
        element.style.opacity = parseFloat(element.style.opacity) - 0.1;
        if (parseFloat(element.style.opacity) <= 0) {
            clearInterval(fadeInterval);
            element.style.display = 'none';
        }
    }, 100);
}

function showWinner() {
    var winnerElement = document.getElementById('winner');
    winnerElement.style.display = 'block';
    winnerElement.classList.add('winnerAnimation');

    var rooms = document.getElementsByClassName('room');
    for (var i = 0; i < rooms.length; i++) {
        rooms[i].style.display = 'none';
    }
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
                alert('Congratulations! You escaped the virtual room!');
            } else {
                alert('Incorrect answer. Try again!');
            }
            break;
        default:
            break;
    }
}

/*

function showWinner() {
    document.getElementById('winner').style.display = 'block';
    document.getElementById('room3').style.display = 'none';
    document.getElementById('room2').style.display = 'none';
    document.getElementById('room1').style.display = 'none';
    document.getElementById('winner').classList.add('winner');
}

*/
