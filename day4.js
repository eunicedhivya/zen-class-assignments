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

// ======================================================================

// https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373

// // Task 1: Simple Programs todo for variables


// // 1. Declare four variables without assigning values and print them in console
// var item1, item2, item3, item4, item5, item6, item7;

// console.log("1. Declare four variables without assigning values and print them in console")
// console.log(item1); 
// console.log(item2);
// console.log(item3);
// console.log(item4);

// // 2. How to get value of the variable myvar as output
// var myvar= 1;
// console.log("2. How to get value of the variable myvar as output"); //
// console.log("myvar"); //remove quotes to fix this line as it turns the var name into string
// console.log(myvar); 

// // 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
// var myFirstName = "Divi";
// var myLastName = "Seed";
// var myMaritalStatus = "Single";
// var myCountryName = "India";
// var myAge = "30";


// // 4. Declare variables to store your first name, last name, marital status, country and age in a single line
// var myFirstName = "Divi", myLastName = "Seed", myMaritalStatus = "Single", myCountryName = "India", myAge = "30";

// // 5. Declare variables and assign string, boolean, undefined and null data types
// var myString = "Divi";
// var myBoolean = true;
// var myUndefined = undefined;
// var myNull = null;

// // I am 25 years old. 
// // You are 30 years old.
// // 6. Convert the string to integer
// // parseInt()
// // Number()
// // Plus sign(+)


// // 7. Write 6 statement which provide truthy & falsey values.
// console.log(1 === 1); //true because === checks both value and type
// console.log(1 === "1"); //false because === checks both value and type
// console.log(1 == 1); //true bacause  ==  check only value
// console.log("string" === 1) // false because two different data type and values
// console.log(true === true) // true because two different data type and values
// console.log(true === true) // true because two different data type and values
// var objC1 = { name: "Person 1", age:5 };
// var objC2 = { age:5, name: "Person 1" };
// console.log(JSON.stringify(objC1) === JSON.stringify(objC2)) // false because even if content is same the order of content defers


// Task 2: Simple Programs todo for Operators
// ========================================================

// Square of a number = 3
console.log(3 ** 2)

// ========================================================

// Swapping 2 numbers
let NumA = 2;
let NumB = 3;
console.log(`Swap 2 Numbers`)
console.log(`Before: a = ${NumA}, b = ${NumB}`)

// store Num A temporarily
let tempNum = NumA;

// Assign NumB val to Num A
NumA = NumB;

// Assign the tempNum that contains NumA data to NumB
NumB = tempNum;
console.log(`After: a = ${NumA}, b = ${NumB}`)

// ========================================================

// Addition of 3 numbers
console.log("Addition of 3 numbers", 3 + 3 + 3);


// Celsius to Fahrenheit conversion 10 to 50
let cel = 10;
let cel2Fah = cel * 9/5 + 32 ;

// Meter to miles meter / 1609

// Pounds to kg pound  / 2.205

// Calculate Batting Average
// Calculate five test scores and print their average
// Power of any number x ^ y. 

// Calculate Simple Interest (p * r * t)/100


// Calculate area of an equilateral triangle
// Area Of Isosceles Triangle
// Volume Of Sphere
// Volume Of Prism
// Find area of a triangle.
// Give the Actual cost and Sold cost, Calculate Discount Of Product
// Given their radius of a circle and find its diameter, circumference and area.
// Given two numbers and perform all arithmetic operations.
// Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
// Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
// Program To Calculate CGPA