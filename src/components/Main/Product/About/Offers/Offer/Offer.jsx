import PropTypes from 'prop-types';
import styles from './Offer.module.scss';

const Offer = ({ title, subtitle, icon, alt }) => {
  return (
    <div className={styles.offer}>
      <div className={styles.offer__heading}>
        <img src={icon} alt={alt} className={styles.offer__icon} />
        <h3 className={styles.offer__title}>{title}</h3>
      </div>
      <p className={styles.offer__subtitle}>{subtitle}</p>
    </div>
  );
};

Offer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Offer;
