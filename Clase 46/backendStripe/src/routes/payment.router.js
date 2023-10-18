import Router from "express";
import PaymentService from "../services/payment.service.js";

const router = new Router();

const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 },
];

router.post("/payment-intents", async (req, res) => {
  const productRequested = products.find(
    (product) => product.id === parseInt(req.query.id)
  );
  if (!productRequested)
    return res
      .status(404)
      .send({ status: "error", error: "product not found" });
  const paymentIntentInfo = {
    amount: productRequested.price,
    currency: "usd",
    metadata: {
      user_id: "Id autogenerado por MONGO",
      orderDetails: JSON.stringify(
        {
          [productRequested.name]: 2,
        },
        null,
        "\t"
      ),
      address: JSON.stringify(
        {
          street: "calle 123",
          postalCode: "123456",
          externalNumber: "1234",
        },
        null,
        "\t"
      ),
    },
  };
  const service = new PaymentService();
  let result = await service.createPaymentIntent(paymentIntentInfo);
  console.log(result);
  res.send({ status: "success", payload: result });
});

export default router;
