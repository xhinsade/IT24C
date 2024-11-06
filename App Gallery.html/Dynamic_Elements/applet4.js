class StudentList {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.students = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.bindSearchEvent();
        this.populateNameDropdown(); // Populate names on initialization
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.students = await response.json();
            this.renderStudentList(this.students); // Show all students initially
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderStudentList(students) {
        const studentSearchListContainer = document.getElementById('studentSearchList');
        studentSearchListContainer.innerHTML = ''; // Clear previous results

        // Create a notification message container
        const notification = document.createElement('p');
        notification.classList.add('notification');
        studentSearchListContainer.appendChild(notification);

        if (students.length === 0) {
            notification.textContent = 'No students found for your search criteria.';
        } else {
            notification.textContent = `${students.length} student(s) found.`;
            students.forEach(student => {
                const studentItem = document.createElement('div');
                studentItem.classList.add('student-item');
                studentItem.innerHTML = `
                    <p><strong>${this.highlightText(student.student_name, this.searchQuery)}</strong></p>
                    <p class="fw-light">Program: ${this.highlightText(student.student_program, this.searchQuery)} | Enrolled on: ${this.highlightText(student.student_enrolled_date, this.searchQuery)}</p>
                    <hr>
                `;
                studentSearchListContainer.appendChild(studentItem);
            });
        }
    }

    highlightText(text, query) {
        if (!query) return text; // If there's no query, return text as is
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>'); // Highlight matching part
    }

    bindSearchEvent() {
        const studentSearchBar = document.getElementById('searchInput');
        const filterType = document.getElementById('filterType');
        const searchForm = document.getElementById('searchForm');
        const nameDropdown = document.getElementById('nameDropdown');
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popupMessage');
        const closePopup = document.getElementById('closePopup');

        // Show/hide the dropdown based on filter type
        filterType.addEventListener('change', () => {
            if (filterType.value === 'name') {
                nameDropdown.style.display = 'block'; // Show dropdown for names
                studentSearchBar.style.display = 'none'; // Hide text input
            } else {
                nameDropdown.style.display = 'none'; // Hide dropdown
                studentSearchBar.style.display = 'block'; // Show text input
                studentSearchBar.value = ''; // Clear the input when switching filters
            }
        });

        // Handle selection from name dropdown
        nameDropdown.addEventListener('change', () => {
            studentSearchBar.value = nameDropdown.value; // Set input value to selected name
        });

        // Real-time filtering
        studentSearchBar.addEventListener('input', () => {
            this.searchQuery = studentSearchBar.value; // Store the current query
            this.filterStudents(studentSearchBar.value, filterType.value); // Filter on input
        });

        // Search button click event
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload
            const query = studentSearchBar.value;
            if (query) {
                popupMessage.textContent = `You searched for: "${query}"`; // Show searched name in popup
                popup.style.display = 'flex'; // Show popup
            }
        });

        // Close the popup
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none'; // Hide popup
        });

        // Close the popup when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none'; // Hide popup
            }
        });
    }

    populateNameDropdown() {
        const nameDropdown = document.getElementById('nameDropdown');
        this.students.forEach(student => {
            const option = document.createElement('option');
            option.value = student.student_name; // Set the value to the student name
            option.textContent = student.student_name; // Set display text to student name
            nameDropdown.appendChild(option);
        });
    }

    filterStudents(query, filterType) {
        const filteredStudents = this.students.filter(student => {
            query = query.toLowerCase(); // Normalize query for case-insensitivity
            switch (filterType) {
                case 'name':
                    return student.student_name.toLowerCase().includes(query);
                case 'id':
                    return student.student_id.toString().includes(query); // Convert ID to string for comparison
                case 'program':
                    return student.student_program.toLowerCase().includes(query);
                case 'year':
                    return student.student_enrolled_date.includes(query); // Check for the enrollment date
                default:
                    return true; // If no filter type is matched, return true (shouldn't happen)
            }
        });

        this.renderStudentList(filteredStudents); // Render filtered list
    }
}

// Initialize with the path to your JSON file
const studentList = new StudentList('applet4.json');
