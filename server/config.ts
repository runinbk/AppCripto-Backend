import dotenv from 'dotenv';

dotenv.config();

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


    API_KEY: process.env.API_KEY || '',
    JWT_AUTH: process.env.JWT_AUTH || 'e$tAcL@v3Es$cr3tA',
    JWT_RECOVERY: process.env.JWT_RECOVERY || '',

    SMTP_HOST: process.env.SMTP_HOST || '',
    SMTP_PORT: process.env.SMTP_PORT || '',
    SMTP_EMAIL: process.env.SMTP_EMAIL || '',
    SMTP_PASSWORD: process.env.SMTP_PASSWORD || '',
};

export default config;
