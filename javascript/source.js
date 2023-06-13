const countries = document.querySelectorAll(".stamp");
const baseUrl = "https://restcountries.com/v3.1/name/";

countries.forEach((country) => {
  country.addEventListener("click", (e) => {
    fetch(baseUrl + e.target.dataset.countryname)
      .then((res) => res.json())
      .then((res) => {
        let modal = document.querySelector("#modal");
        modal.innerHTML = "";

        let borderingCountries = `<p>Bordering Countries: ${
          res[0].borders === undefined
            ? "This country doesn't have any neighbors!"
            : res[0].borders.join(", ")
        }</p>`;

        let modalInfo = `
                <h1>${e.target.dataset.countryname}</h1>
                This is the coolest country! Check out some facts ..
                <p>Capital: ${res[0].capital}</p>
                <p>Population: ${res[0].population}</p>
                <p>Continent: ${res[0].region}
                <p>Flag: ${res[0].flag}</p>
                ${borderingCountries}
                <p class="closeBtn"> X </p>
            `;

        modal.classList.remove("hidden");
        modal.insertAdjacentHTML("beforeend", modalInfo);
      })
      .then(() => {
        document.querySelector(".closeBtn").addEventListener("click", () => {
          modal.classList.add("hidden");
        });
      });
  });
});
