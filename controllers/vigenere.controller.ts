import { Request, Response } from 'express';

import { vigenereDecrypt, vigenereEncrypt } from "../helpers/6.vigenere/vigenere";

const vigenereEncryptController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, bloque } = req.body;

    try {
        const mensajeCifrado = vigenereEncrypt(mensaje, bloque);
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

const vigenereDecryptController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, clave } = req.body;

    try {
        const mensajeCifrado = vigenereDecrypt(mensaje, clave);
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



export {
    vigenereEncryptController,
    vigenereDecryptController
};


