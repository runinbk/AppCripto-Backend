"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vigenereDecryptController = exports.vigenereEncryptController = void 0;
const vigenere_1 = require("../helpers/6.vigenere/vigenere");
const vigenereEncryptController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, bloque } = req.body;
    try {
        const mensajeCifrado = (0, vigenere_1.vigenereEncrypt)(mensaje, bloque);
        res.json({
            mensajeCifrado
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.vigenereEncryptController = vigenereEncryptController;
const vigenereDecryptController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, clave } = req.body;
    try {
        const mensajeCifrado = (0, vigenere_1.vigenereDecrypt)(mensaje, clave);
        res.json({
            mensajeCifrado
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.vigenereDecryptController = vigenereDecryptController;
//# sourceMappingURL=vigenere.controller.js.map