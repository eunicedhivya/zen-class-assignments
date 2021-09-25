/*
// How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var sorted1 = Object.keys(obj1).sort().reduce(function(obj, key){ 
        obj[key] = obj1[key]; 
        return obj;
},{});

var sorted2 = Object.keys(obj2).sort().reduce(function(obj, key){ 
        obj[key] = obj1[key]; 
        return obj;
},{});

console.log("Sorted objects")
console.log(sorted1)
console.log(sorted2)
console.log(JSON.stringify(sorted1) === JSON.stringify(sorted2))


// Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
let xhr = new XMLHttpRequest();

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {

    let data = JSON.parse(this.response);
    displayCountriesFlags(data)
    displayCountrieRegionsData(data)
  } else {

    console.log(xhr.responseText);
  }
};

// Create and send a GET request
xhr.open("GET", "country-api.json");
xhr.send();

// display all the country flags in console
function displayCountriesFlags(data){
    data.forEach(function(country){
        console.log(country.name, country.flag)
    });
}

// Use the same rest countries and print all countries name, region, sub region and population
function displayCountrieRegionsData(data){
    data.forEach(function(country){
        console.log("")
        console.log("Name:", country.name, "======================")
        console.log("Region:", country.region)
        console.log("Subregion:", country.subregion)
        console.log("Population:", country.population)
    });
}

*/

// https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373


