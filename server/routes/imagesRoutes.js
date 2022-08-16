const Router = require('express');
const router = new Router();
const ImagesController = require('../controllers/ImagesController');

router.get('/', ImagesController.getImages);
router.get('/:id', ImagesController.getImagesByID);
router.post('/:id/comments', ImagesController.postComment);
router.post('/', ImagesController.createImages);

module.exports = router;
