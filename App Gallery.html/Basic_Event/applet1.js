// Function to save user input data
function saveData() {
    const name = document.getElementById("name").value;
    const yearLevel = document.getElementById("yearLevel").value;
    const address = document.getElementById("address").value;
    const courseProgram = document.getElementById("courseProgram").value;

    if (name && yearLevel && address && courseProgram) {
        const confirmationMessage = `Are you sure you want to save the following data?\n
        Name: ${name}\n
        Year Level: ${yearLevel}\n
        Address: ${address}\n
        Course Program: ${courseProgram}`;
        
        if (confirm(confirmationMessage)) {
            const student = {
                name: name,
                yearLevel: yearLevel,
                address: address,
                courseProgram: courseProgram
            };

            // Retrieve existing data from local storage
            const existingData = localStorage.getItem('students');
            const students = existingData ? JSON.parse(existingData) : [];

            // Add the new student object to the existing data
            students.push(student);

            // Save the updated list back to local storage
            localStorage.setItem('students', JSON.stringify(students));

            // Clear input fields
            document.getElementById("name").value = '';
            document.getElementById("yearLevel").value = '';
            document.getElementById("address").value = '';
            document.getElementById("courseProgram").value = ''
        }
    } else {
        alert('Please fill all the fields!');
    }
}



function displayData() {
    const savedDataList = document.getElementById("savedData");
    savedDataList.innerHTML = ''; // Clear previous data

    const existingData = localStorage.getItem('students');
    const students = existingData ? JSON.parse(existingData) : [];

    if (students.length === 0) {
        savedDataList.innerHTML = '<li>No student data available.</li>'; // Display empty state
        return;
    }

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. Name: ${student.name}, Year Level: ${student.yearLevel}, Address: ${student.address}, Course Program: ${student.courseProgram}`;
        savedDataList.appendChild(li);
    });
}

function clearDisplayedData() {
    // Clear the displayed data
    document.getElementById("savedData").innerHTML = ''; // Clears displayed data
    
    // Clear all student data from localStorage
    localStorage.removeItem('students');

    // Show alert indicating the data is empty
    alert("No student data available.");

    // Optionally, you can call displayData here if you want to show the empty state immediately
    displayData();
}

//Event Function 1
function updateDisplay() {
    var textbox = document.getElementById('textbox');
    var displayText = document.getElementById('displayText');
    displayText.textContent = textbox.value;
}

function showAlert() {
    var textbox = document.getElementById('textbox');
    alert("Hello " + textbox.value);
}