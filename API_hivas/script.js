function kereses() {
  let iranyitoszam = document.getElementById('iranyitoszam_html').value;
  console.log(iranyitoszam);
  fetch(`https://hur.webmania.cc/zips/${iranyitoszam}.json`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(zips => {
    Kiiras(zips.zips);
    
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

function Kiiras(zips){
console.log(zips);
a = []
zips.forEach(element => {
  a.push(element.name)
});
alert(a.join("\n"));
}