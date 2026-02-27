//promise
//async_await

const prm = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject()
  }, 3000)
})
prm
  .then(function () {
    console.log("accpted")
  })
  .catch(function () {
    console.log("rejected")
  })

// fetch se kisi bhi url mein ja sakte hain ...
// but fetch ka data readable form ka nhi hota hian hum uslo json mein banana padta hain then vo readable ho jata hain

fetch(``)
  .then((raw) => raw.json())
  .then((data) => console.log(data))
