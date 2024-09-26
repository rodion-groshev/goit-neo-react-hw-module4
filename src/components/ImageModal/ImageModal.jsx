import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, style, image }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={style}
        contentLabel="Example Modal"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <img src={image.url} alt={image.discription} width={1000} height={540}/>
      </Modal>
    </div>
  );
};

export default ImageModal;
