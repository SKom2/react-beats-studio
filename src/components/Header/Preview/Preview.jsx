import styles from './Preview.module.scss';
import Promotion from '../Promotion/Promotion';
import Widgets from '../Widgets/Widgets';

const Preview = () => {
  return (
    <div className={styles.preview}>
      <Promotion />
      <Widgets />
    </div>
  );
};

export default Preview;
