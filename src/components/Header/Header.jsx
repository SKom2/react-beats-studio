import styles from './Header.module.scss';
import HeaderOffer from '../HeaderOffer/HeaderOffer';
import NavBar from '../NavBar/NavBar';
import Preview from '../Preview/Preview';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderOffer />
      <NavBar />
      <Preview />
    </header>
  );
};

export default Header;
