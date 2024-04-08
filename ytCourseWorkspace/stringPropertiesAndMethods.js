// useful string properties and methods

let userName = "   Viihna   ";
let phoneNumber = "304-696-9420";

console.log(userName.length);
console.log(userName.charAt(0));  // charAt finds character at the chosen index
console.log(userName.indexOf("i"));  // finds first index of chosen character
console.log(userName.lastIndexOf("i"));

console.log(userName);
userName = userName.trim();           // trims empty characters around string
console.log(userName);
userName = userName.toUpperCase();     // makes string all uppercase
console.log(userName);
userName = userName.toLowerCase();      // makes it lowercase
console.log(userName);

console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("-", ""); // arg 1 is character to be replaced, 2nd is what it is to be replaced with
console.log(phoneNumber);