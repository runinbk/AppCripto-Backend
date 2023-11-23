import { Request, Response } from 'express';

import { cifradoSustitucionPolialfabetica } from "../helpers/2.sustitucion/poliAlfabetico";

const cifradoSustitucionPolialfabeticaController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, clave } = req.body;

    try {
        const mensajeCifrado = cifradoSustitucionPolialfabetica(mensaje, clave);
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
    cifradoSustitucionPolialfabeticaController,
};