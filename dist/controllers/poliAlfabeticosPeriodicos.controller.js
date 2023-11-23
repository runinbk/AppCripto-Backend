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
exports.descifradoPolialfabeticoPeriodicoController = exports.cifradoPolialfabeticoPeriodicoController = void 0;
const polialfabeticosPeriodicos_1 = require("../helpers/3.sustitucionMonogramicaPolialfabeto/polialfabeticosPeriodicos");
const cifradoPolialfabeticoPeriodicoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, claves } = req.body;
    try {
        const mensajeCifrado = (0, polialfabeticosPeriodicos_1.cifradoPolialfabeticoPeriodico)(mensaje, claves);
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
exports.cifradoPolialfabeticoPeriodicoController = cifradoPolialfabeticoPeriodicoController;
const descifradoPolialfabeticoPeriodicoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, claves } = req.body;
    try {
        const mensajeDescifrado = (0, polialfabeticosPeriodicos_1.descifradoPolialfabeticoPeriodico)(mensaje, claves);
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
exports.descifradoPolialfabeticoPeriodicoController = descifradoPolialfabeticoPeriodicoController;
//# sourceMappingURL=poliAlfabeticosPeriodicos.controller.js.map