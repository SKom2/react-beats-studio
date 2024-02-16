import { useState } from 'react';
import styles from './Shipping.module.scss';

import ShippingIcon from '../../../assets/images/ShippingIcon.svg';

const Shipping = () => {
  const [openedShipping, setOpenedShipping] = useState(false);

  const toggleShipping = () => {
    if (!openedShipping) {
      setOpenedShipping(true);
    } else {
      document.querySelector(`.${styles.shipping__text}`).style.opacity = 0;
      setTimeout(() => setOpenedShipping(false), 300);
    }
  };

  return (
    <div className={styles.shipping}>
      <div className={styles.shipping__header}>
        <div className={styles.shipping__heading}>
          <img
            src={ShippingIcon}
            alt="Shipping Icon"
            className={styles.shipping__icon}
          />
          <h2 className={styles.shipping__title}>Free shipping in “Country”</h2>
        </div>
        <button
          type="button"
          className={styles.shipping__toggleBtn}
          onClick={toggleShipping}
        >
          <div
            className={`${styles.shipping__toggleBtnState} ${openedShipping && styles.shipping__toggleBtnState_opened}`}
          />
        </button>
      </div>
      <p
        className={`${styles.shipping__text} ${!openedShipping ? styles.shipping__text_hidden : ''}`}
        style={{ opacity: openedShipping ? 1 : 0 }}
      >
        All purchases are shipped from our warehouse in “Country” and are fully
        insured with a tracking number. Tracked delivery between 2 - 4 days in
        “Country” + Free Delivery
      </p>
    </div>
  );
};

export default Shipping;
