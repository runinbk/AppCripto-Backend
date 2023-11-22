"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descifradoPlayfair = exports.cifradoPlayfair = void 0;
function cifradoPlayfair(texto, clave) {
    const matriz = generarMatrizClave(clave);
    const pares = obtenerPares(texto);
    let resultado = '';
    for (const par of pares) {
        const cifradoPar = cifrarPar(matriz, par);
        resultado += cifradoPar;
    }
    return resultado;
}
exports.cifradoPlayfair = cifradoPlayfair;
function generarMatrizClave(clave) {
    const alfabeto = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // Excluyendo J
    const matriz = [];
    let claveIndex = 0;
    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            if (claveIndex < clave.length) {
                matriz[i][j] = clave[claveIndex];
                claveIndex++;
            }
            else {
                const alfabetoIndex = i * 5 + j - clave.length;
                matriz[i][j] = alfabeto[alfabetoIndex];
            }
        }
    }
    return matriz;
}
function obtenerPares(texto) {
    const pares = [];
    for (let i = 0; i < texto.length; i += 2) {
        let par = texto[i];
        if (i + 1 < texto.length) {
            par += texto[i + 1];
        }
        else {
            par += 'X'; // Agregar 'X' a letras impares al final del texto
        }
        pares.push(par);
    }
    return pares;
}
function cifrarPar(matriz, par) {
    const [a, b] = par.split('');
    const [filaA, colA] = encontrarPosicion(matriz, a);
    const [filaB, colB] = encontrarPosicion(matriz, b);
    let cifrado = '';
    if (filaA === filaB) {
        cifrado += matriz[filaA][(colA + 1) % 5];
        cifrado += matriz[filaB][(colB + 1) % 5];
    }
    else if (colA === colB) {
        cifrado += matriz[(filaA + 1) % 5][colA];
        cifrado += matriz[(filaB + 1) % 5][colB];
    }
    else {
        cifrado += matriz[filaA][colB];
        cifrado += matriz[filaB][colA];
    }
    return cifrado;
}
function encontrarPosicion(matriz, letra) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (matriz[i][j] === letra) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
// Ejemplo de uso
//   const mensajeOriginal = "HELLO";
//   const clave = "KEYWORD";
//   const mensajeCifrado = cifradoPlayfair(mensajeOriginal, clave);
//   console.log("Mensaje Original:", mensajeOriginal);
//   console.log("Mensaje Cifrado con Playfair:", mensajeCifrado);
function descifradoPlayfair(textoCifrado, matriz) {
    const pares = obtenerPares(textoCifrado);
    let resultado = '';
    for (const par of pares) {
        const descifradoPar = descifrarPar(matriz, par);
        resultado += descifradoPar;
    }
    return resultado;
}
exports.descifradoPlayfair = descifradoPlayfair;
function descifrarPar(matriz, par) {
    const [a, b] = par.split('');
    const [filaA, colA] = encontrarPosicion(matriz, a);
    const [filaB, colB] = encontrarPosicion(matriz, b);
    let descifrado = '';
    if (filaA === filaB) {
        descifrado += matriz[filaA][(colA - 1 + 5) % 5];
        descifrado += matriz[filaB][(colB - 1 + 5) % 5];
    }
    else if (colA === colB) {
        descifrado += matriz[(filaA - 1 + 5) % 5][colA];
        descifrado += matriz[(filaB - 1 + 5) % 5][colB];
    }
    else {
        descifrado += matriz[filaA][colB];
        descifrado += matriz[filaB][colA];
    }
    return descifrado;
}
// Resto del código (funciones auxiliares)...
// Ejemplo de uso
//   const mensajeCifrado = "RHELXOX";
//   const matrizClave = generarMatrizClave("KEYWORD");
//   const mensajeDescifrado = descifradoPlayfair(mensajeCifrado, matrizClave);
//   console.log("Mensaje Cifrado:", mensajeCifrado);
//   console.log("Mensaje Descifrado con Playfair:", mensajeDescifrado);
//# sourceMappingURL=playfair.js.map