document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById('displayText');
    if (element) {
        element.innerHTML = "Your text will appear here!";
    }
});


// Create an array to store user data
let students = [];

// Function to save user input data
function saveData() {
    const name = document.getElementById("name").value;
    const yearLevel = document.getElementById("yearLevel").value;
    const address = document.getElementById("address").value;
    const courseProgram = document.getElementById("courseProgram").value;

    if (name && yearLevel && address && courseProgram) {
        // Create a student object and push it to the students array
        const student = {
            name: name,
            yearLevel: yearLevel,
            address: address,
            courseProgram: courseProgram
        };

        students.push(student);

        // Clear the input fields
        document.getElementById("name").value = '';
        document.getElementById("yearLevel").value = '';
        document.getElementById("address").value = '';
        document.getElementById("courseProgram").value = '';

        displayData();
        alert('Data saved successfully!');
    } else {
        alert('Please fill all the fields!');
    }
}

 function displayData() {
            const savedDataList = document.getElementById("savedData");
            savedDataList.innerHTML = ''; // Clear previous data

            users.forEach((student, index) => {
                const li = document.createElement('li');
                li.textContent = `${index + 1}. Name: ${student.name}, Year Level: ${student.yearLevel}, Address: ${student.address}, Course Program: ${student.courseProgram}`;
                savedDataList.appendChild(li);
            });
        }
        
        window.onload = function() {
    displayData();
        }
        
        document.getElementById('displayText')
