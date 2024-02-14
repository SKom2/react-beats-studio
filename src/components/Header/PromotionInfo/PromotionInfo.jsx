import styles from './PromotionInfo.module.scss';

const PromotionInfo = () => {
  return (
    <div className={styles.info}>
      <h1 className={styles.info__title}>Beats Studio Buds &#43;</h1>
      <h2 className={styles.info__subtitle}>Powerful Sound. Perfect Fit</h2>
      <div className={`${styles.info__sale} ${styles.sale}`}>
        <p className={styles.sale__cost_first}>£150</p>
        <p className={styles.sale__cost_second}>£5</p>
      </div>
    </div>
  );
};

export default PromotionInfo;
