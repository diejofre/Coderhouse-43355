import express from "express";
import cors from "cors";
import paymentRouter from "./routes/payment.router.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/payments", paymentRouter);

app.listen(8080, () => {
  console.log("Server running at port 8080");
});
