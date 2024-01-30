let firstName = 'Sofiyah';
let lastName = 'Ibrahim'; 
let country = 'Nigeria' 
let city = 'Ilorin'
let age = 29
let isMarried ='true' 
let year = 2021;
//checking the data type of the variables using typeof

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));
// question 2
console.log('10'==10);
console.log(parseInt(9.8)==10)
//truthy value
console.log(3<4)
console.log(100>80)
console.log('10'==='10')
//falsy value
console.log(4<3)
console.log('10'===10)
let maritalStatus;
console.log(maritalStatus)
//Exercise 5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length !== 'jargon'.length )
//
console.log(4 > 3 && 10 < 12)//true
console.log(4 > 3 && 10 > 12)//false
console.log(4 > 3 || 10 < 12)//true
console.log(4 > 3 || 10 > 12)//true
console.log(!(4 > 3))//false
console.log(!(4 < 3))//true
console.log(!(false))//true
console.log(!(4 > 3 && 10 < 12))//false
console.log(!(4 > 3 && 10 > 12))//true
console.log(!(4 === '4'))//true
console.log(!('dragon'.includes('on') && ('python'.includes('on'))))
//Exercise 7
const TodayDate = new Date()
console.log(TodayDate.getFullYear())
console.log(TodayDate.getMonth())
console.log(TodayDate.getDay())
console.log(TodayDate.getHours())
console.log(TodayDate.getMinutes())
console.log(Date.now())
//Exercises: Level 2
let base = prompt('Enter base:')
let height = prompt('Enter Height:')
let areaOfTriangle = base * height;
alert(`Area of a triangle = ${areaOfTriangle}`)
//perimeter of a triangle
let a = prompt('Enter base:')
let b = prompt('Enter Height:')
let c = prompt('Enter Length:')
let perimeterOfTriangle = parseInt(a)+parseInt(b)+parseInt(c);
alert(`Perimeter of a triangle = ${perimeterOfTriangle}`)
//area of rectangle
let length = prompt('Enter lenth:')
let width = prompt('Enter width:')
let areaOfRectangle = length * width;
alert(`Area of a triangle = ${areaOfRectangle}`)
//perimeter of a rectangle
let length2 = prompt('Enter lenth:')
let width2 = prompt('Enter width:')
let PerimeterOfRectangle = length2 * width2;
alert(`Perimeter of a Rectangle = ${PerimeterOfRectangle}`)
//area of a circle & circumference of a circle
let radius = prompt('Enter the radius of a circle')
const pie = 3.14
let areaOfCircle = pi * radius * radius
alert(`Area of a circle = ${areaOfCircle}`)
//circumference of a circle
let circumferenceOfCircle = 2*pi * radius * radius
alert(`circumference of a circle = ${circumferenceOfCircle}`)
//calculation for slope
let x = prompt('Enter value for x:')
let y = 2*x-2
let slope = 
//calculation for slope (m)
m = (10-6)/(2-2)
console.log(m)
//number 7 yet to be answered

//question 8
let xValue = prompt('enter Value for x')
let yValue = (xValue**xValue +6*xValue +9)
//question 9
let hour = prompt('Enter hours:')
let ratePerHour = prompt('Enter rate per hour:')
let payOfHour = parseInt(hour) * parseInt(ratePerHour)
//question 10
let name = prompt("Enter your Name Here")
if(name.length > 7){
    alert(' your Name is long')
}else{
    alert('Your Name is short')
}
//question 11
let FirstName =prompt('Enter your First Name')
let LastName = prompt('Enter your Family Name')
if(firstName.length > LastName.length){
    alert(`Your First Name, ${FirstName} is longer than Your Family Name, ${LastName}`);
}
//question 12
let myAge;
let yourAge;
myAge = prompt('Enter value for My age')
yourAge = prompt('Enter value for your age')
myAge= parseInt(myAge)
yourAge =parseInt(yourAge)
if (myAge> yourAge){
    alert(`I am ${myAge}-${yourAge} year older than you`)
}else{
    alert(`I am ${yourAge}-${myAge} year older than you`)
}
//question 13
let userYear = prompt('Enter your year of Birth')
let drivingAge= parseInt(userYear)-2024
if (drivingAge > 18){
    alert(`You are ${drivingAge},You are old enough to drive`)
}else{
    alert(`You are ${drivingAge}, You will be allowed to drive after ${drivingAge}`)
}