const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

//1:1
const fetchData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log(countries);
    countries.forEach((country) => {
      const languages = JSON.stringify(country.languages);
      console.log(
        `Country: ${country.name} Capital: ${country.capital} Languages: ${languages} Population: ${country.population}`
      );
    });
  } catch (err) {
    console.log(err);
  }
};

fetchData();

//2:1
let cats = [];

const fetchCatNames = async () => {
  try {
    const response = await fetch(catsAPI);
    const catNames = await response.json();
    for (const catName of catNames) {
      //   console.log(`${catName.name}`);
      cats.push(`${catName.name}`);
    }
  } catch (err) {
    console.log(err);
  }
};

// fetchCatNames();

//3:2
let countries = [];

fetch(countriesAPI)
  .then((response) =>
    response.json().then((data) => {
      countries.push(data);
    })
  )
  .catch((err) => console.log(err));

let tenCountries = [];

const tenLargestCountries = () => {
  countries
    .sort((a, b) => {
      if (a.population > b.population) {
        tenCountries.push(a);
      } else if (a.population < b.population) {
        tenCountries.push(b);
      } else {
        null;
      }
    })
    .slice(0, 10);
};
