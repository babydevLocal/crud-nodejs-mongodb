const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { name, detail, price, amount } = req.body;

    const product_check = await Product.findOne({ name }).exec();
    if (product_check) {
      return res.status(400).json({ error: "Product already exists" });
    }

    const product = new Product({
      name: name,
      detail: detail,
      price: price,
      amount: amount,
      file: req.file.filename,
    });
    await product.save();
    return res.status(201).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.readProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id }).exec();
    return res.send(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, detail, price, amount } = req.body;

    const product = await Product.findOneAndUpdate(
      { _id: id },
      { name, detail, price, amount },
      { new: true }
    ).exec();
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.send(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndDelete({ _id: id }).exec();
    return res.send(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.listProduct = async (req, res) => {
  try {
    const product = await Product.find({}).exec();
    return res.send(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
