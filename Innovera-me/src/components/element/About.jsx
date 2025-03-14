import React from "react";

const AboutInnovEra = () => {
  const data = [
    {
      title: "WHAT is Innovera?",
      description:
        "Innovera is a National hackathon designed to bring together innovative minds to solve real-world challenges. It’s a platform for tech enthusiasts, developers, and creators to showcase their skills and create impactful solutions.",
      gradient: "bg-gradient-to-r from-orange-300 to-orange-400",
      img: "/fire-card.png",
    },
    {
      title: "WHO can participate in Innovera?",
      description:
        "Innovera is open to everyone—students, professionals, and tech enthusiasts alike! Whether you want to participate individually or collaborate as a team, this event is your chance to innovate, learn, and connect with like-minded individuals.",
      gradient: "bg-gradient-to-r from-green-300 to-green-400",
      img: "/ground-card.png",
    },
    {
      title: "WHAT are the themes of Innovera?",
      description:
        "Participants can explore diverse themes such as Aero (EdTech), Terra (Green Tech), Hydra (FinTech), Ether (Cyber), and Ignis (Next Gen), each offering unique opportunities to innovate and make an impact.",
      gradient: "bg-gradient-to-r from-blue-300 to-blue-400",
      img: "/wind-card.png",
    },
    {
      title: "WHY participate?",
      description:
        "Enhance your skills, expand your network, embrace challenges, unleash creativity, win exciting prizes, boost your resume, and experience fun collaboration. Experience the vibrant city of Nashik, explore the sacred Trimbakeshwar Temple and Panchavati, where Kumbh Mela is held every 12 years.",
      gradient: "bg-gradient-to-r from-purple-300 to-purple-400",
      img: "/space-card.png",
      button: true,
    },
  ];

  return (
    <div
      className="bg-black py-16 px-8 min-h-screen bg-cover flex flex-col items-center"
      style={{ backgroundImage: "url('/bg-img.png')" }}
      id="about"
    >
      <h2 className="text-center text-white text-3xl sm:text-5xl font-bold mb-14">
        ABOUT INNOV-ERA
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-white ${item.gradient} text-black ${
              index % 2 === 0 ? "sm:-rotate-6 hover:rotate-0" : "sm:rotate-6 hover:rotate-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
              {item.title}
            </h3>
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-center bg-no-repeat bg-contain">
              <img src={item.img} alt={item.title} className="w-auto" />
            </div>
            <p className="text-zinc-800 text-base sm:text-lg font-normal leading-relaxed mb-4">
              {item.description}
            </p>
            {item.button && (
              <div className="text-center z-100">
                <a href="https://unstop.com/p/innov-era-national-level-hackathon-kkwagh-college-of-engineering-and-researchnashik-1374664">
                  <button className="bg-white mt-4 text-black font-medium border px-5 py-2 rounded-3xl hover:bg-gray-200 transition">
                    Register
                  </button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutInnovEra;