import express from "express";
import cors from "cors";
import mongoConnect from "../db/index.js";
import router from "./router/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoConnect();
router(app);

app.listen(3000, () => {
  console.log(`Server running at port 3000`);
});
