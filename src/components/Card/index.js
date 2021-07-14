import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ title, imageUrl, price, onFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ title, imageUrl, price });
    // console.log(isAdded);
  };

  return (
    <div className={styles.card}>
      <div onClick={onFavorite} className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>

      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          // width={11}
          // height={11}

          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
};

export default Card;
