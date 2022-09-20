import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledBackdrop, StyledModal } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    const { onCloseModal } = this.props;
    if (e.currentTarget === e.target || e.code === 'Escape') {
      onCloseModal();
    }
  };

  render() {
    const { photo } = this.props;
    return (
      <StyledBackdrop onClick={this.handleClose}>
        <StyledModal>
          <img src={photo.largeImageURL} alt={photo.tags} />
        </StyledModal>
      </StyledBackdrop>
    );
  }
}

Modal.propTypes = {
  photo: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
