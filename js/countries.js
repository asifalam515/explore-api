const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountris(data))
}
const displayCountris=(countries)=>{
    // for(const country of countries){
    //     console.log(country);
    // }

    const countriesContainer=document.getElementById('countries-container')
countries.forEach(country=>{
    // console.log(country)
   const countryDiv=document.createElement('div')
   countryDiv.classList.add('country')
   countryDiv.innerHTML=`
   <h3>Name:${country.name.common}</h3>
   <p>Capital:${country.capital?country.capital[0]:'No capital'}</p>
   
   <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
   `
   countriesContainer.appendChild(countryDiv)
})
}

const loadCountryDetail=(code)=>{
//  https://restcountries.com/v2/alpha/{code}
const url=`https://restcountries.com/v2/alpha/${code}`
fetch(url)
.then(res=>res.json())
.then(data=>displayCountryDetails(data))
}

const displayCountryDetails=(country)=>{
    console.log(country)
   const countryDetail=document.getElementById('country-detail')
   countryDetail.innerHTML=`
   <h2>Country Name: ${country.name}</h2>
  <img src="${country.flags.png}"> 
   `
}

loadCountries()