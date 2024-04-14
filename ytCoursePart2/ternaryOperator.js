// TERNARY OPERATOR

// shortcut for an 'if/else statement'
// takes 3 operands
// 1. a condition ?
// 2. expression if True :
// 3. expression if False

// condition ? exprIfTrue : exprIfFalse

/*
let adult = checkAge(12);
console.log(adult);

function checkAge(age){
    if(age >= 15){
        return true;
    }
    else{
        return false;
    }
}
*/

/*
let adult = checkAge(12);
console.log(adult);

function checkAge(age){

    return (age >= 18 ? true : false);
}
*/

checkWinner(false);

function checkWinner(win) {
    win ? console.log("You win!") : ("You lose!");
}