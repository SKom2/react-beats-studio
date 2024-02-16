import PropTypes from 'prop-types';
import styles from './Sale.module.scss';

const Sale = ({ firstPrice, secondPrice, customClass, children }) => {
  return (
    <div className={`${customClass} ${styles.sale} `}>
      <span className={styles.sale__price_first}>{firstPrice}</span>
      <span className={styles.sale__price_second}>{secondPrice}</span>
      {children}
    </div>
  );
};

Sale.propTypes = {
  children: PropTypes.node,
  firstPrice: PropTypes.string.isRequired,
  secondPrice: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
};

Sale.defaultProps = {
  children: '',
};

export default Sale;
