// slice method extracts a section of  string and returns it as a new string WITHOUT modifying the original string

// let fullName = "Viihna Rhoss";
let fullName = "Azshera Zhielle";
let firstName;
let lastName;

// 1st argument is starting index, 2nd argument is where to stop. if no 2nd argument is given, it will slice to the end of string
// lastName = fullName.slice(7, 12); 
// firstName = fullName.slice(0, 6);

lastName = fullName.slice(fullName.indexOf(" ") + 1); // fullName.indexOf(" ") is the first arguent, and begins at the index 1 past the first empty space;
firstName = fullName.slice(0, fullName.indexOf(" "));

console.log(firstName);
console.log(lastName);