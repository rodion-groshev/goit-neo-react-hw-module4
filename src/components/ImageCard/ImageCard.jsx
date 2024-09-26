import css from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div>
      <img
        className={css.card}
        src={image.urls.small}
        value={image.urls.regular}
        alt={image.alt_description}
        width={400}
        height={267}
      />
    </div>
  );
};

export default ImageCard;
