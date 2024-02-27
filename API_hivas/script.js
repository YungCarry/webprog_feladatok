let iranyitoszam = document.getElementById('iranyitoszam_html');
function kereses() {
    fetch('https://hur.webmania.cc/zips/7300.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(zips => {
    //for (var i = 0 <) {
       // if (iranyitoszam == zips.zip) {

       // }
       // else {
           // alert("Az adott írányítoszám nem található");
       // }
    //}
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}