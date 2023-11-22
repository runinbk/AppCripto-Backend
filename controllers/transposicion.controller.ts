import { Request, Response } from 'express';

import { cifradoPorGrupos, cifradoPorSeries, cifradoZigZag } from "../helpers/1.transposicion/transpocicion";

const cifradoPorGruposController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, tamañoGrupo } = req.body;

    try {
        const mensajeCifradoPorGrupos = cifradoPorGrupos(mensaje, tamañoGrupo);
        res.json({
            mensajeCifradoPorGrupos,
            msg: 'Para descifrar vuelva a aplicar el mismo metodo con el mensaje sifrado y el mismo valor que acompaña al cifrado.'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};

const cifradoPorSeriesController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, serie } = req.body;

    try {
        const mensajeCifradoPorSeries = cifradoPorSeries(mensaje, serie);
        res.json({
            mensajeCifradoPorSeries,
            msg: 'Para descifrar vuelva a aplicar el mismo metodo con el mensaje sifrado y el mismo valor que acompaña al cifrado.'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};

const cifradoZigZagController = async (req: Request, res: Response): Promise<void> => {
    const { mensaje, líneasZigZag } = req.body;

    try {
        const mensajeCifradoZigZag = cifradoZigZag(mensaje, líneasZigZag);
        res.json({
            mensajeCifradoZigZag,
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
    cifradoPorGruposController,
    cifradoPorSeriesController,
    cifradoZigZagController
};


