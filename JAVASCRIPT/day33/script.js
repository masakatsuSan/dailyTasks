let age = prompt("Enter your number ...")
if (age === null){
    console.log("you have canceled...")
}
else{
    if (age.trim() === ""){
        console.log("you haven't entered your age ")
    }
    else{
        age = Number(age)
    }
}
