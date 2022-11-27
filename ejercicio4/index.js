const min = 11098
const max = 98123
let results = []
for (let i = min; i < max; i++) {
  const numberArray = String(i).split("")
  let valid = true
  let five = 0
  numberArray.forEach((n, i) => {
    if (Number(n) > Number(numberArray[i + 1])) valid = false
    if (n === "5") five++
  })
  if (five >= 2 && valid) {
    results.push(i)
  }
}
console.log(results.length)
console.log(results[55])
