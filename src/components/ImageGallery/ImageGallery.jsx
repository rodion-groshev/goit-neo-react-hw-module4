import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.imagesList}>
      {images.map((image) => (
        <li className={css.imageItem} onClick={onClick} key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
