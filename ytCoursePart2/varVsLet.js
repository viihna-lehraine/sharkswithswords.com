// VARIABLE SCOPE - where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a functon (){}
// global variable = declared outside any function
// if global, var will CHANGE browser's window properties (BE CAREFUL)


/*
for(let i = 1; i <= 3; i+=1) {            // this actually returns the intended output - 1 2 3
    console.log(i); 
}
*/



/*
for(let i = 1; i <= 3; i+=1) {
}

console.log(i);                           // let cannot be used outside of the block scope, so an error is returned
*/




/*
for(var i = 1; i <= 3; i+=1) {            // limited to the function
}

console.log(i);                           // let cannot be used outside of the function, so an error is returned


// does not return the correct value

*/


/*
let name = "Dude";                        // name is declared outside of a function so it is a GLOBAL VARIABLE

doSomething();

function doSomething() {
    for(var i = 1; i <= 3; i+=1) {
    }
}

console.log(i);
*/


var name = "Bro";
