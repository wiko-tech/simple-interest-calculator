// Perform arithmetic operations and check code flow
function performOperation() {
    // Get values from the inputs
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);

    // Assigning a character value to observe debugging behavior
    let charValue = "A";
    console.log("Character Value:", charValue); // Debugging: Check what value is assigned

    // Check if inputs are valid
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    // Performing arithmetic operations
    let addition = num1 + num2;
    let multiplication = num1 * num2;
    let division = (num2 !== 0) ? num1 / num2 : "Cannot divide by zero";

    // Log each operation to check the flow of the code
    console.log("Addition Result:", addition);
    console.log("Multiplication Result:", multiplication);
    console.log("Division Result:", division);

    // Display the results in the paragraph
    let resultText = `
        <strong>Results:</strong><br>
        Addition: ${addition}<br>
        Multiplication: ${multiplication}<br>
        Division: ${division}
    `;
    document.getElementById("result").innerHTML = resultText;
}
