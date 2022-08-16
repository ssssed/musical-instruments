const Router = require('express');
const router = new Router();

const dataRoutes = require('./dataRoutes');

router.use('/', dataRoutes);

module.exports = router;
