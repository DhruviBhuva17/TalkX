const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    let uri = process.env.MONGO_SERVER_URI;
    if (uri && (uri.includes('127.0.0.1') || uri.includes('localhost'))) {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongoServer = await MongoMemoryServer.create();
      uri = mongoServer.getUri();
      console.log('Using in-memory MongoDB');
    }
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${process.env.PORT}`.cyan.underline);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectDB;
