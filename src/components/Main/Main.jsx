import styles from './Main.module.scss';
import Product from './Product/Product';

const Main = () => {
  return (
    <main className={styles.main}>
      <Product />
    </main>
  );
};
export default Main;
