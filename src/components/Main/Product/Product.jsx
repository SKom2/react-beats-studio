import { useState } from 'react';
import styles from './Product.module.scss';
import ImageSlider from '../ImageSlider/ImageSlider';
import sliderData from '../../../data/sliderData';
import Buy from '../Buy/Buy';
import About from '../About/About';
import Shipping from '../Shipping/Shipping';

const Product = () => {
  const [activeColor, setActiveColor] = useState('#ADACB1');
  const [sliderSelectors, setSliderSelectors] = useState(
    sliderData.find((selector) => selector.color === activeColor).selectors
  );

  const handleColorBtnClick = (activeColor) => {
    setSliderSelectors(
      sliderData.find((selector) => selector.color === activeColor).selectors
    );
    setActiveColor(activeColor);
  };

  return (
    <section className={styles.product}>
      <ImageSlider selectors={sliderSelectors} activeColor={activeColor} />
      <Buy activeColor={activeColor} onClick={handleColorBtnClick} />
      <About />
      <Shipping />
    </section>
  );
};

export default Product;
