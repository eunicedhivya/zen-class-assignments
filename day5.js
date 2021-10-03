//## Do the below programs in anonymous function & IIFE

//### Print odd numbers in an array
console.log("Print odd numbers in an array in anonymous function & IIFE");
let arrOddEven = [1,2,3,4,5,6,7,8,9,10,11,12];
let printOddNo = function (inputElm) {
  inputElm.forEach(function(item){
    if(item%2 !== 0){
      console.log(item);
    }
  });
};

printOddNo(arrOddEven);
console.log("");

//###  Convert all the strings to title caps in a string array
let foods=["Pizza", "Fried Rice", "Hamburger", "Soup", "Caesar Salad", "Hash Browns", "Baked Potato", "Fried Chicken", "Grilled Cheese", "French Fries"]


console.log("");

//###  Sum of all numbers in an array
let sumofArrays = [1,2,3,4,5,6,7,8,9,10,11,12];

let printSumOfArr = function (inputElm) {
  return inputElm.reduce(function(prev, next){
    return prev + next;
  });
};
let sumOfArr = printSumOfArr(sumofArrays);
console.log("Sum of all numbers in an array =", sumOfArr);
console.log("");

//###  Return all the prime numbers in an array
// all whole positive numbers that r only divisible by itself or 1 is Prime Numbers

let check4Prime = [1,2,3,4,5,6,7,8,9,10,11,12];

let printPrimeNos = function(inputArr) {
  
  return inputArr.filter(function(inputpoint){

    for (let i = 2; inputpoint > i; i++) {
      if (inputpoint % i == 0) {
        return false;
      }
    }
    return inputpoint > 1;

  })

}

let holdPrimeNos = printPrimeNos(check4Prime);

console.log("Return all the prime numbers in an array (1 to 12) =", holdPrimeNos);
console.log("");

//###  Return all the palindromes in an array

//###  Return median of two sorted arrays of same size

//###  Remove duplicates from an array

//###  Rotate an array by k times

//## https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

//## Do the below programs in arrow functions

//###  Convert all the strings to title caps in a string array
//###  Sum of all numbers in an array
//###  Return all the prime numbers in an array
//###  Return all the palindromes in an array
