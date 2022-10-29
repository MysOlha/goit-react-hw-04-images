import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleImageNameChange = evt => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
    // console.log(evt.currentTarget.value.toLowerCase());
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.error('Empty string');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleFormSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <BiSearch size="25px" />
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleImageNameChange}
            value={this.state.imageName}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
