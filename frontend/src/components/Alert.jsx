import '../styles/Alert.css';

const Alert = ({ alertText, handleClose }) => (
    <div className="alert alert-dark alert-dismissible fade show div-text" role="alert">
        {alertText}
        <button type="button" className="close" onClick={() => handleClose()} data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);
export default Alert;