import { Link, useParams } from "react-router-dom";

type LocalizedLinkProps = {
  to: string;
} & React.ComponentProps<typeof Link>;

export function LocalizedLink({ to, ...props }: LocalizedLinkProps) {
  const { lang } = useParams();
  const locale = lang || "en";

  const normalizedTo = to.startsWith("/") ? to : `/${to}`;

  return <Link to={`/${locale}${normalizedTo}`} {...props} />;
}
