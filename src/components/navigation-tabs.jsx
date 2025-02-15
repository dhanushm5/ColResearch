"use client";
import React from "react";

function NavigationTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "projects", label: "Projects" },
    { id: "team", label: "Team" },
    { id: "ai-analysis", label: "AI Analysis" },
  ];

  return (
    <div className="bg-[#1e1e2d] p-4">
      <nav className="flex space-x-8 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`font-inter text-sm pb-4 px-1 relative ${
              activeTab === tab.id
                ? "text-white font-medium"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3699ff] rounded-t-full"></div>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

function NavigationTabsStory() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default NavigationTabs;