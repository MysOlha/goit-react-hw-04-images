import { useState } from 'react';
import css from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleImageNameChange = evt => {
    setImageName(evt.currentTarget.value.toLowerCase());
    // console.log(evt.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (imageName.trim() === '') {
      toast.error('Empty string');
      return;
    }
    onSubmit(imageName);
    setImageName('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleFormSubmit} className={css.searchForm}>
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
          onChange={handleImageNameChange}
          value={imageName}
        />
      </form>
    </header>
  );
};

export default Searchbar;
