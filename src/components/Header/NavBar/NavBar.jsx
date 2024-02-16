import Logo from '../../../assets/images/Logo.svg';
import styles from './NavBar.module.scss';
import Menu from '../Menu/Menu';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <a href="#" className={styles.navBar__link}>
        <img src={Logo} alt="Beats Logo" className={styles.navBar__logo} />
      </a>
      <Menu />
    </nav>
  );
};

export default NavBar;
