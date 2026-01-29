var h1 = document.querySelector('h1')
var dec = document.querySelector('#dec')
var inc = document.querySelector('#inc')
var a = 0

inc.addEventListener("click",function(){
    a++
    h1.innerHTML = a
})
dec.addEventListener("click",function(){
    a--
    h1.innerHTML = a
})