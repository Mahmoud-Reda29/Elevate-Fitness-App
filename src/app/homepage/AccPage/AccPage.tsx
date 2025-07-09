import type React from "react";
import { RefreshCcw, Globe, SunMoon, LifeBuoy, LogOut, ShieldAlert, EarthLock } from "lucide-react";
import { useState } from "react";
import { CustomSwitch } from "@/components/ui/custom-switch";
import { useTranslations } from "use-intl";

const AccPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const t = useTranslations();

  console.log("Dark mode state:", isDarkMode);

  const handleDarkModeToggle = (checked: boolean) => {
    console.log("Toggle triggered, new value:", checked);
    setIsDarkMode(checked);
  };

  // Dynamic classes based on theme
  const themeClasses = {
    background: isDarkMode ? "bg-transparent" : "bg-custom-white-900",
    overlay: isDarkMode ? "backdrop-blur-2xl" : "backdrop-blur-2xl",
    cardBg: isDarkMode ? "bg-transparent" : "bg-white/80",
    cardBorder: isDarkMode ? "border-custom-white-500" : "border-gray-300",
    textPrimary: isDarkMode ? "text-custom-white-900" : "text-gray-800",
    textSecondary: isDarkMode ? "text-custom-white-900/60" : "text-gray-600",
    textHover: isDarkMode ? "hover:text-custom-orange-900" : "hover:text-custom-orange-900",
    iconColor: isDarkMode ? "text-custom-orange-900" : "text-custom-orange-900",
    buttonBg: isDarkMode ? "bg-custom-orange-900" : "bg-custom-orange-900",
    buttonBorder: isDarkMode ? "border-custom-white-800" : "border-cu",
    buttonHover: isDarkMode ? "hover:bg-orange-700" : "hover:bg-orange-600",
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${themeClasses.background}`}>
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: isDarkMode ? `url("../bg.jpg")` : "bg-custom-white-900",
        }}
      ></div>

      {/* Blur overlay */}
      <div
        className={`absolute inset-0 z-5 transition-all duration-300 ${
          isDarkMode ? "backdrop-blur-2xl" : "bg-custom-white-900/70 backdrop-blur-sm"
        }`}
      ></div>

      {/* Content on top */}
      <div className="relative z-10 mx-auto max-w-4xl p-6">
        {/* Top Section - User Preferences */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { title: t("your-goal"), value: t("lose-weight") },
            { title: t("your-level"), value: t("beginner") },
            { title: t("weight"), value: t("90-kg") },
          ].map(({ title, value }) => (
            <div key={title} className={`rounded-2xl p-4 text-center ${themeClasses.cardBg}`}>
              <h3 className={`${themeClasses.textPrimary} mb-1 text-xl font-extrabold`}>{title}</h3>
              <p
                className={`${themeClasses.textSecondary} mb-4 text-xs tracking-wide uppercase underline hover:cursor-pointer`}
              >
                {t("tap-to-change")}
              </p>
              <div
                className={`${themeClasses.buttonBg} ${themeClasses.buttonBorder} flex cursor-pointer items-center justify-between rounded-full border-2 px-6 py-3 transition-colors ${themeClasses.buttonHover}`}
              >
                <span
                  className={`${isDarkMode ? "text-custom-white-900" : "text-white"} font-medium`}
                >
                  {value}
                </span>
                <div className="flex items-center justify-center rounded-full text-3xl">
                  <RefreshCcw
                    className={`${isDarkMode ? "text-custom-white-900" : "text-custom-black-900"} text-2xl`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Settings Grid */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Card 1 */}
          <div
            className={`${themeClasses.cardBorder} ${themeClasses.cardBg} flex cursor-pointer items-center justify-center rounded-2xl border-2 p-6 text-center transition-colors`}
          >
            <div>
              <div className={`${themeClasses.iconColor} mb-4 flex justify-center`}>
                <RefreshCcw className="h-8 w-8" />
              </div>
              <span className={`${themeClasses.textPrimary} ${themeClasses.textHover} font-medium`}>
                {t("change-password")}
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`${themeClasses.cardBorder} ${themeClasses.cardBg} flex cursor-pointer items-center justify-center rounded-2xl border-2 p-6 text-center transition-colors`}
          >
            <div>
              <div className={`${themeClasses.iconColor} mb-4 flex justify-center`}>
                <Globe className="h-8 w-8" />
              </div>
              <span className={`${themeClasses.textPrimary} ${themeClasses.textHover} font-medium`}>
                {t("select-language")}
              </span>
              <div className={`${themeClasses.iconColor} text-sm`}>({t("english")})</div>
            </div>
          </div>

          {/* Card 3 - Mood Toggle */}
          <div
            className={`${themeClasses.cardBorder} ${themeClasses.cardBg} flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 p-6 text-center transition-colors`}
          >
            <div className={`${themeClasses.iconColor} mb-4`}>
              <SunMoon className="h-8 w-8" />
            </div>
            <span className={`${themeClasses.textPrimary} ${themeClasses.textHover} font-medium`}>
              {t("mood")}
            </span>
            <div className={`${themeClasses.iconColor} mb-2 text-sm`}>
              ({isDarkMode ? "Dark" : "Light"})
            </div>
            <CustomSwitch checked={isDarkMode} onCheckedChange={handleDarkModeToggle} />
          </div>

          {/* Card 4 */}
          <div
            className={`${themeClasses.cardBorder} ${themeClasses.cardBg} flex cursor-pointer items-center justify-center rounded-2xl border-2 p-6 text-center transition-colors`}
          >
            <div>
              <div className={`${themeClasses.iconColor} mb-4 flex justify-center`}>
                <EarthLock className="h-8 w-8" />
              </div>
              <span className={`${themeClasses.textPrimary} ${themeClasses.textHover} font-medium`}>
                {t("security")}
              </span>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className={`${themeClasses.cardBorder} ${themeClasses.cardBg} flex h-44 cursor-pointer items-center justify-center rounded-2xl border-2 p-6 text-center transition-colors`}
          >
            <div>
              <div className={`${themeClasses.iconColor} mb-4 flex justify-center`}>
                <ShieldAlert className="h-8 w-8" />
              </div>
              <span className={`${themeClasses.textPrimary} ${themeClasses.textHover} font-medium`}>
                {t("privacy-policy")}
              </span>
            </div>
          </div>

          {/* Card 6 */}
          <div
            className={`${themeClasses.cardBorder} ${themeClasses.cardBg} flex h-44 cursor-pointer items-center justify-center rounded-2xl border-2 p-6 text-center transition-colors`}
          >
            <div>
              <div className={`${themeClasses.iconColor} mb-4 flex justify-center`}>
                <LifeBuoy className="h-8 w-8" />
              </div>
              <span className={`${themeClasses.textPrimary} ${themeClasses.textHover} font-medium`}>
                {t("help")}
              </span>
            </div>
          </div>
        </div>

        {/* Logout Section */}
        <div className="flex justify-center">
          <div
            className={`${themeClasses.cardBorder} ${themeClasses.cardBg} w-full cursor-pointer rounded-2xl border-2 p-6 transition-colors md:w-64`}
          >
            <div className="flex flex-col items-center text-center">
              <LogOut className={`${themeClasses.iconColor} mb-4 h-8 w-8`} />
              <span className={`${themeClasses.textPrimary} ${themeClasses.textHover} font-medium`}>
                {t("logout")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccPage;
