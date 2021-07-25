import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const {PORT,DB_URL} = process.env;

const MongoConn= (app) => {
  mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => 
    app.listen(PORT,()=>console.log(`Mongo Connected on Port: ${PORT}`))
    )
    .catch((error) => console.log(`${error} did not connect`));
  mongoose.set("useFindAndModify", false);
};
export default  MongoConn;
