import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

export default function SocialAuth() {
  return (
    <div className="my-6 flex items-center justify-center gap-4">
      {/* Facebook */}
      <div className="bg-custom-black-800 text-custom-white-900 rounded-full p-2">
        <FaFacebookF />
      </div>

      {/* Google */}
      <div className="bg-custom-black-800 text-custom-white-900 rounded-full p-2">
        <FaGoogle />
      </div>

      {/* Apple */}
      <div className="bg-custom-black-800 text-custom-white-900 rounded-full p-2">
        <FaApple />
      </div>
    </div>
  );
}
