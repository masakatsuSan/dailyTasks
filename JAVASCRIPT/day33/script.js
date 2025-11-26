// Level 1 – Pure Beginner Practice

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Enter your number ...")
// if (age === null) {
//     console.log("you have canceled...")
// } else {
//     if (age.trim() === "") {
//         console.log("you haven't entered your age ")
//     } else {
//         age = Number(age)
//         if (isNaN(age)) {
//             console.log("this is not a number")
//         } else {
//             if (age>=18) {
//                 console.log("you are eligible");
//             }else{
//                 console.log("you are a minor");
                
//             }
//         }
//     }
// }
// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let count  = 0
// for(let a = 1 ; a<16 ; a++){
//     if (a > 8){
//         count +=1
//         console.log(a);
        
//     }
// }
// console.log(`count is ${count}`);



// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let password = "masakatsuSan"
// let a = prompt("Enter your password")
// if (a===null){
//     console.log("you have cancelled it");
// }else{
//     if(a.trim()===password){
//         console.log("login succesfully");
//     }else{
//         console.log("password unmatched");
//     }
// }



// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let pass = "harshbhai"
// let attempt = 0
// open = false

// let password = prompt("Enter your password")
// attempt++
// if (pass === password) open = true

// while (pass != password){
//     if (attempt === 3){
//         console.error("Account is locked")
//         break
//     }
//     password = prompt("Enter your password")
//     open = true
//     attempt++
// }

// if(open){
//     console.log("your account is now open");
    
// }


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let count = 0 
// let words = prompt("Enter your words ....")

// while (words != "stop"){
//     if (words === "yes"){ count++ }
//     words = prompt("Enter your words ....")
// }
// console.log(count)


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let a = 1 ; a < 51 ; a++){
//     if(a%7 == 0){
//         console.log(a)
//     }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum = 0 
// for(let a = 1 ; a <= 30 ; a++){
//     if ( a % 2 != 0 ){
//         sum = sum + a
//     }
// }
// console.log(sum)

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.


// let num = prompt("enter your numuber ")
// num = Number(num)
// while( num%2 != 0 ){
//     num = prompt("enter your numuber ")
// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.





// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.





// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// count = 0 
// pos = 0
// while (count<5){
//     num = prompt("Enter your numbers ...")
//     if (num > 0){
//         pos++
//     }
//     count++
// }
// console.log(pos)



// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”











// let pass = prompt("Enter your password :")
// if (pass === "Hardcoder"){
//     console.log("login successfully")
// }
// else{
//     console.log("Incorrect password")
// }
















