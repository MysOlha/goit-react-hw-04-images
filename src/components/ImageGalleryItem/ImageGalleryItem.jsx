import Modal from 'components/Modal';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  state = { openModal: false };

  togleModal = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };

  render() {
    const { webFormat, tag, largeFormat } = this.props;
    return (
      <>
        <img
          className={css.imageGalleryItemImage}
          src={webFormat}
          alt={tag}
          onClick={this.togleModal}
        />
        {this.state.openModal && (
          <Modal
            closeModal={this.togleModal}
            largeImg={largeFormat}
            tag={tag}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
