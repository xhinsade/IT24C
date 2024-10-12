
function sanitizeInput(input) {
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML;
}


function updateDisplay() {
    const inputText = document.getElementById("textbox").value;
    const sanitizedText = sanitizeInput(inputText);
    document.getElementById("displayText").innerText = sanitizedText;
}


function showAlert() {
    alert("Button was clicked!");
}
