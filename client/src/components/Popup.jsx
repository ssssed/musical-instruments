import React, { useState } from 'react';
import '../styles/Popup.scss';
import { motion, AnimatePresence } from 'framer-motion';
import CommentList from './CommentList';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import { tooglePopupOpen } from '../store/popupSlice';

const Popup = () => {
    const {isOpen, currentImg} = useSelector(state => state.popup)
    const [comments, setComments] = useState([
    {
      id: 1,
      link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v5d2-B0UrTHLuP8VE833YQHaHa%26pid%3DApi&f=1',
      name: 'Иван',
      text: 'Красивая картинка',
    },
    {
      id: 2,
      link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v5d2-B0UrTHLuP8VE833YQHaHa%26pid%3DApi&f=1',
      name: 'Петр',
      text: 'У меня такой же аппарат',
    },
  ]);
  const dispatch = useDispatch();
  const handleClickClose = (e) => {
    if(e.target.className === 'popup') {
        dispatch(tooglePopupOpen(false))
    }
  }
  return (
    <AnimatePresence>
     {isOpen &&
      (
        <div className='popup' onClick={handleClickClose}>
            <motion.div className="popup__container"
                initial={{ y: 300, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 300, opacity: 0, scale: 0 }}
                transition={{ bounce: 'none' }}
            >
                <img src={currentImg} alt={currentImg} className="popup__img" />
                <CommentList comments={comments} />
                <CommentForm setComments={setComments} />
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
