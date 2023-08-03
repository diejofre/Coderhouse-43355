import dotenv from "dotenv";

const environment = "PRODUCTION";

dotenv.config({
  path: environment === "DEVELOPMENT" ? "./.env.development" : "./.env.production" // Path to .env.development or .env.
});

console.log("Environment: ", environment);
console.log("MongoDB URL: ", process.env.MONGO_URL);
console.log("Port: ", process.env.PORT);

export default {
  PORT: process.env.PORT || 8080,
  MONGODB_URL: process.env.MONGO_URL,
}