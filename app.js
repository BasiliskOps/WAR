let deck = freshDeck()

function freshDeck() {
    const suits = ["♥️", "♠️", "♦️", "♣️"]
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let deck = new Array()
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { Value: values[x], Suit: suits[i] }
            deck.push(card)
        }
    }
    return deck 
    // ^^ this function cycles through the suits of the deck w/for loop and creates cards in nested for loop
}
console.log(deck)

let newDeck = deck

function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}
shuffle(newDeck)
console.log(newDeck)
let devideDeck = newDeck
let  p1Deck = devideDeck.slice(0, 26)
console.log(p1Deck)
let p2Deck = devideDeck.slice(26, 52)
console.log(p2Deck)
// ^^ this function then shuffles and divides the deck into two halves

function gameStart() {
    for (let i = 0, j = 0; i < 26, j < 26; i++, j++) {
      if (p1Deck[i].Value > p2Deck[j].Value) {
        console.log(
          "Player 1: " +
            p1Deck[i].Value +
            p1Deck[i].Suit +
            " " +
            "Player 2: " +
            p2Deck[j].Value +
            p2Deck[j].Suit
        )
        console.log("Player 1 Wins!")
         p1Deck.push(p1Deck[i])
         p1Deck.push(p2Deck[j])
         p2Deck.pop()
         console.log(
           "Player 1 has: " +
             p1Deck.length +
             "cards" +
             "  " +
            "Player 2 has: " +
          p2Deck.length +
          "cards"
        )
// ^^ this function begins the game logic and uses a for loop to state conditions for player 1 to win  

    } else if (p1Deck[i].Value < p2Deck[j].Value) {
        console.log(
        "Player 1: " +
        p1Deck[i].Value +
        p1Deck[i].Suit +
        " " +
        "Player 2: " +
        p2Deck[j].Value +
        p2Deck[j].Suit
    )
        console.log("Player 2 Wins!")
        p2Deck.push(p1Deck[i])
        p2Deck.push(p2Deck[j])
        p1Deck.pop()
        console.log(
       "Player 1 has: " +
        p1Deck.length +
        "cards" +
        "  " +
        "Player 2 has: " +
        p2Deck.length +
        "cards"
    )
// ^^ wrote else if to declare conditions for player 2 victory 

    } else if (p1Deck[i].Value === p2Deck[j].Value) {
        console.log("****WAR****")
        console.log(
        "Player 1: " +
        p1Deck[i].Value +
        p1Deck[i].Suit +
        " " +
        "Player 2: " +
        p2Deck[j].Value +
        p2Deck[j].Suit
    )
    if (p1Deck[i + 1].Value > p2Deck[j + 1].Value) {
        p1Deck.push(p1Deck[i])
        p1Deck.push(p1Deck[i + 1])
        p1Deck.push(p1Deck[i + 2])
        p1Deck.push(p2Deck[i + 3])
        p1Deck.push(p2Deck[j]);
        p1Deck.push(p2Deck[j + 1])
        p1Deck.push(p2Deck[j + 2])
        p1Deck.push(p2Deck[j + 3])

    } else {
        p2Deck.push(p1Deck[i]);
        p2Deck.push(p1Deck[i + 1])
        p2Deck.push(p1Deck[i + 2])
        p2Deck.push(p1Deck[i + 3])
        p2Deck.push(p2Deck[j])
        p2Deck.push(p2Deck[j + 1])
        p2Deck.push(p2Deck[j + 2])
        p2Deck.push(p2Deck[j + 3])
    }
}
}
}
gameStart()

// ^^ lastly, else if used to implement war functionality when player 1 and player 2 draw the same card 
