import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();

app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://diegojofre:coder@cluster0.mr5uk0c.mongodb.net/?retryWrites=true&w=majority",
    }),
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.listen(8080, () => {
  console.log("Server up on port 8080");
});
