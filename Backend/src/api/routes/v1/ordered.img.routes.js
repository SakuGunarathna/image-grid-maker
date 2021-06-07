const express = require('express');
const controller = require('../../controllers/ordered.img.controller');
const {
    saveOrderedImages,
    updateOrderedImages,
} = require('../../validations/ordered.img.validation');

const router = express.Router();

router
    .route('/')
    /**
     * @api {get} v1/ordered-images 
     * @apiDescription Get a list of user ordered images
     * @apiVersion 1.0.0
     * @apiName ListOrderedImages
     * @apiGroup OrderedImages
     *
     * @apiSuccess {Object[] 200} image list of ordered images
     *
     * @apiError (Internal Server Error 500)  Exception
     */
    .get(controller.get)

    /**
     * @api {post} v1/ordered-images
     * @apiDescription Save user ordered image list
     * @apiVersion 1.0.0
     * @apiName SaveOrderedImages
     * @apiGroup OrderedImages
     *
     * @apiSuccess (saved 200) Successfully saved
     *
     * @apiError (Bad Request 400)   Invalide request
     * @apiError (Internal Server Error 500)  Exception   
     */
    .post(saveOrderedImages, controller.save)

    /**
     * @api {patch} v1/ordered-images 
     * @apiDescription Update image order of the image list
     * @apiVersion 1.0.0
     * @apiName UpdateOrderedImages
     * @apiGroup OrderedImages
     *
     *
     * @apiSuccess (updated 200) Successfully updates
     *
     * @apiError (Bad Request 400)   Invalide request
     * @apiError (Internal Server Error 500)  Exception
     */
    .patch(updateOrderedImages,controller.update)

    /**
     * @api {patch} v1/ordered-images
     * @apiDescription Delete ordered image list
     * @apiVersion 1.0.0
     * @apiName DeleteOrderedImages
     * @apiGroup OrderedImages
     *
     * @apiSuccess (deleted 200)  Successfully deleted
     *
     * @apiError (Internal Server Error 500)  Exception
     */
    .delete(controller.delete);


module.exports = router;