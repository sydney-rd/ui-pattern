// const germany = a real api call to particular endpoint 
// germany.name.official will return name 
// call 
// mouse cursor

const countriesImages = document.querySelectorAll(".stamp"); 
const baseUrl = "https://restcountries.com/v3.1/name/"

countriesImages.forEach((countryImg)=>{
    countryImg.addEventListener("click", (e)=>{
        fetch(baseUrl + e.target.dataset.countryname)
        .then((res) => res.json())
        .then((res)=>{
            console.log(res)
            let modal = document.querySelector("#modal")
            modal.innerHTML = ""

            let modalInfo = `
                <h1>${e.target.dataset.countryname}</h1>
                This is the coolest country! Check it out..
                <p>Capital: ${res[0].capital}</p>
                <p>Population: ${res[0].population}</p>
                <p>Continent: ${res[0].region}
                <p>Flag: ${res[0].flag}</p>
                <p>Bordering Countries: ${res[0].borders}</p>
                <p class="closeBtn"> X </p>
            `

            modal.classList.remove("hidden");
            modal.insertAdjacentHTML("beforeend", modalInfo);
        })
        .then(() => {
            document.querySelector(".closeBtn").addEventListener("click", () => {
                modal.classList.add("hidden");
            })

        })
    })
})


