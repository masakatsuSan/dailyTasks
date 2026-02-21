//1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

let user = {
  name: "sumith",
  emial: "sumith@gamil.com",
  login: function () {
    console.log("Logged in")
  },
}
user.login()

//2.	Imagine you now have 5 users. Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

class costumers {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
  login() {
    console.log("Loggedin")
  }
}

let user1 = new costumers("sum", "sum@gamil.com")
let user2 = new costumers("sum1", "sum@gamil.com")
let user3 = new costumers("sum2", "sum@gamil.com")

//3.Create a product object that stores name and price and has a method which returns the final price after discount

let product = {
  name: "cap",
  price: 399,
  discountedprice: function () {
    return this.price - 49
  },
}

console.log(product.discountedprice())

//4/5/6.Create a Car class with the following:brand speed a drive method that prints the car brand and speed

class Car {
  constructor(brand, speed) {
    this.brand = brand
    this.speed = speed
  }
  drive() {
    // prototype --> shared memory
    return this.brand + "-" + this.speed
  }
}

let car1 = new Car("hyundai", 180)
let car2 = new Car("Maruti", 80)
console.log(car1.drive())

//7.Create a Student class whose constructor accepts name and roll number.

class student {
  constructor(name, rollnumber) {
    this.name = name
    this.rollnumber = rollnumber
  }

  introduction() {
    return this.name + " - " + this.rollnumber
  }
}

let std1 = new student("Sumith", 4002)

//9. Create an object with two methods:One method using a normal function,One method using an arrow function

let obj1 = {
  normal: function () {
    console.log(this)
  },
  arrowed: () => {
    console.log(this)
  },
}
obj1.normal() //yeh this ki value apne obj se leta hain --> tho object hoga
obj1.arrowed() //yeh this ki value apne parent se leta hain --> thos object hain but kha hian global mein obj ki value hoti ha window

//10.	Create a User constructor function (do not use class syntax).

function User(val) {
  this.name = val
  this.loggedin1  = function(){
    console.log("loggedin1") // shared memory nahi hain personal hain 
  }
}
User.prototype.loggedin2 = function(){
    console.log("loggedin2") // shared memory hain 
}
let ant1 = new User("Sumith")
let ant2 = new User("Aman")

// 11.	Add a login method in two ways: First, inside the constructor , Then, move the method to the prototype
