"use client";
import React from "react";

function TeamCard({ name, role, avatarUrl, projectCount, activeProject }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-[400px]">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#e5e5e5]">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-inter text-lg font-semibold text-[#1a1a1a]">
            {name}
          </h3>
          <p className="font-inter text-sm text-[#666666]">{role}</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <i className="fas fa-folder text-[#666666]"></i>
              <span className="font-inter text-sm text-[#666666]">
                {projectCount} Projects
              </span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-circle text-[#2563eb] text-xs"></i>
              <span className="font-inter text-sm text-[#666666]">
                {activeProject}
              </span>
            </div>
          </div>
        </div>
        <button className="text-[#666666] hover:text-[#1a1a1a]">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
  );
}

function TeamCardStory() {
  return (
    <div className="p-8 bg-[#f5f5f5] space-y-8">
      <TeamCard
        name="Sarah Johnson"
        role="Research Lead"
        avatarUrl="/team-member-1.png"
        projectCount={5}
        activeProject="Market Analysis 2025"
      />
      <TeamCard
        name="Michael Chen"
        role="Data Analyst"
        avatarUrl="/team-member-2.png"
        projectCount={3}
        activeProject="Customer Insights Study"
      />
      <TeamCard
        name="Emma Davis"
        role="Research Assistant"
        avatarUrl="/team-member-3.png"
        projectCount={2}
        activeProject="Competitor Analysis"
      />
    </div>
  );
}

export default TeamCard;