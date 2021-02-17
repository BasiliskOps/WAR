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
