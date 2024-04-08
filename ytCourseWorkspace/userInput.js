// let username = window.prompt("What's your name?");
// console.log(username);
// ^^ "EASY" WAY ^^ //

document.getElementById('myButton').onclick = function(){

    username = document.getElementById("myText").value;         // looks in HTML document for element with ID "myText" and uses its value to define username
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello, " + username + " !";
}