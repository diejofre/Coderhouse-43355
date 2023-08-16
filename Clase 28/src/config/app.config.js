import dotenv from "dotenv";

dotenv.config({
  path: `./.env.${process.env.NODE_ENV}`,
});

export const port = process.env.PORT || 8080;
export const persistence = process.env.PERSISTENCE || "memory";
