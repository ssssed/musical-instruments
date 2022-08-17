import React, { useEffect, useState } from 'react';
import '../styles/InstrumentList.scss';
import { getImages } from '../utils/Api';
import InstrumentCard from './InstumentCard';

const InstrumentList = () => {
  //   const allCard = [
  //     {
  //       id: 1,
  //       mainImg:
  //         'https://celes.club/uploads/posts/2022-05/thumbs/1652759060_21-celes-club-p-muzikalnie-instrumenti-art-krasivo-25.jpg',
  //       imagesMini: [
  //         {
  //           id: 1,
  //           link: 'https://celes.club/uploads/posts/2022-05/1652759069_13-celes-club-p-muzikalnie-instrumenti-art-krasivo-16.png',
  //           name: 'аккордеон',
  //         },
  //         {
  //           id: 2,
  //           link: 'https://img1.akspic.ru/previews/3/5/0/7/17053/17053-gitara_aksessuar-elektrogitara-gitara-shchipkovyye_strunnyye_instrumenty-muzykalnyj_instrument-500x.jpg',
  //           name: 'саксафон',
  //         },
  //         {
  //           id: 3,
  //           link: 'https://img4.goodfon.ru/wallpaper/nbig/3/bf/guitar-light-brown-gibson-strings-gitara.jpg',
  //           name: 'виолончель',
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       mainImg:
  //         'https://celes.club/uploads/posts/2022-05/1652759094_22-celes-club-p-muzikalnie-instrumenti-art-krasivo-29.jpg',
  //       imagesMini: [
  //         {
  //           id: 4,
  //           link: 'https://img3.akspic.ru/previews/7/3/4/4/3/134437/134437-muzyka-baraban-kozhgalantereya-muzykant-udarnaya_ustanovka-500x.jpg',
  //           name: 'гармошка',
  //         },
  //         {
  //           id: 5,
  //           link: 'https://img.freepik.com/premium-photo/cute-baby-playing-drums_255440-3081.jpg',
  //           name: 'гитара',
  //         },
  //         {
  //           id: 6,
  //           link: 'https://img.freepik.com/premium-photo/xylophone_522472-13772.jpg',
  //           name: 'электронная гитара',
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       mainImg:
  //         'https://celes.club/uploads/posts/2022-05/1652759094_22-celes-club-p-muzikalnie-instrumenti-art-krasivo-29.jpg',
  //       imagesMini: [
  //         {
  //           id: 7,
  //           link: 'https://img3.akspic.ru/previews/7/3/4/4/3/134437/134437-muzyka-baraban-kozhgalantereya-muzykant-udarnaya_ustanovka-500x.jpg',
  //           name: 'гармошка',
  //         },
  //         {
  //           id: 8,
  //           link: 'https://img.freepik.com/premium-photo/cute-baby-playing-drums_255440-3081.jpg',
  //           name: 'гитара',
  //         },
  //         {
  //           id: 9,
  //           link: 'https://img.freepik.com/premium-photo/xylophone_522472-13772.jpg',
  //           name: 'электронная гитара',
  //         },
  //       ],
  //     },
  //   ];
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getImages().then(res => setCards(res.data.sort((a, b) => a.id - b.id)));
  }, []);
  const groupCards = [];
  for (let i = 0; i < cards.length; i += 4) {
    groupCards.push({
      id: cards[i].id,
      mainImg: cards[i],
      imagesMini: [cards[i + 1], cards[i + 2], cards[i + 3]],
    });
  }
  return (
    <div className='instruments'>
      {groupCards.map(card => (
        <InstrumentCard key={'card' + card.id} {...card} />
      ))}
    </div>
  );
};

export default InstrumentList;
