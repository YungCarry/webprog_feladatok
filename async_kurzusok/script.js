const apiUrl = "https://vvri.pythonanywhere.com/api";

async function fetchCourses() {
  try {
    const response = await fetch(`${apiUrl}/courses`);
    const data = await response.json();

    const coursesList = document.getElementById("courses-list");
    data.forEach(course => {
      const courseItem = document.createElement("li");
      courseItem.textContent = course.name;
      courseItem.addEventListener("click", () => {
        getCourseDetails(course.id);
      });
      coursesList.appendChild(courseItem);
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
}

fetchCourses();

document.getElementById("new-course-btn").addEventListener("click", () => {
  document.getElementById("new-course-form").style.display = "block";
});

document.getElementById("create-course-btn").addEventListener("click", async () => {
  const courseName = document.getElementById("name").value;
  const courseDescription = document.getElementById("description").value;

  try {
    const response = await fetch(`${apiUrl}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: courseName, description: courseDescription })
    });
    const data = await response.json();
    console.log("Course created:", data);
    document.getElementById("new-course-form").style.display = "none";
  } catch (error) {
    console.error("Error creating course:", error);
  }
});

document.getElementById("add-student-btn").addEventListener("click", () => {
  // Add student functionality
});

async function getCourseDetails(courseId) {
  try {
    const response = await fetch(`${apiUrl}/courses/${courseId}`);
    const data = await response.json();

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
  } catch (error) {
    console.error("Error getting course details:", error);
  }
}

async function getStudentDetails(studentId) {
  try {
    const response = await fetch(`${apiUrl}/students/${studentId}`);
    const data = await response.json();

    const studentDetails = document.getElementById("student-details");
    studentDetails.style.display = "block";
    // Add student details display logic here
  } catch (error) {
    console.error("Error getting student details:", error);
  }}