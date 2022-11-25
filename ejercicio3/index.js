import { colors } from "./colors.js"

function getZebra(colors) {
  let currentZebra = []
  let maxZebra = []

  colors.forEach((color, i) => {
    if (color === colors[i - 2] || currentZebra.length < 2) {
      currentZebra.push(color)
    } else {
      if (currentZebra.length > maxZebra.length) maxZebra = [...currentZebra]
      currentZebra = []
    }
  })
  return `${maxZebra.length}, ${maxZebra[maxZebra.length - 1]}`
}
console.log(getZebra(colors))
