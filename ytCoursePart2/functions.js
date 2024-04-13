// function = define code once, use it many times
//            to perform some code, call the function name

// functions have access to global variables, like below



// variables declared using the "let" keyword" cannot be called outside of their local scope (immediate set of curly braces?)

startProgram();

function startProgram() {
    let userName = "Bro";
    let age = 69;

    happyBirthday(userName, age);     // these 2 arguments are sent to function(happyBirthday)

}


function happyBirthday(userName, age) {      // these parameters need to be listed here 
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear " + userName + "!");
    console.log("Happy birthday to you!");
    console.log("You are " + age + " years old!!");
}