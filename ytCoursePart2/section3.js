// toLocaleString() [method] = returns a string with a language sensitive representation of this number

// number.toLocaleString(locale, {options});

// locale - specify that language (undefined = default);
// options - object with formatting options;

// let myNum = 82;

// myNum = myNum.toLocaleString("en-US");
// myNum = myNum.toLocaleString("hi-IN");
// myNum = myNum.toLocaleString("de-DE");

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// myNum = myNum.toLocaleString(undefined, {style: "percent"});
// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

// console.log(myNum);




// ------------------------------------------------------------------------------------------------------------------------------------




// Number Guessing Game

/*
const answer = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

document.getElementById('submitButton').onclick = function() {

    let guess = document.getElementById('guessField').value;
    guesses+=1;

    if(guess == answer) {
        alert(`${answer} is the number. It took you ${guesses} guesses`);
    }
    else if(guess < answer) {
        alert(`Too small (that's what she said!)`)
    }
    else {
        alert(`Too large!`);
    }
}
*/


