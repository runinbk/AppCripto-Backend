import { Request, Response } from 'express';

import { cifradoPolialfabéticoPeriódico, descifradoPolialfabéticoPeriódico } from "../helpers/3.sustitucionMonogramicaPolialfabeto/polialfabeticosPeriodicos";

const cifradoPolialfabéticoPeriódicoController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, claves } = req.body;

    try {
        const mensajeCifrado = cifradoPolialfabéticoPeriódico(mensaje, claves);
        res.json({
            mensajeCifrado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};

const descifradoPolialfabéticoPeriódicoController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, claves } = req.body;

    try {
        const mensajeDescifrado = descifradoPolialfabéticoPeriódico(mensaje, claves);
        res.json({
            mensajeDescifrado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};

export {
    cifradoPolialfabéticoPeriódicoController,
    descifradoPolialfabéticoPeriódicoController
};