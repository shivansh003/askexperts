// components/TabbedCarousel.tsx
import { useState } from "react";
import Image from "next/image";

const tabData = [
  { title: "Printer Troubleshooting", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users." },
  { title: "Windows Issues", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users." },
  { title: "Outlook PST File Support", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users." },
  { title: "Television Setup", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users." },
  { title: "Home Appliances Support", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users." },
];

const TabbedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // For tab controls
  const [selectedTabIndex, setSelectedTabIndex] = useState(0); // For tab content

  // Navigate to next or previous tabs
  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, tabData.length - 4)); // Show max 4 tabs at once
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Calculate the tabs to be displayed based on the current index
  const displayedTabs = tabData.slice(currentIndex, currentIndex + 4);

  // Function to handle tab selection
  const handleTabSelect = (index: number) => {
    // Calculate the correct index based on the current tab position
    const newSelectedIndex = currentIndex + index;
    setSelectedTabIndex(newSelectedIndex);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Carousel Controls */}
      <div className="relative py-4 border-b border-t ">
        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FFE6E6] py-2 px-3 rounded-full z-10 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          &lt;
        </button>

        {/* Tabs (Carousel) */}
        <div className="flex justify-around overflow-hidden space-x-8 px-12">
          {displayedTabs.map((tab, index) => (
            <div
              key={index}
              className="tab p-4 bg-[#ff000010] text-[#FF0000] font-[500] rounded-md w-full text-center cursor-pointer"
              onClick={() => handleTabSelect(index)} // Update selected tab on click
            >
              {tab.title}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FFE6E6] py-2 px-3 font-bold rounded-full z-10 disabled:opacity-50"
          disabled={currentIndex >= tabData.length - 4}
        >
          &gt;
        </button>
      </div>

      {/* Tab Content */}
      <div
        id="tabContent"
        className="mt-6 p-4"
      >
        <div className="flex gap-12 justify-between items-center ">
          <div className="basis-5/12">
          <Image
              className=" ml-auto rounded-r-2xl"
              src="/image-demo.png "
              width={500}
              height={336}
              alt=""
            />
          </div>
          <div className="basis-7/12">
            <h2 className="text-2xl font-semibold mb-4">
              {tabData[selectedTabIndex].title} 
            </h2>
            <p>{tabData[selectedTabIndex].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbedCarousel;
