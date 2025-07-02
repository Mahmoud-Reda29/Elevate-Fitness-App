import { Outlet } from "react-router-dom";
import { useTheme } from "./theme-provider";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export default function LayoutContent() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  function toggleTheme(checked: boolean) {
    setTheme(checked ? "dark" : "light");
  }

  return (
     <main className="min-h-screen p-4">
      <div className="flex items-center space-x-2">
        <Label htmlFor="theme-switch">Dark Mode</Label>
        <Switch
          id="theme-switch"
          checked={isDark}
          onCheckedChange={toggleTheme}
        />
      </div>

      <div className="mt-4">
        <Outlet />
      </div>
    </main>
  );
}