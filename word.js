
let Letter = require("./letter.js");

class Word {
    constructor (word) {
        this.wholeWord = word;
        this.word = [];

        
        word.split("").forEach(
            character => this.word.push (
                new Letter (character)
            )
        );
        //take the word and split the letters into an array
        //each letter will be given the boolean false in guessedIt 
    }
    display() {
        let displayWord =[];

        this.word.forEach(
            Letter => displayWord.push(
                Letter.display
            )
        )
        console.log("Guess the word: " + displayWord.join(" ") );
        return displayWord;
    }
    checkGuess (guess) {
        this.word.forEach(character => {
            character.letterCheckedOut(guess);
        })
       
        console.log("checked for " + guess)
        this.display();
    }

}


// let secondWord = new Word ("short")
// console.log (secondWord);

// let newWord = new Word ("different")
// newWord.display();

// newWord.checkGuess("h");
// newWord.checkGuess("d");
// newWord.checkGuess("f");



module.exports = Word;
