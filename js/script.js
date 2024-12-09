// Display a welcoming message on the homepage
window.onload = function () {
    const welcomeMessageElement = document.getElementById("welcome-message");
    if (welcomeMessageElement) {
        welcomeMessageElement.innerText = "Welcome to Scenic Tokyo! Explore the best places near Tokyo.";
    }
};

// Greet the user based on their input
function greetUser() {
    const userNameInput = document.getElementById("userName"); // Get the input element
    const greetingElement = document.getElementById("userGreeting"); // Get the greeting element

    if (userNameInput && greetingElement) {
        const name = userNameInput.value.trim(); // Get and trim the user's input
        if (name) {
            greetingElement.innerText = `Hello, ${name}! Enjoy exploring Scenic Tokyo!`; // Personalized greeting
        } else {
            greetingElement.innerText = "Please enter your name."; // Prompt user to enter their name
        }
    } else {
        console.error("The input or greeting element is missing.");
    }
}
