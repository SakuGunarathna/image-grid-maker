import { useHistory } from 'react-router';
import { useMount } from 'react-use';
import { Alert, ImageBox } from '../../components';
import { useMainGallery } from "../../hooks";
import '../../styles/MainGallery.css';

const MainGallery = () => {
  useMount(() => {
    getUploadedImages();
  });
  const history = useHistory();
  const [enableSelect,
    handleEnableSelect,
    getUploadedImages,
    uploadedImages,
    handleImageBoxClick,
    handleOrder,
    showAlert,
    handleClose,
    alertText] = useMainGallery();

  return (
    <>
      <div className="container-button" >
        <button type="button" className="btn btn-light mb-4" onClick={handleEnableSelect}>
          {enableSelect ? <><i className="far fa-check-square"></i><p>Done Selection</p></> : <><i className="far fa-list-alt"></i><p>Enable Select</p></>}
        </button>
        <button type="button" className="btn btn-light" onClick={() => history.push('/')}>
          <i className="far fa-check-square"></i><p>Back</p>
        </button>
      </div>
      <div className="container my-4 container-main">
        <div className="row">
          {uploadedImages && uploadedImages.length > 0 &&
            uploadedImages.map((image) => (
              <div key={image.id} className="col-4 mb-2">
                {image.selected && <input type="number" className="text-order" onChange={e => handleOrder(e, image.id)} />}
                <ImageBox
                  key={image.id}
                  draggable={false}
                  imgNumber={image.id}
                  img={image.picture}
                  onClick={handleImageBoxClick}
                  selected={image.selected}
                />
              </div>
            ))
          }
        </div>
      </div>
      {showAlert &&
        <Alert alertText={alertText} handleClose={handleClose} />
      }
    </>
  )
};
export default MainGallery;

