require('dotenv/config');

module.exports = {
    port: process.env.PORT,
    mongoDb: {
        uri: process.env.MONGO_URI,
    },
    uploadedImageURL: process.env.UPLOADED_IMAGES_URL
};