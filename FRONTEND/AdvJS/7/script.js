function abcd(){
  let a = 13
  console.log(a)
}
abcd()

// run time error : a.age gives nothing
// syntext error let ko lef likh diya hain  
// logical error : simple logic incorrect hain yaha 
 
try{
  conole.log(
    "hello"
  )
}catch(err){
  console.log("this is from catch msg ")
}finally{ // will run evern if either works 
  console.log("yehh le chal gaya")
} 

try{
  consol.log("phela")
}catch(err){
  console.error(new Error("some thing went from our side that not your fault"))
}