const { validationResult } = require('express-validator');
const status = require('http-status');
const OrderedImage = require('../models/ordered.img.model');

/**
 * Get ordered image list
 * @public
 */
exports.get = async (req, res) => {
    try {
        const orderedImages = await OrderedImage.find();
        if(orderedImages.length === 9){
            res.status(status.OK).json(orderedImages)
        }else{
            res.sendStatus(status.INTERNAL_SERVER_ERROR);
        }
       
    } catch (error) {
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
    }
};

/**
 * Save ordered image list
 * @public
 */
exports.save = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.sendStatus(status.BAD_REQUEST);
        }

        // First delete existing order
        await OrderedImage.deleteMany();

        // Save ordered image list
        req.body.imageList.map(async (el) => {
            const { userName, imageRef, imageOrder } = el;
            const orderedImage = new OrderedImage({
                ois_username: userName,
                ois_imageRef: imageRef,
                ois_imageOrder: imageOrder
            });
            await orderedImage.save();
        });
        res.sendStatus(status.OK);
    } catch (error) {
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
    }
};

/**
 * Update order of the image list
 * @public
 */
exports.update = (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.sendStatus(status.BAD_REQUEST);
        }
        // Update ordered image with _id
        req.body.imageList.map(async (el) => {
            const { _id, ois_username, ois_imageRef, ois_imageOrder } = el;
            // const orderedImage = new OrderedImage({
            //     ois_username: ois_username,
            //     ois_imageRef: ois_imageRef,
            //     ois_imageOrder: ois_imageOrder
            // });
                await OrderedImage.findByIdAndUpdate(_id,{
                        ois_username: ois_username,
                        ois_imageRef: ois_imageRef,
                        ois_imageOrder: ois_imageOrder
                    });
                });
        res.sendStatus(status.OK);
    } catch (error) {
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
        console.log(`error`, error)
    }
};

/**
 * Delete existing ordered image list
 * @public
 */
exports.delete = async (req, res) => {
    try {
        // First delete existing order
        await OrderedImage.deleteMany();
        res.sendStatus(status.OK);
    } catch (error) {
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
    }
};