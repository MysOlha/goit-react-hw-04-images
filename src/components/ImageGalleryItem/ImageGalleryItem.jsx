import Modal from 'components/Modal';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webFormat, tag, largeFormat }) => {
  const [openModal, setOpenModal] = useState(false);

  const togleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <img
        className={css.imageGalleryItemImage}
        src={webFormat}
        alt={tag}
        onClick={togleModal}
      />
      {openModal && (
        <Modal closeModal={togleModal} largeImg={largeFormat} tag={tag} />
      )}
    </>
  );
};

export default ImageGalleryItem;
