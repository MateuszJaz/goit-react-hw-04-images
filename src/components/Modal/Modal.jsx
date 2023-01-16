import React from 'react';
import PropTypes from 'prop-types';

import style from './modal.module.css';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
    window.removeEventListener('click', this.handleClose);
  }

  handleClose = e => {
    if (e.code === 'Escape' || e.target !== e.target.closest('img')) {
      return this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className={style.overlay} onClick={this.handleClose}>
        <div className={style.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
