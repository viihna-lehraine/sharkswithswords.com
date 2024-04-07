document.getElementById('myButton').onclick = function() {

    const myCheckBox = document.getElementById('myCheckBox');
    const visaBtn = document.getElementById('visaBtn');
    const mastercardBtn = document.getElementById('mastercardBtn');
    const paypalBtn = document.getElementById('paypalBtn');

    if(myCheckBox.checked){
        console.log('You are subscribed.');
    }
    else{
        console.log('You are not subscribed');
    }
}