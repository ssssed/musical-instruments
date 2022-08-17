import React, { useState } from 'react';
import '../styles/Comment.scss';

const Comment = ({ name, text }) => {
  return (
    <div className='comment'>
      <div className='comment__info'>
        <img
          src={
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v5d2-B0UrTHLuP8VE833YQHaHa%26pid%3DApi&f=1'
          }
          alt={name}
          className='comment__img'
        />
        <h2 className='comment__name'>{name}</h2>
      </div>
      <p className='comment__text'>{text}</p>
    </div>
  );
};

export default Comment;
