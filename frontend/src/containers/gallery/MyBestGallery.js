import { useHistory } from 'react-router';
import { useMount } from 'react-use';
import { useMyBest } from '../../hooks';
import { ImageBox, Alert } from '../../components';
import '../../styles/MainGallery.css';

const MyBestGallery = () => {
    useMount(() => {
        getOrderedImages();
    });

    const history = useHistory();
    const [getOrderedImages,
        orderedImages,
        handleDrag,
        handleDrop,
        showAlert,
        alertText,
        handleClose,
        updateSelection,
        onSubmit] = useMyBest();

    return (
        <>
            <div className="container-button" >
                <button type="button" disabled={!(orderedImages && orderedImages.length > 0) || !updateSelection} className="btn btn-light mb-4" onClick={onSubmit}>
                    <> <i className="far fa-check-square"></i><p>Save Changes</p></>
                </button>
                <button type="button" className="btn btn-light" onClick={() => history.push('/')}>
                    <i className="far fa-check-square"></i><p>Back</p>
                </button>
            </div>
            <div className="container my-4 container-main">
                <div className="row" >
                    {orderedImages && orderedImages.length > 0 ?
                        orderedImages
                            .sort((a, b) => a.ois_imageOrder - b.ois_imageOrder)
                            .map((image) => (
                                <div className="col-4 mb-2" >
                                    <input type="number" className="text-order" value={image.ois_imageOrder} disabled />
                                    <ImageBox
                                        key={image.ois_imageRef.id}
                                        imgNumber={image.ois_imageRef.id}
                                        handleDrag={handleDrag}
                                        handleDrop={handleDrop}
                                        img={image.ois_imageRef.picture}
                                    />
                                </div>
                            ))
                        :
                        <div className="div-no-data" ><strong>No Selected Images</strong></div>}
                </div>
            </div>
            {showAlert &&
                <Alert alertText={alertText} handleClose={handleClose} />
            }
        </>
    )
};
export default MyBestGallery;