import styles from './Header.module.scss';
import HeaderOffer from '../HeaderOffer/HeaderOffer';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderOffer />
      <NavBar />
    </header>
  );
};

export default Header;
