import styles from './Offers.module.scss';
import Offer from './Offer/Offer';

import NoteIcon from '../../../../../assets/images/NoteIcon.svg';
import AppleIcon from '../../../../../assets/images/AppleIcon.svg';

const offersData = [
  {
    id: 1,
    icon: NoteIcon,
    alt: 'Note Icon',
    title: 'Free Apple Music Trial',
    subtitle: 'Get 6 months of access to over 100 million songs, ad-free',
  },
  {
    id: 2,
    icon: AppleIcon,
    alt: 'Apple Icon',
    title: 'In-Store Pickup',
    subtitle: 'Pick up your Beats at an Apple Store near you',
  },
];

const Offers = () => {
  return (
    <ul className={styles.offers}>
      {offersData.map((offer) => (
        <li className={styles.offers__item} key={offer.id}>
          <Offer
            title={offer.title}
            subtitle={offer.subtitle}
            icon={offer.icon}
            alt={offer.alt}
          />
        </li>
      ))}
    </ul>
  );
};

export default Offers;
