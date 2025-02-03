import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowTask() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8001/task/viewtask", {
          withCredentials: true,
        });
        setTasks(response.data);
      } catch (error) {
        console.error(error);
        alert("Error fetching tasks");
      }
    };

    fetchTasks();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edittask/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8001/task/deletetask/${id}`, {
        withCredentials: true,
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      alert("Task deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Error deleting task");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        View Tasks
      </h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-6 text-left">No.</th>
              <th className="py-3 px-6 text-left">Task Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Priority</th>
              <th className="py-3 px-6 text-left">Start Date</th>
              <th className="py-3 px-6 text-left">End Date</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={task._id}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} border-b`}
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{task.taskName}</td>
                <td className="py-3 px-6">{task.category}</td>
                <td className="py-3 px-6">{task.priority}</td>
                <td className="py-3 px-6">
                  {new Date(task.startDate).toLocaleDateString()}
                </td>
                <td className="py-3 px-6">
                  {task.endDate ? new Date(task.endDate).toLocaleDateString() : "-"}
                </td>
                <td className="py-3 px-6">{task.description}</td>
                <td className="py-3 px-6 flex justify-center gap-4">
                  <button
                    onClick={() => handleEdit(task._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
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

export default ShowTask;
