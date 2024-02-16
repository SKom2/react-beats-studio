import styles from './PayServices.module.scss';

import Visa from '../../../../../assets/images/paymentSevices/Visa.svg';
import Mastercard from '../../../../../assets/images/paymentSevices/Mastercard.svg';
import SamsungPay from '../../../../../assets/images/paymentSevices/SamsungPay.svg';
import ApplePay from '../../../../../assets/images/paymentSevices/ApplePay.svg';
import GooglePay from '../../../../../assets/images/paymentSevices/GooglePay.svg';

const paymentServices = [
  {
    image: Visa,
    alt: 'Visa Image',
  },
  {
    image: Mastercard,
    alt: 'Mastercard Image',
  },
  {
    image: SamsungPay,
    alt: 'SamsungPay Image',
  },
  {
    image: ApplePay,
    alt: 'ApplePay Image',
  },
  {
    image: GooglePay,
    alt: 'GooglePay Image',
  },
];

const PayServices = () => {
  return (
    <ul className={styles.payServices}>
      {paymentServices.map((service, index) => (
        <li className={styles.payServices__item} key={index}>
          <img
            src={service.image}
            alt={service.alt}
            className={styles.payServices__icon}
          />
        </li>
      ))}
    </ul>
  );
};

export default PayServices;
