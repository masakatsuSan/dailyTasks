import king from "./app.js"
console.log(king.name)


// default export kisi bhi name ka import se export hota hain but ek named export sirf apne hi name se export hota hian vo bhi {curly bracket ke sath}


import { user } from "./app.js"
console.log(user)

let arr1 = [10,20,30,40,50,60]
let arr2 = arr1 
let arr3 = [...arr1]
arr3.push(4)
console.log(arr2)
console.log(arr3)  

// de-structure 

var obj1 = {
    user:"aahay",
    age:21
}
var obj2 = {...obj1}
obj2.user = "Sumith"
console.log(obj1);
console.log(obj2);


