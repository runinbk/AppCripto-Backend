import { Request, Response } from 'express';

import { cifradoMonoalfabético, descifradoMonoalfabético } from "../helpers/2.sustitucion/monoAlfabetico";

const cifradoMonoalfabéticoController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, clave } = req.body;

    try {
        const mensajeCifrado = cifradoMonoalfabético(mensaje, clave);
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

const descifradoMonoalfabéticoController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, clave } = req.body;

    try {
        const mensajeDescifrado = descifradoMonoalfabético(mensaje, clave);
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
    cifradoMonoalfabéticoController,
    descifradoMonoalfabéticoController
};