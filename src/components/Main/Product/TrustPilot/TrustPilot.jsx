import styles from './TrustPilot.module.scss';
import TrustPilotLogoText from '../../../../assets/images/LogoTrustPilotText.png';
import TrustPilotLogoIcon from '../../../../assets/images/LogoTrustPilotIcon.svg';

const TrustPilot = () => {
  return (
    <div className={styles.trustPilot}>
      <p className={styles.trustPilot__quote}>See our 437 reviews on</p>
      <div className={styles.trustPilot__logo}>
        <img src={TrustPilotLogoIcon} alt="Trust Pilot Logo Icon" />
        <img src={TrustPilotLogoText} alt="Trust Pilot Logo Text" />
      </div>
    </div>
  );
};

export default TrustPilot;
