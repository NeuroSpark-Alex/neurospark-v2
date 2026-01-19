import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  static async generateLogo(description: string): Promise<string> {
    const apiKey = process.env.API_KEY;
    if (!apiKey) throw new Error("API_KEY_MISSING");

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `
      ULTRA MODERN LOGO DESIGN for a company called 'NeuroSpark'.
      CONCEPT: A startup accelerator for ADHD minds.
      VISUAL: A stylized brain synapse meeting an electric spark. 
      STYLE: Minimalist, vector art, glowing neon cyan and vibrant purple.
      BACKGROUND: Solid black. 
      FEEL: High energy, professional, tech-forward, divergent thinking.
      NO TEXT, NO LETTERS. Only the symbol.
      ADDITIONAL DETAIL: ${description}
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
        config: { imageConfig: { aspectRatio: "1:1" } }
      });

      const imagePart = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (imagePart?.inlineData) {
        return `data:image/png;base64,${imagePart.inlineData.data}`;
      }
      throw new Error("No image data");
    } catch (error) {
      console.error("Error generating logo:", error);
      throw error;
    }
  }
}
