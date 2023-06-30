import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";

import viewsRouter from "./routes/views.router.js";
import companiesRouter from "./routes/companies.router.js";

import __dirname from "./utils.js";

const app = express();
const connection = await mongoose.connect(
  "mongodb+srv://diegojofre:coder@cluster0.u24cdbg.mongodb.net/?retryWrites=true&w=majority"
);

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/", viewsRouter);
app.use("/api/companies", companiesRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
