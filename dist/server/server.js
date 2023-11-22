"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("../routers/routes"));
class Server {
    constructor() {
        this.apiPaths = {
            cifrado: "/api"
        };
        this.app = (0, express_1.default)();
        this.port = config_1.default.PORT || "8000";
        //    Metodos iniciales
        this.middlewares();
        this.routes();
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // LECTURA DEL BODY
        this.app.use(express_1.default.json());
        // CARPETA PUBLICA
        this.app.use(express_1.default.static("public"));
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.cifrado, routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en le puerto : " + this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map