import HandleMode from "@/components/handle-mode";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ButtonsHeader() {
  return (
    <div className="flex lg:gap-7 gap-3 items-center">
      {/* Mode */}
      <HandleMode/>

      {/* Login */}
      <Button className="bg-custom-orange-900 relative rounded-2xl px-4 py-2 text-base font-bold uppercase lg:flex hidden">
        <Link className="text-white" to={"/login"}>Login</Link>

        <div className="bg-custom-orange-900 absolute -right-5 rounded-full border-2 p-1 border-white text-white">
          <ArrowUpRight />
        </div>
      </Button>

      {/* Sign up */}
      <Button
        variant={"outline"}
        className="text-custom-orange-900 relative rounded-2xl px-4 py-2 text-base font-bold uppercase lg:flex hidden"
      >
        <Link to={"/login"}>Sign Up</Link>

        <div className="bg-custom-orange-900 border-white absolute -right-5 rounded-full border-2 p-1">
          <ArrowUpRight className="text-white" />
        </div>
      </Button>
    </div>
  );
}
