import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProviders } from "./providers/AppProviders.tsx";
import messagesEn from "./i18n/en.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders locale="en" messages={messagesEn}>
      <App />
    </AppProviders>
  </StrictMode>
);
