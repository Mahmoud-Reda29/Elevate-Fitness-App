import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  const [theme, setTheme] = useState("light");
  function handleDarkMode() {
    setTheme((theme) => (theme == "light" ? "dark" : "light"));
  }
  return (
    <main className={theme}>
      <button onClick={handleDarkMode}>toggle theme</button>
      {/* Outlet children */}
      <Outlet />
    </main>
  );
}
