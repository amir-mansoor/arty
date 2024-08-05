import express from "express";
import dotenv from "dotenv";

dotenv.config();
// create app variable
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server listening on port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
