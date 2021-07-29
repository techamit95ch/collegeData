import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });

const { DB_URL } = process.env;
const MongoConn = (app) => {
  mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongo running"))
    .catch((error) => console.log(`${error} did not connect`));
  mongoose.set("useFindAndModify", false);
};
export default MongoConn;
