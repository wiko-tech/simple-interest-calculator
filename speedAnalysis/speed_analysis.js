let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text in the input box
    document.getElementById("inputText").value = testText;
    
    // Clear user input and enable editing
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
    document.getElementById("userInput").focus();

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Enable the "End Test" button and change its functionality
    let button = document.getElementById("btn");
    button.disabled = false;
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input and "End Test" button
    let userInputField = document.getElementById("userInput");
    userInputField.readOnly = true;

    // Capture user input
    let userTypedText = userInputField.value;
    
    // Calculate total characters typed (length of the text)
    let totalCharacters = userTypedText.length;

    // Calculate time elapsed and words per minute (WPM)
    let timeElapsed = (endTime - startTime) / 1000; // Convert to seconds
    let typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;

    let wpm = 0; // Default value
    if (timeElapsed > 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Typing Test Results:</h2>
        <p><strong>Words Typed:</strong> ${typedWords}</p>
        <p><strong>Total Characters Typed:</strong> ${totalCharacters}</p> <!-- Display total characters -->
        <p><strong>Total Length of Text (including spaces):</strong> ${totalCharacters} characters</p> <!-- Total length -->
        <p><strong>Time Elapsed:</strong> ${timeElapsed.toFixed(2)} seconds</p>
        <p><strong>Words Per Minute (WPM):</strong> ${wpm}</p>
    `;

    // Reset the button
    let button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.disabled = true;  // Disable after test completion
}
