import PropTypes from 'prop-types';
import styles from './Colors.module.scss';

const Colors = ({ colors, activeColor, onClick }) => {
  return (
    <div className={styles.colors}>
      <p className={styles.colors__title}>Color:</p>
      <div className={styles.colors__list}>
        {colors.map((color, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.colors__button} ${activeColor === color ? styles.colors__button_active : ''}`}
            aria-label={`Color ${color}`}
            onClick={() => onClick(color)}
          >
            <div
              className={styles.colors__button_color}
              style={{ backgroundColor: color }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

Colors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Colors;
