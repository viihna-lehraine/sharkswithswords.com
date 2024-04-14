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

// let the user add an integer modifier to the total roll value
// user can roll multiple sets of dice at once
// turn the section into a dnd encounter tracker (AC and HP)

howManySides = Number(document.getElementById('howManySidesInput').value);            //  howManySides is equal to (the number version of) the value from the HTML element "howManySides"
howManyDice = Number(document.getElementById('howManyDiceInput').value);              //  howManyDice is equal to (the number version of) the value of the HTML element "howManyDice"

document.getElementById('submitButtonDice').onclick = function() {                                                                         // when the element with the id "submitButtonDice" is clicked, perform the function, defines as...  
    for(let i = 1; i <= howManyDice; i += 1) {                                        // for each value of (i, starting at 1, increasing by 1 on each iteration. Continue as long as the value of i is less than the value of howManySides)
        var roll = ((Math.floor(Math.random() * howManySides)) + 1);                  // the function-scope variable "roll" is equal to ( ((a random number 0-1) * howManySides)) + 1)
        document.getElementById('diceResultIndividual').innerHTML += roll + " ";
        var totalDiceValue = 0;
        totalDiceValue+= roll;
    }
    document.getElementById('diceResultTotal').innerHTML += totalDiceValue; 
}

document.getElementById('resetButtonDice').onclick = function() {
    document.getElementById('diceResultTotal').innerHTML = "Result (Total): ";
    document.getElementById('diceResultIndividual').innerHTML = "Result (Individual Dice): ";
}





/*
    for(let i = 1; i <= howManyDice; i+=1) {
        for(let j = 1; j <= howManyDice; j += 1) {          
            let rollCounter = 0;                                                          // for each value of (i, starting at 1, increasing by 1 on each iteration. Continue as long as the value of i is less than the value of howManySides)
            var roll = ((Math.floor(Math.random() * howManySides)) + 1);                  // the function-scope variable "roll" is equal to ( ((a random number 0-1) * howManySides)) + 1)
            document.getElementById('diceResultIndividual').innerHTML += roll + " ";
            rollCounter+=1;
        };
        document.getElementByID('diceResultsTotal')
    }
}
*/
/*
function() {                                                                          // when the element with the id "submitButtonDice" is clicked, perform the function, defines as...
    for(let i = 1; i <= howManyDice; i += 1) {                                        // for each value of (i, starting at 1, increasing by 1 on each iteration. Continue as long as the value of i is less than the value of howManySides)
        var roll = ((Math.floor(Math.random() * howManySides)) + 1);                  // the function-scope variable "roll" is equal to ( ((a random number 0-1) * howManySides)) + 1)
        document.getElementById('diceResultIndividual').innerHTML += roll + " ";
        console.log('Individual die results now available.');
    }
}
*/

// GOAL
// every time roll is




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