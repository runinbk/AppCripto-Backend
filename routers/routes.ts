import { Router } from 'express';
import { check } from 'express-validator';

import {
    cifradoPorGruposController,
    cifradoPorSeriesController,
    cifradoZigZagController
} from '../controllers/transposicion.controller';
import {
    cifradoMonoalfabéticoController,
    descifradoMonoalfabéticoController
} from '../controllers/monoAlfabetico.controller';
import {
    cifradoSustitucionPolialfabéticaController
} from '../controllers/poliAlfabetico.controller';
import {
    cifradoPolialfabéticoPeriódicoController,
    descifradoPolialfabéticoPeriódicoController
} from '../controllers/poliAlfabeticosPeriodicos.controller';
import {
    cifradoPlayfairController,
    descifradoPlayfairController,
    rot13Controller
} from '../controllers/sustitucionMonoAlfabetica.controller';
import {
    cifradoPorBloquesController
} from '../controllers/permutacionPorBloques.controller';
import {
    vigenereEncryptController,
    vigenereDecryptController
} from '../controllers/vigenere.controller';
import {
    kasiskiAttackController
} from '../controllers/kasiski.controller';

const router = Router();

router.post('/cifradoPorGrupos', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoPorGruposController);

router.post('/cifradoPorSeries', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoPorSeriesController);

router.post('/cifradoZigZag', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoZigZagController);

router.post('/cifradoMonoalfabético', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoMonoalfabéticoController);

router.post('/descifradoMonoalfabético', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], descifradoMonoalfabéticoController);

router.post('/cifradoSustitucionPolialfabética', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoSustitucionPolialfabéticaController);

router.post('/cifradoPolialfabéticoPeriódico', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoPolialfabéticoPeriódicoController);

router.post('/descifradoPolialfabéticoPeriódico', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], descifradoPolialfabéticoPeriódicoController);

router.post('/cifradoPlayfair', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoPlayfairController);

router.post('/descifradoPlayfair', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], descifradoPlayfairController);

router.post('/rot13', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], rot13Controller);

router.post('/cifradoPorBloques', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoPorBloquesController);

router.post('/vigenereEncrypt', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], vigenereEncryptController);

router.post('/vigenereDecrypt', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], vigenereDecryptController);

router.post('/kasiskiAttack', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], kasiskiAttackController);

export default router;
