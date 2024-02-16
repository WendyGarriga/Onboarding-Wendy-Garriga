let myName = "Wendy"

console.log ( myName )

let myLastName = "Garriga"

console.log (myLastName)

let myAge = 27

console.log (myAge)

let myPet = "Lady"

console.log (myPet)

let petAge = 8

console.log (petAge)

let fullName = myName + myLastName

console.log (fullName)

let presentationText = `I am ${fullName} and i have ${myAge} years old i had a pet her name was ${myPet} and she had ${petAge} years old`

console.log (presentationText)

let sumAges = myAge + petAge

let subtractAges = myAge - petAge

let productAges = myAge * petAge

let divisionAges = myAge / petAge

console.log (sumAges)

console.log (subtractAges)

console.log (productAges)

console.log (divisionAges)

const student = {
    studentA: "Victoria",
    studentB: "Alejandro",
    studentC: "Juan",
    studentD: "Andera",
    studentE: "Carmen",
    studentF: "Sandro",
}
console.table (student)

const pets = {
    petA: "Cat",
    petB: "Dog",
    petC: "Elephant",
    petD: "Parrot",
    petE: "Snake",
    petF: "Turttle",
}
console.table (pets)

const fruits =[ "Strawberry", "Watermelon", "Banana", "Durian","Apple", "Melon"]
 console.table (fruits)

let age = Number ( prompt ("Put your age"))
 
let iAmAdult = ( age >= 18)

console.log( "I am an adult!" + iAmAdult)

const numbers = [1,2,3,4,5]

console.log (numbers)

const family = {
    1 : "Father",
    2: "Mother",
    3:"Sister" ,
    4: "Brother" ,
    5: "Uncle",
 }

 console.log (family)

 let randomText = `I have a ${fruits [1]}, and i have ${numbers [3]} friends of my ${family [4]}, and they want a piece of it`

console.log (randomText)