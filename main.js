const dealerTotal=document.getElementById("dealer-total");
const playerTotal=document.getElementById("player-total");
const dealerCards=document.getElementById("dealer-cards");
const playerCards=document.getElementById("player-cards");
const hitButton=document.getElementById("hit-button");
const standButton=document.getElementById("stand-button");
const newGameButton=document.getElementById("new-game-button");
let deck=[];
let playerHand=[];
let dealerHand=[];

function createDeck(){
    const suits=["Hearts","Diamonds","Clubs","Spades"];
    const values=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    for(let suit of suits){
        for(let value of values){
            deck.push({suit,value});
        }
    }
}
function shuffleDeck(){
    for(let i=deck.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [deck[i],deck[j]]=[deck[j],deck[i]];
    }
}
