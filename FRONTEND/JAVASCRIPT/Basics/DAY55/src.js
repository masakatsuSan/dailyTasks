var user =  "Harsh"
var btn = document.querySelector("button")
var h1 = document.querySelector("h1")
btn.addEventListener("click",function(){
    h1.innerHTML = "changing user..."
    setTimeout(function(){
        h1.innerHTML = `Helloou I am ${user}`
    }, 2000);
})
// similarly setIntervel mein time pe ruk ruk kar ayega ........
a = 0

var int = setInterval(function(){
    a++
    console.log(a)
},5)

setInterval(function(){
    clearInterval(int)
},5000)