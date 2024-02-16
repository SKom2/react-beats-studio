import styles from './Menu.module.scss';

const menuItems = ['About Product', 'Reviews', 'Contact Us'];

const Menu = () => {
  return (
    <ul className={styles.menu}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href="#" className={styles.menu__item}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
