var playerCards;
var dealerCards;

class Card {
	constructor(){
		this._cards = []
		for (var i = 1; i <= 52; i++) {
			this._cards.push(i);
		}
	}

	get remaining(){
		return this._cards;
	}

	_shuffleCard(){
		for(var i = this._cards.length - 1; i > 0; i--){
	    var r = Math.floor(Math.random() * (i + 1));
	    var tmp = this._cards[i];
	    this._cards[i] = this._cards[r];
	    this._cards[r] = tmp;
		}
	}
}

$(function(){
	var cards = new Card();
	console.log(cards.remaining);
});
