// class (is a blue print so that we can copy the object more and more...........) Q banate ho taki har baar ek naya object bana sakenge hum

class bottle{
    constructor(){
        this.name = "Nestle"
        this.price = 30
    }// constuctre k ander wala jo bhi ha vo object ka khuda ka hoga but outside constructure(i.e prototype) this are the shared values that we shared 
    speak(){}
}
bottle.prototype.fill = function(){}
bottle.prototype.drink = function(){}
let bt1 = new bottle()



// This ek special feature hota hain 


// global -> window
console.log(this)


// function -> window
function print(){
    console.log(this)
}
print()


// es5 function inside obj -> object
let obj = {
    name : "sumith",
    func : function(){
        console.log(this)
    },
    func2 : function(){
        console.log(this.name)
    }
} 
obj.func()
obj.func2() // yaha pe yahi object ka name print hogaya hain

// es6 function (kuch nhi arrow wala) inside obj -> window
 let obj2 = {
    fuc : () =>{
        console.log(this)
    }
 }
 obj2.fuc()

// es5 fucntion inside es5 -> window

let obj3 = {
    fuc : function(){
        function ABCD (){
            console.log(this)
        }
        ABCD()
    }
}
obj3.fuc()


// func insde a fucn gives type --> window but to make it answer obj then we will use the  call apply bind 

object = {
    name : "sumith",
    age : 20
}
function abcd(a,b,c,d){
    console.log(this,a,b,c,d)

}
abcd()//will give window as useuall
abcd.call(object,1,2,3,4)
abcd.apply(object,[1,2,3,4]) // uses the array
abcd.bind(object,1,2,3,4) // dont return any 
