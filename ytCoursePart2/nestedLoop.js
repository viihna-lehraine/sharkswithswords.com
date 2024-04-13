// nested loops are loops inside of other loops

for(let i = 1; i <= 3; i += 1) {         // for i (which we'll count, starting at 1 and ending at 3)...
    console.log(i)                       // log i to the console
}

/*
for(let i = 1; i <= 3; i += 1) {         // for i, counting from 1 to 3, 1 at a time, perform the following:
    for(let j = 1; j <= 3; j += 1) {        // for j, counting from 1 to 3, 1 at a time, perform the following:
        console.log(j);                         // log j to the console
    }
}
*/
/*  idk why this is broken
let rows = window.prompt("Enter number of rows");               
let columns = window.prompt("Enter number of columns";

for(let i = 1; i <= rows; i += 1) {                             
    for(let j = 1; j <= columns; j += 1) {                      
        document.getElementById("myRectangle").innerHTML + j    
    }
    document.getElementById("myRectangle").innerHTML += "<br>"
}

// for rows = 2, columns = 3
//  

*/

let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for(let i = 1; i <= rows; i+=1) {
    for(let j = 1; j <= columns; j+=1) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}