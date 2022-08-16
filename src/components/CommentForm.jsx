import React, { useState } from 'react';
import '../styles/CommentForm.scss';

const CommentForm = ({ setComments }) => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const handleChangeText = (e) => setText(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // отправка на сервер text
    setComments((state) => [
      ...state,
      {
        id: state.length + 1,
        link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v5d2-B0UrTHLuP8VE833YQHaHa%26pid%3DApi&f=1',
        name,
        text,
      },
    ]);
    setText('');
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='form__title'>Оставьть комментарий</h2>
      <input
        className='form__input'
        type='text'
        value={name}
        onChange={handleNameChange}
        placeholder='Введите ваше имя'
      />
      <textarea
        className='form__textarea'
        type='text'
        placeholder='Комментарий'
        value={text}
        onChange={handleChangeText}
      />
      <button className='form__submit' type='submit'>
        Оставить комментарий
      </button>
    </form>
  );
};

export default CommentForm;
