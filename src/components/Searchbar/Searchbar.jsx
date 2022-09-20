import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledSearch,
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledInput,
} from './Searchbar.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsSearch } from 'react-icons/bs';

function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const onHandleInput = e => {
    setValue(e.currentTarget.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('Введите данные для поиска');
      return;
    }
    onSubmit(value);
  };

  return (
    <StyledSearch>
      <ToastContainer />
      <StyledForm onSubmit={onHandleSubmit}>
        <StyledButton type="submit">
          <BsSearch size="20px" color="#003322" />
          <StyledLabel> Search</StyledLabel>
        </StyledButton>
        <StyledInput
          type="text"
          name="search"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHandleInput}
        />
      </StyledForm>
    </StyledSearch>
  );
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
