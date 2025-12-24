var cursour = document.getElementById("sukuna")
var main = document.getElementById("main")
main.addEventListener("mousemove",function(val){
    cursour.style.left = val.x + "px"
    cursour.style.top = val.y + "px"
    
})