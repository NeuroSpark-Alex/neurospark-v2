import { GoogleGenAI } from "@google/genai";

export const generateLogo = async (extraPrompt: string) => {
  // Intentamos obtener la clave de múltiples formas por si Vite/Vercel la renombran
  const apiKey = process.env.API_KEY || (window as any).process?.env?.API_KEY;
  
  console.log("Comprobando API_KEY...");

  if (!apiKey || apiKey === "undefined" || apiKey.length < 10) {
    throw new Error("ERROR DE CONFIGURACIÓN: La API_KEY no ha llegado al navegador. Asegúrate de: 1. Guardar la variable en Vercel. 2. Hacer un 'Redeploy' manual.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    MASTERPIECE LOGO for 'NeuroSpark Ventures'. 
    Visual style: High-tech cyberpunk, geometric faceted brain, lightning bolt in the middle, gear at the bottom.
    Colors: Electric cyan, deep blue and purple neon gradients.
    Background: Solid pure black.
    Quality: Vector art, sharp lines, professional brand identity.
    NO TEXT, NO LETTERS.
    Style: ${extraPrompt}
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

    const candidate = response.candidates?.[0];
    const imagePart = candidate?.content?.parts?.find(p => p.inlineData);
    
    if (imagePart?.inlineData?.data) {
      return `data:image/png;base64,${imagePart.inlineData.data}`;
    }
    
    throw new Error("La IA respondió pero no incluyó una imagen. Reintenta.");
  } catch (error: any) {
    console.error("Error completo de Gemini:", error);
    
    if (error.message?.includes("403") || error.message?.includes("key")) {
      throw new Error("API KEY INVÁLIDA: La clave que pusiste en Vercel no funciona o no tiene permisos para generación de imágenes.");
    }

    throw new Error(error.message || "Error de conexión con la IA.");
  }
};
