import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import artRoutes from "./routes/artRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

// connect to database
connectToDB();
// create app variable
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/arts", artRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server listening on port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
