const { check } = require('express-validator');

module.exports = {
    saveOrderedImages:[
        check('imageList').isArray({ max: 9, min: 9 }),
        check('imageList.*.imageOrder').isNumeric(),
        check('imageList.*.userName').isString(),
        check('imageList.*.imageRef').isObject(),
    ],
    updateOrderedImages:[
        check('imageList').isArray({ max: 9, min: 9 }),
        check('imageList.*.ois_imageOrder').isNumeric(),
        check('imageList.*.ois_username').isString(),
        check('imageList.*.ois_imageRef').isObject(),
        check('imageList.*._id').isString(),
    ]
}