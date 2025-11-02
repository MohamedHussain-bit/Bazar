const Subcategory = require('../models/Subcategory');

// Create subcategory
exports.createSubcategory = async (req, res) => {
  try {
    const subcategory = await Subcategory.create({
      name: req.body.name,
      category: req.params.categoryId
    });
    res.status(201).json(subcategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all subcategories of a category
exports.getSubcategories = async (req, res) => {
  try {
    const subs = await Subcategory.find({ category: req.params.categoryId });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
