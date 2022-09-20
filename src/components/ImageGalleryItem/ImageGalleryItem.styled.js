import styled from 'styled-components';

export const StyledItem = styled.li`
  border-color: 00563F;
  box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 10px #33ffff,
    0 0 12px #33ffff, 0 0 15px #33ffff, 0 0 15px #33ffff, 0 0 20px #33ffff;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
