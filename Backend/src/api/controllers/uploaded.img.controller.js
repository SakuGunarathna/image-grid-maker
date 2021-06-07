const status = require('http-status');
const axios = require('axios');
const { uploadedImageURL } = require('../../config/variables');

/**
 * Get uploaded image list
 * @public
 */
exports.get = async (req, res) => {
    try {
        const result = await axios.get(uploadedImageURL);
        res.status(status.OK).json(result.data.entries)
    } catch (error) {
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
        console.log(`error`, error)
    }
};