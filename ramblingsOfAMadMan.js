//intent is to create a simple game of War where the user plays against the computer
//the player can decide certain rules for the game
//1. does a 2 beat an ace (exclusively)
//2. is a joker enabled? (and if so how it works, i play with where a joker gets to choose to either win or go to war when its played.)
//3. when cards are won from the opponent are they placed into the bottom of the deck or placed off to the side to then be shuffled back into their hands?
//4. need images of each card, and variants of 3 cards being displayed. 

//alternatively 2/3/7/10 (8) I love this game and could be a unique format.
//1. choose if (8)s are in play

//this one seems impossible. the computer wouldnt be too smart, this game is super tactical.
//2s are essentially a free turn for you and the person after you; a 2 can be played off of anything but the next person can also play anything, making it the weakest "power card"
//3s are the strongest power card, allowing you to use it on someone and then they are given the discard pile; 3s can be used in response to a 3 being used, after the 3s are resolved, it acts as a skip, the person after them gets to play.
//7s are a very niche but useful card forcing the next play to be a card lower (4/5/6) or any power card of course as power cards can be used at any point (on your turn)
//10s are the "burn" you can burn the discard pile removing it from play for the remainder of the match, whenever a burn occurs, play again. (drawing between their 2 turns as needed)
//if someone's hand is < 3, draw until x=3. 
//if 4 of the same card are ever in the discard pile, whoever placed the 4th of that card burns the deck and plays again (drawing between their 2 turns as needed) 
//(8)s if in play... resurrect the burn pile. super conviluted card. at this point 5/13 or 38%  (20/52) of the deck are PowerCards. vs the 16
//jokers are played like a reverse from uno in 1v1 it acts like a skip, if the group is > 2 it toggles the order counter/clockwise.

//it's decided. I will be recreating 2/3/7/10. 8s are not power cards and jokers are not in play. 4 of a kind will burn the discard pile so that will have to be tracked.
//i need to make a responser where a player 2 (bot) will play the lowest valid (non-power) card, if only power cards are playable it will use the following logic.
//*the computer should always play multiple of every card except for power or Aces. 
//*always play non-power cards if able to
//*if the player has player1FaceDown.length == 3 && discardPile.length > 7 play a "3." indexof(3) slice 3,1.
//*if discardPile.length > 3 && discard.Pile.length < 7 play a 2, if no 2s, play a 7. if no 2/7 then if > 3 play "3", if no 3 play 10.
//*if player1FaceDown.length < 3 && discardPile > 2 play a "3".  
//*if player1FaceDown.length < 3 && play a card >= "jack" if none exist, play a 7. if neither then play highest valid card. 
//*if no special rules exist, always play >= topOfDiscardPile
//*let topOfDiscardPile = if (discardPile.length = 0) {0} else {indexof(discardPile.length - 1)}
//*if (topOfDiscardPile = 0) {display empty discard pile} else {display topOfDiscardPile}
//* let Player1FaceUp = [player1FaceUp1,player1FaceUp2,player1FaceUp3] Player1FaceUp can decrease but can never increase and starts at 3
//* let Player2FaceUp = [player2FaceUp1,player2FaceUp2,player2FaceUp3] Player2FaceUp can decrease but can never increase and starts at 3
//* let Player1FaceDown = [player1FaceDown1,player1FaceDown2,player1FaceDown3] Player1FaceUp can decrease but can never increase and starts at 3
//* let Player2FaceDown = [player2FaceDown1,player2FaceDown2,player2FaceDown3] Player2FaceUp can decrease but can never increase and starts at 3
//* allowable rules for the player are the actual rules.. whenever a card is picked up it is momentarily in your hand, meaning that even faceUp 
// or faceDown cards can be picked up even if they were unplayable. soo there is a 7 at topOfDiscardPile and you pick up a king from player1FaceUp2.
// although the card isnt playable, it will now enter your hand along with the rest of the discard pile. 

//there will be setup newGame button that will shuffle and make 3 sets of three for the 2 players. player1 and player2 (the bot is player2.)

//discardCode = "the current card in the discard pile (the card that equals topOfDiscardPile"
//p1F1 = "player1FaceUp1"
//draw pile is facedown (naturally)

// imageOfDiscardPile = `https://deckofcardsapi.com/static/img/${discardCode}.png`
// imageOf player1FaceUpCard1 = `https://deckofcardsapi.com/static/img/${p1F1}.png`  

//cannot see the bot's hand but will display player1's hand. as well as both players FaceUp. 
// let player1Hand = []
// let player1Imgs = forEach[https://deckofcardsapi.com/static/img/${}.png]
//use animation 

//