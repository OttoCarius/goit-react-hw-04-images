import styled from 'styled-components';

export const StyledSearch = styled.header`
  margin-bottom: 50px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #ffffff;
  background-color: #33ffff;
  box-shadow: 0 0 20px #33ffff, 0 0 30px #33ffff, 0 0 25px #33ffff,
    0 0 55px #33ffff, 0 0 75px #33ffff;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
  color: #333333;
  border-radius: 20px;
  background: #ffffff;
  -webkit-box-shadow: -9px 5px 15px 5px #ffe488, -7px -5px 15px 5px #8cff85,
    12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: -9px 5px 15px 5px #ffe488, -7px -5px 15px 5px #8cff85,
    12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const StyledButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #99ffff;
  }
`;

export const StyledLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
