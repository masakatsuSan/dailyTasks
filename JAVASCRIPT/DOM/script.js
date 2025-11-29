var h1 = document.querySelector('h1')
console.log(h1) 
var kuch = document.querySelector('h2')
console.log(kuch)
// html ko access krna from js --> document.queryselector('yr elemet')
// html ko chnage karna form js --> h1.innerhtml("Heheheh")
h1.style.color = "red"
h1.style.backgroundColor = "pink"
var box = document.querySelector("#box")
box.innerHTML = "heyehey"
box.style.backgroundColor  = "royalblue"
h1.addEventListener("dblclick",function(){
    console.log("heye")
})
var btn = document.querySelector("button")
btn.addEventListener("click",function(){
    h1.innerHTML = "I am batman"
})