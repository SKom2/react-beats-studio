import styles from './About.module.scss';
import Offers from './Offers/Offers';
import Table from './Table/Table';

const About = () => {
  return (
    <div className={styles.about}>
      <Offers />
      <div className={styles.about__line} />
      <Table />
    </div>
  );
};

export default About;
