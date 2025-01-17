import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [link, setLink] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectType", projectType);
    formData.append("desc", desc);
    formData.append("image", image);
    formData.append("link", link);

    try {
      const response = await axios.post("http://localhost:8001/project/createpr", formData, {
        withCredentials: true,
      });
      alert(response.data.msg);
      setProjectName("");
      setProjectType("");
      setDesc("");
      setImage(null);
      setLink("");
      navigate("/viewproject");
    } catch (error) {
      console.error(error.response.data);
      alert("Error creating project");
    }
  };

  return (
    <div className="form-container">
      <br />
      
    <center><h1>ADD PROJECTS</h1></center>

      <form 
  onSubmit={handleSubmit} 
  encType="multipart/form-data" 
  className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-6"
>
  <div>
    <label 
      htmlFor="projectName" 
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Project Name
    </label>
    <input
      id="projectName"
      type="text"
      placeholder="Enter Project Name"
      value={projectName}
      onChange={(e) => setProjectName(e.target.value)}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div>
    <label 
      htmlFor="projectType" 
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Project Type
    </label>
    <input
      id="projectType"
      type="text"
      placeholder="Enter Project Type"
      value={projectType}
      onChange={(e) => setProjectType(e.target.value)}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div>
    <label 
      htmlFor="desc" 
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Project Description
    </label>
    <textarea
      id="desc"
      placeholder="Enter Project Description"
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
    ></textarea>
  </div>

  <div>
    <label 
      htmlFor="image" 
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Project Image
    </label>
    <input
      id="image"
      type="file"
      accept="image/*"
      onChange={(e) => setImage(e.target.files[0])}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div>
    <label 
      htmlFor="link" 
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Project Link
    </label>
    <input
      id="link"
      type="text"
      placeholder="Enter Project Link"
      value={link}
      onChange={(e) => setLink(e.target.value)}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
  >
    Add Project
  </button>
</form>

    </div>
  );
}

export default AddProject;
