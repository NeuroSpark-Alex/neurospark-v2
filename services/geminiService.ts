import { GoogleGenAI } from "@google/genai";

// Fix: Follow @google/genai guidelines for client initialization and image part extraction
export const generateLogo = async (extraPrompt: string) => {
  // Fix: Use the API key directly from process.env.API_KEY as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `
    MODERN MINIMALIST LOGO for 'NeuroSpark Ventures'. 
    An accelerator for ADHD entrepreneurs.
    SYMBOL: A fusion of a brain synapse and a lightning bolt.
    STYLE: High-tech, vector, clean lines, glowing neon purple and cyan.
    BACKGROUND: Solid Black.
    NO TEXT. NO WORDS.
    Context: ${extraPrompt}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    // Fix: Correctly iterate through parts to find the image data part as per guidelines
    const candidate = response.candidates?.[0];
    if (candidate?.content?.parts) {
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("No se pudo extraer la imagen de la respuesta");
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
