// Initialize array to store user data
let students = [];

// Function to save user input data
function saveData() {
    // Retrieve input values
    const name = document.getElementById("name").value;
    const yearLevel = document.getElementById("yearLevel").value;
    const address = document.getElementById("address").value;
    const courseProgram = document.getElementById("courseProgram").value;

    // Check if all fields are filled
    if (name && yearLevel && address && courseProgram) {
        // Create a student object
        const student = {
            name: name,
            yearLevel: yearLevel,
            address: address,
            courseProgram: courseProgram
        };

        // Add student object to array
        students.push(student);

        // Clear input fields
        document.getElementById("name").value = '';
        document.getElementById("yearLevel").value = '';
        document.getElementById("address").value = '';
        document.getElementById("courseProgram").value = '';

        // Display saved data
        displayData();

        // Optional: Provide feedback that data is saved
        document.getElementById('savedMessage').innerHTML = '<p>Data saved successfully!</p>';
    } else {
        // Alert user to fill all fields
        alert('Please fill all the fields!');
    }
}

// Function to display saved data
function displayData() {
    const savedDataList = document.getElementById("savedData");
    savedDataList.innerHTML = ''; // Clear previous data

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. Name: ${student.name}, Year Level: ${student.yearLevel}, Address: ${student.address}, Course Program: ${student.courseProgram}`;
        savedDataList.appendChild(li);
    });
}

// Call displayData() on page load to populate saved data (if any)
window.onload = function() {
    displayData();
};
