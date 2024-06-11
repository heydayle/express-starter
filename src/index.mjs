import express from "express";
import cors from "cors";
import "./loadEnv.mjs";
import "express-async-errors";
import api from "./api/index.mjs";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/api/v1", api);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
