import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { get, patch } from '../apis/httpApiUtils';
import { APP_URLS } from '../enums/urls';
import { config } from '../enums/config';

const useMyBest = () => {
    const history = useHistory();

    const [orderedImages, setOrderedImages] = useState();
    const [dragId, setDragId] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [updateSelection, setUpdateSelection] = useState(false);

    /** Retrieve user ordered images */
    const getOrderedImages = async () => {
        try {
            const response = await get(APP_URLS.GET_ORDERED_IMAGES, config);
            setOrderedImages(response.data);
        } catch (e) {
            handleAlert('Error in Retrieveing user ordered images', true);
            console.error(`Error`, e)
        }

    };

    /** Handle image box drag event */
    const handleDrag = (ev) => {
        setDragId(ev.currentTarget.id);

    };

    /** Handle image box drop event */
    const handleDrop = (ev) => {
        const dragBox = orderedImages.find((box) => box.ois_imageRef.id === parseFloat(dragId));
        const dropBox = orderedImages.find((box) => box.ois_imageRef.id === parseFloat(ev.currentTarget.id));

        const dragBoxOrder = dragBox.ois_imageOrder;
        const dropBoxOrder = dropBox.ois_imageOrder;

        const updatedOrder = orderedImages.map((box) => {
            if (box.ois_imageRef.id === parseFloat(dragId)) {
                box.ois_imageOrder = dropBoxOrder;
            }
            if (box.ois_imageRef.id === parseFloat(ev.currentTarget.id)) {
                box.ois_imageOrder = dragBoxOrder;
            }
            return box;
        });

        setOrderedImages(updatedOrder);
        setUpdateSelection(true);

    };

    /** Control alert properties */
    const handleAlert = (text, status) => {
        setAlertText(text)
        setShowAlert(status)

    };

    /** Control alert close */
    const handleClose = () => {
        setShowAlert(!showAlert);

    };

    const onSubmit = () => {
        updateImageOrder();

    };

    /** API - Get for save ordered images */
    const updateImageOrder = async () => {
        try {
            const response = await patch(APP_URLS.UPDATE_ORDERED_IMAGES, { imageList: orderedImages }, config);
            response.status === 200 ? handleAlert("Image Order Updated Successfully", true) :
                handleAlert(response.data.data, true);

        } catch (e) {
            handleAlert('Error in Updating user ordered images', true);
            console.error(`Error`, e)
        }
    };


    return [getOrderedImages, orderedImages, handleDrag, handleDrop, showAlert, alertText, handleClose, updateSelection, onSubmit];
};
export default useMyBest;