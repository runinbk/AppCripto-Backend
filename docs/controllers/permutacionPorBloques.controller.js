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
exports.cifradoPorBloquesController = void 0;
const texto_1 = require("../helpers/5.permutacionPorBloquesTextoMatriz/texto");
const cifradoPorBloquesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, bloque } = req.body;
    try {
        const mensajeCifrado = (0, texto_1.cifradoPorBloques)(mensaje, bloque);
        res.json({
            mensajeCifrado,
            msg: 'Para descifrar vuelva a aplicar el mismo metodo con el mensaje sifrado y el mismo valor que acompaña al cifrado.'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.cifradoPorBloquesController = cifradoPorBloquesController;
//# sourceMappingURL=permutacionPorBloques.controller.js.map