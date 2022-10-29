import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ largeImg, tag, closeModal }) => {
  useEffect(() => {
    const closeModalEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeModalEsc);
    return () => {
      window.removeEventListener('keydown', closeModalEsc);
    };
  }, [closeModal]);

  const closeModalBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div onClick={closeModalBackdrop} className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImg} alt={tag} />
      </div>
    </div>
  );
};

export default Modal;
