"use client";
import {React, useState, useCallback, useEffect} from "react";
import TeamCard from "../components/team-card";
import ProjectCard from "@/components/project-card";
import NavigationTabs from "../components/navigation-tabs";

function MainComponent() {
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Research Lead",
      avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      projectCount: 8,
      activeProject: "Market Analysis 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Analyst",
      avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      projectCount: 5,
      activeProject: "Competitor Research",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Research Specialist",
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      projectCount: 6,
      activeProject: "User Behavior Study",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Market Analyst",
      avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      projectCount: 4,
      activeProject: "Product Strategy",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Research Coordinator",
      avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      projectCount: 7,
      activeProject: "Industry Trends",
    },
  ];
  const dummyProjects = [
    {
      id: 1,
      title: "Market Research 2024",
      description: "Analysis of market trends and competitor landscape",
      progress: 75,
      tasks_count: 12,
      docs_count: 8,
      analyzed_count: 6,
      bias_alerts: 2,
    },
    {
      id: 2,
      title: "User Behavior Study",
      description: "Understanding user patterns and preferences",
      progress: 45,
      tasks_count: 15,
      docs_count: 10,
      analyzed_count: 5,
      bias_alerts: 1,
    },
    {
      id: 3,
      title: "Competitor Analysis",
      description: "Detailed review of market competitors",
      progress: 90,
      tasks_count: 20,
      docs_count: 15,
      analyzed_count: 12,
      bias_alerts: 0,
    },
    {
      id: 4,
      title: "Product Strategy",
      description: "Development of new product strategy",
      progress: 30,
      tasks_count: 8,
      docs_count: 5,
      analyzed_count: 3,
      bias_alerts: 1,
    },
    {
      id: 5,
      title: "Customer Satisfaction Survey",
      description: "Annual customer satisfaction and feedback analysis",
      progress: 60,
      tasks_count: 10,
      docs_count: 12,
      analyzed_count: 8,
      bias_alerts: 3,
    },
    {
      id: 6,
      title: "Market Segmentation",
      description: "Detailed analysis of market segments and target audiences",
      progress: 85,
      tasks_count: 18,
      docs_count: 14,
      analyzed_count: 11,
      bias_alerts: 0,
    },
  ];

  const fetchProjects = useCallback(async () => {
    try {
      const response = await fetch("/api/list-projects", { method: "POST" });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setProjects(data.projects.length > 0 ? data.projects : dummyProjects);
    } catch (err) {
      console.error(err);
      setProjects(dummyProjects);
      // setError("Using demo data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleNewProject = useCallback(async () => {
    try {
      const response = await fetch("/api/create-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "New Project",
          description: "Project description",
        }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      fetchProjects();
    } catch (err) {
      console.error(err);
      setError("Couldn't create project");
    }
  }, [fetchProjects]);

  const renderContent = () => {
    if (activeTab === "overview") {
      const recentActivities = [
        {
          id: 1,
          user: "Sarah Johnson",
          action: "added new annotations",
          project: "Market Research 2024",
          time: "2 minutes ago",
          avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
          id: 2,
          user: "Michael Chen",
          action: "uploaded new paper",
          project: "User Behavior Study",
          time: "15 minutes ago",
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          id: 3,
          user: "Emily Rodriguez",
          action: "created concept map",
          project: "Competitor Analysis",
          time: "1 hour ago",
          avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
          id: 4,
          user: "David Kim",
          action: "added team member",
          project: "Product Strategy",
          time: "2 hours ago",
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        },
      ];

      const paperLibrary = [
        {
          id: 1,
          title: "Impact of AI on Market Research",
          authors: "Johnson et al.",
          date: "2024",
          status: "Analyzed",
          progress: 100,
        },
        {
          id: 2,
          title: "Consumer Behavior in Digital Age",
          authors: "Chen, Rodriguez",
          date: "2024",
          status: "In Progress",
          progress: 65,
        },
        {
          id: 3,
          title: "Competitive Analysis Framework",
          authors: "Kim, Thompson",
          date: "2024",
          status: "Pending",
          progress: 0,
        },
      ];

      const activeTeamMembers = teamMembers.slice(0, 3);
      const pendingInvites = [
        {
          email: "john.doe@example.com",
          role: "Research Analyst",
          sent: "1 day ago",
        },
        {
          email: "jane.smith@example.com",
          role: "Data Scientist",
          sent: "2 days ago",
        },
      ];

      return (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#1e1e2d] rounded-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#3699ff] text-4xl font-bold">24</div>
                <i className="fas fa-file-alt text-[#3699ff] text-2xl"></i>
              </div>
              <div className="text-gray-400">Papers</div>
            </div>
            <div className="bg-[#1e1e2d] rounded-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#0bb783] text-4xl font-bold">12</div>
                <i className="fas fa-users text-[#0bb783] text-2xl"></i>
              </div>
              <div className="text-gray-400">Members</div>
            </div>
            <div className="bg-[#1e1e2d] rounded-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#8950fc] text-4xl font-bold">156</div>
                <i className="fas fa-comment-alt text-[#8950fc] text-2xl"></i>
              </div>
              <div className="text-gray-400">Annotations</div>
            </div>
            <div className="bg-[#1e1e2d] rounded-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#ffa800] text-4xl font-bold">8</div>
                <i className="fas fa-project-diagram text-[#ffa800] text-2xl"></i>
              </div>
              <div className="text-gray-400">Concept Maps</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#1e1e2d] rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white text-xl font-bold">
                    Recent Activity
                  </h2>
                  <button className="text-gray-400 hover:text-white transition-colors duration-200">
                    <i className="fas fa-sync-alt"></i>
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#2b2b3b] transition-colors duration-200"
                    >
                      <img
                        src={activity.avatar}
                        alt={activity.user}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-white">
                          <span className="font-semibold">{activity.user}</span>
                          <span className="text-gray-400">
                            {" "}
                            {activity.action} in{" "}
                          </span>
                          <span className="text-[#3699ff]">
                            {activity.project}
                          </span>
                        </p>
                        <p className="text-gray-500 text-sm">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1e1e2d] rounded-lg p-6">
                <h2 className="text-white text-xl font-bold mb-6">
                  Paper Library
                </h2>
                <div className="space-y-4">
                  {paperLibrary.map((paper) => (
                    <div
                      key={paper.id}
                      className="p-4 rounded-lg hover:bg-[#2b2b3b] transition-colors duration-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-white font-semibold">
                            {paper.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {paper.authors} • {paper.date}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            paper.status === "Analyzed"
                              ? "bg-[#0bb783] text-white"
                              : paper.status === "In Progress"
                              ? "bg-[#3699ff] text-white"
                              : "bg-gray-600 text-white"
                          }`}
                        >
                          {paper.status}
                        </span>
                      </div>
                      {paper.progress > 0 && (
                        <div className="w-full bg-[#2b2b3b] rounded-full h-1 mt-2">
                          <div
                            className="bg-[#3699ff] rounded-full h-1"
                            style={{ width: `${paper.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#1e1e2d] rounded-lg p-6">
                <h2 className="text-white text-xl font-bold mb-6">
                  Quick Actions
                </h2>
                <div className="space-y-4">
                  <button className="w-full bg-[#3699ff] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2d87e6] transition-colors duration-200 transform hover:scale-105">
                    <i className="fas fa-upload"></i>
                    Upload Paper
                  </button>
                  <button className="w-full bg-[#1e1e2d] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 border border-gray-700 hover:bg-[#2b2b3b] transition-colors duration-200 transform hover:scale-105">
                    <i className="fas fa-user-plus"></i>
                    Invite Member
                  </button>
                  <button className="w-full bg-[#1e1e2d] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 border border-gray-700 hover:bg-[#2b2b3b] transition-colors duration-200 transform hover:scale-105">
                    <i className="fas fa-project-diagram"></i>
                    Create Concept Map
                  </button>
                </div>
              </div>

              <div className="bg-[#1e1e2d] rounded-lg p-6">
                <h2 className="text-white text-xl font-bold mb-6">
                  Active Team Members
                </h2>
                <div className="space-y-4">
                  {activeTeamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#2b2b3b] transition-colors duration-200"
                    >
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-white font-semibold">
                          {member.name}
                        </p>
                        <p className="text-gray-400 text-sm">{member.role}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1e1e2d] rounded-lg p-6">
                <h2 className="text-white text-xl font-bold mb-6">
                  Pending Invitations
                </h2>
                <div className="space-y-4">
                  {pendingInvites.map((invite, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg hover:bg-[#2b2b3b] transition-colors duration-200"
                    >
                      <p className="text-white font-semibold">{invite.email}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-400 text-sm">
                          {invite.role}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {invite.sent}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "projects") {
      return (
        <>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-inter text-xl font-semibold text-white">
              Projects
            </h2>
            <button
              onClick={handleNewProject}
              className="bg-[#3699ff] text-white font-inter px-4 py-2 rounded-lg hover:bg-[#2d87e6]"
            >
              New Project
            </button>
          </div>

          {error && <div className="text-red-500 mb-4 font-inter">{error}</div>}

          {loading ? (
            <div className="font-inter text-gray-400">Loading projects...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  progress={project.progress}
                  tasks_count={project.tasks_count}
                  docs_count={project.docs_count}
                  analyzed_count={project.analyzed_count}
                  bias_alerts={project.bias_alerts}
                />
              ))}
            </div>
          )}
        </>
      );
    } else if (activeTab === "team") {
      return (
        <>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-inter text-xl font-semibold text-white">
              Team Members
            </h2>
            <button className="bg-[#3699ff] text-white font-inter px-4 py-2 rounded-lg hover:bg-[#2d87e6]">
              Add Member
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#151521]">
      <header className="bg-[#1e1e2d]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-2xl font-semibold text-white">
              Research Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">
                <i className="fas fa-bell text-xl"></i>
              </button>
              <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden">
                <img
                  src="/avatar-placeholder.png"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-7xl mx-auto px-6 py-8">{renderContent()}</main>
    </div>
  );
}

export default MainComponent;