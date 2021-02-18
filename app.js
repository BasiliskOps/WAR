let deck = freshDeck()

function freshDeck() {
    const suits = ["♥️", "♠️", "♦️", "♣️"]
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let deck = new Array()
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { value: values[x], suit: suits[i] }
            deck.push(card)
        }
    }
    return deck
    
    // ^^ this function cycles through the suits of the deck w/for loop and creates cards in nested for loop
}

let newDeck = deck

function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
}
shuffle(newDeck)

let p1Deck = newDeck.splice(0, 26)
let p2Deck = newDeck.splice(0, 26)

// ^^ this function then shuffles and divides the deck into two, equal halves

class Game {
    flipCards() {
        const p1Hand = p1Deck.shift()
        const p2Hand = p2Deck.shift()
        this.round(p1Hand, p2Hand)
        
        // ^^this class establishes the game of WAR through the use of functions which reference the deck of cards 
    }
    round(p1Hand, p2Hand) {
        if (p1Hand.value > p2Hand.value) {
            console.log(
                "Player 1: " +
                p1Hand.value + " " +
                p1Hand.suit +
                " " +
                "Player 2: " +
                p2Hand.value + " " +
                p2Hand.suit
            )
            console.log("Player 1 Wins!")

            p1Deck.push(p1Hand, p2Hand)
            console.log(
                "Player 1 has: " +
                p1Deck.length +
                " cards" +
                "  " +
                "Player 2 has: " +
                p2Deck.length +
                " cards"
            )

        }
        else if (p2Hand.value > p1Hand.value) {
            console.log(
                "Player 1: " +
                p1Hand.value + " " +
                p1Hand.suit +
                " " +
                "Player 2: " +
                p2Hand.value + " " +
                p2Hand.suit
            )
            console.log("Player 2 Wins!")

            p2Deck.push(p1Hand, p2Hand)
            console.log(
                "Player 1 has: " +
                p1Deck.length +
                " cards" +
                "  " +
                "Player 2 has: " +
                p2Deck.length +
                " cards"
            )
        }
        else {
            console.log("****WAR****")
            this.war(p1Hand, p2Hand)
        }
    }
    // ^^this function implements the boolean logic that outputs which player has won the round, each card per draw, and how many cards each player has remaining

    war(p1Hand, p2Hand){
        let p1War = p1Deck.splice(0, 3)
        let p2War = p2Deck.splice(0, 3)
        const p1WarHand = p1Deck.shift()
        const p2WarHand = p2Deck.shift()

        if (p1WarHand.value > p2WarHand.value) {
            console.log(
                "Player 1: " +
                p1WarHand.value + " " +
                p1WarHand.suit +
                " " +
                "Player 2: " +
                p2WarHand.value + " " +
                p2WarHand.suit
            )
            console.log("Player 1 Wins!")

            p1Deck = [...new Set(p1Deck.concat(p1Hand, p2Hand, p1War, p2War, p1WarHand, p2WarHand))]
            
            console.log(
                "Player 1 has: " +
                p1Deck.length +
                " cards" +
                "  " +
                "Player 2 has: " +
                p2Deck.length +
                " cards"
            )
        }
        else if (p2WarHand.value > p1WarHand.value) {
            console.log(
                "Player 1: " +
                p1WarHand.value + " " +
                p1WarHand.suit +
                " " +
                "Player 2: " +
                p2WarHand.value + " " +
                p2WarHand.suit
            )
            console.log("Player 2 Wins!")
            p2Deck = [...new Set(p2Deck.concat(p1Hand, p2Hand, p1War, p2War, p1WarHand, p2WarHand))]
            
            console.log(
                "Player 1 has: " +
                p1Deck.length +
                " cards" +
                "  " +
                "Player 2 has: " +
                p2Deck.length +
                " cards"
            )
        }
        else {
            this.war(p1Hand, p2Hand)
        }
    }    
    // ^^ this function describes the logic to break the tie once ****WAR**** is initiated
}

let game = new Game
while (game) {
    if (p1Deck.length == 0) {
        console.log("The Ghost in the Shell is the victor!")
        game = false
    }
    else if (p2Deck.length == 0) {
        console.log("The Player has claimed victory!")
        game = false
    }
    else {
        game.flipCards()
    }
}

// ^^ this while statement uses boolean logic to declare a winner once one player has zero cards




