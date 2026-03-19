import king from "./app"
console.log(king.name)

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


