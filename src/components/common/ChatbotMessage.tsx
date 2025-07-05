import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";

interface ChatbotMessageProps {
  messages: { role: string; text: string }[];
  onSubmit: (data: { message: string }) => void;
  form: import("react-hook-form").UseFormReturn<{ message: string }>;
}

export default function ChatbotMessage({ messages, onSubmit, form }: ChatbotMessageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-custom-orange-900 scrollbar relative max-h-[600px] w-full overflow-hidden overflow-y-scroll rounded-2xl border-2 bg-[url('/images/Rectangle.png')] bg-cover bg-center p-4 text-white shadow-lg">
      <div className="mb-10 flex items-center justify-between">
        <h3>Smart coach</h3>
        <button onClick={() => setMenuOpen(true)}>
          <CgMenuLeftAlt className="text-custom-orange-900" />
        </button>
      </div>

      {menuOpen && (
        <div
          className="layer absolute inset-0 z-10 bg-black opacity-50"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`menu-chatbot-glow scrollbar absolute top-0 left-0 z-50 h-full w-64 transform overflow-y-scroll text-white shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Menu content here */}
          <h4 className="mb-4 font-bold">Previous conversations</h4>
          <ul>
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="mb-2 flex items-center">
                Lorem ipsum dolor sit amet.
                <IoIosArrowForward className="text-custom-orange-900" />
              </li>
            ))}
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-xl space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-6 flex items-start gap-4 ${msg.role === "user" && "flex-row-reverse"}`}
          >
            <img
              src={`/images/${msg.role}.jpg`}
              className="shadow-glow-orange h-9 w-9 rounded-full"
              alt=""
            />
            <div
              className={`p-3 ${
                msg.role === "user"
                  ? "user-glow rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-2xl text-right"
                  : "chatbot-glow rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-left"
              }`}
            >
              <p className="text-sm whitespace-pre-line">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto flex max-w-xl gap-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input placeholder="Ask Me Anything" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-custom-orange-900 rounded-xl">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
