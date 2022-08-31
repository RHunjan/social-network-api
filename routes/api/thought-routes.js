const router = require('express').Router();


const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');
const { create } = require('../../models/Thought');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:userId')
  .post(createThought);


module.exports = router;