import PropTypes from 'prop-types';
import styles from './BtnSlider.module.scss';

import LeftArrow from '../../../../../assets/images/sliderImages/LeftArrow.png';
import RightArrow from '../../../../../assets/images/sliderImages/RightArrow.png';

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      type="button"
      className={`${styles.btnSlider} ${direction === 'next' ? styles.btnSlider__right : styles.btnSlider__left}`}
      onClick={moveSlide}
    >
      <img
        src={direction === 'next' ? RightArrow : LeftArrow}
        alt="Slider Arrow"
      />
    </button>
  );
};

BtnSlider.propTypes = {
  direction: PropTypes.string.isRequired,
  moveSlide: PropTypes.func.isRequired,
};

export default BtnSlider;
