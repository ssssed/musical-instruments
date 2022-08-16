import React, { useState } from 'react';
import '../styles/Comment.scss';

const Comment = ({ link, name, text }) => {
  return (
    <div className='comment'>
      <div className='comment__info'>
        <img src={link} alt={name} className='comment__img' />
        <h2 className='comment__name'>{name}</h2>
      </div>
      <p className='comment__text'>{text}</p>
    </div>
  );
};

export default Comment;
