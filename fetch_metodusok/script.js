//GET metódus:

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

//POST metódus:

const newTodo = {
  title: 'Új feladat',
  completed: false,
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTodo)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

//PUT metódus:

const updatedTodo = {
  id: 1,
  title: 'Frissített feladat',
  completed: true,
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedTodo)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

//PATCH metódus:

const patchedTodo = {
  title: 'Részben frissített feladat'
};

fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(patchedTodo)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

//DELETE metódus:

fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
