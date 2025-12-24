var rem = document.querySelector("img")
var msg = document.querySelector("h1 span")
var body = document.body
var h1 = document.querySelector("h1")

rem.addEventListener('mouseenter',function(){
    msg.innerHTML = "fix "
    body.style.backgroundColor
    = "pink"
    h1.style.color = "black"
    msg.style.color = "black"
})
rem.addEventListener('mouseleave',function(){
    msg.innerHTML = " ____ "
    body.style.backgroundColor = "black"
    h1.style.color = "white"
})