import express from "express";
import { z } from "zod";
import { generateLearningPath } from "../utils/openai.js";


const router = express.Router();


const RequestSchema = z.object({
careerGoal: z.string().min(3).max(80),
years: z.number().int().min(0).max(40).optional(),
focus: z.string().max(60).optional() // e.g., "frontend", "data", "cloud"
});


router.post("/", async (req, res) => {
const parse = RequestSchema.safeParse(req.body);
if (!parse.success) {
return res.status(400).json({ error: "Invalid request", details: parse.error.issues });
}


const { careerGoal, years, focus } = parse.data;
try {
const roadmap = await generateLearningPath({ careerGoal, years, focus });
return res.json(roadmap);
} catch (err) {
console.error("[recommend] error", err);
return res.status(500).json({ error: "Failed to generate roadmap" });
}
});


export default router;