import styles from './Widget.module.scss';

import BatteryIcon from '../../../assets/images/BateryIcon.svg';
import GraphIcon from '../../../assets/images/GraphIcon.svg';
import MicrophoneIcon from '../../../assets/images/MicrophonIcon.svg';
import Widget from '../Widget/Widget';

const widgetsInformation = [
  {
    id: 1,
    icon: BatteryIcon,
    text: 'Up to 1.6x MoreActive Noise Cancelling',
    alt: 'Battery Icon',
  },
  {
    id: 2,
    icon: GraphIcon,
    text: 'Up to 36 Hours of Listening Time with Charging Case',
    alt: 'Graph Icon',
  },
  {
    id: 3,
    icon: MicrophoneIcon,
    text: '3x Larger Mics for Crisp, Clear Calls',
    alt: 'Microphone Icon',
  },
];

const Widgets = () => {
  return (
    <ul className={styles.widgets}>
      {widgetsInformation.map((widget) => (
        <li key={widget.id} className={styles.widgets__item}>
          <Widget icon={widget.icon} text={widget.text} alt={widget.alt} />
        </li>
      ))}
    </ul>
  );
};

export default Widgets;
