const cryptedMessage = `11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101`

const decodeMessage = (message) => {
  let i = 0
  let decodeString = ""
  while (i < message.length) {
    if (message[i] === "1") {
      decodeString += String.fromCharCode(Number(message.slice(i, i + 3)))
      i += 3
    } else if (message[i] === "9") {
      decodeString += String.fromCharCode(Number(message.slice(i, i + 2)))
      i += 2
    } else {
      decodeString += " "
      i++
    }
  }
  return decodeString
}
console.log(decodeMessage(cryptedMessage))
