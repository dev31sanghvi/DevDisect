import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-black text-white p-8 lg:p-24 flex flex-col items-center text-center overflow-hidden">
      {/* Video background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src="/path/to/video.mp4" // Replace with your video path
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-50"
        ></video>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="font-mono text-sm">DEVDISECT PRESENTS</p>
        <h1 className="font-bold text-4xl lg:text-6xl mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          WEBHACK 1.0
        </h1>
        <p className="font-medium text-xl lg:text-2xl mb-8">
          where innovation meets opportunity!
        </p>
        <div className="mt-8">
          <Link href="https://forms.gle/2hcusYkCTXzh5Aid8" target="_blank">
            <Button className="transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-md transform hover:scale-105">
              Register Now
            </Button>
          </Link>
        </div>
        <div className="mt-8">
          <Link href="https://drive.google.com/file/d/1Eez4_pfO1zWgUrcDyrc4UdRCxU1tHVbC/view?usp=sharing" target="_blank">
            <Button className="transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-md transform hover:scale-105">
              Brochure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
