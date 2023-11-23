import { Router } from 'express';
import { check } from 'express-validator';

import {
    cifradoPorGruposController,
    cifradoPorSeriesController,
    cifradoZigZagController
} from '../controllers/transposicion.controller';
import {
    cifradoMonoalfabeticoController,
    descifradoMonoalfabeticoController
} from '../controllers/monoAlfabetico.controller';
import {
    cifradoSustitucionPolialfabeticaController
} from '../controllers/poliAlfabetico.controller';
import {
    cifradoPolialfabeticoPeriodicoController,
    descifradoPolialfabeticoPeriodicoController
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

router.post('/cifradoMonoalfabetico', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoMonoalfabeticoController);

router.post('/descifradoMonoalfabetico', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], descifradoMonoalfabeticoController);

router.post('/cifradoSustitucionPolialfabetica', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoSustitucionPolialfabeticaController);

router.post('/cifradoPolialfabeticoPeriodico', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], cifradoPolialfabeticoPeriodicoController);

router.post('/descifradoPolialfabeticoPeriodico', [
    check('mensaje', 'El mensaje es obligatoria').not().isEmpty(),
], descifradoPolialfabeticoPeriodicoController);

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
