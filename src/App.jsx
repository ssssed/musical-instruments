import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import InstrumentList from './components/InstrumentList';
import Popup from './components/Popup';
import './styles/App.scss';

const App = () => {
  const { isOpen } = useSelector((state) => state.popup);
  useLayoutEffect(() => {
    const body = document.querySelector('body');
    isOpen
      ? body.classList.add('body_disable-scroll')
      : body.classList.remove('body_disable-scroll');
  }, [isOpen]);
  return (
    <div className='page'>
      <Popup />
      <h1 className='page__title'>Музыкальные инструмменты</h1>
      <InstrumentList />
    </div>
  );
};

export default App;
