import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

export default function HandleMode() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  // Functions
  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <SwitchPrimitives.Root
      checked={isDark}
      onCheckedChange={toggleTheme}
      className={`
        "relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ${isDark ? "bg-custom-orange-900" : "bg-custom-orange-900"}`
      }
    >
      <SwitchPrimitives.Thumb
        className={`
          "pointer-events-none flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-300 transform",
          ${isDark ? "translate-x-6" : "translate-x-0"}`
        }
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-custom-black-700" />
        ) : (
          <Sun className="w-3 h-3" />
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
}



