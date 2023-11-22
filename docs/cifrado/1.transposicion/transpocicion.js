"use strict";
function encryptByTransposition(message, groupSize) {
    // Paso 2: División en grupos
    const groups = [];
    for (let i = 0; i < message.length; i += groupSize) {
        groups.push(message.slice(i, i + groupSize));
    }
    // Paso 3: Reorganización de los grupos (en este caso, inversión)
    const reversedGroups = groups.reverse();
    // Paso 4: Concatenación
    const encryptedMessage = reversedGroups.join('');
    return encryptedMessage;
}
function decryptByTransposition(encryptedMessage, groupSize) {
    // Para descifrar, simplemente aplicamos el proceso inverso
    const groups = [];
    for (let i = 0; i < encryptedMessage.length; i += groupSize) {
        groups.push(encryptedMessage.slice(i, i + groupSize));
    }
    const originalGroups = groups.reverse();
    const decryptedMessage = originalGroups.join('');
    return decryptedMessage;
}
//# sourceMappingURL=transpocicion.js.map