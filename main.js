<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Basic Math Operations</title>
</head>
<body>

<label for="firstnumber">Please enter first number:</label>
<input type="text" id="firstnumber">
<div id="firstnumber-error" style="color: red;"></div>

<label for="secondnumber">Please enter second number:</label>
<input type="text" id="secondnumber">
<div id="secondnumber-error" style="color: red;"></div>

<label>Please select operation you want to perform:</label><br>
<input type="radio" name="operation" value="addition"> Addition<br>
<input type="radio" name="operation" value="subtraction"> Subtraction<br>
<input type="radio" name="operation" value="multiplication"> Multiplication<br>
<input type="radio" name="operation" value="division"> Division<br>
<div id="operation-error" style="color: red;"></div>

<button onclick="calculate()">Calculate</button>
<button onclick="resetForm()">Reset</button>

<div id="result" style="color: green;"></div>

<script>
function calculate() {
    let firstNumber = document.getElementById("firstnumber").value.trim();
    let secondNumber = document.getElementById("secondnumber").value.trim();
    let operation = document.querySelector('input[name="operation"]:checked');

    let firstNumberError = document.getElementById("firstnumber-error");
    let secondNumberError = document.getElementById("secondnumber-error");
    let operationError = document.getElementById("operation-error");
    let resultDisplay = document.getElementById("result");

    firstNumberError.textContent = '';
    secondNumberError.textContent = '';
    operationError.textContent = '';
    resultDisplay.textContent = '';

    if (firstNumber === '') {
        firstNumberError.textContent = "Please enter first Number";
        return;
    } else if (isNaN(firstNumber)) {
        firstNumberError.textContent = "Please enter valid number";
        return;
    }

    if (secondNumber === '') {
        secondNumberError.textContent = "Please enter second Number";
        return;
    } else if (isNaN(secondNumber)) {
        secondNumberError.textContent = "Please enter valid number";
        return;
    }

    if (!operation) {
        operationError.textContent = "Select any of the operation";
        return;
    }

    let result;
    if (operation.value === "addition") {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operation.value === "subtraction") {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operation.value === "multiplication") {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (operation.value === "division") {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    resultDisplay.textContent = "Result is: " + result;
}

function resetForm() {
    document.getElementById("firstnumber").value = "";
    document.getElementById("secondnumber").value = "";
    document.querySelector('input[name="operation"]:checked').checked = false;
    document.getElementById("result").textContent = "";
    document.getElementById("firstnumber-error").textContent = "";
    document.getElementById("secondnumber-error").textContent = "";
    document.getElementById("operation-error").textContent = "";
}
</script>

</body>
</html>
