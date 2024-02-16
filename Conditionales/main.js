let num1 = 5
let num2 = 6

if (num1>num2) {
    console.log ("num1>num2",num1)
} if (num2>num1) {
    console.log("num2>num1", num2)
} if(num1===num2){
    console.log ("The numbers are equals")
}
if (num1!=num2){
    console.log("The numbers are diferents")
}

// Difficulty level : Low  4

let date1 = "2018-9-2"
let date2 = "2023-7-5"

if (date1>date2) {
    console.log (`The date ${date1} is greater than ${date2}`)
}if (date2>date1) {
    console.log (`The date ${date2} is greater than ${date1}`)
}
if (date1===date2){
    console.log( `The dates are the same`)
}

// Dificulty level : Low 6

let number1 = 5

let number2 = 7

let number3 = 9

if (number1>number2){

}else if (number1>number3){
    console.log(`The number ${number1} is the largest`)
}if (number2>number1){
    
}else if(number2>number3){
    console.log(`The number ${number2} is the largest`)
}if (number3>number1){
    console.log(`The number ${number3} is the largest`)
}else if(number3>number2){
    console.log(`The number ${number3} is the largest`)
}

// Difficulty Level: Medium 1
/*const color = prompt('Enter color: ') 

switch (color) {
    case "red":
        console.log(`The color of passion`)
        break;
    case "blue":
        console.log(`The color of the sea.`)
        break;
    case "green":
        console.log(`The color of nature`)
        break;
}
*/

// Difficulty Level: Medium 2

/*const numb1 = Number(  prompt('Enter 1st number (from 1 to 100)')  )
const numb2 = Number(  prompt('Enter 2nd number(from 1 to 100)')  )
const operation = prompt( 'Enter the operation: (addition, subtraction, multiplication, division)' )

if (1>=(numb1 && numb2)<=100){
    switch (operation) {
        case "addition":
            console.log(`The Sum of ${numb1} + ${numb2} is: ${ numb1 + numb2 }`); 
            break;
        case "subtraction":
            console.log(`The Subtraction of ${numb1} - ${numb2} is: ${ numb1 - numb2 }`);
            break;
        case "multiplication":
            console.log(`The Multiplication of ${numb1} * ${numb2} is: ${ numb1 * numb2 }`);
            break;
        case "division":
            console.log(`The Division of ${numb1} / ${numb2} is: ${ numb1 / numb2 }`);
            break;
        default: 
            console.log('Operation invalid');
            break;
} 
}
 */
// Difficulty Level: Medium 3

/*
let person1 = {
    name1: "Juan",
    age1: 39,
    height1: 1.69,
}
let person2 = {
    name2: "Ruan",
    age2 :26,
    height2: 1.30,
}

if ((height1)>(height2)){
}else if ((age1)>(age2)){
    console.log("Juan is taller and older than Ruan")
}
*/

// Difficulty Level: Medium 4
/*

const name = prompt (`Enter name`) 
const age = Number(  prompt('Enter age')  )
const height = Number (prompt( `Enter height` ))
const vision = Number(  prompt('Enter vision')  )

if (age>=18) {
    if (height>1,10)
    if (vision>=8)   
    console.log("You are qualified to drive")
}else {
    console.log("You are not qualified to drive")
}
*/

//Difficulty Level: Medium 5
/*
const age5 = Number(prompt("Enter age"))

if (age5<=12){
    alert("Infant")
}if(age5>=13 && age5<=18){
    alert("Adolescent")
}if( age5>=19 && age5<=45){
    alert("Older Young")
}if (age5>45 && age5<=100){
    alert("Elderly")
}if (age5>100){
    alert("Is he really that old?")
}
*/

//Difficulty Level: Medium 6
/*
const number = Number (prompt ("Enter only numbers from 1 to 3"))

if (number>=1 && number<=3){
    alert(`The number entered is [${number}] `)
    alert(`Twice the number entered is [${number*2} ]`)
    alert(`Three times the number entered is [${number*number*number} ]`)
}else {
    alert("That value is not allowed")
}
*/

//Difficulty Level: High
let myname = Wendy
const customerName = (prompt("Enter Customer Name: "))
const pass = (prompt ("Enter your pass: (VIP) or (Normal)"))
const ticket = (prompt("Want to use a ticket? (Yes or no)"))
const entrance =  (prompt("Yas or no"))

if (customerName===myname || pass){
        console.log(`Welcome ${myname}`)
    if(ticket === "Yes"){
        console.log(`Welcome`)
    }else {
        console.log(`Farewell`)
}else {
    const buy = prompt("Want to buy a ticket?")

}

/*Difficulty Level: High
Create a program that allows the following data to be entered on the screen:

Customer name, Pass (vip or normal), Entrance (yes or no).
People who have your name ==> show a welcome message
or VIP pass ==> show a welcome message
If you have a ticket, ask if you want to use it
If affirmative ==> show a welcome message
If negative ==> show farewell message
And finally in case of not having the same name or VIP pass or entry, ask "do you want to buy?". And in case:
negative ==> show farewell message
affirmative ==> ask for available money, in case:
More than 1000 ==> show a successful sale and welcome message
Less than 1000 ==> show sales rejection message 
*/
