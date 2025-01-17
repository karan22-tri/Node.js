const ProjectModel = require("../Model/ProjectModel");

const getPR = async (req, res) => {
    try {
        const data = await ProjectModel.find({});
        data 
            ? res.status(200).json({ msg: data }) 
            : res.status(400).json({ msg: "Data not found!" });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

const createPR = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(404).json({ msg: "Image not found." });
        }

        let image = req.file.path.replace(/\\/g, "/");
        req.body.image = image;

        const data = await ProjectModel.create(req.body);

        data 
            ? res.status(201).json({ msg: "Project created successfully." }) 
            : res.status(400).json({ msg: "Project creation failed." });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

const editPR = async (req, res) => {
    try {
        const data = await ProjectModel.findById(req.params.id);

        data 
            ? res.status(200).json({ msg: data }) 
            : res.status(404).json({ msg: "Project not found." });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

const updatePR = async (req, res) => {
    try {
        if (req.file) {
            let image = req.file.path.replace(/\\/g, "/");
            req.body.image = image;
        }

        const data = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, {
        });

        data 
            ? res.status(200).json({ msg: "Project updated successfully.", data }) 
            : res.status(404).json({ msg: "Project not found." });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

const deletePR = async (req, res) => {
    try {
        const data = await ProjectModel.findByIdAndDelete(req.params.id);

        data 
            ? res.status(200).json({ msg: "Project deleted successfully." }) 
            : res.status(404).json({ msg: "Project not found." });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

module.exports = {
    getPR,
    createPR,
    editPR,
    updatePR,
    deletePR,
};
