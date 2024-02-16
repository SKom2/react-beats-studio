import PropTypes from 'prop-types';
import styles from './Slide.module.scss'; // Добавьте соответствующие стили

const Slide = ({ src, isSelected, alt }) => (
  <li
    className={`${styles.slider} ${isSelected ? styles.slider_selected : ''}`}
  >
    <img src={src} alt={alt} className={styles.slider__image} />
  </li>
);

Slide.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Slide;
