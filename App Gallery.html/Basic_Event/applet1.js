// Prevent potential DOM-based XSS by escaping input before setting innerText
function sanitizeInput(input) {
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML;
}

// Function to update the displayed text from user input
function updateDisplay() {
    const inputText = document.getElementById("textbox").value;
    const sanitizedText = sanitizeInput(inputText);
    document.getElementById("displayText").innerText = sanitizedText;
}

// Function to display an alert when the button is clicked
function showAlert() {
    alert("Button was clicked!");
}
