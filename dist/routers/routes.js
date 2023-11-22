"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const transposicion_controller_1 = require("../controllers/transposicion.controller");
const monoAlfabetico_controller_1 = require("../controllers/monoAlfabetico.controller");
const poliAlfabetico_controller_1 = require("../controllers/poliAlfabetico.controller");
const poliAlfabeticosPeriodicos_controller_1 = require("../controllers/poliAlfabeticosPeriodicos.controller");
const sustitucionMonoAlfabetica_controller_1 = require("../controllers/sustitucionMonoAlfabetica.controller");
const permutacionPorBloques_controller_1 = require("../controllers/permutacionPorBloques.controller");
const vigenere_controller_1 = require("../controllers/vigenere.controller");
const kasiski_controller_1 = require("../controllers/kasiski.controller");
const router = (0, express_1.Router)();
router.post('/cifradoPorGrupos', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], transposicion_controller_1.cifradoPorGruposController);
router.post('/cifradoPorSeries', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], transposicion_controller_1.cifradoPorSeriesController);
router.post('/cifradoZigZag', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], transposicion_controller_1.cifradoZigZagController);
router.post('/cifradoMonoalfabético', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], monoAlfabetico_controller_1.cifradoMonoalfabéticoController);
router.post('/descifradoMonoalfabético', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], monoAlfabetico_controller_1.descifradoMonoalfabéticoController);
router.post('/cifradoSustitucionPolialfabética', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], poliAlfabetico_controller_1.cifradoSustitucionPolialfabéticaController);
router.post('/cifradoPolialfabéticoPeriódico', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], poliAlfabeticosPeriodicos_controller_1.cifradoPolialfabéticoPeriódicoController);
router.post('/descifradoPolialfabéticoPeriódico', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], poliAlfabeticosPeriodicos_controller_1.descifradoPolialfabéticoPeriódicoController);
router.post('/cifradoPlayfair', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], sustitucionMonoAlfabetica_controller_1.cifradoPlayfairController);
router.post('/descifradoPlayfair', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], sustitucionMonoAlfabetica_controller_1.descifradoPlayfairController);
router.post('/rot13', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], sustitucionMonoAlfabetica_controller_1.rot13Controller);
router.post('/cifradoPorBloques', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], permutacionPorBloques_controller_1.cifradoPorBloquesController);
router.post('/vigenereEncrypt', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], vigenere_controller_1.vigenereEncryptController);
router.post('/vigenereDecrypt', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], vigenere_controller_1.vigenereDecryptController);
router.post('/kasiskiAttack', [
    (0, express_validator_1.check)('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], kasiski_controller_1.kasiskiAttackController);
exports.default = router;
//# sourceMappingURL=routes.js.map