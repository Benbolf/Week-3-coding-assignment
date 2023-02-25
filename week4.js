// 1a.

let agesArray = [3,9,23,64,2,8,28,93,];

console.log( agesArray[0] - agesArray[agesArray.length-1]);
// Using this array of numbers I printed out the diffrence 
// of the first and last element using console.log

// 1b.

agesArray.push(87);
console.log( agesArray[0] - agesArray[agesArray.length-1]);
// Using push I added an age to my array by using .length it ensures
// that my code is functional with diffrent lengths

// 1c.

let count = 0;
let total = 0;

for (let i = 0; i < agesArray.length; i++) {
    if(agesArray[i] !== undefined) {
        count++;
        total+= agesArray[i];

    }
}
let avg = total / count;
console.log(avg);
// Using a for loop I was able to find out the total then divided it by
// the count to get the average.

// 2a.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let plusSpace = " "
let combined = 0

for (let i = 0; i < names.length; i++) {
    combined += names[i].length;
}
let average = combined/names.length;
console.log(average)
// Using an array of numbers I was able to figure out the average number of letters in a set of names


// 2b.

for (let i = 0; i < names.length ; i++) {
       plusSpace = plusSpace + " " + names[i] ;       
}
console.log(plusSpace) ;
// Using the same array of numbers I put all the names togeher, seperated by a space

// 3 

// anyArray[0] - anyArray[anyArray.length - 1];
// Starting at index 0 I used the length property minues 1 of the highest array index to figure out the last element

// 4

// anyArray[0]
// To acess the first element of an array I start with index 0 to get to the first numerical value.

// 5   

let nameLengths = names.map(function(element) {
    return element.length;

});
console.log(nameLengths);
// Using a previous array of names I was able to find the lengths of each name.

// 6

let sum = nameLengths.reduce(function(accumaltor, currentValue) {
    return accumaltor + currentValue;
});
console.log(sum);
// With an array of name legnths I was able to calculate the sum of all the lengths/elements
// inside the array

// 7

let someFunction = (a,b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
};
console.log(someFunction('Hello', 3));
// Created a funcion to print out Hello 3 times to the console.

// 8

function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
createFullName('Ben', 'Bolf');
// Created a new function to create a first and last name, and then put them together seperated by a space 
// showing the full name.


// 9
let someNumbers = [10, 15, 20];
let arraySums = 0;

function output (someNumbers) {
  for (let i = 0; i <someNumbers.length; i++) {
       arraySums += someNumbers[i]; 
     if (arraySums > 100) {
     return true;}
    }
}
console.log(arraySums > 100);
// I used a function of an array of numbers that returned true when the sum is greater than 100

// 10
let numbersArray = [18, 47, 52, 26, 21];

function arrayAverage (numbersArray) {
    let arraySum = 0;
    for(let i = 0; i <numbersArray.length; i++) {
        arraySum += numbersArray[i];
    }
let output = arraySum / numbersArray.length;
console.log(output);
return output;
}

// For question 10 I had an array of numbers that I then added all up together and then dvided by 
// the amount of numbers inside that array to calcuate the average.

// 11

let array1 = [47, 52, 21, 26, 18] 
let array2 = [21, 18, 21]

function largeAverage(array1, array2) {
   if (arrayAverage(array1) > arrayAverage(array2)) {
    return true;     
    } 
    return false;
}
console.log (largeAverage(array1, array2));
// Using 2 arrays of numbers I compared averages and would print true if the first array
// is greater than the 2nd array of numbers.


// 12

moneyInPocket = 12
isHotOutside = true

function willByDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
    return true;
    }
}    
console.log (isHotOutside == true && moneyInPocket > 10.50);
    
// Using a function willbydrink will return true if both requirments are met. False if 1 doesn't meet.

// 13

function biggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(biggerElements(10));
console.log(result);
// Using this function of my own I created an array that returns elements that are bigger
// then the chosen number.
 

     

    







