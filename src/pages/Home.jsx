import React from 'react';
import Card from '../components/Card';

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => {
      return (
        <Card
          key={index}
          onPlus={(obj) => onAddToCart(obj)}
          onFavorite={(obj) => onAddToFavorite(obj)}
          loading={isLoading}
          {...item}
        />
      );
    });
  };
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => {
                setSearchValue('');
              }}
              src="/img/btn-remove.svg"
              alt="Clear"
              className="clear cu-p"
            />
          )}
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
