const howManySidesInput = document.getElementById('howManySidesInput');
const howManyDiceInput = document.getElementById('howManyDiceInput');
const diceModifierInputAddSubtract = document.getElementById('diceModifierInputAddSubtract');
const diceModifierInputMultiply = document.getElementById('diceModifierInputMultiply');
const diceResultTotal = document.getElementById('diceResultTotal');
const diceResultIndividual = document.getElementById('diceResultIndividual');

function validateInputs() {
    let inputs = [howManySidesInput.value, howManyDiceInput.value, diceModifierInputAddSubtract.value, diceModifierInputMultiply.value];
    return inputs.every(input => /^\d+$/.test(input) && Number(input) >= 0);
}

document.getElementById('submitButtonDice').addEventListener('click', function() {
    if (!validateInputs()) {
        alert("Please enter a valid positive integer for all input fields.");
        return;
    }

    diceResultIndividual.innerHTML = "Result (Individual Dice): ";
    let totalDiceValue = 0;

    for (let i = 1; i <= Number(howManyDiceInput.value); i++) {
        let roll = Math.floor(Math.random() * Number(howManySidesInput.value)) + 1;
        totalDiceValue += roll;
        diceResultIndividual.innerHTML += roll + " ";
    }
    if (Number(diceModifierInputMultiply.value) !== 0) {
        totalDiceValue *= Number(diceModifierInputMultiply.value);
    }

    totalDiceValue += Number(diceModifierInputAddSubtract.value);
    diceResultTotal.innerHTML = "Result (Total): " + totalDiceValue;
});

document.getElementById('resetButtonDice').onclick = function() {
    diceResultTotal.innerHTML = "Result (Total): ";
    diceResultIndividual.innerHTML = "Result (Individual Dice): ";
    howManyDiceInput.value = "";
    howManySidesInput.value = "";
    diceModifierInputAddSubtract.value = "";
    diceModifierInputMultiply.value = "";
}

document.getElementById('resetInputFieldsDice').onclick = function() {
    howManyDiceInput.value = "";
    howManySidesInput.value = "";
    diceModifierInputAddSubtract.value = "";
    diceModifierInputMultiply.value = "";
}


/*
const howManySidesInput = document.getElementById('howManySidesInput');
const howManySides = document.getElementById('howManySides');
const diceModifierInputAddSubtract = document.getElementById('diceModifierInputAddSubtract');
const diceModifierInputMultiply = document.getElementById('diceModifierInputMultiply');
const diceResultTotal = document.getElementById(['diceResultTotal']);
const diceResultIndividual = document.getElementById('diceResultIndividual');

function validateInputs() {
    let inputs = [howManySidesInput.value, howManyDiceInput.value, diceModifierInputAddSubtract.value, diceModifierMultiply.value, diceResultTotal.value, diceResultIndividual.value];
    return inputs.every(input => /^\d+$/.test(input) && Number(input) >= 0);
}

document.getElementById('submitDiceButton').addEventListener('click', function() {
    if (!validateInputs()) {
        alert("Please enter a valid positive integer for all input fields.");
        return;
    }
});

document.getElementById('diceResultIndividual').innerHTML = "Result (Individual Dice): ";
totalDiceValue = 0;

for (let i = 1; i <= howManyDice; i += 1) {
    roll = Math.floor(Math.random() * howManySides) + 1;
    totalDiceValue += roll;
    document.getElementById('diceResultIndividual').innerHTML += roll + " ";
}
if (diceModifierMultiply !== 0) {
    totalDiceValue *= diceModifierMultiply;
}

totalDiceValue += diceModifierAddSubtract; 
document.getElementById('diceResultTotal').innerHTML = "Result (Total): " + totalDiceValue;

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
document.getElementById('diceModifierInputAddSubtract').value = "";
document.getElementById('diceModifierInputMultiply').value = "";
}
*/


/*let roll = 0;
let totalDiceValue = 0;

document.getElementById('submitButtonDice').onclick = function() {

    let howManySides = Number(document.getElementById('howManySidesInput').value);
    let howManyDice = Number(document.getElementById('howManyDiceInput').value);
    let diceModifierAddSubtract = Number(document.getElementById('diceModifierInputAddSubtract').value);
    let diceModifierMultiply = Number(document.getElementById('diceModifierInputMultiply').value);
    let integerPattern = /^\d+$/;

    if (isNaN(howManySides) || isNaN(howManyDice) || isNaN(diceModifierAddSubtract) || isNaN(diceModifierMultiply) || howManySides < 0 || howManyDice < 0 || !integerPattern.test(howManySides) || !integerPattern.test(howManyDice) || !integerPattern.test(diceModifierAddSubtract) || !integerPattern.test(diceModifierMultiply)) {
        alert("Please enter a valid positive integer for all input fields.");
        return;
    }

    document.getElementById('diceResultIndividual').innerHTML = "Result (Individual Dice): ";
    totalDiceValue = 0;

    for (let i = 1; i <= howManyDice; i += 1) {
        roll = Math.floor(Math.random() * howManySides) + 1;
        totalDiceValue += roll;
        document.getElementById('diceResultIndividual').innerHTML += roll + " ";
    }
    if (diceModifierMultiply !== 0) {
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
    document.getElementById('diceModifierInputAddSubtract').value = "";
    document.getElementById('diceModifierInputMultiply').value = "";
}
*/