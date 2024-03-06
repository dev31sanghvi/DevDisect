import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactDetails = () => {
  const members = [
    {
      name: "Harshit Dugar",
      whatsapp: "9711408184",

    },
    {
      name: "Dev Sanghvi",
      whatsapp: "9602845701",

    },
    {
      name: "Tishya Mav",
      whatsapp: "9974774758",

    },
    {
      name: "Riddhi Kakkad",
      whatsapp: "9664738584",

    },


  ];

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-3xl text-lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Contact Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-4">{member.name}</h3>
            <div className="flex items-center mb-2">
              <FaWhatsapp className="mr-2" />
              <span>{member.whatsapp}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
