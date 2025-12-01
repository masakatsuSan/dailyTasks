// var h1 = document.querySelector('h1')
// console.log(h1) 
// var kuch = document.querySelector('h2')
// console.log(kuch)
// // html ko access krna from js --> document.queryselector('yr elemet')
// // html ko chnage karna form js --> h1.innerhtml("Heheheh")
// h1.style.color = "red"
// h1.style.backgroundColor = "pink"
// var box = document.querySelector("#box")
// box.innerHTML = "heyehey"
// box.style.backgroundColor  = "royalblue"
// h1.addEventListener("dblclick",function(){
//     console.log("heye")
// })
// var btn = document.querySelector("button")
// btn.addEventListener("click",function(){
//     h1.innerHTML = "I am batman"
// })

// var a = Math.random()*100
// console.log(a)
// var b = Math.floor(a)
// console.log(b)

// var btn = document.querySelector("button")
// var box = document.querySelector("#box")

// btn.addEventListener("click",function(){
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
// })

arr = ['sumith',"raj","shivam","sk","boda","sanju"]
var btn = document.querySelector("button")
var box = document.querySelector("#box")
btn.addEventListener("click",function(){
    var a = Math.floor(Math.random()*arr.length)
    box.innerHTML = `${arr[a]}`
    console.log(`${arr[a]}`)
}) 