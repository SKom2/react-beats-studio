import PropTypes from 'prop-types';
import styles from './SelectorButtons.module.scss'; // Добавьте соответствующие стили

const SelectorButtons = ({ selectors, selectedItem, setTheSlide }) => (
  <ul className={styles.selectors}>
    {selectors.map((selector, index) => (
      <li key={index} className={styles.selectors__item}>
        <button
          type="button"
          className={`${styles.selectors__button} ${selectedItem === index + 1 ? styles.selectors__button_active : ''}`}
          onClick={() => setTheSlide(index + 1)}
        >
          <img
            src={selector.image}
            alt={selector.alt}
            className={styles.selectors__image}
          />
        </button>
      </li>
    ))}
  </ul>
);

SelectorButtons.propTypes = {
  selectors: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedItem: PropTypes.number.isRequired,
  setTheSlide: PropTypes.func.isRequired,
};

export default SelectorButtons;
