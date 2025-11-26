// function dosomething(){
//     console.log(arguments[0])
// }
// dosomething("Sumith",20,"email:kgp@gmail.com")


// function num(...x){
//     console.log(x)
// }
// num(1,2,3,4,5)

// let a = 12
// function abcd(val){
//     console.log(val+Math.random())
// }
// abcd(2)
// abcd(2)
// abcd(2)
// abcd(2)


//arrays

// let arr = [316,25,68,132,6,13,60,89,78,23]
//  console.log(arr.indexOf(68))
//  console.log(arr.indexOf(68))
// arr.forEach(function(val){
//     console.log(val)
// })


// let obj = {
//     name:"sumith",
//     class:"2nd year",
//     emial:"sumithkumarkgp@gmail.com"
// }
// console.log(obj.name)
// console.log(obj)

// let details = {
//     name : "sumith",
//     class : "2nd year",
//     ids : {
//         insta:"foishd",
//         facebookL:"sigfhai"
//     }
// }


// level 1



// function sayhello(){
//     console.log("hello javascript")
// }
// sayhello()

// function sum(a,b){
//     return a+b
// }
// answer = sum(3,7)
// console.log(answer)

// function greet(a="guest"){
//     console.log(`hello ${a}`)
// }
// greet("sumith")

// function numUnlimited(...num){
//     let sum = 0 
//     num.forEach(function(val){
//         sum = sum + val
//     })
//     console.log(sum)
// }
// numUnlimited(1,2,4,6,6,77)


// (function(){
//     console.log("I run instantly")
// })()


// function parent(){
//     let a = 12
//     function child(){
//         console.log(a)
//     }
//     child()
// }
// parent()

// let arr = [12,3,5,658,34,32,7,88,3,9]
// for (let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i])
// }


// let obj = {
//     name : "sumith",
//     class : "2nd year",
//     email : "Sumith@gmail.com"
// }
// for(let keys in obj ){
//     console.log(obj[keys])
// }


setTimeout(function(){
    console.log("hehehehe")
},5000)


















// 🟡 Level 2 – Functional Thinking & Logic Tasks
// (Intermediate)
// 1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.
// 2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.
// 3. Write a function that uses object destructuring
// inside parameters to extract and print `name` and
// `age`.
// 4. Demonstrate the difference between normal
// function and arrow function when used as object
// methods (the `this` issue).
// 5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.
// 6. Use `filter()` to get only even numbers from an
// array.
// 7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.
// 8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).
// 9. Create an object `user` and test the behavior of
// `Object.freeze()` and `Object.seal()` by
// adding/changing keys.
// 10. Create a nested object (`user → address → city`) and
// access the city name inside it.