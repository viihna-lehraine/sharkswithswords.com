// Hypotenuse & Area of a Right Triangle
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

// Circumference & Area of a Circle
document.getElementById('submitButton2').onclick = function() {

    r = document.getElementById('radiusTextBox').value
    r = Number(r);

    circ = 2 * Math.PI * r;
    circArea = Math.PI * Math.pow(r, 2);

    document.getElementById('circumference').innerHTML = "Circumference: " + circ;
    document.getElementById('circleArea').innerHTML = "Area: " + circArea;
}

// Surface Area & Volume of a Sphere
document.getElementById('submitButton3').onclick = function() {

    rSphere = document.getElementById('sphereRadiusTextBox').value;
    rSphere = Number(rSphere);

    sphereSurfaceArea = 4 * Math.PI * (Math.pow(rSphere, 2));
    sphereVolume = (4 / 3) * Math.PI * (Math.pow(rSphere, 3));

    document.getElementById('sphereSurfaceAreaLabel').innerHTML = "Surface Area: " + sphereSurfaceArea;
    document.getElementById('sphereVolumeLabel').innerHTML = "Volume: " + sphereVolume;
}

// Finding x in a Quadratic Function
document.getElementById('submitButton4').onclick = function() {                   

    aQuadratic = document.getElementById('aQuadraticTextBox').value;
    aQuadratic = Number(aQuadratic);

    bQuadratic = document.getElementById('bQuadraticTextBox').value;
    bQuadratic = Number(bQuadratic);

    cQuadratic = document.getElementById('cQuadraticTextBox').value;
    cQuadratic = Number(cQuadratic);

    xQuadratic1 = (((-1) * bQuadratic) + Math.sqrt((Math.pow(bQuadratic, 2)) - (4 * aQuadratic * cQuadratic))) / (2 * aQuadratic);
    xQuadratic2 = (((-1) * bQuadratic) - Math.sqrt((Math.pow(bQuadratic, 2)) - (4 * aQuadratic * cQuadratic))) / (2 * aQuadratic);

    document.getElementById('xQuadraticOutput').innerHTML = "c = " + xQuadratic1 + ", " + xQuadratic2;
}

//Tip Calculator
bill = document.getElementById('billTextBox').value;
bill = Number(bill);

tip10 = bill * (10 / 100);
tip15 = bill * (15 / 100);
tip20 = bill * (20 / 100);
tip25 = bill * (25 / 100);

document.getElementById('submitButton5').onclick = function() {

    document.getElementById('tipOutput1').innerHTML = "Tip = " + tip10;
    document.getElementById('tipOutput2').innerHTML = "Total Bill: " + (bill + tip10);
}

document.getElementById('submitButton6').onclick = function() {

    document.getElementById('tipOutput1').innerHTML = "Tip = " + tip15;
    document.getElementById('tipOutput2').innerHTML = "Total Bill: " + (bill + tip15);
}

document.getElementById('submitButton7').onclick = function() {

    document.getElementById('tipOutput1').innerHTML = "Tip = " + tip20;
    document.getElementById('tipOutput2').innerHTML = "Total Bill: " + (bill + tip20);
}

document.getElementById('submitButton8').onclick = function() {

    document.getElementById('tipOutput1').innerHTML = "Tip = " + tip25;
    document.getElementById('tipOutput2').innerHTML = "Total Bill: " + (bill + tip25);
}

// Dice Roller

diceSides = Number(document.getElementById('diceSideNumber').value);

document.getElementById('submitButton9').onclick = function() {

    document.getElementById('diceResultTotal').innerHTML = "Result (Total Sides): " + diceSides;
}