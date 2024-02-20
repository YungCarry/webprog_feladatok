fetch('https://jsonplaceholder.org/users/?id=1 ')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(user => {
    console.log("User Id: ", user.id);
    console.log("First Name: ", user.firstname);
    console.log("Last Name: ",user.lastname);
    console.log("Phone: ",user.phone);
    console.log("E-mail: ",user.email);
    console.log("Address: ",user.address.zipcode, ",", user.address.city,",", user.address.street, " ", user.address.suite);
    console.log("Geo: ", "Lateral: ",user.address.geo.lat, "; Length: ", user.address.geo.lng);
    console.log("Company: ", user.company.name);
    console.log("Website: ",user.website);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });