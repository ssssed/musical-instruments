import React from 'react';
import '../styles/InstrumentCard.scss';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentImg, tooglePopupOpen } from '../store/popupSlice';

const InstrumentCard = ({ mainImg, imagesMini }) => {
  const dispatch = useDispatch()
  const {isOpen} = useSelector(state => state.popup);
  const handlePopupOpen = (e) => {
    console.log(e.target.src);
    dispatch(tooglePopupOpen(!isOpen));
    dispatch(setCurrentImg(e.target.src));
  }
  return (
    <div className='card'>
      <img 
        src={mainImg} 
        alt={mainImg} 
        className='card__img' 
        onClick={handlePopupOpen} />
      <div className='card__img-container'>
        {imagesMini.map((image) => (
          <img 
            key={image.name + image.id}
            src={image.link} 
            alt={image.name}
            onClick={handlePopupOpen} 
            className='card__img_mini' />
        ))}
      </div>
    </div>
  );
};

export default InstrumentCard;
