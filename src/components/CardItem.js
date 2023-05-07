import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link 
          className='cards__item__link'
          to="/external-link"
          target="_blank"
          rel='noreferrer' >
          <div className='cards__item__info'>
            <h2 className='cards__item__header'>{props.header}</h2>
          </div>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <video 
              autoPlay
              muted
              loop
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
