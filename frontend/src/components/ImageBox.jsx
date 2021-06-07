import '../styles/ImageBox.css';
const ImageBox = ({ draggable, selected, imgNumber, handleDrag, handleDrop, onClick, img }) => {
  return (
    <div
      draggable={draggable}
      id={imgNumber}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      onClick={() => onClick(imgNumber)}
      style={{

        color: "#FFF",
        width: "100%",
        verticalAlign: "middle"
      }}
    >
      <img src={img} className={`${selected && 'image-border'}`} style={{ "width": "100%", "verticalAlign": "middle" }} alt="aaa" />
    </div>
  );
};
export default ImageBox;