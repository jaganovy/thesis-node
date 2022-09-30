import CompetitionCategoryModel from "../models/CompetitionCategoryModel.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await CompetitionCategoryModel.find();

    res.status(200).send(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCategoryById = async (req, res) => {};

export const createCategory = async (req, res) => {
  try {
    const newCategory = new CompetitionCategoryModel({
      name: req.body.name,
      backgroundPhoto: req.file.buffer,
    });

    const result = await newCategory.save();

    res.status(200).send(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
