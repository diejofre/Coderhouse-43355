import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import FileStore from "session-file-store";

const fileStorage = FileStore(session);

const app = express();

app.use(cookieParser());
app.use(
  session({
    store: new fileStorage({ path: "./sessions" }),
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.listen(8080, () => {
  console.log("Server up on port 8080");
});
