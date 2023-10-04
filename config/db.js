const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://babydevweangkom:1234@e-com.2wjypoo.mongodb.net/test_multer"
    );
    console.log("Connect MongoDB Success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
