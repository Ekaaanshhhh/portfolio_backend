import express from "express";
import cors from "cors";
import sendEmailRouter from "./router/sendEmailRouter.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(
  cors({
    origin: [process.env.FRONTEND_URL,"http://localhost:5173"],
    methods: ["POST"],
  })
);
app.use(express.json());
app.use("/",sendEmailRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});