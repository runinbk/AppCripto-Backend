import { Request, Response } from 'express';

import { cifradoPlayfair, descifradoPlayfair } from "../helpers/4.sustitucionMonoAlfabetica/playfair";
import { rot13 } from "../helpers/4.sustitucionMonoAlfabetica/ROT13";

const cifradoPlayfairController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, clave } = req.body;

    try {
        const mensajeCifrado = cifradoPlayfair(mensaje, clave);
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

const descifradoPlayfairController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, clave } = req.body;

    try {
        const mensajeCifrado = descifradoPlayfair(mensaje, clave);
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


const rot13Controller = async (req: Request, res: Response): Promise<void> => {
    const { mensaje } = req.body;

    try {
        const mensajeCifrado = rot13(mensaje);
        res.json({
            mensajeCifrado,
            msg: 'Para descifrar vuelva a aplicar el mismo metodo con el mensaje sifrado y el mismo valor que acompaña al cifrado.'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};

export {
    cifradoPlayfairController,
    descifradoPlayfairController,
    rot13Controller
};


