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
exports.cifradoZigZagController = exports.cifradoPorSeriesController = exports.cifradoPorGruposController = void 0;
const transpocicion_1 = require("../helpers/1.transposicion/transpocicion");
const cifradoPorGruposController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, tamañoGrupo } = req.body;
    try {
        const mensajeCifradoPorGrupos = (0, transpocicion_1.cifradoPorGrupos)(mensaje, tamañoGrupo);
        res.json({
            mensajeCifradoPorGrupos,
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
exports.cifradoPorGruposController = cifradoPorGruposController;
const cifradoPorSeriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, serie } = req.body;
    try {
        const mensajeCifradoPorSeries = (0, transpocicion_1.cifradoPorSeries)(mensaje, serie);
        res.json({
            mensajeCifradoPorSeries,
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
exports.cifradoPorSeriesController = cifradoPorSeriesController;
const cifradoZigZagController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mensaje, líneasZigZag } = req.body;
    try {
        const mensajeCifradoZigZag = (0, transpocicion_1.cifradoZigZag)(mensaje, líneasZigZag);
        res.json({
            mensajeCifradoZigZag,
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
exports.cifradoZigZagController = cifradoZigZagController;
//# sourceMappingURL=transposicion.controller.js.map