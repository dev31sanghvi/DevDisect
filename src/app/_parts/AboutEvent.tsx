import React from "react";

const AboutEvent = () => {
  return (
    <div className="bg-black text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left side - Picture */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <video
            src="./About.mp4"
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg shadow-xl"
          ></video>
        </div>

        {/* Right side - Description */}
        <div className="lg:w-1/2 lg:ml-12">
          <h2 className="text-3xl text-lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            About the Event
          </h2>

          <p className="text-lg leading-relaxed">
            Welcome to the WebHack1.0 Hackathon 2024, where innovation meets
            opportunity! Our hackathon is a dynamic platform designed to inspire
            and empower aspiring web developers to showcase their skills,
            creativity, and passion for building the web of tomorrow. Whether
            you're a seasoned coder or just starting your journey in web
            development, this event is for you!
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Join us for an exhilarating 3 day coding marathon filled with
            exciting challenges, insightful workshops, and invaluable mentorship
            sessions led by industry experts. Explore cutting-edge topics in web
            development, collaborate with like-minded peers, and unleash your
            full potential as you tackle real-world problems with innovative
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
