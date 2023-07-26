import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import router from "./router/index.js";
import initializePassport from "./config/passport.config.js";
import passport from "passport";
const PORT = 3000;

const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
initializePassport();
app.use(passport.initialize());

router(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
