import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => (
  <header className={style.searchbar}>
    <form className={style.searchForm} onSubmit={onSubmit}>
      <button type="submit" className={style.searchFormButton}>
        <span className={style.searchFormButtonLabel}>Search</span>
      </button>

      <input
        className={style.searchFormInput}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
