const Cart = require("../model/CartModel");
const Product = require("../model/ProductModel");

module.exports = {
  CreateCart: async () => {
    const newCart = new Cart();
    //Tạo 1 cart mới vào DB
    Cart.create(newCart);
    return newCart.id;
  },

  RemoveCart: async (id) => {
    const cart = await Cart.findById(id);
    cart.is_Delete = true;
    cart.save();
  },

  DeleteCart: async (id) => {
    const cart = await Cart.findById(id);

    cart.deleteOne();
  },

  AddItem: async (req, res) => {
    const item = await {
      id: req.body.id,
      name: req.body.name,
      image: req.body.image,
      type: req.body.type,
      price: req.body.price,
      quantity: 1,
    };

    const cart = await Cart.findById(req.user.cart_id);

    let listItem = cart.products;

    const check = await listItem.findIndex((i) => i.id === req.body.id);

    if (check >= 0) {
      (item.quantity = listItem[check].quantity + 1),
        (item.total = req.body.price * (listItem[check].quantity + 1));

      listItem[check] = item;
      cart.products = listItem;
    } else {
      item.total = req.body.price;
      cart.products.push(item);
    }

    cart.quantity++;
    cart.total += req.body.price;
    cart.save().then(res.json({ message: "Thêm vào giỏ hàng thành công" }));
  },

  RemmoveItem: async (req, res) => {
    const cart = await Cart.findById(req.user.cart_id);
    let listItem = cart.products;
    const check = await listItem.findIndex((i) => i.id === req.body.id);
    let item = listItem[check];
    listItem.splice(check, 1);
    cart.products = listItem;
    cart.quantity = cart.quantity - item.quantity;
    cart.total = cart.total - item.total;
    cart.save();
    res.status(200).json({ message: "Xóa thành công sản phẩm" });
  },

  UpdateItem: async (req, res) => {
    let total = 0;
    let quantity = 0;
    const cart = await Cart.findById(req.user.cart_id);
    let listItem = cart.products;
    const check = await listItem.findIndex((i) => i.id === req.body.id);
    let item = listItem[check];
    item.quantity = req.body.quantity;
    item.total = item.price * req.body.quantity;
    listItem[check] = item;

    listItem.forEach((product) => {
      total += product.total;
      quantity += product.quantity;
    });

    cart.products = listItem;
    cart.total = total;
    cart.quantity = quantity;

    cart.save().then(res.status(200).json({ message: "Cập nhật thành công" }));
  },

  GetCart: async (req, res) => {
    const cart = await Cart.findById(req.user.cart_id);
    const { is_Delete, ...other } = cart._doc;

    res.status(200).json({ ...other });
  },
};
