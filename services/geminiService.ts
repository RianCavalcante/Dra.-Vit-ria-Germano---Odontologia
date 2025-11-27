import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Generates an image based on a dental aesthetic prompt using Nano Banana.
 * Returns a base64 string formatted for use in an <img> tag.
 */
export const generateDentalImage = async (promptContext: string): Promise<string | null> => {
  if (!ai) {
    console.warn("API Key not found. Skipping image generation.");
    return null;
  }

  try {
    const fullPrompt = `Fotografia profissional e realista de odontologia estética, alta resolução, iluminação de estúdio suave: ${promptContext}`;
    
    // Using 'gemini-2.5-flash-image' (Nano Banana) as requested for general image generation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: fullPrompt }]
      },
      config: {
        // Nano Banana doesn't support responseMimeType or specific aspect ratio configs in the same way as Pro-Image,
        // but we ask for a standard generation.
      }
    });

    // Iterate to find image part
    if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                const base64EncodeString = part.inlineData.data;
                return `data:image/png;base64,${base64EncodeString}`;
            }
        }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};