//question 1
let userAge = prompt('Enter your age:');
let ageLeft = 18 - (parseInt(userAge));
if(+(userAge) >= 18){
    alert('You are old enough to drive');
}else{
    alert(`you are left with ${ageLeft} years to drive`);
}
// question 2
let myAge =26;
let yourAge = prompt('Enter your Age:');
yourAge = parseInt(yourAge);
let ageDiff1=myAge-yourAge;
let ageDiff2 = yourAge-myAge;
if(myAge > yourAge){
    console.log(`I am ${ageDiff1} years older than you`)
}else{
    console.log(`You are ${ageDiff2} years older than me`)
}

//question 3
let a = prompt("Enter value for a");
let b = prompt ("Enter value for b");

a>b ? console.log('a is greater than b'):console.log('b is greater than a')
if(a>b){
    console.log('a is greater than b')
}else{
    console.log('b is greater than a')
}

// question 4 
let userNumber = prompt('Enter any Number:')
userNumber = parseInt(userNumber);
if (userNumber % 2 == 0 ){
    console.log("The Number you entered is an even Number")
}else{
    console.log("The Number you entered is an Old number")
}

// Exercises: Level 2
let userScore = prompt('Enter your Score:')
let userScoree = parseInt(userScore);

exit
switch(userScore){
    case (userScore > 79 && userScore < 101):
        grade ='A'
        break;
    case (userScore >69 && userScore < 80 ):
        grade ='B'
        break;
    case (userScore > 59 && userScore < 70):
        grade = 'C'
        break;
    case (userScore >49 &&  userScore < 60):
        grade = 'D'
        break;  
    default:
        grade = 'F'
        break;
}
// }
// the if else case of the grading system
if(userScoree >= 80 && userScoree <= 100){
    grade ='A'
    
}else if(userScoree >= 70 && userScoree <=79 ){
    grade ='B' 
    // console.log(`your grade for this course is B`)
}else if(userScoree >=60 && userScoree <= 69){
    grade = 'C'
    // console.log(`your grade for this course is C`)
}else if (userScoree >=50 &&  userScore <= 59){
        grade = 'D'
        // console.log(`your grade for this course is D`)
    }else{
        grade = 'F'
        // console.log(`your grade for this course is F`)
    }

console.log(`Your Grade for this course is  ${grade} `)
 

// question 2
let month = prompt('Enter month');
month = month.toLowerCase()
if(month =='september'  || month == 'october' || month == 'november' ){
    season ='the season is Autumn'
}else if(month =='december'  || month == 'january' || month == 'february'){
    season ='the season is Winter'
}else if(month =='march'  || month == 'april' || month == 'may'){
    season =' the season is Spring';
}else if(month =='june'  || month == 'july' || month == 'august'){
    season ='the season is Summer';
}
else{
    season ='the season is not stated'
}
console.log(season);

// question 3
// [\]
// Exercises: Level 3

let monthDays = prompt('Enter the Month')
monthDays = monthDays.toLowerCase();
if (monthDays =='september' || monthDays =='april'|| monthDays =='june' || monthDays =='november'){
    console.log(`${month} is 30 days`)
}else if (monthDays =='january' || monthDays =='march'|| monthDays =='may' || monthDays =='august'|| 
 monthDays =='october'|| monthDays =='december' ){
    console.log(`${monthDays} is 31 days`)
}else if(monthDays == 'february')
console.log(`${monthDays} is 28 days`)
else{
    console.log(`You entered an invalid Month`)
}     

//Code to check if a year is leap year

function isLeapYear(year) {
    // Check if the given year is a leap year
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function numDaysInMonth(year, month) {
    // Return the number of days in the given month
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return isLeapYear(year) ? 29 : 28;
        default:
            return null;
    }
}

function main() {
    const year = parseInt(prompt("Enter the year:"));
    const month = parseInt(prompt("Enter the month (1-12):"));

    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        console.log("Invalid input!");
    } else {
        const numDays = numDaysInMonth(year, month);
        if (numDays !== null) {
            console.log(`Number of days in ${month}/${year}: ${numDays}`);
        } else {
            console.log("Invalid input!");
        }
    }
}

main();
