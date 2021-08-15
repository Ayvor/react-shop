import React, { useState } from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';

const Card = ({
  id,

  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,

  loading = false,
}) => {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={265}
          viewBox="0 0 165 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="160" rx="10" ry="10" width="165" height="15" />
          <rect x="0" y="0" rx="10" ry="10" width="165" height="155" />
          <rect x="0" y="187" rx="10" ry="10" width="100" height="15" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="234" rx="10" ry="10" width="80" height="25" />
        </ContentLoader>
      ) : (
        <>
          <div onClick={onClickFavorite} className={styles.favorite}>
            {onFavorite && (
              <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
            )}
          </div>

          <img width={135} height={115} src={imageUrl} alt="" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
