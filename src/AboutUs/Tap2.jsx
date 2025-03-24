import { useState } from "react";

const tabs = [
  {
    id: "expert-team",
    title: "Expert Team",
    content: "The argument in favor of using filler text goes something like this top",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/tab-image3.jpg",
  },
  {
    id: "best-finance-brand",
    title: "Best Finance Brand",
    content: "The argument in favor of using filler text goes something like this top2",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/tab-image2.jpg",
  },
  {
    id: "best-leadership-ideas",
    title: "Best Leadership Ideas",
    content: "The argument in favor of using filler text goes something like this top2",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/tab-image1.jpg",
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Tabs */}
        <div>
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`block w-[80%] text-left px-10 py-8 border rounded-lg transition-colors ${
                  activeTab.id === tab.id
                    ? "bg-gradient-to-b from-[#3140fc] to-[#091394] text-white"
                    : "border-gray-300 hover:border-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <div className="font-bold text-lg md:text-2xl mb-2">{tab.title}</div>
                <div className="text-base">{tab.content}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Bigger Image */}
        <div className="relative flex justify-center">
          <img
            src={activeTab.image}
            alt={activeTab.title}
            className="w-full md:w-[600px] lg:w-[800px] xl:w-[700px] max-w-[700px] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
