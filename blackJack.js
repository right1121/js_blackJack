class Card {
	constructor(){
		this._cards = []
		for (var i = 1; i <= 52; i++) {
			this._cards.push(i);
		}
	}

	get remaining(){
		//残りのカード
		return this._cards;
	}

	draw(){
		this._shuffle();
		var card = this._cards[0];
		card = (card - 1)%13+1;

		this._cards.shift();
		return card;
	}

	_shuffle(){
		for(var i = this._cards.length - 1; i > 0; i--){
	    var r = Math.floor(Math.random() * (i + 1));
	    var tmp = this._cards[i];
	    this._cards[i] = this._cards[r];
	    this._cards[r] = tmp;
		}
	}
};

class Player {
	constructor(cards,name){
		if ( name === undefined ) name = 'player';
		this._name = name;
		//Rules to draw two cards first.
		var card = [];
		card.push(cards.draw());
		card.push(cards.draw());
		this._cards = card;
	}

	get cards(){
		return this._cards;
	}

	set cards(card){
		this._cards.push(card);
	}
};

var start = function(){
	cards = new Card();
	user = new Player(cards);
	dealer = new Player(cards, "dealer");

	user.cards = cards.draw();
	console.log(user.cards);
};

var draw = function(player, cards){

}

var cards;
var user;
var dealer;

$(function(){
	start();
});
