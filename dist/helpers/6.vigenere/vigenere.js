"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vigenereDecrypt = exports.vigenereEncrypt = void 0;
function vigenereEncrypt(plainText, key) {
    const alphabetSize = 26;
    let encryptedText = '';
    for (let i = 0; i < plainText.length; i++) {
        const charCode = plainText.charCodeAt(i);
        if (isUpperCase(plainText[i])) {
            encryptedText += String.fromCharCode((charCode + key.charCodeAt(i % key.length) - 2 * 'A'.charCodeAt(0)) % alphabetSize + 'A'.charCodeAt(0));
        }
        else if (isLowerCase(plainText[i])) {
            encryptedText += String.fromCharCode((charCode + key.charCodeAt(i % key.length) - 2 * 'a'.charCodeAt(0)) % alphabetSize + 'a'.charCodeAt(0));
        }
        else {
            encryptedText += plainText[i];
        }
    }
    return encryptedText;
}
exports.vigenereEncrypt = vigenereEncrypt;
function vigenereDecrypt(encryptedText, key) {
    const alphabetSize = 26;
    let decryptedText = '';
    for (let i = 0; i < encryptedText.length; i++) {
        const charCode = encryptedText.charCodeAt(i);
        if (isUpperCase(encryptedText[i])) {
            decryptedText += String.fromCharCode((charCode - key.charCodeAt(i % key.length) + alphabetSize) % alphabetSize + 'A'.charCodeAt(0));
        }
        else if (isLowerCase(encryptedText[i])) {
            decryptedText += String.fromCharCode((charCode - key.charCodeAt(i % key.length) + alphabetSize) % alphabetSize + 'a'.charCodeAt(0));
        }
        else {
            decryptedText += encryptedText[i];
        }
    }
    return decryptedText;
}
exports.vigenereDecrypt = vigenereDecrypt;
function isUpperCase(char) {
    return char >= 'A' && char <= 'Z';
}
function isLowerCase(char) {
    return char >= 'a' && char <= 'z';
}
// Ejemplo de uso
//   const mensajeOriginal = "HELLO";
//   const palabraClave = "KEY";
//   const mensajeCifrado = vigenereEncrypt(mensajeOriginal, palabraClave);
//   console.log("Mensaje Cifrado:", mensajeCifrado);
//   const mensajeDescifrado = vigenereDecrypt(mensajeCifrado, palabraClave);
//   console.log("Mensaje Descifrado:", mensajeDescifrado);
//# sourceMappingURL=vigenere.js.map