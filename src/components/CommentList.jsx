import React, { useState } from 'react';
import '../styles/CommentList.scss';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <div className='comment-list'>
      <h2 className='comment-list__title'>Комментарии:</h2>
      <div className="comment-list__list">
        {comments && comments.map((com) => <Comment key={com.id} {...com} />)}
      </div>
    </div>
  );
};

export default CommentList;
