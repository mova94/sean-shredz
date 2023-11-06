import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a 
          className='cards__item__link'
          href="https://calendly.com/sean-shredz"
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
              src={props.src}
              playsInline
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
