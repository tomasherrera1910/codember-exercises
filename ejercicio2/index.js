/*Reto 2: ¡Atrapa a esos ciber criminales!

Problema

Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.

Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.

Con su método ha conseguido descifrar estos mensajes:

"109105100117" -> midu
"9911110010110998101114" -> codember
"9911110010110998101114 109105100117" -> codember midu
"11210897121 116101116114105115" -> play tetris
Pero han interceptado un mensaje más largo que no han podido y nos han dicho que es muy importante que lo descifremos:

Pistas
Recuerda que los mensajes son cadenas de texto conformadas por números y espacios en blanco.
Parece que los números tienen algo que ver con el código ASCII.
Los espacios en blanco parece que son simplemente espacios...*/

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
