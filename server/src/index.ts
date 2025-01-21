import express from "express";
import mongoose from "mongoose";
import router from "./routes";

const app = express();
app.use(express.json());

const MONGO_URL = "mongodb+srv://user123:qwerty123@diplomacluster.ykf5bfo.mongodb.net/?retryWrites=true&w=majority&appName=DiplomaCluster'";
mongoose.connect(MONGO_URL, {
  dbName: "my-product-app",
}).then(() => {console.log('Database is connected');
}).catch((err) => console.log(err));

app.use("/", router);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
})