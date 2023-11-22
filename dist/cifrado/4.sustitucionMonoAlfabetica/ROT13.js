"use strict";
function rot13(texto) {
    return texto.replace(/[a-zA-Z]/g, function (letra) {
        const base = letra <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        return String.fromCharCode(base + (letra.charCodeAt(0) - base + 13) % 26);
    });
}
/**
 *  El cifrado ROT13 es autoreversible, lo que significa que aplicar ROT13 dos veces al texto cifrado devuelve el texto original. Por lo tanto, el mismo algoritmo se puede usar tanto para cifrar como para descifrar. En otras palabras, ROT13 es su propio inverso.
 */
// Ejemplo de uso
// const mensajeOriginal = "HELLO";
// const mensajeCifrado = rot13(mensajeOriginal);
// const mensajeDescifrado = rot13(mensajeCifrado);
// console.log("Mensaje Original:", mensajeOriginal);
// console.log("Mensaje Cifrado con ROT13:", mensajeCifrado);
// console.log("Mensaje Descifrado con ROT13:", mensajeDescifrado);
module.exports = { rot13 };
//# sourceMappingURL=ROT13.js.map