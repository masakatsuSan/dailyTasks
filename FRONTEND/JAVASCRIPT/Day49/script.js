var h1 = document.querySelector("h1")
var aud = new Audio("31.mp3")
document.body.addEventListener("keydown",function(ele){
    h1.innerHTML = ele.key
    if(ele.key == "s"){
        aud.play()
    }
})
