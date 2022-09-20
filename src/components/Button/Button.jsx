import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { StyledButtonWrap, StyledButton } from './Button.styled';

function Button({ onLoadMore }) {
  return (
    <StyledButtonWrap>
      <StyledButton type="button" onClick={onLoadMore}>
        <FiArrowRight size="30px" color="black" />
        Load more...
        <FiArrowLeft size="30px" color="black" />
      </StyledButton>
    </StyledButtonWrap>
  );
}
Button.propTypes = { onLoadMore: PropTypes.func.isRequired };

export default Button;
