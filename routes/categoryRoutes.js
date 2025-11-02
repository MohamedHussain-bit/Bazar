const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
  getCategoryWithSubs
} = require('../controllers/categoryController');
const {
  createSubcategory,
  getSubcategories
} = require('../controllers/subcategoryController');

// Category routes
router.post('/categories', createCategory);
router.get('/categories', getCategories);
router.get('/categories/:id', getCategoryWithSubs);

// Subcategory routes
router.post('/categories/:categoryId/subcategories', createSubcategory);
router.get('/categories/:categoryId/subcategories', getSubcategories);

module.exports = router;
