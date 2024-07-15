import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.REACT_APP_API_KEY;

 

if (!API_KEY) {
  throw new Error("API key is missing");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const GeminiService = {
  sendMessage: async (message: string): Promise<string> => {
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: 'user',
            parts: [{ text: 'hi\n' }],
          },
          {
            role: 'model',
            parts: [{ text: 'Hi there! What can I do for you today?\n' }],
          },
        ],
      });

      const result = await chatSession.sendMessage(message);
      const responseText = await result.response.text();
      return responseText;
    } catch (error: any) {
      console.error('Error:', error);
      return "Sorry, I'm having trouble responding right now.";
    }
  },
};

export default GeminiService;

