import Link from "next/link";

export default function CodeOfConduct() {
  return (
    <div className="p-4 lg:p-24 text-justify">
      <h2 className="font-bold text-3xl mb-2" id="code-of-conduct">
        Code of Conduct
      </h2>

      <p className="mt-4">
        This Code of Conduct outlines the expected behavior of all participants,
        organizers, mentors, volunteers, sponsors, and judges at HackFest-2024.
        We are committed to providing a safe, inclusive, and productive
        environment for everyone, regardless of background, experience level,
        race, gender, sexual orientation, disability, personal appearance, or
        religion.
      </p>

      <h3 className="font-bold my-4">1. Be respectful and professional.</h3>
      <ul className="list-disc ml-8">
        <li>Treat everyone with dignity and respect.</li>
        <li>Avoid offensive or discriminatory language, jokes, or behavior.</li>
        <li>
          Be mindful of your communication style and avoid personal attacks.
        </li>
        <li>Value and appreciate diversity of backgrounds and perspectives.</li>
      </ul>

      <h3 className="font-bold my-4">2. Harassment is not tolerated.</h3>
      <ul className="list-disc ml-8">
        <li>
          This includes, but is not limited to, sexual harassment, intimidation,
          stalking, unwelcome physical contact, offensive verbal comments, and
          public displays of sexually suggestive content.
        </li>
        <li>
          Participants asked to stop any harassing behavior are expected to
          comply immediately.
        </li>
        <li>
          If you are being harassed, please contact an organizer or volunteer
          immediately.
        </li>
      </ul>

      <h3 className="font-bold my-4">3. Be collaborative and inclusive.</h3>
      <ul className="list-disc ml-8">
        <li>
          Work together in a spirit of collaboration and open communication.
        </li>
        <li>
          Be welcoming and inclusive towards all participants, regardless of
          their experience level or skills.
        </li>
        <li>Share knowledge and resources freely.</li>
        <li>Offer constructive feedback and criticism.</li>
      </ul>

      <h3 className="font-bold my-4">
        4. Uphold intellectual property rights.
      </h3>
      <ul className="list-disc ml-8">
        <li>
          Respect the intellectual property of others, including code, ideas,
          and designs.
        </li>
        <li>Only use open-source or licensed resources in your project.</li>
        <li> Attribute sources appropriately.</li>
      </ul>

      <h3 className="font-bold my-4">
        5. Maintain a clean and safe environment.
      </h3>
      <ul className="list-disc ml-8">
        <li>Be responsible for your own trash and dispose of it properly.</li>
        <li>Respect the event venue and equipment.</li>
        <li>Follow all safety rules and regulations.</li>
      </ul>

      <h3 className="font-bold my-4">6. Reporting violations. </h3>
      <ul className="list-disc ml-8">
        <li>
          If you witness or experience any behavior that violates this Code of
          Conduct, please report it immediately to an organizer or volunteer.
        </li>
        <li>Reports will be investigated promptly and confidentially. </li>
        <li>
          Any participant found to be in violation of this Code of Conduct may
          be expelled from the event or may face other disciplinary action, as
          deemed necessary by the organizers.
        </li>
      </ul>
      <h3 className="font-bold my-4">7. Contact information</h3>
      <ul className="list-disc ml-8">
        <li>
          If you need to report an incident or have any questions regarding this
          Code of Conduct, please contact{" "}
          <Link
            href="mailto:megha.mudholkar@marwadieducation.edu.in"
            className="text-blue-500 underline"
          >
            megha.mudholkar@marwadieducation.edu.in
          </Link>
        </li>
      </ul>
    </div>
  );
}
