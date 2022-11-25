import data from "./data.js"

const REQUIERED_FIELDS = ["usr", "eme", "psw", "age", "loc", "fll"]

const users = []
const dataArray = data.split("\n")
let currentUser = ""

dataArray.forEach((user, i) => {
  if (user === "") currentUser = ""
  else currentUser += " " + user

  if (dataArray[i + 1] === "") {
    let isValid = true
    REQUIERED_FIELDS.forEach((field) => {
      if (!currentUser.includes(`${field}:`)) isValid = false
    })
    if (isValid) users.push(currentUser)
  }
})

console.log(`Cantidad de usuarios correctos: ${users.length}`)
console.log(`Último usuario: ${users[users.length - 1]}`)
