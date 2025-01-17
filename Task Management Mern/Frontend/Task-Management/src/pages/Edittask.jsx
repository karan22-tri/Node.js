import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    taskName: "",
    category: "",
    priority: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/task/gettask/${id}`, {
          withCredentials: true,
        });
        setTask({
          ...response.data,
          startDate: new Date(response.data.startDate).toISOString().slice(0, 10),
          endDate: response.data.endDate
            ? new Date(response.data.endDate).toISOString().slice(0, 10)
            : "",
        });
      } catch (error) {
        console.error(error);
        alert("Error fetching task details");
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8001/task/updatetask/${id}`, task, {
        withCredentials: true,
      });
      alert("Task updated successfully");
      navigate("/viewtasks");
    } catch (error) {
      console.error(error);
      alert("Error updating task");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Edit Task
        </h2>
        <div className="mb-4">
          <label htmlFor="taskName" className="block text-sm font-medium mb-2">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={task.taskName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={task.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block text-sm font-medium mb-2">
            Priority
          </label>
          <input
            type="text"
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-sm font-medium mb-2">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={task.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-sm font-medium mb-2">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={task.endDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
        >
          Update Task
        </button>
      </form>
    </div>
  );
}

export default EditTask;
