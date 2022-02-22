//This is my Week 3 Coding Assignment

//Step 1
ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log((ages[ages.length - 1]) - ages[0]);
ages.push(491);
console.log((ages[ages.length - 1]) - ages[0]);

var totalAge = 0
for(i = 0; i <= (ages.length - 1); i++) {
    var currentAge = ages[i];
    totalAge += currentAge;
}
console.log(totalAge / ages.length);

//Step 2
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let namesLength = names.map(function(name) {
    return name.length;
})
let sumOfNames = namesLength.reduce(function(a, b) {
    return a + b;
})
console.log(sumOfNames / names.length);

var concatenatedNames = ''
for(i = 0; i <= (names.length - 1); i++) {
    currentNames = names[i];
    concatenatedNames += ' ' + currentNames;
}
console.log(concatenatedNames);

//Step 3
stepThreeArray = [1, 2, 3];
stepThreeArray[length - 1]; //Accessing the last element in the array

//Step 4
stepFourArray = [1, 2, 4];
stepFourArray[0]; //Accessing the first element in the array

//Step 5
let nameLengths = names.map(function(element) {
    return element.length;
});
console.log(nameLengths);

//Step 6
let nameLengthsSum = nameLengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(nameLengthsSum);

//Step 7
function wordRevolver(word, n) {
    return word.repeat(n);
}
console.log(wordRevolver("water", 4));

//Step 8
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName("Cole", "Cable"));

//Step 9
function bigArray(stepFourArray) {
    let stepFourArraySum = stepFourArray.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })
    if(stepFourArraySum > 100) {
        return true;
    }
}

//Step 10
function arrayAverage(stepFourArray) {
    let stepFourArraySum = stepFourArray.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })
    return stepFourArraySum / stepFourArray.length;
}
//End of Step 10
let stepThreeArraySum = stepThreeArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;//Created a variable for one of the arrays in the next function
})

//Step 11
function doubleArrayAverage(stepThreeArray, stepFourArray) {
    if(stepThreeArraySum > stepFourArraySum) {
        return true;
    }
}

//Step 12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    }
}

//Step 13
function isItAMorPM(militaryTime) {
    if(militaryTime < 12) {
        console.log("It is AM");
    }
    else {
        console.log("It is PM");
    }
} // This function take a variable called militaryTime and decides what half of the day it is.