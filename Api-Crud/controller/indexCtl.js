const dbSchema = require("../model/dbSchema")

module.exports.Home = async (req, res) => {
    try {
        const data = await dbSchema.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
}

module.exports.AddData = async (req, res) => {
    try {
        const newData = await dbSchema.create(req.body);
        res.status(201).json({ message: "Data added successfully", data: newData });
    } catch (error) {
        res.status(500).json({ message: "Error adding data" });
    }
}

module.exports.EditData = async (req, res) => {
    try {
        const data = await dbSchema.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
}
module.exports.UpdateData = async (req, res) => {
    try {
        const updatedData = await dbSchema.findByIdAndUpdate(req.params.id, req.body);
        if (!updatedData) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json({ message: "Data updated successfully", data: updatedData });
    } catch (error) {
        res.status(500).json({ message: "Error updating data" });
    }
}

module.exports.DeleteData = async (req, res) => {
    try {
        const deletedData = await dbSchema.findByIdAndDelete(req.params.id);
        if (!deletedData) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting data" });
    }
}