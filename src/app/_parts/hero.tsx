import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-blue-900 text-white p-8 lg:p-24 flex flex-col items-center text-center">
      <Image
        src={"/mu_logo.png"}
        alt="Marwadi University"
        width={350}
        height={100}
        className="mb-8"
      />
      <p className="font-mono text-sm">
        Department of Computer Engineering Organizes
      </p>
      <h1 className="font-bold text-4xl ">Hack Fest - 2024</h1>
      <p className="font-medium text-xl mt-8">
        Tech For Tomorrow&apos;s Sustainability
      </p>

      <div className="mt-8">
        <Link href="https://forms.gle/Vfq8aSZ9wQFCxZcv9" target="_blank">
          <Button>Register Now</Button>
        </Link>
      </div>
    </div>
  );
}
