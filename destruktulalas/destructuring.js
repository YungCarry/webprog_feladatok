//1. feladat

let car = ["Ford", "Mustang", 2022, "blue"];
let [brand, model, year, color] = car;

console.log("Brand:", brand);
console.log("Model:", model);
console.log("Year:", year);
console.log("Color:", color);
//1. kerdes:
//Valtozoneveket tetszolegesen választhatunk,
//azonban fontos a sorrend, hogy megeggyezen a tomb elemeinek a sorrendjevel.

//2. feladat

let book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  publicationYear: 2008,
  language: "English",
};
let { title: bookTitle, author: bookAuthor, publicationYear, language } = book;

console.log("Book Title:", bookTitle);
console.log("Book Author:", bookAuthor);
console.log("Publication Year:", publicationYear);
console.log("Language:", language);

//3.feladat

let student = {
  name: "John Doe",
  age: 20,
  grade: "B",
  subjects: ["Math", "English", "History"],
};

function printStudentInfo({ name, age, grade, subjects }) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Grade:", grade);
  console.log("Subjects:", subjects.join(", "));
}
printStudentInfo(student);
