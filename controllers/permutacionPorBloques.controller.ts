import { Request, Response } from 'express';

import { cifradoPorBloques } from "../helpers/5.permutacionPorBloquesTextoMatriz/texto";

const cifradoPorBloquesController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, bloque } = req.body;

    try {
        const mensajeCifrado = cifradoPorBloques(mensaje, bloque);
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
    cifradoPorBloquesController
};


