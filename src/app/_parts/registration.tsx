import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Registration() {
  return (
    <div className="p-4 lg:p-24">
      <h2 className="font-bold text-3xl mb-2" id="registration">
        Registration
      </h2>
      <p>
        Registration will be open from 8th February, 2024 to 15th February, 2024
        11:59 PM.
      </p>
      <div className="mt-4">
        <Link href="https://forms.gle/Vfq8aSZ9wQFCxZcv9" target="_blank">
          <Button>Register Now</Button>
        </Link>
      </div>
    </div>
  );
}
