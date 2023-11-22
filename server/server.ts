import express, { Application } from "express";
import cors from "cors";
import bodyParser from 'body-parser';

import config from "./config";

import routes from "../routers/routes";

export class Server {
    private app: Application;
    private port: string | number;

    private apiPaths = {
        cifrado: "/api"
    };

    constructor() {
        this.app = express();
        this.port = config.PORT || "8000";

        //    Metodos iniciales
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // LECTURA DEL BODY
        this.app.use(express.json());

        // CARPETA PUBLICA
        this.app.use(express.static("public"));

        this.app.use(bodyParser.json());
    }

    routes() {
        this.app.use(this.apiPaths.cifrado, routes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en le puerto : " + this.port);
        });
    }
}
