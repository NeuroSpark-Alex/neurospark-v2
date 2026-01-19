import { GoogleGenAI } from "@google/genai";

export const generateLogo = async (extraPrompt: string) => {
  // En algunos entornos de despliegue, process.env puede estar vacío si no se configura bien el build
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === "undefined" || apiKey === "" || apiKey === "YOUR_API_KEY") {
    console.error("API_KEY no detectada en process.env");
    throw new Error("API_KEY no detectada. Asegúrate de haber hecho 'Redeploy' en Vercel tras guardar la variable.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    MASTERPIECE LOGO for 'NeuroSpark Ventures'. 
    Visual style: High-tech cyberpunk, geometric brain, lightning energy bolt.
    Colors: Electric cyan and deep purple neon gradients.
    Background: Solid pure black.
    Quality: Vector art, sharp lines, professional brand identity.
    NO TEXT, NO LETTERS, NO WORDS.
    Additional style: ${extraPrompt}
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
    if (candidate?.content?.parts) {
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("La IA no devolvió una imagen. Inténtalo de nuevo.");
  } catch (error: any) {
    console.error("Gemini Error Detail:", error);
    
    if (error.message?.includes("API key not found")) {
      throw new Error("Error de Autenticación: La API Key no es válida o no se ha propagado correctamente.");
    }
    
    if (error.message?.includes("safety")) {
      throw new Error("El prompt fue bloqueado por filtros de seguridad. Intenta con palabras más simples.");
    }

    throw new Error(error.message || "Error al conectar con Gemini AI.");
  }
};
