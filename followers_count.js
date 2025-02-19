// Initialize count to 0
let count = 0;

// Function to update the count display on the webpage
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display the updated count
}

// Function to increase the follower count and update the display
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the updated count
    checkCountValue(); // Check count value and display messages for milestones
}

// Function to check count milestones and trigger alerts
function checkCountValue() {
    if (count === 10) {
        alert("🎉 Your Instagram post gained 10 followers! Congratulations! 🚀");
    } else if (count === 20) {
        alert("🔥 Your Instagram post gained 20 followers! Keep it up! 💪");
    }
}
