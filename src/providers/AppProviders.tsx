import { QueryProvider } from "./QueryProvider";
import { IntlProvider } from "use-intl";
interface AppProvidersProps {
  children: React.ReactNode;
  locale?: string;
  messages: Record<string, string>;
}

export function AppProviders({ children, locale = "en", messages = {} }: AppProvidersProps) {
  return (
    <QueryProvider>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </QueryProvider>
  );
}
