import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  static async generateLogoVariation(prompt: string): Promise<string> {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API_KEY no configurada. Por favor, añádela en Vercel.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const fullPrompt = `MASTERPIECE LOGO. Brand: 'NeuroSpark'. 
    Visual: A minimalist human brain made of glowing electric blue and purple neon circuits. 
    One part of the brain is exploding into geometric sparks (representing ADHD energy).
    Style: Futuristic, high-end tech, 3D render, dark background. 
    NO TEXT. HIGH CONTRAST. ${prompt}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: fullPrompt }] },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        },
      });

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
      throw new Error("La IA no generó una imagen.");
    } catch (error) {
      console.error("Gemini Error:", error);
      throw error;
    }
  }
}
