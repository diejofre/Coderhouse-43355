import { createTransport } from "nodemailer";

const TEST_MAIL = "marcella.oreilly@ethereal.email";
const PASS = "KZxPaQeMNpykacsgzf";

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: PASS,
  },
});

const emailContent = {
  from: TEST_MAIL,
  to: TEST_MAIL,
  subject: "Prueba con Nodemailer",
  html: "<div><h1 style='color: blue'>Contenido de prueba desde <span style='color: gold'>Node.js con Nodemailer</span><h1><img src='cid:gatito'></div>",
  attachments: [
    {
      filename: "cat.jpg",
      path: "./cat.jpg",
      cid: "gatito",
    },
    {
      path: "./dog.jpeg",
    },
  ],
};

try {
  const info = await transporter.sendMail(emailContent);
  console.log("INFO", info);
} catch (error) {
  console.log("Error", error);
}
