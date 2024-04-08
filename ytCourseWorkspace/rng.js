 // Math.random() generates # between 0 and 1
 // Math.floor() truncates the number to an integer
 // add + 1 to value to make it into a d6

let x;
let y;
let z;

document.getElementByID('rollButton').onclick = function() {

    let x = Math.floor(Math.random() * 6) + 1; 
    let y = Math.floor(Math.random() * 6) + 1; 
    let z = Math.floor(Math.random() * 6) + 1;
}