/* eslint-disable prefer-const */
import { Outlet } from "react-router-dom";
import GeminiChatbot from "./components/common/Gemini-chatbot";

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

export default function AppLayout() {
  return (
    <div>
      {/* Outlet children */}
      <Outlet />
      <GeminiChatbot />
    </div>
  );
}
