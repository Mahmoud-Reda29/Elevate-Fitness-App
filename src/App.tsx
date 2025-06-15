import "./App.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import AppLayout from "./AppLayout";
import Homepage from "./app/homepage/Homepage";
import About from "./app/about/About";
import enMessages from "./i18n/en.json";
import arMessages from "./i18n/ar.json";
import { useParams } from "react-router-dom";
import { IntlProvider, type Formats, type Locale } from "use-intl";

// Messages map
const messages = {
  en: enMessages,
  ar: arMessages,
};
const getFormats = (locale: Locale): Formats => {
  return {
    number: {
      digit: {
        numberingSystem: locale === "ar" ? "arab" : "latn",
      },
      currency: {
        numberingSystem: locale === "ar" ? "arab" : "latn",
        style: "currency",
        currency: "EGP",
      },
      "currency-no-fraction": {
        numberingSystem: locale === "ar" ? "arab" : "latn",
        style: "currency",
        currency: "EGP",
        maximumFractionDigits: 0,
      },
      percentage: {
        numberingSystem: locale === "ar" ? "arab" : "latn",
        style: "percent",
        minimumFractionDigits: 0,
      },
    },
  };
};
// This wrapper reads the route param and wraps children with IntlProvider
function LocaleWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useParams();
  const locale = lang && (lang === "en" || lang === "ar") ? lang : "en";

  return (
    <IntlProvider locale={locale} messages={messages[locale]} formats={getFormats(locale)}>
      {children}
    </IntlProvider>
  );
}

const router = createBrowserRouter([
  {
    // Root path that redirects to default language
    path: "/",
    element: <Navigate to="/en" replace />,
  },
  {
    path: "/:lang",
    element: (
      <LocaleWrapper>
        <AppLayout />
      </LocaleWrapper>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
