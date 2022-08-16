const Router = require('express');
const router = new Router();
const DataController = require('../controllers/dataController');
// запросы
router.get('/images', DataController.getImages);
router.get('/images/:id', DataController.getImagesById);
router.post('/images/:id/comments', DataController.postComment);

module.exports = router;
