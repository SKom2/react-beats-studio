import styles from './Main.module.scss';
import TrustPilot from './TrustPilot/TrustPilot';
import Product from './Product/Product';

const Main = () => {
  return (
    <main className={styles.main}>
      <TrustPilot />
      <Product />
    </main>
  );
};
export default Main;
