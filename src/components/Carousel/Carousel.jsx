import { useState } from 'react';
import angleIcon from '../../assets/icons/angle-icon.svg';
import angleLeftIcon from '../../assets/icons/angle-left-icon.svg';
import { useGetSliderProductsQuery } from '../../store/productsApi';
import CarouselSlide from './CarouselSlide';
import Button from '../Button/Button'


const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {
    data: sliderProducts = [],
  } = useGetSliderProductsQuery();

  return ( 
    <div className="container">
    <div className="carousel">
      { activeSlide <= sliderProducts.length -2 && <Button classNames={"carousel__arrow carousel__arrow_right"} img={angleIcon} onClick={() => setActiveSlide(activeSlide + 1)} />}
      { activeSlide !== 0 && <Button classNames={"carousel__arrow carousel__arrow_left"} img={angleLeftIcon} onClick={() => setActiveSlide(activeSlide - 1)} />}
      <div className="carousel__inner" style={{ "transform": `translateX(${-988 * activeSlide}px)`}}>
        {sliderProducts && sliderProducts.map((product) => <CarouselSlide key={product.id} {...product} /> )}
      </div>
    </div>
  </div>
   );
}

export default Carousel;