import { useTranslations } from "use-intl";

const LoadingSpinner = () => {
  // Translations
  const t = useTranslations();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* Container for the spinner and text, centered on the screen */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-2xl">
        {/* Spinner element */}
        <div
          className="border-opacity-25 border-t-custom-orange-900 h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-white"
          aria-label="Loading"
          role="status"
        ></div>

        {/* Loading text */}
        <p className="mt-4 text-lg font-semibold text-gray-700">{t("loading")}...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
