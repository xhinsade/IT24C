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
            document.getElementById("courseProgram").value = '';

            // Display saved data
            displayData();

            // Provide feedback that data is saved
            document.getElementById('savedMessage').innerHTML = '<p>Data saved successfully!</p>';
        }
    } else {
        alert('Please fill all the fields!');
    }
}

// Function to display saved data
function displayData() {
    const savedDataList = document.getElementById("savedData");
    savedDataList.innerHTML = ''; // Clear previous data

    const existingData = localStorage.getItem('students');
    const students = existingData ? JSON.parse(existingData) : [];

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. Name: ${student.name}, Year Level: ${student.yearLevel}, Address: ${student.address}, Course Program: ${student.courseProgram}`;
        savedDataList.appendChild(li);
    });
}

// Load data from local storage when the page loads
window.onload = function() {
    displayData();
}
