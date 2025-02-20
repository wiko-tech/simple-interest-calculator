// Declare the submitButton variable and assign the submit button element to it
const submitButton = document.getElementById('submitBtn');

// Function to handle form submission and display user feedback
function submitFeedback(event) {
  // Prevent page reload on form submission
  event.preventDefault();

  // Declare variables and assign values from respective HTML input elements
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;

  // Display the submitted data on the webpage using innerHTML
  document.getElementById('userName').innerHTML = username;
  document.getElementById('userAge').innerHTML = age;
  document.getElementById('userEmail').innerHTML = email;
  document.getElementById('userJob').innerHTML = job;
  document.getElementById('userDesignation').innerHTML = designation;
  document.getElementById('userProductChoice').innerHTML = productType;
  document.getElementById('userFeedback').innerHTML = feedback;

  // Make the user information section visible by changing its display style to 'block'
  document.getElementById('userInfo').style.display = 'block';

  // Display thank you message after form submission
  alert('Thank you for your valuable feedback');
}

// Assign the submitFeedback function to execute when the onclick event occurs on the submitButton
submitButton.onclick = submitFeedback;

// Listen for 'Enter' key press to submit the feedback form
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    submitFeedback(event);
  }
});
