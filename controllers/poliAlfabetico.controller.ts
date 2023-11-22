import { Request, Response } from 'express';

import { cifradoSustitucionPolialfabética } from "../helpers/2.sustitucion/poliAlfabetico";

const cifradoSustitucionPolialfabéticaController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, clave } = req.body;

    try {
        const mensajeCifrado = cifradoSustitucionPolialfabética(mensaje, clave);
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
    cifradoSustitucionPolialfabéticaController,
};