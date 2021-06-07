const express = require('express');
const controller = require('../../controllers/uploaded.img.controller');

const router = express.Router();

router
    .route('/')
    /**
     * @api {get} v1/uploaded-images 
     * @apiDescription Get a list of user uploaded images
     * @apiVersion 1.0.0
     * @apiName ListUploadedImages
     * @apiGroup UploadedImages
     *
     * @apiSuccess {Object[] 200} image list of user uploaded images
     *
     * @apiError (Internal Server Error 500)  Exception
     */
    .get(controller.get)

module.exports = router;