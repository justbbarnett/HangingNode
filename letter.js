class Letter {

    constructor (letter) {
        
        this.letter = letter;
        //the letter
        this.guessedIt = false;
        //this letter has not been guessed
    }

    letterCheckedOut (guess) {
        if ( this.letter === guess){
            this.guessedIt = true;
            return true;
        }
        else {
            return false
        }
    }

    letterOrSymbol (){
        if (this.letterCheckedOut) {
            //if the letter checked out it will be true
            return this.letter;
            //guessed letter will be returned
        }
        else {
            return "__ "
            //you get an underscore if you haven't guessed it.
        }
    }

}


let b = new Letter("b");
console.log(b.letterCheckedOut("b"));
console.log(b.letterOrSymbol());



module.exports = Letter;
