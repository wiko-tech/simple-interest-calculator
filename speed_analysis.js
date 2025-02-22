let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Clear input and enable editing
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
    document.getElementById("userInput").focus();

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    let userInputField = document.getElementById("userInput");
    userInputField.readOnly = true;

    // Capture user input
    let userTypedText = userInputField.value;
    
    // Calculate total length of user input
    let totalCharacters = userTypedText.length;

    // Calculate time elapsed and words per minute (WPM)
    let timeElapsed = (endTime - startTime) / 1000; // Convert to seconds
    let typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;

    let wpm = 0; // Default value
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Typing Test Results:</h2>
        <p>Words Typed: ${typedWords}</p>
        <p>Total Characters Typed: ${totalCharacters}</p>
        <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
        <p>Words Per Minute (WPM): ${wpm}</p>
    `;

    // Reset the button
    let button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}
