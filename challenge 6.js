var scores, roundScores, activePlayer, gamePlaying;
init();
document.querySelector('.btn--roll').addEventListener('click', function() {
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-1').style.display= 'block';
        document.getElementById('dice-2').style.display= 'block';
        
        // change image
        document.getElementById('dice-1').src = 'images/dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'images/dice-' + dice2 + '.png';
         // add score to the Global score IF not 1
         // score update
         if (dice1 !== 1 && dice2 !== 1) {
             roundScores += dice1 + dice2;
             document.querySelector('#current--'+ activePlayer).textContent = roundScores;
         } else {
            // ternary operation used here
         nextPlayer();
         }
    }
})

document.querySelector('.btn--hold').addEventListener('click', function() {
//mutating score 0 basd on activePlayer
 if (gamePlaying) {
    scores[activePlayer] += roundScores;
    document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

    //input is set by players
    var input = document.querySelector('.final-score').value;
    var winningScore;
    if (input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }
    if (scores[activePlayer] >= winningScore) {
        document.getElementById('name--'+ activePlayer).textContent = 'WINNER!'
        document.getElementById('dice-1').style.display= 'none';
        document.getElementById('dice-2').style.display= 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
 }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.getElementById('dice-1').style.display= 'none';
    document.getElementById('dice-2').style.display= 'none';
}
//new game button 
document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display= 'none';
    document.getElementById('dice-2').style.display= 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1 ').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');
}
//querySelector
// document.querySelector('#current--'+ activePlayer).textContent = dice;
// document.querySelector('#current--'+ activePlayer).innerHTML = '<em>' + dice + '</em>'