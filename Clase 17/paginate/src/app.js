import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";

import viewsRouter from "./routes/views.router.js";

import __dirname from "./utils.js";

const app = express();

const connection = mongoose.connect(
  "mongodb+srv://diegojofre:coder@cluster0.ukizu0w.mongodb.net/?retryWrites=true&w=majority"
);

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use("/", viewsRouter);

app.listen(8080, () => console.log("Listening 8080"));
