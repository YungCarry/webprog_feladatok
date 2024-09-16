function getData() {
  let username = document.getElementById("uname").value;
  console.log(username);

  const url = `https://www.codewars.com/api/v1/users/${username}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";

      if (!data.username) {
        resultDiv.innerHTML = "<p>Helytelen Felhasználónév</p>";
      } else {
        if (document.getElementById("osszesitett").checked) {
          resultDiv.innerHTML = `
                <h2>Összesített: </h2>
                <p>Pontszám: ${data.ranks.overall.score}</p>
                <p>Honor: ${data.honor}</p>
              `;
        } else if (document.getElementById("nyelveksz").checked) {
          const languages = data.ranks.languages;
          let languageScores = "<h3>Nyelvek szerinti pontszám :</h3><ul>";
          for (const [language, info] of Object.entries(languages)) {
            languageScores += `<li>${language}: ${info.score}</li>`;
          }
          languageScores += "</ul>";
          resultDiv.innerHTML = languageScores;
        }
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);

      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML =
        "<p>Hiba történt az adatok lekérése során, kérjük próbálja később.</p>";
    });
}
