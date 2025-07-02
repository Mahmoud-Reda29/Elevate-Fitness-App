import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div>
        <img src="/fit-logo.png" alt="Logo image" />

        <p className="text-custom-black-900 mt-2 leading-7">
          Push harder, go further. Your <br /> fitness journey starts today!
        </p>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-2 items-center">
        {/* Heading */}
        <h3 className="mb-6 font-bold uppercase">contact us</h3>

        {/* Phone */}
        <div className="flex items-center gap-3">
          {/* icon */}
          <span className="border-custom-black-900 rounded-full border p-2">
            <Phone className="fill-custom-black-900" />
          </span>

          {/* phone */}
          <p>+91 123 456 789</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          {/* icon */}
          <span className="border-custom-black-900 rounded-full border p-2">
            <Mail className="text-custom-black-900 dark:text-white" />
          </span>

          {/* Mail */}
          <p>info@gmail.com</p>
        </div>
      </div>

      {/* Timing */}
      <div className="flex flex-col gap-2">
        {/* Heading */}
        <h3 className="mb-6 font-bold uppercase">our gym timing</h3>

        <div className="flex flex-col gap-3">
            <p>Mon - Fri : 08:00 AM - 10:00 PM</p>
            <p>Sat - Sun : 08:00 AM - 09:00 PM</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex flex-col gap-2">
        {/* Heading */}
        <h3 className="mb-6 font-bold uppercase">our location</h3>

        <div className="flex flex-col gap-3">
            <p>2715 Ash Dr. San Jose, South <br />Dakota 83475</p>
        </div>
      </div>
    </div>
  );
}
