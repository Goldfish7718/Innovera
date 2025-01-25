import React from "react";

const Hero = () => {
  return (
<div
  className="bg-black text-white py-16 px-8 flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/bg-img.png')" }}
>      <div className="text-center">
        <h1 className="text-4xl sm:text-8xl font-bold mb-6">INNOV-ERA</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          <span className="text-orange-400 font-semibold">Innov-era</span> is a dynamic hackathon designed to bring together
          innovative minds to solve <span className="text-green-400 font-semibold">real-world challenges</span>. It’s a platform
          for tech enthusiasts, <span className="text-blue-400 font-semibold">developers</span>, and creators to showcase
          their <span className="text-indigo-400 font-semibold">skills</span> and create impactful{" "}
          <span className="text-teal-400 font-semibold">solutions</span>.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-black font-medium px-6 py-2 rounded-xl border border-white hover:bg-gray-300 transition hover:scale-105">
            Register
          </button>
          <button className="bg-black border border-white text-white font-medium px-6 py-2 rounded-lg hover:bg-zinc-900 transition hover:scale-105">
            Details
          </button>
        </div>
      </div>
    </div>
  
  );
};

export default Hero;