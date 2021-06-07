import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { get, post } from '../apis/httpApiUtils';
import { APP_URLS, APP_URLS_TEST } from '../enums/urls';
import { config } from '../enums/config';

const useMainGallery = () => {

    const history = useHistory();

    const [uploadedImages, setUploadedImages] = useState();
    const [enableSelect, setEnableSelect] = useState(false);
    const [selectedImageList, setSelectedImageList] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState('');

    /** Retrieve user uploaded images */
    const getUploadedImages = async () => {
        try {
            const response = await get(APP_URLS.GET_UPLOADED_IMAGES, config);
            setUploadedImages(response.data);
        } catch (e) {
            handleAlert('Error in Retrieveing user uploaded images', true);
            console.error(`Error`, e)
        }

    };

    /** Control image selection */
    const handleEnableSelect = () => {
        enableSelect ? handleSave() : setEnableSelect(!enableSelect);

    };

    /** Save user selected best 9 photos */
    const handleSave = async () => {
        /** validate before save */
        const valid = await validateOrderedImages();
        valid && saveImageOrder();

    };

    /** API - Get for save ordered images */
    const saveImageOrder = async () => {
        try {
            const response = await post(APP_URLS.SAVE_ORDERED_IMAGES, { imageList: selectedImageList }, config);
            if (response.status === 200) {
                handleAlert("Image Order Saved Successfully", true);
                history.push('./my-best-9')
            } else {
                handleAlert(response.data.data, true);
            }

        } catch (e) {
            handleAlert('Error in Saving user ordered images', true);
            console.error(`Error`, e)
        }
    };

    /**  Control Image selection functions */
    const handleImageBoxClick = (id) => {
        const updateArray = [...uploadedImages];
        const selectedImage = updateArray.find((image) => image.id === id);

        if (enableSelect) {
            if (!!selectedImage.selected) {
                selectedImage.selected = false;
                handleImageDeSelect(selectedImage);
            } else {
                selectedImage.selected = true;
                handleImageSelect(selectedImage);
            }
        }
        setUploadedImages(updateArray);
    };

    /**  Control functions when user select image */
    const handleImageSelect = (selectedImage) => {
        const orderedImage = {
            imageRef: selectedImage,
            imageOrder: -1,
            userName: 'testUser'
        };
        selectedImageList.push(orderedImage);
        setSelectedImageList(selectedImageList);
    };

    /**  Control functions when user deselect image */
    const handleImageDeSelect = (selectedImage) => {
        const updatedList = selectedImageList.filter((image) => image.imageRef.id !== selectedImage.id);
        setSelectedImageList(updatedList);
    };

    /**  Control insert image preference order */
    const handleOrder = (e, id) => {
        selectedImageList.find((image) => image.imageRef.id === id).imageOrder = parseFloat(e.target.value);

    };

    /** Control alert close */
    const handleClose = () => {
        setShowAlert(!showAlert);

    };

    /** Control alert properties */
    const handleAlert = (text, status) => {
        setAlertText(text)
        setShowAlert(status)

    };

    /**  Validate ordered images*/
    const validateOrderedImages = () => {
        if (selectedImageList.length === 9) {
            const orderArray = [];
            selectedImageList.map((img) => (
                orderArray.push(img.imageOrder)
            ));
            // check for duplicate orderring
            if (new Set(orderArray).size !== orderArray.length) {
                handleAlert('Duplicate image order', true);
                return false;
            } else {
                return true;
            }
        } else {
            handleAlert('Select your best 9 images', true);
            return false;
        }
    };

    return [enableSelect,
        handleEnableSelect,
        getUploadedImages,
        uploadedImages,
        handleImageBoxClick,
        handleOrder,
        showAlert,
        handleClose,
        alertText];

};
export default useMainGallery;