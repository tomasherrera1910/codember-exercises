const response = await fetch("https://codember.dev/mecenas.json")
let data = await response.json()
let X = 0

const replaceForX = (index, isKiller) => {
  if (X === data.length - 1) return ""
  else {
    if (index === data.length) return replaceForX(0, isKiller)

    if (isKiller && data[index] !== "X") return replaceForX(index + 1, false)

    if (data[index] === "X") return replaceForX(index + 1, isKiller)

    if (!isKiller && data[index] !== "X") {
      data[index] = "X"
      X++
      return replaceForX(index + 1, true)
    }
  }
}
replaceForX(0, true)
// console.log({ length: data.length })
// console.log({ X })
data.forEach((u, i) => {
  if (u !== "X") console.log({ user: u, index: i })
})
