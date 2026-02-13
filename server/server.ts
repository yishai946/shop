import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./src/routes/product.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/product", productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
