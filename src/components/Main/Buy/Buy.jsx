import PropTypes from 'prop-types';
import styles from './Buy.module.scss';
import Sale from '../../common/Sale/Sale';
import Colors from './Colors/Colors';
import Timer from './Timer/Timer';
import PayServices from './PayServices/PayServices';

const colors = ['#ADACB1', '#282828', '#ECAAA7', '#ECE5DD'];

const Buy = ({ activeColor, onClick }) => {
  return (
    <div className={styles.buy}>
      <h2 className={styles.buy__title}>Beats Studio Buds &#43;</h2>
      <h3 className={styles.buy__subtitle}>
        True Wireless Noise Cancelling Earbuds
      </h3>
      <Sale secondPrice="£3" firstPrice="£150" customClass={styles.buy__sale}>
        <span className={styles.buy__sale_off}>90&#37; OFF</span>
      </Sale>
      <Colors colors={colors} activeColor={activeColor} onClick={onClick} />
      <button type="button" className={styles.buy__button}>
        Buy now
      </button>
      <Timer />
      <PayServices />
    </div>
  );
};

Buy.propTypes = {
  activeColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buy;
