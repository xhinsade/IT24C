// Event Listener for Student Search Form
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent traditional form submission
    searchStudent(); // Call the student search function
});

// Event Listener for Student Search Form
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent traditional form submission
    searchStudentByName(); // Call the student search function
});

// Function to search students by name from localStorage
function searchStudentByName() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Get search input
    const existingData = localStorage.getItem('students'); // Retrieve student data from localStorage
    const students = existingData ? JSON.parse(existingData) : []; // Parse student data or create empty array

    let matchFound = false;

    // Loop through students and check if the name contains the search term
    students.forEach(student => {
        if (student.name.toLowerCase().includes(searchInput)) { // Check name only
            // If match found, display student information in an alert
            alert(`Match found:\nName: ${student.name}\nYear Level: ${student.yearLevel}\nAddress: ${student.address}\nCourse Program: ${student.courseProgram}`);
            matchFound = true;
        }
    });

    // If no match found, show a message
    if (!matchFound) {
        alert('No matching student found. Please try a different name.');
    }
}

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
} of
