let animal = class{
    constructor(name,breed){
        this.name = name
        this.breed = breed
    } 
} // this is expression 
let an1 = new animal()//ReferenceError: Cannot access 'animal' before initialization if upper then the animal
let an2 = new animal("gojo","nah I'd win")
// we can use hoisting here as the class is not accesiible b4 the expression


class janwar{
    construcutor(){
        this.legs = 2
        this.hands = 2 
    }
    breath(){}
    eat(){}
} // base case --> features present in all the animals

class kekda extends janwar { // janwar k features tho honge hi but kuch add-on bhi honge okay
    constructor(){
        super()
        this.legs = 8
        this.hands = 0
    }
    suusu(){}
}
// isse khete hain inheritance --> pure class ke features with some extra add-ons 
let k1 = new kekda()