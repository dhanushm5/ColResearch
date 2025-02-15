"use client";
import React from "react";

function ProjectCard({
  title,
  description,
  progress,
  tasks_count,
  docs_count,
  analyzed_count,
  bias_alerts,
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-[400px]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-inter text-lg font-semibold text-[#1a1a1a] mb-2">
            {title}
          </h3>
          <p className="font-inter text-sm text-[#666666] mb-4">
            {description}
          </p>
        </div>
        <button className="text-[#666666] hover:text-[#1a1a1a]">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-inter text-sm text-[#666666]">Progress</span>
          <span className="font-inter text-sm text-[#666666]">{progress}%</span>
        </div>
        <div className="w-full bg-[#f0f0f0] rounded-full h-2">
          <div
            className="bg-[#2563eb] rounded-full h-2"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <i className="fas fa-tasks text-[#666666]"></i>
            <span className="font-inter text-sm text-[#666666]">
              {tasks_count}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-file-alt text-[#666666]"></i>
            <span className="font-inter text-sm text-[#666666]">
              {docs_count}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-check-circle text-[#666666]"></i>
            <span className="font-inter text-sm text-[#666666]">
              {analyzed_count}
            </span>
          </div>
        </div>
        {bias_alerts > 0 && (
          <div className="flex items-center gap-2">
            <i className="fas fa-exclamation-triangle text-[#f97316]"></i>
            <span className="font-inter text-sm text-[#f97316]">
              {bias_alerts}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCardStory() {
  return (
    <div className="p-8 bg-[#f5f5f5] space-y-8">
      <ProjectCard
        title="Market Research Project"
        description="Comprehensive analysis of market trends and competitor landscape"
        progress={75}
        tasks_count={12}
        docs_count={8}
        analyzed_count={6}
        bias_alerts={2}
      />

      <ProjectCard
        title="Product Launch Strategy"
        description="Planning and execution of new product launch"
        progress={30}
        tasks_count={8}
        docs_count={4}
        analyzed_count={2}
        bias_alerts={0}
      />

      <ProjectCard
        title="Customer Feedback Analysis"
        description="Review and analysis of customer satisfaction surveys"
        progress={100}
        tasks_count={15}
        docs_count={20}
        analyzed_count={18}
        bias_alerts={3}
      />
    </div>
  );
}

export default ProjectCard;