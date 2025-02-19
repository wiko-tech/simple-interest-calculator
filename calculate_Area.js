// Function to calculate the area of a rectangle
function calculateArea() {
    // Fetch values from user input
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);

    // Validate input: Ensure values are numbers and positive
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById("result").innerText = "❌ Please enter valid positive numbers.";
        return;
    }

    // Declare and initialize the area variable
    let area = length * width;

    // Display the result
    document.getElementById("result").innerText = `✅ The area of the rectangle is: ${area}`;
    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;
}
