
let Letter = require("./letter.js");

class Word {
    constructor (word) {
        this.word = word;
        this.word = [];
        word.split("").forEach(
            character => this.word.push (
                new Letter (character)
            )
        );
        //take the word and split the letters into an array
        //each letter will be given the boolean false in guessedIt
        
        console.log ("\n word to yo motha  ' " + word + "'\n")
    }
    show() {
        let displayWord = "";
        console.log ("displayWord")
    }

}

let newWord = new Word ("different")
let secondWord = new Word ("short")


console.log("Logging the object: newWord\n")
console.log (newWord);
console.log (secondWord);

