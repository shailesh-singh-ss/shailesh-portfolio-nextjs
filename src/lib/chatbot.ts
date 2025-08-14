import { GoogleGenerativeAI } from "@google/generative-ai";

class ChatbotService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;
    if (!apiKey) {
      throw new Error("Google AI API key is not configured");
    }

    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
    });
  }

  async sendMessage(message: string, context: string): Promise<string> {
    try {
      const prompt = `${context}

User question: ${message}

Please provide a helpful response about Shailesh Singh based on the context provided. Keep responses concise and relevant.`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating response:", error);
      return "I'm sorry, I'm having trouble processing your request right now. Please try again later.";
    }
  }
}

export const chatbotService = new ChatbotService();
