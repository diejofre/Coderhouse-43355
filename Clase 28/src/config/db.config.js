import { config } from "dotenv";

config({
  path: `./.env.${process.env.NODE_ENV}`,
});

export const dbUser = process.env.DB_USER;
export const dbPassword = process.env.DB_PASSWORD;
export const dbHost = process.env.HOST;
export const dbName = process.env.DB_NAME;
