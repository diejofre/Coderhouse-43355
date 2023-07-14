import express from "express";
import session from "express-session";
import handlebars from "express-handlebars";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

import viewsRouter from "./routes/views.router.js";
import sessionsRouter from "./routes/session.router.js";
import __dirname from "./utils.js";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

const connection = mongoose.connect(
  "mongodb+srv://diegojofre:coder@cluster0.ukizu0w.mongodb.net/?retryWrites=true&w=majority"
);

app.use(
  session({
    store: new MongoStore({
      mongoUrl:
        "mongodb+srv://diegojofre:coder@cluster0.ukizu0w.mongodb.net/?retryWrites=true&w=majority",
      ttl: 3600,
    }),
    secret: "CoderS3cretFelis",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", viewsRouter);
app.use("/api/sessions", sessionsRouter);

app.listen(3000, () => console.log("Listening"));
