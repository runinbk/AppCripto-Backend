"use strict";
function kasiskiAttack(ciphertext) {
    const MIN_REPEAT_LENGTH = 3; // Longitud mínima de repetición para buscar
    const repetitions = {};
    // Buscar repeticiones en el texto cifrado
    for (let i = 0; i < ciphertext.length - MIN_REPEAT_LENGTH; i++) {
        const sequence = ciphertext.slice(i, i + MIN_REPEAT_LENGTH);
        const index = ciphertext.indexOf(sequence, i + MIN_REPEAT_LENGTH);
        if (index !== -1) {
            if (!repetitions[sequence]) {
                repetitions[sequence] = [];
            }
            repetitions[sequence].push(index - i);
        }
    }
    // Calcular factores comunes de las distancias encontradas
    const commonFactors = [];
    for (const sequence in repetitions) {
        const distances = repetitions[sequence];
        commonFactors.push(...findCommonFactors(distances));
    }
    // Encontrar el máximo común factor
    const probableKeyLength = findMaxCommonFactor(commonFactors);
    return probableKeyLength;
}
// Función para encontrar factores comunes de un conjunto de números
function findCommonFactors(numbers) {
    const factors = [];
    const min = Math.min(...numbers);
    for (let i = 2; i <= min; i++) {
        if (numbers.every(num => num % i === 0)) {
            factors.push(i);
        }
    }
    return factors;
}
// Función para encontrar el máximo común factor de una lista de números
function findMaxCommonFactor(numbers) {
    return numbers.reduce((gcd, num) => {
        while (num !== 0) {
            const temp = num;
            num = gcd % num;
            gcd = temp;
        }
        return gcd;
    }, numbers[0]);
}
// Ejemplo de uso
// const ciphertext = "MTEIHLAEENDYOSRNTTFNIREEACAHZBGNYSPTFDSOHEIESANLDM";
// const probableKeyLength = kasiskiAttack(ciphertext);
// console.log("Longitud probable de la clave:", probableKeyLength);
module.exports = { kasiskiAttack };
//# sourceMappingURL=kasiski.js.map