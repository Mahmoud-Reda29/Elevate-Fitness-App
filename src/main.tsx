import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProviders } from "./providers/AppProviders.tsx";
// import messagesEn from "./i18n/en.ts";
import enMessages from "./i18n/en.json";
import arMessages from "./i18n/ar.json";

const locale = navigator.language.startsWith("ar") ? "ar" : "en";

const messages = {
  en: enMessages,
  ar: arMessages,
};

// ... existing code ...
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((reg) => console.log("Service Worker registered", reg))
      .catch((err) => console.error("Registration failed:", err));
  });
}

// Request notification permission
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Notification permission granted");
  }
});
// ... existing code ...

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders locale={locale} messages={messages[locale]}>
      <App />
    </AppProviders>
  </StrictMode>,
);
