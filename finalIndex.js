
//Creating a class for Card
class Card {
    constructor( suit, value ) {
        this.suit = suit;
        this.value = value;
    }
}

//Creating a class for deck
class Deck {
    constructor() {
        this.cards = [];
    }

    // Creates a deck making an array of cards
    createDeck() {
        let suits = [ "Spades", "Diamonds", "Clubs", "Hearts" ];
        let values = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14" ];

        for( let i = 0; i < suits.length; i++ ) {
            for( let j = 0; j < values.length; j++ ) {
                    this.cards.push( new Card( suits[ i ], values[ j ] ) ); 
            }   
        }     
    }

    //shuffle method to insure fair play
    shuffleDeck() {
        let randomOne, randomTwo, finalDeck;
        for( let i = 0; i < 100; i++ ) {
            randomOne = Math.floor( ( Math.random() * this.cards.length ) );
            randomTwo = Math.floor( ( Math.random() * this.cards.length ) );
            finalDeck = this.cards[ randomOne ];
            this.cards[ randomOne ] = this.cards[ randomTwo ];
            this.cards[ randomTwo ] = finalDeck;
        }
    }
}


//Creating a class for palyers
class Player {
    constructor( name ){
        this.playerName = name;
        this.playerCards = [];
        this.playerScore = 0;
    }   
}

//Creating a class for the game war
class PlayWar {
    constructor() {
        this.players = [];
    }
    //Starts the game and creates the players
    start() {
        alert( "Would you like to play a game of War?" );
        let playerOneName = prompt( "Please enter the name of player one: " );
        this.players.push( new Player( playerOneName ) );
        let playerTwoName = prompt( "Please enter the name of player two: " ) ;
        this.players.push( new Player( playerTwoName ) );
        this.players[ 0 ].playerScore = 0;
        this.players[ 1 ].playerScore = 0;
    } 

    //Deals cards to both players
    dealDeck() {
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();
        this.players[ 0 ].playerCards = newDeck.cards.slice( 0,26 );
        this.players[ 1 ].playerCards = newDeck.cards.slice( 26,52 );
    }

    //Compare method that checks to see who won than increments there score aswell as logs there hands for the round of the game being played
    // Also declares the winner with scores from both players in an alert message.
    compareCards() {
        let handOne = this.players[ 0 ].playerCards;
        let handTwo = this.players[ 1 ].playerCards;
        
        while( this.players[ 0 ].playerCards.length > 0 ) {
            let playerOneCard = handOne.shift();
            let playerTwoCard = handTwo.shift(); 
        
            if( +playerOneCard.value > +playerTwoCard.value ) {
                this.players[ 0 ].playerScore += 1;
                console.log( this.players[ 0 ].playerName, "earns one point with", playerOneCard, "over", `${this.players[ 1 ].playerName}s`, playerTwoCard );
    
                } else if( +playerOneCard.value < +playerTwoCard.value ) {
                this.players[ 1 ].playerScore += 1;
                console.log( this.players[ 1 ].playerName, "earns one point with", playerTwoCard, "over", `${this.players[ 0 ].playerName}s`, playerOneCard);
                
                } else {
                console.log( "Its a tie!", playerOneCard, playerTwoCard );
            }
        }
            if( this.players[ 0 ].playerScore > this.players[ 1 ].playerScore ){
            alert( `${this.players[ 0 ].playerName} won with a score of: ${this.players[ 0 ].playerScore} 
             ${this.players[ 1 ].playerName} had a score of: ${this.players[ 1 ].playerScore}` )

            } else
            alert( `${this.players[ 1 ].playerName} won with a score of: ${this.players[ 1 ].playerScore}  
            ${this.players[ 0 ].playerName} had a score of: ${this.players[ 0 ].playerScore}` )
           
    }

}

let playGame = new PlayWar();
playGame.start();
playGame.dealDeck();
playGame.compareCards();
