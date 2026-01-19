import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private static getApiKey(): string {
    // Intentamos obtener la clave de diferentes fuentes posibles
    const key = (window as any).process?.env?.API_KEY || (import.meta as any).env?.VITE_API_KEY || "";
    return key;
  }

  static async generateLogoVariation(prompt: string): Promise<string> {
    const apiKey = this.getApiKey();
    
    if (!apiKey || apiKey === "") {
      throw new Error("API_KEY no detectada. Asegúrate de añadirla en Settings -> Environment Variables en Vercel.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const fullPrompt = `MASTERPIECE LOGO. Brand: 'NeuroSpark'. 
    Visual: A minimalist human brain made of glowing electric blue and purple neon circuits. 
    Style: Futuristic, tech, 3D render, dark background. 
    NO TEXT. ${prompt}`;

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
      throw new Error("La IA no devolvió una imagen.");
    } catch (error) {
      console.error("Gemini Error:", error);
      throw error;
    }
  }
}
