var generateCard = function(){
	var cards = [];
	for (var i = 1; i <= 52; i++) {
		cards.push(i);
	}
	return cards;
};

$(function(){
var cards = generateCard();

console.log(cards);
});
