const express = require('express');
// const uploadedImageRoute = require('./uploaded.img.route');
const orderedImageRoute = require('./ordered.img.routes');
const uploadedImageRoute = require('./uploaded.img.route');

const router = express.Router();

router.use('/uploaded-images', uploadedImageRoute);
router.use('/ordered-images', orderedImageRoute);

module.exports = router;