// const germany = a real api call to particular endpoint 
// germany.name.official will return name 
// call 
// mouse cursor
const countriesImages = document.querySelectorAll(".country")

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
                <h3>Capital: ${res[0].capital}</h3>
                <p>Population: ${res[0].population}</p>
                <p>${res[0].flag}</p>
            `

            modal.insertAdjacentHTML("beforeend", modalInfo)
        })
    })
})



