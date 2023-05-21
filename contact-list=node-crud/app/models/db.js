const mongoose = require("mongoose");
const connectDB = () => {
    mongoose.connect(process.env.MONGOURI)
    .then(() => console.log("Mongo connected"))
    .catch((err) => console.log(`MongoDB connection error${err}`));

}

module.exports = connectDB 