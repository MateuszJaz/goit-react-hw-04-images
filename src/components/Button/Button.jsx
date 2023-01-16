import style from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button className={style.button} onClick={onClick}>
    LOAD MORE
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
