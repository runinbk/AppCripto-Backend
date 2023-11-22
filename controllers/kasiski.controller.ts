import { Request, Response } from 'express';

import { kasiskiAttack } from "../helpers/7.ataqueKasiski/kasiski";

const kasiskiAttackController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje } = req.body;

    try {
        const mensajeCifrado = kasiskiAttack(mensaje);
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
    kasiskiAttackController,
};


