const mongoose = require("mongoose");

const taskdb = mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        enum: ["Fitness", "Diet", "Work", "Learning", "Personal", "Other"],
        default: "Other",
    },
    description: {
        type: String,
        trim: true,
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High", "Urgent"],
        default: "Medium",
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["Not Started", "In Progress", "Completed", "On Hold"],
        default: "Not Started",
    },
    subtasks: [
        {
            title: { type: String, trim: true },
            status: { 
                type: String, 
                enum: ["Not Started", "In Progress", "Completed"], 
                default: "Not Started",
            },
        },
    ],
    resources: {
        type: [String],
        default: [],
    },
    timeEstimate: {
        type: String, // e.g., "2 hours", "3 days"
        trim: true,
    },
    assignedTo: {
        type: String,
        trim: true,
    },
    progressNotes: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const taskModel = mongoose.model("Task", taskdb);

module.exports = taskModel;
