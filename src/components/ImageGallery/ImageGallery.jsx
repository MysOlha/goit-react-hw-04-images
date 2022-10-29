import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <li key={id} className={css.imageGalleryItem}>
            <ImageGalleryItem
              webFormat={webformatURL}
              largeFormat={largeImageURL}
              tag={tags}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
