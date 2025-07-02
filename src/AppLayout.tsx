import Footer from "./components/features/layout/footer/page";
import Header from "./components/features/layout/header/page";
import LayoutContent from "./components/handle-mode";
import { ThemeProvider } from "./components/theme-provider";

export default function AppLayout() {
  return (
    <div className="bg-custom-gray-500 dark:bg-custom-black-500 dark:text-white">
      <ThemeProvider>
        
        {/* Header */}
        <div className="container mx-auto">
          <Header />

          <LayoutContent />

          {/* Footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}
