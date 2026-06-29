import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  try {
    const { peak, duration, style } = await req.json();
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      messages: [
        {
          role: "user",
          content: `You are an expert yoga teacher. Create a yoga class sequence as JSON. Peak pose: ${peak}, Duration: ${duration} minutes, Style: ${style}. Return ONLY a valid JSON object, no extra text, no markdown. Use this structure: {"summary":"one sentence","phases":[{"name":"Phase name","type":"warm","duration_minutes":5,"poses":[{"name":"Pose name","sanskrit":"Sanskrit name","duration":"5 breaths","note":"brief cue","is_peak":false}]}]}. Keep it concise. Maximum 4 poses per phase. 5 phases total with types: warm, build, peak, cool, close.`
        }
      ]
    });
    const text = message.content[0].type === "text" ? message.content[0].text : "";
    return NextResponse.json({ sequence: text });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
