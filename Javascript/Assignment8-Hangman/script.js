var wordEl = document.getElementById('word');
var wrongLettersEl = document.getElementById('wrong-letters');
var playAgainBtn = document.getElementById('play-button');
var popup = document.getElementById('popup-container');
var notification = document.getElementById('notification-container');
var finalMessage = document.getElementById('final-message');
var figureParts = document.querySelectorAll('.figure-part');

var words = [ "everton", "liverpool", "swansea", "chelsea", "hull", "manchestercity", "newcastleunited"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let play = true;
var correctLetters = [];
var wrongLetters = [];

// Show hidden word
function displayWord() {
	wordEl.innerHTML = `
    ${selectedWord
			.split('')
			.map(
				letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
		)
		.join('')}
  `;

	var innerWord = wordEl.innerText.replace(/\n/g, '');

	if (innerWord === selectedWord) {
		finalMessage.innerText = ' You won! ';
		popup.style.display = 'flex';
		play = false;
	}
}

// Updating the wrong letters
function updateWrongLettersEl() {
	// Displaying wrong letters
	wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

	// Displaying  parts
	figureParts.forEach((part, index) => {
		var errors = wrongLetters.length;
		console.log("index"+index);

		if (index < errors) {
			part.style.display = 'block';
		} else {
			part.style.display = 'none';
		}
	});

	// Check if lost
	if (wrongLetters.length === figureParts.length) {
		finalMessage.innerText = 'Unfortunately you lost.';
		popup.style.display = 'inline-block';
		play = false;
	}
}

// Show notification
function showNotification() {
	notification.classList.add('show');

	setTimeout(() => {
		notification.classList.remove('show');
	}, 2000);
}

// Keydown letter press
window.addEventListener('keydown', e => {
	if (play) {
		if (e.keyCode >= 65 && e.keyCode <= 90) {
			var letter = e.key.toLowerCase();

			if (selectedWord.includes(letter)) {
				if (!correctLetters.includes(letter)) {
					correctLetters.push(letter);

					displayWord();
				} else {
					showNotification();
				}
			} else {
				if (!wrongLetters.includes(letter)) {
					wrongLetters.push(letter);

					updateWrongLettersEl();
				} else {
					showNotification();
				}
			}
		}
	}
});
playAgainBtn.addEventListener('click', () => {
	play = true;
	correctLetters.splice(0);
	wrongLetters.splice(0);
	selectedWord = words[Math.floor(Math.random() * words.length)];
	displayWord();
	updateWrongLettersEl();
	popup.style.display = 'none';
});

displayWord();


