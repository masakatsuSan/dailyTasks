var btn = document.querySelector("button")
btn.addEventListener("click",function(){
    var main = document.querySelector("main")
    var h1 = document.createElement("h1")
    h1.innerHTML = "Hello from your click"
    main.appendChild(h1)
})
