"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    APP_NAME: process.env.APP_NAME || 'API ContentCreate',
    APP_PROD: process.env.APP_PROD || 'false',
    APP_URL: process.env.APP_URL || 'http://localhost:3000',
    PORT: process.env.PORT || 8000,
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:8080',
    DB_CONNECTION: process.env.DB_CONNECTION || 'postgres',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '5432',
    DB_DATABASE: process.env.DB_DATABASE || 'content-create-db',
    DB_USERNAME: process.env.DB_USERNAME || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    //mi password
    // DB_PASSWORD: process.env.DB_PASSWORD || 'HolaMundo123',
    // MONGODB_CNN: process.env.MONGODB_CNN || 'mongodb+srv://content-create:t2jOSWZVb7Qq1CTU@content-create.tykat1s.mongodb.net/',
    // MONGODB_CNN: process.env.MONGODB_CNN || 'mongodb+srv://content-create:t2jOSWZVb7Qq1CTU@content-create.tykat1s.mongodb.net/?retryWrites=true&w=majority',
    // MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || 't2jOSWZVb7Qq1CTU',
    // MONGODB_USER: process.env.MONGODB_USER || 'content-create',
    API_KEY: process.env.API_KEY || '',
    JWT_AUTH: process.env.JWT_AUTH || 'e$tAcL@v3Es$cr3tA',
    JWT_RECOVERY: process.env.JWT_RECOVERY || '',
    SMTP_HOST: process.env.SMTP_HOST || '',
    SMTP_PORT: process.env.SMTP_PORT || '',
    SMTP_EMAIL: process.env.SMTP_EMAIL || '',
    SMTP_PASSWORD: process.env.SMTP_PASSWORD || '',
};
exports.default = config;
//# sourceMappingURL=config.js.map