document.addEventListener('DOMContentLoaded', () => {
    // Event listener for submitting and logging data
    document.getElementById('submitDataButton').addEventListener('click', submitData);

    // Event listener for clearing logs
    document.getElementById('clearButton').addEventListener('click', clearLogs);
    
    // Event listener for search form submission
    document.getElementById('searchForm').addEventListener('submit', searchEntry);
});

let collectedData = [];

// Function to submit student data and log the entry
function submitData() {
    const studentName = document.getElementById("studentName").value.trim();
    const schoolId = document.getElementById("schoolId").value.trim();

    if (studentName && schoolId) {
        // Store collected data
        collectedData.push({ name: studentName, schoolId: schoolId, time: new Date().toLocaleString() });
        
        // Clear input fields
        document.getElementById("studentName").value = '';
        document.getElementById("schoolId").value = '';

        // Display the collected data
        displayCollectedData();
        updateLogCount();
    } else {
        alert("Please fill in both fields.");
    }
}

// Function to display collected data
function displayCollectedData() {
    const idContainer = document.getElementById("idContainer");
    idContainer.innerHTML = ''; // Clear previous data

    collectedData.forEach((data, index) => {
        const dataEntry = document.createElement('div');
        dataEntry.className = 'data-entry'; // Add a class for styling
        dataEntry.innerHTML = `
            <strong>Student ${index + 1}:</strong><br>
            Name: ${data.name}<br>
            School ID: ${data.schoolId}<br>
            Time: ${data.time}<br><br>
        `;
        idContainer.appendChild(dataEntry);
    });
}

// Function to update log count
function updateLogCount() {
    const logCountElement = document.getElementById('logCount');
    const totalLogs = collectedData.length; // Count current log entries
    logCountElement.textContent = `Total Logs: ${totalLogs}`;
}

// Function to clear logs
function clearLogs() {
    document.getElementById("idContainer").innerHTML = ''; // Clear logs
    document.getElementById('logCount').textContent = "Total Logs: 0"; // Reset log count
    collectedData = []; // Clear collected data
}

// Function to search for a student entry
function searchEntry(e) {
    e.preventDefault(); // Prevent the form from submitting

    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase(); // Get the search input value

    // Find the entry in the collected data
    const foundEntry = collectedData.find(entry => entry.name.toLowerCase() === searchInput);

    if (foundEntry) {
        alert(`Name: ${foundEntry.name}\nSchool ID: ${foundEntry.schoolId}\nTime: ${foundEntry.time}`);
    } else {
        alert("No matching entry found.");
    }

    // Clear the search input field
    document.getElementById("searchInput").value = '';
}
