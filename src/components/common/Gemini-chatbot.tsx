import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import geminiChatbot from "@/lib/util/gemini";
import { useState } from "react";
import ChatbotMessage from "./ChatbotMessage";

const formSchema = z.object({
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export default function GeminiChatbot() {
  // Variables
  const [messages, setMessages] = useState<{ role: "user" | "gemini"; text: string }[]>([
    { role: "gemini", text: "Hello! How can I assist you today?" },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);

  //  Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const userMessage = values.message;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    // handle waiting response
    setMessages((prev) => [...prev, { role: "gemini", text: "..." }]);

    //  Reset form
    form.reset();

    try {
      const geminiReply = await geminiChatbot(userMessage);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "gemini", text: geminiReply ?? "No response from Gemini." },
      ]);
    } catch (err) {
      void err;
      setMessages((prev) => [...prev, { role: "gemini", text: "Error getting response." }]);
    }
  }

  return (
    <>
      <div className="z-50x fixed right-10 bottom-0 w-96 max-w-md rounded-tl-lg">
        <div
          className="mb-2 flex flex-col items-center justify-center"
          onClick={() => setShowChatbot(!showChatbot)}
        >
          <img src="/images/emo.png" alt="chatbot gemini" className="shadow-glow-orange w-52" />

          <p className="bg-custom-orange-900 w-fit rounded-xl p-2 text-2xl">
            {showChatbot ? "tap to close" : "Hey Ask Me"}
          </p>
        </div>
        {showChatbot && <ChatbotMessage messages={messages} onSubmit={onSubmit} form={form} />}
      </div>
    </>
  );
}
