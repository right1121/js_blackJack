$(function(){

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

	drawed(){
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
	constructor(name){
		if ( name === undefined ) name = 'player';
		this._name = name;
		this._score = 0;
		this._cards = [];
		//Rules to draw two cards first.
		this.cards = deck.drawed();
		this.cards = deck.drawed();
	}

	set cards(card){
		this._cards.push(card);
		this.score = card;
	}

	get cards(){
		return this._cards;
	}

	set score(card){
		var score;
		score = card < 10 ? card : 10;
		this._score += score;
	}

	get score(){
		return this._score;
	}

};

var draw = function(player){
	player.cards = deck.drawed();
}

var deck = new Card();
var user = new Player();
var dealer = new Player("dealer");

});
