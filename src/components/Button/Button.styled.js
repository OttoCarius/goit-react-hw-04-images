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
  border-radius: 15px;
  background-color: #33ffff;
  text-align: center;
  align-items: center;

  font-family: Georgia, serif;
  font-size: 22px;
  letter-spacing: 0.8px;
  word-spacing: 3.2px;
  color: #000000;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;

  :hover {
    box-shadow: 2px 2px 10px 10px #33ffff;
  }
`;
