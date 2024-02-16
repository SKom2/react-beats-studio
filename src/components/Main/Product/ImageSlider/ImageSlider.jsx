import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageSlider.module.scss';
import BtnSlider from './BtnSlider/BtnSlider';
import SelectorButtons from './SelectorButtons/SelectorButtons';
import Slide from './Slide/Slide';

const ImageSlider = ({ selectors }) => {
  const [selectedItem, setSelectedItem] = useState(1);
  const prevSlide = () =>
    setSelectedItem((prev) => (prev !== 1 ? prev - 1 : selectors.length));
  const nextSlide = () =>
    setSelectedItem((prev) => (prev !== selectors.length ? prev + 1 : 1));

  return (
    <div className={styles.imageSlider}>
      <ul
        className={styles.imageSlider__list}
        style={selectedItem === 3 ? { outline: 'none' } : {}}
      >
        {selectors.map((selector, index) => (
          <Slide
            key={index}
            src={selector.image}
            alt={selector.alt}
            isSelected={selectedItem === index + 1}
          />
        ))}
        <BtnSlider direction="prev" moveSlide={prevSlide} />
        <BtnSlider direction="next" moveSlide={nextSlide} />
      </ul>
      <SelectorButtons
        selectors={selectors}
        selectedItem={selectedItem}
        setTheSlide={setSelectedItem}
      />
    </div>
  );
};

ImageSlider.propTypes = {
  selectors: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageSlider;
