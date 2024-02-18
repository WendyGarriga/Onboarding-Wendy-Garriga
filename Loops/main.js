// const np = Number(prompt("Put a number between 1 and 100: "))

// for (let i = np ; i >= 1  ; i <= 100 , i--) {
//     console.log(i);
// }

//Difficulty Level: Low 2 

// const nam = Number(prompt("Put a number between 1 and 10 "))

// for (let i = 1 ;  i<=10 ; i++ ) {
//     console.log(`${nam} X ${i} =` , i*nam )
// }

//Difficult Level: Low 3

// let num1 = Number(prompt("Pleas put a number, for cancel please put 0"))
// let sum1 = 0
// while (num1){
//     sum1 = sum1+=num1
//     num1 =  Number(prompt("Pleas put a number, for cancel please put 0"))
// }
// console.log(`The sum is: ${sum1}`) 

//Difficult Level: Low 4

// let num1 
// let sum1 = 0
// do {
//     num1 = Number(prompt("Pleas put a number, for cancel please put 0"))
//     sum1 = sum1+=num1
// }
//  while (num1);

// console.log(`The sum is: ${sum1}`) 

//Difficulty Level : Low 5

// const persons = [
//      {
//          name: "Amanda",
//          lastname: "Mullin",
//          origin: "Spain",
//          studies: "Abogacy",
//      }
//  ]
//  for (const key in persons [0]){
//      console.log(key)
//  }

//Difficulty Level: Low 6

// for (const key in persons[0] ){
//     console.log(persons[0][key])
// }

//Difficulty Level: Medium 1

// let num1 = Number(prompt("Pleas put a number, for cancel please put 0"))
// let sum1 = 64
// let attempts = 0
// while (num1){
//     attempts++;
//     if (num1<sum1){
//         console.log("The number entered is minor than the secret number")
//         num1 =  Number(prompt("Pleas put a number, for cancel please put 0"))
//     }else if(num1>sum1){
//         console.log("The number entered is greater than the secret number")
//         num1 =  Number(prompt("Pleas put a number, for cancel please put 0"))
//     }if (num1==sum1){
//         console.log("The number entered is the same than the secret number, Congratulations")
//         console.log(`The secret number was : ${sum1} and you made ${attempts} attempts`)
//         break
//     }
// }

//Difficulty Level: Medium 2

// let num = Number (prompt("Please put the number you want to know his divisors"))
// for (let i =1 ; i<=num; i++){
//     if (num % i === 0 ){
//         console.log(i);
//     }
// }

//Difficulty Level: Medium 3

function ringBell() {
    let numb = Number(prompt("Put the number of times that you want the bell to ring"))
    for (let i=numb; i<=numb; i++){
    console.log("Ding Dong" , i);
    return "Ding Dong,"
    }
}
ringBell()