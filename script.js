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

function checkAnswer(roomId) {
    var userInput = document.getElementById(roomId + '-input').value.toLowerCase();

    switch(roomId) {
        case 'room1':
            if (userInput === 'answer1') {
                fadeOut(document.getElementById(roomId));
                fadeIn(document.getElementById('room2'));
            } else {
                window.open('popup.html', 'Popup', 'width=300,height=200,left=100,top=100');
            }
            break;
        case 'room2':
            if (userInput === 'answer2') {
                fadeOut(document.getElementById(roomId));
                fadeIn(document.getElementById('room3'));
            } else {
                window.open('popup.html', 'Popup', 'width=300,height=200,left=100,top=100');
            }
            break;
        case 'room3':
            if (userInput === 'answer3') {
                window.open('popup_correct.html', 'Popup', 'width=300,height=200,left=100,top=100');
            } else {
                window.open('popup.html', 'Popup', 'width=300,height=200,left=100,top=100');
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

