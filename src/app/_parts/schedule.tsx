import React from "react";

const Schedule = () => {
  const schedule = [
    {
      date: "10 March , 2024",
      title: "Registration Starts",
      additional_details:
        "Registration for the event will start from 10th March, 2024.",
    },
    {
      date: "27 March, 2024",
      title: "Registration Ends",
      additional_details:
        "No more registrations will be accepted after 27 March , 2024 11:59 PM.",
    },
    {
      date: "29 March,2024",
      title: "Hackathon Starts",
      additional_details: "Show up your creativiy and buikd your teams.",
    },
    {
      date: "29 March ,11:00 AM",
      title: "Kick off Session",
      additional_details:
        "",
    },
    {
      date: "29 March ,5:00 PM ",
      title: "Expert Talk 1",
      additional_details:
        "A surprise talk on a spotlight topic for everyone",
    },
    {
      date: "30 March ,5:00 PM ",
      title: "Expert Talk 2",
      additional_details:
        "",
    },
    {
      date: "31 March ,5:00 PM ",
      title: "Expert Talk 3",
      additional_details:
        "detail",
    },
    {
      date: "31 March ,7:00 PM ",
      title: "Closing Ceremony",
      additional_details:
        "",
    },
    {
      date: "7 April ,2024 ",
      title: "Result Announcement",
      additional_details:
        "Winners be ready to get awesome prizes for your creative ideas.",
    },
  ];

  return (
    <div className="bg-black text-white p-8 lg:p-24 rounded-lg shadow-xl" id="schedule">
      <h2 className="font-bold text-3xl mb-8">Schedule</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {schedule.map((item, i) => (
          <div key={i} className="relative">
            <div
              className={`p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out ${
                i === schedule.length - 1 ? "pb-10" : ""
              }`}
            >
              <div className="text-xl font-semibold mb-2">{item.date}</div>
              <div className="text-gray-400">{item.title}</div>
              <div className="mt-2">{item.additional_details}</div>
            </div>
            {i !== schedule.length - 1 && (
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-4">
                <svg
                  className="h-6 w-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;

