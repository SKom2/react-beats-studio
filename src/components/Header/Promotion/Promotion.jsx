import styles from './Promotion.module.scss';
import PromotionInfo from '../PromotionInfo/PromotionInfo';

const Promotion = () => {
  return (
    <div className={styles.promotion}>
      <PromotionInfo />
    </div>
  );
};

export default Promotion;
