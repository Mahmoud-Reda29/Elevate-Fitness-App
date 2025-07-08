import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProviders } from "./providers/AppProviders.tsx";
// import messagesEn from "./i18n/en.ts";
import enMessages from "./i18n/en.json";
import arMessages from "./i18n/ar.json";
import { Toaster } from "@/components/ui/sonner";

const locale = navigator.language.startsWith("ar") ? "ar" : "en";

const messages = {
  en: enMessages,
  ar: arMessages,
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders locale={locale} messages={messages[locale]}>
      <App />

      {/* Toaster */}
      <Toaster />
    </AppProviders>
  </StrictMode>,
);
