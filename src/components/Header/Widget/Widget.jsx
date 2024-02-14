import PropTypes from 'prop-types';
import styles from './Widget.module.scss';
import Icon from './Icon/Icon';

const Widget = ({ icon, text, alt }) => {
  return (
    <article className={styles.widget}>
      <Icon icon={icon} alt={alt} />
      <p className={styles.widget__text}>{text}</p>
    </article>
  );
};

Widget.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Widget;
