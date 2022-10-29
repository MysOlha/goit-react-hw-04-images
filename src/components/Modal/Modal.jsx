import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalEsc);
  }

  closeModalEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeModalBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImg, tag } = this.props;
    return (
      <div onClick={this.closeModalBackdrop} className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImg} alt={tag} />
        </div>
      </div>
    );
  }
}

export default Modal;
