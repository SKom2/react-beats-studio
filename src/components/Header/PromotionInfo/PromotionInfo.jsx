import styles from './PromotionInfo.module.scss';
import Sale from '../../common/Sale/Sale';

const PromotionInfo = () => {
  return (
    <div className={styles.promotionInfo}>
      <h1 className={styles.promotionInfo__title}>Beats Studio Buds &#43;</h1>
      <h2 className={styles.promotionInfo__subtitle}>
        Powerful Sound. Perfect Fit
      </h2>
      <Sale
        secondPrice="£5"
        firstPrice="£150"
        customClass={styles.promotionInfo__sale}
      />
    </div>
  );
};

export default PromotionInfo;
