<<<<<<< HEAD
const apiUrl = "https://vvri.pythonanywhere.com/api";

fetch(`${apiUrl}/courses`)
    .then(response => response.json())
    .then(data => {
        const coursesList = document.getElementById("courses-list");
        data.forEach(course => {
            const courseItem = document.createElement("li");
            courseItem.textContent = course.name;
            courseItem.addEventListener("click", () => {
                getCourseDetails(course.id);
            });
            coursesList.appendChild(courseItem);
        });
    });

function getCourseDetails(courseId) {
    fetch(`${apiUrl}/courses/${courseId}`)
        .then(response => response.json())
        .then(data => {
            const courseDetails = document.getElementById("course-details");
            courseDetails.style.display = "block";
            document.getElementById("course-name").textContent = data.name;
            document.getElementById("course-description").textContent = data.description;

            const studentsList = document.getElementById("students-list");
            studentsList.innerHTML = "";
            data.students.forEach(student => {
                const studentItem = document.createElement("li");
                studentItem.textContent = student.name;
                studentItem.addEventListener("click", () => {
                    getStudentDetails(student.id);
                });
                studentsList.appendChild(studentItem);
            });
        });
}

// Create new course
document.getElementById("new-course-btn").addEventListener("click", () => {
    document.getElementById("new-course-form").style.display = "block";
});

document.getElementById("create-course-btn").addEventListener("click", () => {
    const courseName = document.getElementById("name").value;
    const courseDescription = document.getElementById("description").value;
    fetch(`${apiUrl}/courses`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: courseName, description: courseDescription })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Course created:", data);
            document.getElementById("new-course-form").style.display = "none";
        });
});

// Add student to course
document.getElementById("add-student-btn").addEventListener("click", () => {
    // TO DO: implement adding student to course
});

// Get student details
function getStudentDetails(studentId) {
    fetch(`${apiUrl}/students/${studentId}`)
        .then(response => response.json())
        .then(data => {
            const studentDetails = document.getElementById("student-details");
=======
const apiUrl = "https://vvri.pythonanywhere.com/api";

fetch(`${apiUrl}/courses`)
    .then(response => response.json())
    .then(data => {
        const coursesList = document.getElementById("courses-list");
        data.forEach(course => {
            const courseItem = document.createElement("li");
            courseItem.textContent = course.name;
            courseItem.addEventListener("click", () => {
                getCourseDetails(course.id);
            });
            coursesList.appendChild(courseItem);
        });
    });

function getCourseDetails(courseId) {
    fetch(`${apiUrl}/courses/${courseId}`)
        .then(response => response.json())
        .then(data => {
            const courseDetails = document.getElementById("course-details");
            courseDetails.style.display = "block";
            document.getElementById("course-name").textContent = data.name;
            document.getElementById("course-description").textContent = data.description;

            const studentsList = document.getElementById("students-list");
            studentsList.innerHTML = "";
            data.students.forEach(student => {
                const studentItem = document.createElement("li");
                studentItem.textContent = student.name;
                studentItem.addEventListener("click", () => {
                    getStudentDetails(student.id);
                });
                studentsList.appendChild(studentItem);
            });
        });
}

// Create new course
document.getElementById("new-course-btn").addEventListener("click", () => {
    document.getElementById("new-course-form").style.display = "block";
});

document.getElementById("create-course-btn").addEventListener("click", () => {
    const courseName = document.getElementById("name").value;
    const courseDescription = document.getElementById("description").value;
    fetch(`${apiUrl}/courses`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: courseName, description: courseDescription })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Course created:", data);
            document.getElementById("new-course-form").style.display = "none";
        });
});

// Add student to course
document.getElementById("add-student-btn").addEventListener("click", () => {
    // TO DO: implement adding student to course
});

// Get student details
function getStudentDetails(studentId) {
    fetch(`${apiUrl}/students/${studentId}`)
        .then(response => response.json())
        .then(data => {
            const studentDetails = document.getElementById("student-details");
>>>>>>> 84a8ab0968922a7709c1b74eb535e90fd65b23bb
            studentDetails.style.display = "block"})}