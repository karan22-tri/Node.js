const UserSubCategory = require("../model/SubCategoriesSchema");
let userCategory = require("../model/CategoriesSchema");

module.exports.addSubCategory = async (req, res) => {
  try {
    const { subCategories, categoriesId } = req.body;
    subCategories

    if (!subCategories || !categoriesId) {
      return res.status(400).json({ msg: "Name and Category ID are required" });
    }

    const newSubCategory = await UserSubCategory.create({
      subCategories,
      categoriesId: categoriesId,
    });

    if (newSubCategory) {
      return res.status(201).json({
        msg: "Sub-category added successfully",
        data: newSubCategory,
      });
    } else {
      return res.status(400).json({ msg: "Failed to add sub-category" });
    }
  } catch (err) {
    console.error("Error adding sub-category:", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports.viewSubCategory = async (req, res) => {
  try {
    const data = await UserSubCategory.find({}).populate("categoriesId");

    data ? res.status(200).json({data}) : res.status(400).json({ msg: "Data Not Found" })
  } catch (err) {
    console.error("Error fetching subcategories:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteSubCategory = async (req , res) => {
  try {
    const singaldata = await UserSubCategory.findById(req.query.id);
    const data = await UserSubCategory.findByIdAndDelete(req.query.id);
    data ? res.status(200).json({ msg: "delete successfully" }) : res.status(400).json({ msg: "Data Not Delete" })
  } catch (error) {
    console.log(error);
  }
}

module.exports.editSubCategory = async (req, res) => {
  try {
    const editdata = await UserSubCategory.findById(req.query.id);
    editdata ? res.status(200).json({ msg: "Data Edit successfully", editdata }) : res.status(400).json({ msg: "Data Not Edit" })
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateSubCategory = async (req, res) => {
  try {
    const update = await UserSubCategory.findById(req.query.id);

    const updateData = req.body;

    const updateCategory = await UserSubCategory.findByIdAndUpdate(update, updateData);

    updateCategory ? res.status(200).json({msg : "Category Updated successfully"}) : res.status(400).json({msg : " Sub Category Not Update successfully"})

  } catch (error) {
    console.log(error);

  }
};