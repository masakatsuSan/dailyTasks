// var eles = document.querySelectorAll(".element")
// eles.forEach(function(ele){
//     ele.childNodes[3].addEventListener("click",function(){
//         if (ele.childNodes[3].innerHTML== "Add Friend"){
//             ele.childNodes[3].innerHTML = "Remove Friend"
//             ele.childNodes[3].style.backGroundColor = "red"
//         }
//         else{
//             ele.childNodes[3].innerHTML = "Add Friend"
//         }
//     })
// })

var allbtn = document.querySelectorAll("button")
allbtn.forEach(function(ele){
    ele.addEventListener("click",function(){
        if(ele.innerHTML == "Add Friend"){
            ele.innerHTML = "Remove Friend"
        }else{
            ele.innerHTML = "Add Friend"
        }
    })
})