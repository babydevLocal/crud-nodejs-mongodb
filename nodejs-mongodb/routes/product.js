const express = require("express");
const router = express.Router();
const {
  createProduct,
  listProduct,
  readProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const { upload } = require("../middleware/upload");

router.post("/product", upload, createProduct);
router.get("/product", listProduct);
router.get("/product/:id", readProduct);
router.put("/product/:id", upload, updateProduct);
router.delete("/product/:id", deleteProduct);
module.exports = router;
