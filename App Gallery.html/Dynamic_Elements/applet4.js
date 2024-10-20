class StudentList {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.students = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.bindSearchEvent();
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

        if (students.length === 0) {
            studentSearchListContainer.innerHTML = '<p>No students found.</p>'; // Message if no students found
            return;
        }

        students.forEach(student => {
            studentSearchListContainer.innerHTML += `
                <p><strong>${student.student_name}</strong></p>
                <p class="fw-light">Program: ${student.student_program} | Enrolled on: ${student.student_enrolled_date}</p>
                <hr>
            `;
        });
    }
    
    bindSearchEvent() {
        const studentSearchBar = document.getElementById('studentSearchBar');
        const searchForm = document.getElementById('searchForm');

        // Prevent form submission and search when typing
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload
            this.filterStudents(studentSearchBar.value); // Filter on form submission
        });

        // Re-render all students if the input is cleared
        studentSearchBar.addEventListener('input', () => {
            if (studentSearchBar.value === '') {
                this.renderStudentList(this.students);
            }
        });
    }

    filterStudents(query) {
        const filteredStudents = this.students.filter(student => {
            const fullName = `${student.student_name} ${student.student_program}`;
            return fullName.toLowerCase().includes(query.toLowerCase());
        });

        this.renderStudentList(filteredStudents); // Render filtered list
    }
}

// Initialize with the path to your JSON file
const studentList = new StudentList('applet4.json');
