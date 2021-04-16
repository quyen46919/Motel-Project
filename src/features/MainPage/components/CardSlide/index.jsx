import React, { useState } from 'react';
// import { SliderData } from './SliderData';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './styles.scss';

const CardSlide = ({ SliderData }) => {
    console.log(SliderData);
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className='card-slider'>
      <ChevronLeftIcon className='arrow left-arrow' onClick={prevSlide} />
      <ChevronRightIcon className='arrow right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div>{slide.image}</div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CardSlide;