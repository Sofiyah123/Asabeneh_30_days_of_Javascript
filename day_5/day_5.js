// Question 1
const emptyArr = [];

//Question 2
const arrOfNumbers = [10, 20, 30, 40, 50, 60, 70];

// question 3
function lengthOfArr (){
    return arrOfNumbers.length
}
console.log(lengthOfArr());

// question 4

//first item of the array
console.log(arrOfNumbers[0]);

//middle item of the array
let middleItem = (arrOfNumbers.length)/2
console.log(arrOfNumbers[Math.floor(middleItem)])

//last item of the array
console.log(arrOfNumbers[arrOfNumbers.length-1])

//question 5

const mixedDataTypes = ['sofiyah', 25, 7.5, 'married', 'female',['Salaamah','Nafeesah']]
console.log(mixedDataTypes.length)

//question 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//question 7
console.log(itCompanies)

//question 8
console.log(itCompanies.length)

//question 9

console.log(itCompanies[0])//first company

let middlecompany = Math.floor(itCompanies.length/2)
console.log(middlecompany)
console.log(itCompanies[middlecompany])//middle company

console.log(itCompanies[itCompanies.length-1])//last company

//question 10
// console.log(itCompanies)
for (const company of itCompanies){
    console.log(company)
}

// question 11
for (const company of itCompanies){
    console.log(company.toUpperCase())
}
// question 12
console.log(itCompanies.join(' '))

// question 13
function checkCompanyName(companyName){

    companyName = prompt('Enter Company Name');

    if(itCompanies.includes(companyName)){
        return `${companyName} is available among the lists of the companies`
    }else{
        return 'This company is not found'
    }
}
console.log(checkCompanyName())

// question 14 
const companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] === 'o' || itCompanies[i][j] === 'O') {
            count++;
            if (count > 1) {
                companiesWithMoreThanOneO.push(itCompanies[i]);
                break;
            }
        }
    }
}

console.log(companiesWithMoreThanOneO);

// question 15
// console.log(itCompanies.sort())

// question 16
// console.log(itCompanies.reverse())

// question 17
// console.log(itCompanies.slice(0,3))

// question 18
// console.log(itCompanies.slice(4))

// question 19
// console.log(itCompanies.slice(4,1))

// question 20
console.log(itCompanies[0])//first item of the array

// question 21
console.log(itCompanies[Math.floor(itCompanies.length/2)])//middle item of the array

// question 22
console.log(itCompanies[itCompanies.length-1])

// question 23
console.log(itCompanies.splice())

// Exercise: Level 2
// this exercise has been solved in main.js file

// question 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let punctuation = /['',.]/gi;
let cleanedText =(text.replace(punctuation,''));
console.log(cleanedText);
const arrText = cleanedText.split(' ')
console.log(arrText.length)

// question 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat')
console.log(shoppingCart);

// question 3ii
shoppingCart.push('Sugar');
console.log(shoppingCart);

// question 3iii
shoppingCart.splice(4,1)
console.log(shoppingCart)
// console.log(shoppingCart);

// question 3iv
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

// question 4
// has been solved inside main.js file

// Exercise: Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//question 3i
let SortedAge = []
 SortedAge = ages.sort();
// console.log('SortedAge' , SortedAge)
let minAge = ages[0]
let maxAge = ages[SortedAge.length-1]
console.log("Sorted ages:",SortedAge)
console.log("Minimum Ages:",minAge)
console.log("Maximum Ages:",maxAge)


//Average Age
let sum = 0;
let Average;
for(let i =0; i<ages.length; i++){
    sum +=ages[i];
    console.log('sum=',sum)
}
Average =(sum/ages.length);
console.log("Average = ", Average)

//Range of Age

let rangeOfAge =SortedAge[SortedAge.length-1] - SortedAge[0]
console.log('Range of Ages =', rangeOfAge)