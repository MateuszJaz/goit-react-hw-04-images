import { useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './modal.module.css';

const Modal = ({ largeImageURL, closeModal }) => {
  useEffect(() => {
    const handleClose = e => {
      if (e.key === 'Escape' || e.target === e.target.closest('div')) {
        closeModal();
      }

      window.addEventListener('keydown', handleClose);
      window.addEventListener('click', handleClose);
    };

    return () => {
      window.removeEventListener('keydown', handleClose);
      window.addEventListener('click', handleClose);
    };
  }, [closeModal]);

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  closeModal: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
