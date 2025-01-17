const express = require("express");
const router = express.Router();
const taskController = require("../Controller/taskController");

router.post("/createtask", taskController.createTask);
router.get("/viewtask", taskController.getAllTasks);
router.get("/edittask/:id", taskController.getTaskById);
router.put("/updatetask/:id", taskController.updateTask);
router.delete("/deletetask/:id", taskController.deleteTask);

module.exports = router;
