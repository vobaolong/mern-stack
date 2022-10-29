const Cart = require("../model/CartModel");
const Order = require("../model/OrderModel");
const Product = require("../model/ProductModel");

module.exports = {
  CreateOrder: async (req, res) => {
    const cart = await Cart.findById(req.user.cart_id);

    for (let item of cart.products) {
      const product = await Product.findById(item.id);
      let list_type = product.type;

      const type_item = await {
        color: "",
        quantity: 0,
      };

      let type = await list_type.findIndex((i) => i.color === item.type.color);

      if (item.quantity > list_type[type].quantity) {
        throw res.status(400).json({
          message:
            "Số lượng sản phẩm " + product.name + " không đủ để tạo đơn hàng",
        });
      }

      type_item.color = list_type[type].color;
      type_item.quantity = list_type[type].quantity - item.quantity;

      list_type[type] = type_item;

      product.type = list_type;

      //Cập nhật lại số lượng sản phẩm
      product.sell = product.sell + cart.quantity;
      product.save();
    }

    const newOrder = await new Order({
      user_id: req.user.id,
      quantity: cart.quantity,
      products: cart.products,
      total: cart.total,
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
    });

    //Reset Cart
    cart.products = [];
    cart.quantity = 0;
    cart.total = 0;
    cart.save();

    // Tạo mới order
    Order.create(newOrder).then(
      res.status(200).json({ message: "Tạo đơn hàng thành công" })
    );
  },

  UpdateOrder: async (req, res) => {
    const order = await Order.findOne({ user_id: req.user.id });
    order.state = req.body.state;
    order
      .save()
      .then(res.status(200).json({ message: "Cập nhật đơn hàng thành công" }));
  },

  UpdatePay: async (req, res) => {
    const order = await Order.findOne({ user_id: req.user.id });
    order.payed = true;
    order
      .save()
      .then(res.status(200).json({ message: "Cập nhật đơn hàng thành công" }));
  },

  DeleteOrder: async (req, res) => {
    const order = await Order.findOne({ user_id: req.user.id });
    order
      .deleteOne()
      .then(res.status(200).json({ message: "Hủy đơn hàng thành công" }));
  },

  GetOrderByUser: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = req.query.maxResult || 10;
    let start = (page - 1) * perPage;
    let end = page * perPage;
    Order.find({ user_id: req.user.id })
      .sort({ createdAt: -1 })
      .then((order) => {
        res
          .status(200)
          .json({
            order: other.slice(start, end),
            total: order.length,
            totalPage: Math.ceil(order.length / perPage),
          })
      }
        
      );
  },

  GetAll: async (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = req.query.maxResult || 10;
    let start = (page - 1) * perPage;
    let end = page * perPage;
    Order.find()
      .sort({ createdAt: -1 })
      .then((order) => {
        res
          .status(200)
          .json({
            order: other.slice(start, end),
            total: order.length,
            totalPage: Math.ceil(order.length / perPage),
          })
      }
      );
  },

  GetOrderById: async (req, res) => {
    const order = await Order.findById(req.params.orderId);
    const { is_Delete, ...other } = order._doc;
    res.status(200).json({ ...other });
  }
};
