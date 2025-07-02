import { Outlet } from "react-router-dom";
import Footer from "./components/features/layout/footer/page";
import Header from "./components/features/layout/header/page";
import { ThemeProvider } from "./components/theme-provider";

export default function AppLayout() {
  return (
    <div className="bg-custom-gray-500 dark:bg-custom-black-500 dark:text-white">
      {/* Theme provider */}
      <ThemeProvider>

        {/* Header */}
        <div className="container mx-auto">
          <Header />

          <Outlet/>
          {/* Footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}
