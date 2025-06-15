import { useTranslations } from "use-intl"

export default function LoginHeading() {
  // Translation
  const t =useTranslations()

  return (
    <div className="flex flex-col gap-7 mb-14">
      {/* Heading */}
      <p className="text-custom-black-900 text-sm">{t("hey-there")}</p>

      <h2 className="text-custom-black-900 font-extrabold text-5xl">{t("welcome-back")}</h2>
    </div>
  )
}
