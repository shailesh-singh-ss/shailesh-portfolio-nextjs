import {
    GoogleGenerativeAI,
    type GenerativeModel,
} from "@google/generative-ai";

const MODEL_CHAIN = [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-2.5-pro",
];

function isRetryableModelError(message: string) {
    return /404|not found|not supported|429|503|500|resource exhausted|too many requests|unavailable|deadline exceeded|timeout/i.test(
        message,
    );
}

class ChatbotService {
    private genAI: GoogleGenerativeAI | null = null;
    private model: GenerativeModel | null = null;
    private modelIndex = 0;

    private ensureModel(): GenerativeModel | null {
        if (this.model) return this.model;
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;
        if (!apiKey) {
            console.warn(
                "[chatbot] NEXT_PUBLIC_GOOGLE_AI_API_KEY is not set; assistant disabled.",
            );
            return null;
        }
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = this.genAI.getGenerativeModel({
            model: MODEL_CHAIN[this.modelIndex],
        });
        return this.model;
    }

    async sendMessage(message: string, context: string): Promise<string> {
        if (!this.ensureModel()) {
            return "The assistant isn't configured right now. Reach Shailesh at **ss.forcoding@gmail.com** instead.";
        }

        const prompt = `${context}\n\nUser question: ${message}\n\nRespond concisely about Shailesh Singh based on the context above.`;

        while (this.modelIndex < MODEL_CHAIN.length) {
            const model = this.ensureModel();
            if (!model) break;
            try {
                const result = await model.generateContent(prompt);
                return result.response.text();
            } catch (error) {
                const message =
                    error instanceof Error ? error.message : String(error);
                console.error(
                    `[chatbot] ${MODEL_CHAIN[this.modelIndex]} failed:`,
                    message,
                );
                if (
                    isRetryableModelError(message) &&
                    this.modelIndex < MODEL_CHAIN.length - 1
                ) {
                    this.modelIndex += 1;
                    this.model = null;
                    continue;
                }
                return "I hit a snag reaching the model. Try again in a moment, or email Shailesh directly at **ss.forcoding@gmail.com**.";
            }
        }

        return "All assistant models are unavailable right now. Try again later or reach Shailesh at **ss.forcoding@gmail.com**.";
    }
}

export const chatbotService = new ChatbotService();
