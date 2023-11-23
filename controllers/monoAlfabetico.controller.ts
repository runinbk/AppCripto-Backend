import { Request, Response } from 'express';

import { cifradoMonoalfabetico, descifradoMonoalfabetico } from "../helpers/2.sustitucion/monoAlfabetico";

const cifradoMonoalfabeticoController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, clave } = req.body;

    try {
        const mensajeCifrado = cifradoMonoalfabetico(mensaje, clave);
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

const descifradoMonoalfabeticoController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, clave } = req.body;

    try {
        const mensajeDescifrado = descifradoMonoalfabetico(mensaje, clave);
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
    cifradoMonoalfabeticoController,
    descifradoMonoalfabeticoController
};