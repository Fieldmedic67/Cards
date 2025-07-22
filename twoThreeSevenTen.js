let shuffleNewDeck = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
let player1FaceDown; let player2FaceDown;
let player1FaceUp; let player2FaceUp;
let player1Hand; let player2Hand;
let startingCards;
var deckID;
let p1faceDown1;let p1faceDown2; let p1faceDown3; let p2faceDown1; let p2faceDown2; let p2faceDown3;
let p1faceUp1;let p1faceUp2;let p1faceUp3; let p2faceUp1; let p2faceUp2; let p2faceUp3;
let p1hand1; let p1hand2; let p1hand3; let p2hand1; let p2hand2; let p2hand3;
let discardPile = []

const newGame = () => {
    console.log(typeof deckID,deckID)
    document.getElementById("discard1").src =``;
    if (deckID !== undefined) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/return/`)
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle`)
    .then(console.log(`Deck ${deckID} has successfully been reshuffled`))
    }  else (
    fetch(shuffleNewDeck))
        .then((response) => response.json()) //return JSON Element
        .then((json) => {
            console.log(json);
            deckID = json.deck_id; 
            console.log(`Deck ${deckID} has been created and shuffled`)})
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=18`)  //draw cards to be placed into piles
        .then((response) => response.json()) //return JSON Element
        .then((json) => { 
            console.log(json);
            startingCards = json.cards;
            player1FaceDown = startingCards.splice(0,3);
            player2FaceDown = startingCards.splice(0,3);
            player1FaceUp = startingCards.splice(0,3);
            player2FaceUp = startingCards.splice(0,3);
            player1Hand = startingCards.splice(0,3);
            player2Hand = startingCards.splice(0,3);
            console.log(player1FaceDown,player2FaceDown,player1FaceUp,player2FaceUp,player1Hand,player2Hand,startingCards);
            console.log(player1FaceDown[0].code)

            p1faceDown1 = player1FaceDown[0].code
            p1faceDown2 = player1FaceDown[1].code
            p1faceDown3 = player1FaceDown[2].code

            p2faceDown1 = player2FaceDown[0].code
            p2faceDown2 = player2FaceDown[1].code
            p2faceDown3 = player2FaceDown[2].code

            p1faceUp1 = player1FaceUp[0].code
            p1faceUp2 = player1FaceUp[1].code
            p1faceUp3 = player1FaceUp[2].code

            p2faceUp1 = player2FaceUp[0].code
            p2faceUp2 = player2FaceUp[1].code
            p2faceUp3 = player2FaceUp[2].code

            p1hand1 = player1Hand[0].code
            p1hand2 = player1Hand[1].code
            p1hand3 = player1Hand[2].code

            p2hand1 = player2Hand[0].code
            p2hand2 = player2Hand[1].code
            p2hand3 = player2Hand[2].code

            document.getElementById("p1faceDown1").src ='https://deckofcardsapi.com/static/img/back.png'; //face down cards for player 1
            document.getElementById("p1faceDown2").src ='https://deckofcardsapi.com/static/img/back.png';
            document.getElementById("p1faceDown3").src ='https://deckofcardsapi.com/static/img/back.png';

            document.getElementById("p2faceDown1").src ='https://deckofcardsapi.com/static/img/back.png';
            document.getElementById("p2faceDown2").src ='https://deckofcardsapi.com/static/img/back.png'; //face down cards for player 2
            document.getElementById("p2faceDown3").src ='https://deckofcardsapi.com/static/img/back.png';

            document.getElementById("p1faceUp1").src =`https://deckofcardsapi.com/static/img/${p1faceUp1}.png`;
            document.getElementById("p1faceUp2").src =`https://deckofcardsapi.com/static/img/${p1faceUp2}.png`; //face up cards for player 1
            document.getElementById("p1faceUp3").src =`https://deckofcardsapi.com/static/img/${p1faceUp3}.png`;

            document.getElementById("p2faceUp1").src =`https://deckofcardsapi.com/static/img/${p2faceUp1}.png`;
            document.getElementById("p2faceUp2").src =`https://deckofcardsapi.com/static/img/${p2faceUp2}.png`; //face up cards for player 2
            document.getElementById("p2faceUp3").src =`https://deckofcardsapi.com/static/img/${p2faceUp3}.png`;

            document.getElementById("p1hand1").src =`https://deckofcardsapi.com/static/img/${p1hand1}.png`;
            document.getElementById("p1hand2").src =`https://deckofcardsapi.com/static/img/${p1hand2}.png`; //player 1's hand
            document.getElementById("p1hand3").src =`https://deckofcardsapi.com/static/img/${p1hand3}.png`;

            document.getElementById("p2hand1").src ='https://deckofcardsapi.com/static/img/back.png'; //player 2's hand
            document.getElementById("p2hand2").src ='https://deckofcardsapi.com/static/img/back.png';
            document.getElementById("p2hand3").src ='https://deckofcardsapi.com/static/img/back.png';

            document.getElementById("deck1").src ='https://deckofcardsapi.com/static/img/back.png'; //empty stuff for the deck
            document.getElementById("deck2").src ='https://deckofcardsapi.com/static/img/back.png';
            document.getElementById("deck3").src ='https://deckofcardsapi.com/static/img/back.png';
            document.getElementById("deck4").src ='https://deckofcardsapi.com/static/img/back.png';
            document.getElementById("deck5").src ='https://deckofcardsapi.com/static/img/back.png';
        })              
}

document.getElementById("new-Game").addEventListener('click', function () {newGame()})
document.getElementById("p1hand1").addEventListener('click', function () {playCard()})
//`<img src="" alt="" onclick="playCard(this)"/>`

const playCard = () => {
    //if valid play
    document.getElementById("discard1").src =`https://deckofcardsapi.com/static/img/${p1hand1}.png`;
    discardPile.push(p1hand1);
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    .then((response) => response.json()) //return JSON Element
        .then((json) => { 
            console.log(json);
            p1hand1 = json.cards.splice(0,1)[0].code;
            console.log(p1hand1)
            document.getElementById("p1hand1").src =`https://deckofcardsapi.com/static/img/${p1hand1}.png`;
            
})}



// create new deck if one doesnt,and shuffle exist otherwise shuffle one
// draw 3 cards
// place the cards into a pile, place 3 cards face down to each player
// place 3 cards face up to each player
// place 3 cards into each players hands



//`https://deckofcardsapi.com/api/deck/${deckID}/pile/<<pile_name>>/draw/?count=2`
// const response = await fetch("https://example.org/post", {
//   method: "POST",
//   body: JSON.stringify({ username: "example" }),
//   // …
// });
     

// let cardsRequired = 3 - cardsInHand;
// if (drawPile > 0) { 
//     if (cardsRequired > drawPile) {
//         let cardsRequired = drawPile;
//     }

// fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${cardsRequired}`);
// }

// if (cardPlayedValue !>= topOfDiscardPileValue) {
//     if(cardPlayedValue = 2 || 3 || 7 || 10) {
//             discardPile.push(cardPlayed)
//     }
//     else {CardsInHand = discardPile}
//     }   else {if (cardPlayedValue >= topOfDiscardPileValue) {
//         discardPile.push(cardPlayed)
//     }
// }
// if cardPlayedValue


// twoThreeSevenTen.js:7 undefined undefined
// twoThreeSevenTen.js:15 {success: true, deck_id: 'oqlty5fy6hif', remaining: 52, shuffled: true}
// twoThreeSevenTen.js:17 Deck oqlty5fy6hif has been created and shuffled



