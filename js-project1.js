document.getElementById('hypotenuseSubmitButton').onclick = function() {

    rightTriangleSideA = document.getElementById("rightTriangleSideATextBox").value;
    rightTriangleSideA = Number(rightTriangleSideA);

    rightTriangleSideB = document.getElementById("rightTriangleSideBTextBox").value;
    rightTriangleSideB = Number(rightTriangleSideB);

    rightTriangleSideC = Math.sqrt(Math.pow(rightTriangleSideA, 2) + Math.pow(rightTriangleSideC, 2));
    rightTriangleArea = 0.5 * (rightTriangleSideA * rightTriangleSideB);

    document.getElementById("rightTriangleSideCLabel").innerHTML = "Side C (Hypotenuse): " + rightTriangleSideC;
    document.getElementById("rightTriangleAreaLabel").innerHTML = "Area: " + rightTriangleArea;
}


document.getElementById('circleCircumferenceAndAreaButton').onclick = function() {

    circleRadius = document.getElementById('circleRadiusTextBox').value
    circleRadius = Number(circleRadius);

    circleCircumference = 2 * Math.PI * circleRadius;
    circleArea = Math.PI * Math.pow(circleRadius, 2);

    document.getElementById('circumferenceLabel').innerHTML = "Circumference: " + circleCircumference;
    document.getElementById('circleAreaLabel').innerHTML = "Area: " + circleArea;
}


document.getElementById('sphereSurfaceAreaAndVolumeButton').onclick = function() {

    sphereRadius = document.getElementById('sphereRadiusTextBox').value;
    sphereRadius = Number(sphereRadius);

    sphereSurfaceArea = 4 * Math.PI * (Math.pow(sphereRadius, 2));
    sphereVolume = (4 / 3) * Math.PI * (Math.pow(sphereRadius, 3));

    document.getElementById('sphereSurfaceAreaLabel').innerHTML = "Surface Area: " + sphereSurfaceArea;
    document.getElementById('sphereVolumeLabel').innerHTML = "Volume: " + sphereVolume;
}


document.getElementById('quadraticFormulaSubmitButton').onclick = function() {                   

    quadraticFormulaConstantA = document.getElementById('quadraticFormulaConstantATextBox').value;
    quadraticFormulaConstantA = Number(quadraticFormulaConstantA);

    quadraticFormulaConstantB = document.getElementById('quadraticFormulaConstantBTextBox').value;
    quadraticFormulaConstantB = Number(quadraticFormulaConstantB);

    quadraticFormulaConstantC = document.getElementById('quadraticFormulaConstantC').value;
    quadraticFormulaConstantC = Number(quadraticFormulaConstantC);

    quadraticFormulaVariableX1 = (((-1) * quadraticFormulaConstantB) + Math.sqrt((Math.pow(quadraticFormulaConstantB, 2)) - (4 * quadraticFormulaConstantA * quadraticFormulaConstantC))) / (2 * quadraticFormulaConstantA);

    quadraticFormulaVariableX2 = (((-1) * quadraticFormulaConstantB) - Math.sqrt((Math.pow(quadraticFormulaConstantB, 2)) - (4 * quadraticFormulaConstantA * quadraticFormulaConstantC))) / (2 * quadraticFormulaConstantA);

    document.getElementById('quadraticFormulaSolutionLabel').innerHTML = "c = " + quadraticFormulaVariableX1 + ", " + quadraticFormulaVariableX2;
}


bill = document.getElementById('billTextBox').value;
bill = Number(bill);

tip10 = bill * (10 / 100);
tip15 = bill * (15 / 100);
tip20 = bill * (20 / 100);
tip25 = bill * (25 / 100);

document.getElementById('tipCalculatorSubmitButton').onclick = function() {

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

// let the user add an integer modifier to the total roll value
// user can roll multiple sets of dice at once
// turn the section into a dnd encounter tracker (AC and HP)

howManySides = Number(document.getElementById('howManySidesInput').value);
howManyDice = Number(document.getElementById('howManyDiceInput').value);

document.getElementById('submitButtonDice').onclick = function() {               
    for(let i = 1; i <= howManyDice; i += 1){
        var roll = ((Math.floor(Math.random() * howManySides)) + 1);
        document.getElementById('diceResultIndividual').innerHTML += roll + " ";
    console.log('Individual die results now available.');
    }
}

document.getElementById('diceResultIndividual').innerHTML = "Result (Individual Dice): ";

/* Tried this. it didnt work. oh well

document.getElementById('submitButtonDice').onclick = function() {               
    for(let i = 1; i <= howManyDice; i += 1){
        if(i = 1) {
            var roll = ((Math.floor(Math.random() * howManySides)) + 1);
            var diceSum = roll;
            document.getElementById('diceResultIndividual').innerHTML += roll + " ";
        }
        else {
            console.log('idkman');
            // dicesum = dicesum + roll;

        }
    console.log('Individual die results now available.');
    }
}
*/