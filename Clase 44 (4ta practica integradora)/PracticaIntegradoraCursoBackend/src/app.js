import express from "express";
import __dirname from "./utils.js";
import cors from "cors";

import usersRouter from "./routes/users.router.js";
import coursesRouter from "./routes/courses.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import viewsRouter from "./routes/views.router.js";

import handlebars from "express-handlebars";
import mongoose from "mongoose";
import passport from "passport";
import initializePassport from "./config/passport.config.js";
import cookieParser from "cookie-parser";
import config from "./config/config.js";
import addLogger from "./middleware/logger.middleware.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

const app = express();
const PORT = 8080;
const connection = mongoose.connect(config.mongo.URL);

/**
 * Swagger config
 */

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "API Práctica integradora",
      description: "Documentación sobre la integración actual",
    },
  },
  apis: [`${__dirname}/docs/**/*.yaml`],
};
const specs = swaggerJsdoc(swaggerOptions);

/**
 * Template engine
 */
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

/**
 * Middlewares
 */
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

initializePassport();
app.use(passport.initialize());
app.use(cookieParser());
app.use(addLogger);
app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use("/", viewsRouter);
app.use("/api/users", usersRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/sessions", sessionsRouter);

const server = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
