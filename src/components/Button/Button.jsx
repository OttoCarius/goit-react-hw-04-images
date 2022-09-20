import React from 'react';
import PropTypes from 'prop-types';

import { StyledButtonWrap, StyledButton } from './Button.styled';

function Button({ onLoadMore }) {
  return (
    <StyledButtonWrap>
      <StyledButton type="button" onClick={onLoadMore}>
        Load more...
      </StyledButton>
    </StyledButtonWrap>
  );
}
Button.propTypes = { onLoadMore: PropTypes.func.isRequired };

export default Button;
