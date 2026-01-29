const para = document.querySelector("p")
const text = para.innerHTML
const alpha = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()"
console.log(alpha.length)
para.addEventListener("mouseenter",()=>{
    setInterval(() => {
        const str = text.split("").map((char,index)=>{
            return alpha.split("")[Math.floor(Math.random()*47)]
        }).join("")
        para.innerHTML = str
    }, 300);
})