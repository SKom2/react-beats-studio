import PropTypes from 'prop-types';
import styles from './Icon.module.scss';

const Icon = ({ icon, alt }) => {
  return (
    <div className={styles.widgetIcon}>
      <img className={styles.widgetIcon__icon} src={icon} alt={alt} />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
