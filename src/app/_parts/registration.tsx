import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Registration() {
  return (
    <div className="p-4 lg:p-24 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text" id="registration">
        Registration
      </h2>
      <p className="text-lg text-white">
        Registration will be open from 10th March, 2024 to 27th March, 2024
        11:59 PM.
      </p>
      <div className="mt-4">
        <Link href="https://forms.gle/2hcusYkCTXzh5Aid8" target="_blank">
          <Button>Register Now</Button>
        </Link>
      </div>
    </div>
  );
}
