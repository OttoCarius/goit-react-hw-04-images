import PropTypes from 'prop-types';
import { StyledItem } from './ImageGalleryItem.styled';
import { StyledImg } from './ImageGalleryItem.styled';

function ImageGalleryItem({ photos, onHandleClick }) {
  const handleClick = e => {
    onHandleClick(e.target.alt);
  };

  return photos.map(({ webformatURL, tags }, id) => {
    return (
      <StyledItem key={id} onClick={handleClick}>
        <StyledImg src={webformatURL} alt={tags} />
      </StyledItem>
    );
  });
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.array.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
