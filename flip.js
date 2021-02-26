// const colors = [ 1, 1, 2, 2, 0, 0, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8 ];
const colors = [ 1, 1, 2, 2, 0, 0 ];
const pic = [
	'images/kitten_1.jpg',
	// 'images/kitten_6.jpg',
	// 'images/kitten_8.jpg',
	// 'images/kitten_9.jpg',
	// 'images/puppies_1.jpg',
	// 'images/puppies_2.jpg',
	// 'images/puppies_3.jpg',
	'images/puppies_7.jpg',
	'images/puppies_10.jpg'
];
let cardSelect;
let count = 0;
let x, cur, pre;
let cardNo = 0;
let cardMax = 6;
let flipCard;
let cardArr = [];

$('#newGame').click(function() {
	onLoad();
	let welcome = document.getElementById('welcome');
	$(welcome).addClass('hide');
});

function onLoad() {
	for (let i = 0; i < colors.length; i++) {
		let x = Math.round(Math.random() * (colors.length - 1));
		let temp = colors[i];
		colors[i] = colors[x];
		colors[x] = temp;
	}
	let row = document.querySelector('#cardRow');
	for (cardNo; cardNo < cardMax; cardNo++) {
		flipCard = document.createElement('div');
		flipCard.setAttribute('class', 'card');
		flipCard.setAttribute('id', cardNo);
		flipCard.setAttribute('onclick', 'clicked(' + cardNo + ')');
		let cardFront = document.createElement('div');
		cardFront.setAttribute('class', 'inner front');
		cardFront.innerHTML = '?';
		let cardBack = document.createElement('div');
		cardBack.setAttribute('class', 'inner back b' + cardNo + '');

		row.appendChild(flipCard);
		flipCard.appendChild(cardFront);
		flipCard.appendChild(cardBack);
	}
}

// setBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	for (let i = 0; i < colors.length; i++) {
// 		let x = Math.round(Math.random() * (colors.length - 1));
// 		let temp = colors[i];
// 		colors[i] = colors[x];
// 		colors[x] = temp;
// 	}
// 	console.log(colors);
// });

function clicked(cardNo) {
	let cardToFlip = document.getElementById(cardNo);
	// var clickDisabled = false;

	// do your real click processing here
	// if ((x = count % 2) == 0) {
	// 	clickDisabled = true;
	// 	if (clickDisabled) return;
	// 	setTimeout(function() {
	// 		clickDisabled = false;
	// 	}, 3000);
	// }

	cardArr[count] = cardNo;
	if (cardNo != cardArr[count - 1]) count++;
	console.log(cardArr);
	$(cardToFlip).addClass('is-flipped', 2000);

	$('.b' + cardNo + '> img').remove();
	$('.b' + cardNo).append("<img src='" + pic[colors[cardNo]] + "' />");

	if ((x = count % 2) == 0) {
		cur = cardArr[count - 1];
		pre = cardArr[count - 2];

		// console.log('cur: ' + cur + '\npre: ' + pre);
		// console.log('color at cur: ' + colors[cur] + '\ncolor at pre: ' + colors[pre]);
		if (colors[cur] == colors[pre]) {
			$(cardToFlip).delay(500).addClass('match', 1000).delay(800).addClass('afterMatch', 1000);
			cardToFlip = document.getElementById(pre);
			$(cardToFlip).delay(500).addClass('match', 1000).delay(800).addClass('afterMatch', 1000);
		} else {
			$(cardToFlip).delay(1500).removeClass('is-flipped', 1000);
			cardToFlip = document.getElementById(pre);
			$(cardToFlip).delay(1500).removeClass('is-flipped', 1000);
		}
	}
}
// onLoad();
