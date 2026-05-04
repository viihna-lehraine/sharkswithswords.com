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

document.getElementById('submit-button-dice').addEventListener('click', function() {
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

document.getElementById('reset-buttonDice').onclick = function() {
    diceResultTotal.innerHTML = "Result (Total): ";
    diceResultIndividual.innerHTML = "Result (Individual Dice): ";
    howManyDiceInput.value = "";
    howManySidesInput.value = "";
    diceModifierInputAddSubtract.value = "";
    diceModifierInputMultiply.value = "";
}

document.getElementById('reset-input-fields-dice').onclick = function() {
    howManyDiceInput.value = "";
    howManySidesInput.value = "";
    diceModifierInputAddSubtract.value = "";
    diceModifierInputMultiply.value = "";
}


/*
const howManySidesInput = document.getElementById('how-many-sides-input');
const howManySides = document.getElementById('how-many-sides');
const diceModifierInputAddSubtract = document.getElementById('dice-modifier-input-add-subtract');
const diceModifierInputMultiply = document.getElementById('dice-modifier-input-multiply');
const diceResultTotal = document.getElementById(['dice-result-total']);
const diceResultIndividual = document.getElementById('dice-result-individual');

function validateInputs() {
    let inputs = [howManySidesInput.value, howManyDiceInput.value, diceModifierInputAddSubtract.value, diceModifierMultiply.value, diceResultTotal.value, diceResultIndividual.value];
    return inputs.every(input => /^\d+$/.test(input) && Number(input) >= 0);
}

document.getElementById('submit-dice-button').addEventListener('click', function() {
    if (!validateInputs()) {
        alert("Please enter a valid positive integer for all input fields.");
        return;
    }
});

document.getElementById('dice-result-individual').innerHTML = "Result (Individual Dice): ";
totalDiceValue = 0;

for (let i = 1; i <= howManyDice; i += 1) {
    roll = Math.floor(Math.random() * howManySides) + 1;
    totalDiceValue += roll;
    document.getElementById('dice-result-individual').innerHTML += roll + " ";
}
if (diceModifierMultiply !== 0) {
    totalDiceValue *= diceModifierMultiply;
}

totalDiceValue += diceModifierAddSubtract; 
document.getElementById('diceResultTotal').innerHTML = "Result (Total): " + totalDiceValue;

document.getElementById('reset-button-dice').onclick = function() {
document.getElementById('dice-result-total').innerHTML = "Result (Total): ";
document.getElementById('dice-result-individual').innerHTML = "Result (Individual Dice): ";
document.getElementById('how-many-dice-input').value = "";
document.getElementById('how-many-sides-input').value = "";
document.getElementById('dice-modifier-input-add-subtract').value = "";
document.getElementById('dice-modifier-input-multiply').value = "";
}

document.getElementById('reset-input-fields-dice').onclick = function() {
document.getElementById('how-many-dice-input').value = "";
document.getElementById('how-many-sides-input').value = "";
document.getElementById('dice-modifier-input-add-subtract').value = "";
document.getElementById('dice-modifier-input-multiply').value = "";
}
*/


/*let roll = 0;
let totalDiceValue = 0;

document.getElementById('submit-button-dice').onclick = function() {

    let howManySides = Number(document.getElementById('how-nany-sides-input').value);
    let howManyDice = Number(document.getElementById('how-many-cice-input').value);
    let diceModifierAddSubtract = Number(document.getElementById('dice-modifier-input-add-subtract').value);
    let diceModifierMultiply = Number(document.getElementById('dice-modifier-input-multiply').value);
    let integerPattern = /^\d+$/;

    if (isNaN(howManySides) || isNaN(howManyDice) || isNaN(diceModifierAddSubtract) || isNaN(diceModifierMultiply) || howManySides < 0 || howManyDice < 0 || !integerPattern.test(howManySides) || !integerPattern.test(howManyDice) || !integerPattern.test(diceModifierAddSubtract) || !integerPattern.test(diceModifierMultiply)) {
        alert("Please enter a valid positive integer for all input fields.");
        return;
    }

    document.getElementById('dice-result-individual').innerHTML = "Result (Individual Dice): ";
    totalDiceValue = 0;

    for (let i = 1; i <= howManyDice; i += 1) {
        roll = Math.floor(Math.random() * howManySides) + 1;
        totalDiceValue += roll;
        document.getElementById('dice-result-individual').innerHTML += roll + " ";
    }
    if (dice-modifier-multiply !== 0) {
        totalDiceValue *= dice-Modifier-Multiply;
    }

    totalDiceValue += dice-modifier-add-subtract;
    document.getElementById('dice-result-total').innerHTML = "Result (Total): " + totalDiceValue;
}

document.getElementById('reset-button-dice').onclick = function() {
    document.getElementById('dice-result-total').innerHTML = "Result (Total): ";
    document.getElementById('dice-result-individual').innerHTML = "Result (Individual Dice): ";
    document.getElementById('how-many-dice-input').value = "";
    document.getElementById('how-many-sides-input').value = "";
    document.getElementById('dice-modifier-input-add-subtract').value = "";
    document.getElementById('dice-modifier-input-Multiply').value = "";
}

document.getElementById('reset-input-Fields-Dice').onclick = function() {
    document.getElementById('how-many-Dice-Input').value = "";
    document.getElementById('how-Many-Sides-Input').value = "";
    document.getElementById('dice-Modifier-Input-Add-Subtract').value = "";
    document.getElementById('dice-Modifier-Input-Multiply').value = "";
}
*/