document.getElementById('hypotenuseSubmitButton').onclick = function() {

    rightTriangleSideA = document.getElementById("rightTriangleSideATextBox").value;
    rightTriangleSideA = Number(rightTriangleSideA);

    rightTriangleSideB = document.getElementById("rightTriangleSideBTextBox").value;
    rightTriangleSideB = Number(rightTriangleSideB);

    rightTriangleSideC = Math.sqrt(Math.pow(rightTriangleSideA, 2) + Math.pow(rightTriangleSideB, 2));
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

    quadraticFormulaConstantC = document.getElementById('quadraticFormulaConstantCTextBox').value;
    quadraticFormulaConstantC = Number(quadraticFormulaConstantC);

    quadraticFormulaVariableX1 = (((-1) * quadraticFormulaConstantB) + Math.sqrt((Math.pow(quadraticFormulaConstantB, 2)) - (4 * quadraticFormulaConstantA * quadraticFormulaConstantC))) / (2 * quadraticFormulaConstantA);

    quadraticFormulaVariableX2 = (((-1) * quadraticFormulaConstantB) - Math.sqrt((Math.pow(quadraticFormulaConstantB, 2)) - (4 * quadraticFormulaConstantA * quadraticFormulaConstantC))) / (2 * quadraticFormulaConstantA);

    document.getElementById('quadraticFormulaSolutionLabel').innerHTML = "c = " + quadraticFormulaVariableX1 + ", " + quadraticFormulaVariableX2;
}


bill = document.getElementById('billTextBox').value;
bill = Number(bill);
billFormatted = bill.toLocaleString("en-US", {style: "currency", currency: "USD"});

tip10 = bill * 0.1;
tip10Formatted = tip10.toLocaleString("en-US", {style: "currency", currency: "USD"});
totalBill10 = bill * 1.1;
totalBill10Formatted = totalBill10.toLocaleString("en-US", {style: "currency", currency: "USD"});

tip15 = bill * 0.15;
tip15Formatted = tip15.toLocaleString("en-US", {style: "currency", currency: "USD"});
totalBill15 = bill * 1.15;
totalBill15Formatted = totalBill15.toLocaleString("en-US", {style: "currency", currency: "USD"});

tip20 = bill * 0.2;
tip20Formatted = tip20.toLocaleString("en-US", {style: "currency", currency: "USD"});
totalBill20 = bill * 1.2;
totalBill20Formatted = totalBill20.toLocaleString("en-US", {style: "currency", currency: "USD"});

tip25 = bill * 0.25;
tip25Formatted = tip10.toLocaleString("en-US", {style: "currency", currency: "USD"});
totalBill25 = bill * 1.25;
totalBill25Formatted = totalBill25.toLocaleString("en-US", {style: "currency", currency: "USD"});

document.getElementById('tipCalculatorSubmitButton1').onclick = function() {

    document.getElementById('tipOutput1').innerHTML = "Tip = " + tip10Formatted;
    totalBill10 = bill + tip10;
    totalBill10Formatted = totalBill10.toLocaleString("en-US", {style: "currency", currency: "USD"});
    document.getElementById('tipOutput2').innerHTML = "Total Bill: " + (totalBill10Formatted);
}

document.getElementById('tipCalculatorSubmitButton2').onclick = function() {

    document.getElementById('tipOutput1').innerHTML = "Tip = " + tip15Formatted;
    totalBill15 = bill + tip15;
    totalBill15Formatted = totalBill15.toLocaleString("en-US", {style: "currency", currency: "USD"});
    document.getElementById('tipOutput2').innerHTML = "Total Bill: " + (totalBill15Formatted);
}

document.getElementById('tipCalculatorSubmitButton3').onclick = function() {

    document.getElementById('tipOutput1').innerHTML = "Tip = " + tip20Formatted;
    totalBill20 = bill + tip20;
    totalBill20Formatted = totalBill20.toLocaleString("en-US", {style: "currency", currency: "USD"});
    document.getElementById('tipOutput2').innerHTML = "Total Bill: " + (totalBill20Formatted);
}

document.getElementById('tipCalculatorSubmitButton4').onclick = function() {

    document.getElementById('tipOutput1').innerHTML = "Tip = " + tip25Formatted;
    totalBill25 = bill + tip25;
    totalBill25Formatted = totalBill25.toLocaleString("en-US", {style: "currency", currency: "USD"});
    document.getElementById('tipOutput2').innerHTML = "Total Bill: " + (totalBill25Formatted);
}

// Dice Roller
                  
let roll = 0;
let totalDiceValue = 0;

document.getElementById('submitButtonDice').onclick = function() {

    let howManySides = Number(document.getElementById('howManySidesInput').value);
    let howManyDice = Number(document.getElementById('howManyDiceInput').value);
    let diceModifierAddSubtract = Number(document.getElementById('diceModifierAddSubtract').value);
    let diceModifierMultiply = Number(document.getElementById('diceModifierInput2').value);

    document.getElementById('diceResultIndividual').innerHTML = "Result (Individual Dice): ";
    totalDiceValue = 0;
    let existingText = document.getElementById('diceResultIndividual').innerHTML;
    document.getElementById('diceResultIndividual').innerHTML = existingText;

    for (let i = 1; i <= howManyDice; i += 1) {
        roll = Math.floor(Math.random() * howManySides) + 1;
        totalDiceValue += roll;
        document.getElementById('diceResultIndividual').innerHTML += roll + " ";
    }
    if (diceModifier2 != "") {
        totalDiceValue *= diceModifierMultiply;
    }

    totalDiceValue += diceModifierAddSubtract; 
    document.getElementById('diceResultTotal').innerHTML = "Result (Total): " + totalDiceValue;
}

document.getElementById('resetButtonDice').onclick = function() {
    document.getElementById('diceResultTotal').innerHTML = "Result (Total): ";
    document.getElementById('diceResultIndividual').innerHTML = "Result (Individual Dice): ";
    document.getElementById('howManyDiceInput').value = "";
    document.getElementById('howManySidesInput').value = "";
    document.getElementById('diceModifierInputAddSubtract').value = "";
    document.getElementById('diceModifierInputMultiply').value = "";
}

document.getElementById('resetInputFieldsDice').onclick = function() {
    document.getElementById('howManyDiceInput').value = "";
    document.getElementById('howManySidesInput').value = "";
    document.getElementById('diceModifierInputMultiply').value = "";
}

// add roll history
// give the user customizable dice sets - different number sides and quantities in a single dice roll (6d6 + 8d12 etc)
// modifier for each individual die 
// save and load configurations
// randomized sounds effects OR sound effect packs with selectable themes
// a really stupid animation?
// accessibility features