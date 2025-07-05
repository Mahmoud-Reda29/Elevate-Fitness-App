/* eslint-disable prefer-const */
import { GoogleGenAI } from "@google/genai";

export default async function geminiChatbot(text: string) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyAWkIeMx0GaGivkPXuxedX35tCanSX4hFo",
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: "text/plain",
  };
  const model = "gemini-2.5-pro";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let fileIndex = 0;
  for await (const chunk of response) {
    console.log(chunk.text);
    return chunk.text;
  }
}
