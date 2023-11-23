import { Request, Response } from 'express';

import { cifradoPolialfabeticoPeriodico, descifradoPolialfabeticoPeriodico } from "../helpers/3.sustitucionMonogramicaPolialfabeto/polialfabeticosPeriodicos";

const cifradoPolialfabeticoPeriodicoController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, claves } = req.body;

    try {
        const mensajeCifrado = cifradoPolialfabeticoPeriodico(mensaje, claves);
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

const descifradoPolialfabeticoPeriodicoController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, claves } = req.body;

    try {
        const mensajeDescifrado = descifradoPolialfabeticoPeriodico(mensaje, claves);
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
    cifradoPolialfabeticoPeriodicoController,
    descifradoPolialfabeticoPeriodicoController
};