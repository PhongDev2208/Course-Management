const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create)
router.get('/:id/edit', courseController.edit);
router.post('/store', courseController.store)
router.patch('/:id/restore', courseController.restore);
router.post('/handle-form-actions', courseController.handleFormActions)
router.put('/:id', courseController.update);
router.delete('/:id/force', courseController.forceDelete);
router.delete('/:id', courseController.delete);
router.get('/:slug', courseController.show);

module.exports = router;
