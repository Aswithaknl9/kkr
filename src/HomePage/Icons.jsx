import { useState, useEffect } from "react";
import { FaRocket, FaUsers, FaSmile, FaClock } from "react-icons/fa";
import bgImage from "../assets/bgparallax7.jpg"; // Ensure this path is correct

const counters = [
  { id: 1, icon: <FaRocket size={40} />, target: 1200, label: "Finishing Projects" },
  { id: 2, icon: <FaUsers size={40} />, target: 195, label: "Team Members" },
  { id: 3, icon: <FaSmile size={40} />, target: 850, label: "Happy Clients" },
  { id: 4, icon: <FaClock size={40} />, target: 26, label: "Years Experience" },
];

export default function CounterSection() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    let completed = false;
    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = prevCounts.map((count, i) =>
          count < counters[i].target ? count + Math.ceil(counters[i].target / 100) : counters[i].target
        );
        if (newCounts.every((count, i) => count >= counters[i].target)) {
          completed = true;
          clearInterval(interval);
        }
        return newCounts;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center text-white flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {counters.map((counter, index) => (
            <div key={counter.id} className="p-6">
              <div className="flex justify-center mb-4 text-[#f48c4b]">{counter.icon}</div>
              <span className="text-3xl md:text-4xl font-bold">{counts[index]}+</span>
              <h3 className="text-base md:text-lg mt-2">{counter.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
