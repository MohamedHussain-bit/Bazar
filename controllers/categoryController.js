const Category = require('../models/Category');
const Subcategory = require('../models/Subcategory');

// Create category
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single category with subcategories
exports.getCategoryWithSubs = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    const subs = await Subcategory.find({ category: req.params.id });
    res.json({ category, subcategories: subs });
  } catch (err) {
    res.status(404).json({ message: "Category not found" });
  }
};
