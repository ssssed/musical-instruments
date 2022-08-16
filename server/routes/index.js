const Router = require('express');
const router = new Router();

const imagesRoutes = require('./imagesRoutes');

router.use('/images', imagesRoutes);

module.exports = router;
