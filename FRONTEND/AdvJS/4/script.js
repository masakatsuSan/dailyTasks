const h1 = document.querySelector("h1")
h1.addEventListener("click", function (details) {
  console.log(details)
})

  // js ek single threaded hota hain --> synchronous hota hain ek k bad ek kaam krna
// this is why asynchronous approch (jis kaam ka time kaam lagega then vo late hoga but jis kaam ka time kam lagega then vo hojayega)  print a,s,d,f,give data form fb

// callback --> ek function jo turant nhi chalega but apka ek kaam complete hoga
// correct usage of setTimeout takes a function reference as the first argument

// setInterval(function () {
//   console.log("hey")
// }, 1000)

function abcd(fn) {
  fn(function (fn3) {
    fn3(function (fn5) {
      fn5()
    })
  })
}
abcd(function (fn2) {
  fn2(function (fn4) {
    fn4(function () {
      console.log("hell")
    })
  })
})
function aloo(a) {
  a(function (a2) {
    a2()
  })
}
aloo(function (a1) {
  a1(function () {
    console.log("aloo")
  })
})



function amitsedetaillao(address, cb) {
  cb({ lt: 10000, lg: 2000 })
}
amitsedetaillao("asdf", function (details) {
  console.log(details)
})
