import Link from "next/link";

export default function CodeOfConduct() {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Code of Conduct
        </h2>
        <p className="text-lg mb-6">
          This Code of Conduct outlines the expected behavior of all
          participants, organizers, mentors, volunteers, sponsors, and judges at
          WEBHACK 1.0. We are committed to providing a safe, inclusive, and
          productive environment for everyone, regardless of background,
          experience level, race, gender, sexual orientation, disability,
          personal appearance, or religion.
        </p>
        <p className="text-lg mb-6">
          Any participant found to be in violation of this Code of Conduct may
          be expelled from the event.
        </p>
        <p className="text-lg">
        If you need to report an incident or have any questions regarding this
          Code of Conduct, please contact{" "}
          <Link
            href="mailto:devdisect@gmail.com"
            className="text-blue-500 underline"
          >
            devdisect@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
}
