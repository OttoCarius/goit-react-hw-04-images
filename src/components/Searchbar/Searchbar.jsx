import { Component } from 'react';
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

class Searchbar extends Component {
  state = { value: '' };

  onHandleInput = e => {
    this.setState({ value: e.currentTarget.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      toast.error('Введите данные для поиска');
      return;
    }
    const { onSubmit } = this.props;
    onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <StyledSearch>
        <ToastContainer />
        <StyledForm onSubmit={this.onHandleSubmit}>
          <StyledButton type="submit">
            <BsSearch size="20px" color="#003322" />
            <StyledLabel> Search</StyledLabel>
          </StyledButton>
          <StyledInput
            type="text"
            name="search"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleInput}
          />
        </StyledForm>
      </StyledSearch>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
