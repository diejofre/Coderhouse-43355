import Stripe from "stripe";

export default class PaymentService {
  constructor() {
    this.stripe = new Stripe(
      "sk_test_51NaAo9Krr5Ow2Xo99jlH0Iux9O7cxA9IMemdyBktna1BZvKTocqSjwLyjvZ1qoDfuhv9nlizKvaSwoQO5o6rotsc00RIptTuQ4"
    );
  }
  createPaymentIntent = async (data) => {
    const paymentIntent = this.stripe.paymentIntents.create(data);
    return paymentIntent;
  };
}
