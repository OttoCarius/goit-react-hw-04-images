import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledItem } from './ImageGalleryItem.styled';
import { StyledImg } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  handleClick = e => {
    const { onHandleClick } = this.props;
    onHandleClick(e.target.alt);
  };

  render() {
    const { photos } = this.props;
    return photos.map(({ webformatURL, tags }, id) => {
      return (
        <StyledItem key={id} onClick={this.handleClick}>
          <StyledImg src={webformatURL} alt={tags} />
        </StyledItem>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.array.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
