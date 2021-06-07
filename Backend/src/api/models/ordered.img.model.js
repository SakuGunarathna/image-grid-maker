const mongoose = require('mongoose');

const OrderedImagesSchema = mongoose.Schema({
     ois_username: String,
     ois_imageRef: Object,
     ois_imageOrder: Number
});

module.exports = mongoose.model('OrderedImage', OrderedImagesSchema);