import Orders from "./models/Orders.model.js";

class OrdersDAO {
  constructor() {}

  async getAll() {
    try {
      return await Orders.find();
    } catch (error) {
      throw error;
    }
  }

  async getOne(id) {
    try {
      return await Orders.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async insert(newOrderInfo) {
    try {
      return await Orders.create(newOrderInfo);
    } catch (error) {
      throw error;
    }
  }

  async update(id, orderInfo) {
    try {
      return await Orders.updateOne({ _id: id }, { $set: orderInfo });
    } catch (error) {
      throw error;
    }
  }
}

export default OrdersDAO;
