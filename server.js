import express from "express";
import connectDB from "./config/db.js";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);

//rest app
app.get("/", (req, res) => {
  res.send("<h1>welcome to my app</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
