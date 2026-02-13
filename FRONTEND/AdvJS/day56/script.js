// object orientent programming 
// when its come to produce to in large scale then oops is came in the view .... if chat is blocked then i will be going to check only the chat not the entire code base of the website
// faila hua code is stuctured into the class , fucntion , object .....
// Object -> in object we will be giving it my deatils of itself

class Aloochat{
    constructor(){
        this.oil = "5kg",
        this.masala = ["dhaniya","mirch","salt"];
    }
    packed(){
        console.log("this is a packed now ")
    }
    unpacked(){
        console.log("this is a unpacked now ")
    }
}

let ac1 = new Aloochat()



class kitab{
    constructor(name,auther,pages,color,price){
        this.name = name
        this.authur = auther
        this.pages = pages
        this.color = color
        this.price = price
    }
    pto(){}
    bookemarked(){}
}

let book1 = new kitab("english","Pablo",400,"yellow",399)
let book2 = new kitab("science","emanual",500,"violet",499)


class Human{
    constructor(){
        this.name = "Sumith"
        this.age = 20
        this.sex = "Male"
    }
}

Human.prototype.saanslo = function(){
    console.log("hey,,,,")
}
Human.prototype.saanslo = function(){
    console.log("bye")
}

let H1 = new Human()