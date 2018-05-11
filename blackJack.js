var deck
var user
var dealer
var gameOngoing = true;

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
		if ( name === undefined ) name = 'user';
		this._name = name;
		this._score = 0;
		this._cards = [];

		if ( name == 'dealer' ){
			this._field = $('div.dealer');
			this.cards = deck.drawed();
			this.cards = deck.drawed();
			$('.dealer > .card:last').text("");
		}else{
			this._field = $('div.user');
			this.cards = deck.drawed();
			this.cards = deck.drawed();
		}
		//Rules to draw two cards first.
	}

	set cards(card){
		this._cards.push(card);
		this.score = card;
		$(this._field).append('<div class = "card" style = "left: ' + (this.cards.length - 1) * 50 + 'px">' + card + '</div>');
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

deck = new Card();
user = new Player();
dealer = new Player("dealer");

var addRestart = function(){
	$('.field').append('<input class="restart" type="button" name="" value="やり直す">');
}

var draw = function(player){
	player.cards = deck.drawed();
}

var stand = function(){
	if (gameOngoing){
		draw(user);
		if (user.score > 21){
			$('.field').append('<p class = "game_over">You Loss</p>');
			gameOngoing = false;
			addRestart();
		}
	}
}

var hit = function(){
	if (gameOngoing){
		$('.dealer > .card:last').text(dealer.cards[1]);
		while(dealer.score < 17){
			draw(dealer);
		}
		gameOngoing = false;
	}
}

var judge = function(){
	if (user.score > dealer.score || dealer.score > 21){
			$('.field').append('<p class = "game_over">You Win</p>');
	}else{
			$('.field').append('<p class = "game_over">You Loss</p>');
	}
	addRestart();
}

$('#stand').on('click', function(){
	stand(user);
});

$('.field').on('click', '#hit' ,function(){
	hit();
	judge();
});

$('.field').on('click', '.restart' ,function(){
	location.reload();
});

});
