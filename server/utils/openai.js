import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateLearningPath({ careerGoal, years = 0, focus = "" }) {
  const systemPrompt = `
  You are a precise AI that outputs only valid JSON. The JSON must conform to this schema:
  {
    "career": "<string>",
    "summary": "<string>",
    "phases": [
      {
        "title": "<string>",
        "durationWeeks": <number>,
        "skills": ["<string>", ...],
        "resources": [{ "name": "<string>", "link": "<string>" }, ...]
      }
    ]
  }
  `;

  const userPrompt = `
  Create a 3-phase learning roadmap for:
  Career Goal: ${careerGoal}
  Experience: ${years} years
  Focus: ${focus || "general"}
  Include real-world online resources and project ideas.
  `;

  try {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      text: { format: { type: "json_object" } }, // ✅ enforces valid JSON output
    });

    const text = response.output[0].content[0].text;
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("[openai] Error:", error);
    return {
      career: careerGoal,
      summary: "AI failed to return valid JSON",
      phases: [],
    };
  }
}
