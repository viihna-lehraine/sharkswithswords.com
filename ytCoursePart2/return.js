// RETURN STATEEMENTS
// returns a value back to the place where you invoked a function
// so calling a functiopn can return some information

// calculating the area of a rectangle and returning the value

/*
let area;
let width;
let height;
*/

width = window.prompt("Enter width.");
height = window.prompt("Enter height.");


area = getArea(width, height);                // result from function getArea is returned here

console.log("The area is: " + area);

function getArea(width, height) {
    return (width * height);
}