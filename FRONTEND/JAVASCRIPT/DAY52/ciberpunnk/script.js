const p = document.querySelector("p")
const text = p.innerText 
const characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
setInterval(()=>{})
//math.floor(23.09)-->23
let iteration = 0
function randomText(){
    const str = text.split("").map((char,index)=>{
        if(index<iteration){
            return char //logic : the index is kept on increasing so when iteration reach the text index then the char is return not the number .. 
        }
        return characters.split("")[Math.floor(Math.random()*characters.length)]
    }).join("")
    // console.log(str)
    p.innerText = str
    iteration += 0.5
    // console.log(iteration)
}

setInterval(() => {
    randomText()
}, 100);