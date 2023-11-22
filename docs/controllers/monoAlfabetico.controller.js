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
exports.descifradoMonoalfabéticoController = exports.cifradoMonoalfabéticoController = void 0;
const monoAlfabetico_1 = require("../helpers/2.sustitucion/monoAlfabetico");
const cifradoMonoalfabéticoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, clave } = req.body;
    try {
        const mensajeCifrado = (0, monoAlfabetico_1.cifradoMonoalfabético)(mensaje, clave);
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
exports.cifradoMonoalfabéticoController = cifradoMonoalfabéticoController;
const descifradoMonoalfabéticoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, clave } = req.body;
    try {
        const mensajeDescifrado = (0, monoAlfabetico_1.descifradoMonoalfabético)(mensaje, clave);
        res.json({
            mensajeDescifrado
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.descifradoMonoalfabéticoController = descifradoMonoalfabéticoController;
//# sourceMappingURL=monoAlfabetico.controller.js.map