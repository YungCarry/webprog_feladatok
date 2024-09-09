function getData() {
    let username = document.getElementById(uname);
    
    const url = `https://www.codewars.com/api/v1/users/${username}`;
    fetch(url)
    .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    alert('A felhasználó pontja: '+data.ranks.overall.score)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  }