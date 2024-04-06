// 1 - Hypotenuse
document.getElementById('submitButton1').onclick = function() {

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    rtArea = 0.5 * (a * b);

    document.getElementById("cLabel").innerHTML = "Side C (Hypotenuse): " + c;
    document.getElementById("dLabel").innerHTML = "Area: " + rtArea;
}

// 2 - Circumference of a Circle
document.getElementById('submitButton2').onclick = function() {

    r = document.getElementById('radiusTextBox').value
    r = Number(r);

    circ = 2 * Math.PI * r;
    circArea = Math.PI * Math.pow(r, 2);

    document.getElementById('circumference').innerHTML = "Circumference: " + circ;
    document.getElementById('circleArea').innerHTML = "Area: " + circArea;
}

// Volume and Surface Area of a Sphere
document.getElementById('submitButton3').onclick = function() {

}