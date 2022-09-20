import styled from 'styled-components';

export const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  display: inline-block;
  min-width: 220px;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #33ffff;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: ${p => p.theme.textTransform.upCase};
  font-family: ${p => p.theme.fonts.monospace};
  display: flex;
  text-align: center;
  align-items: center;
`;
