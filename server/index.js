import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recommendRoute from "./routes/recommend.js";


dotenv.config();


const app = express();
app.use(express.json({ limit: "1mb" }));


const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "http://localhost:5173";
app.use(cors({ origin: ALLOWED_ORIGIN }));


app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/recommend", recommendRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[SERVER] Listening on http://localhost:${PORT}`));


