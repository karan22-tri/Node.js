import React, { useState, useEffect } from "react";
import axios from "axios";

function Showproject() {
  const [projects, setProjects] = useState([]);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:8001/project/viewpr", {
        withCredentials: true,
      });
      setProjects(response.data.msg);
    } catch (error) {
      console.error(error.response.data);
      alert("Error fetching projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Delete a project
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/project/deletepr/${id}`, {
        withCredentials: true,
      });
      setProjects(projects.filter((project) => project._id !== id));
      alert("Project deleted successfully");
    } catch (error) {
      console.error(error.response.data);
      alert("Error deleting project");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        View Projects
      </h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-6 text-left">No.</th>
              <th className="py-3 px-6 text-left">Project Name</th>
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Link</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={project._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b`}
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{project.projectName}</td>
                <td className="py-3 px-6">{project.projectType}</td>
                <td className="py-3 px-6">{project.desc}</td>
                <td className="py-3 px-6">
                  <img
                    src={`http://localhost:8001/${project.image}`}
                    alt="Project"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </td>
                <td className="py-3 px-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Visit
                  </a>
                </td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                  <button
              
                    className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition duration-200"
                  >
                  Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Showproject;
