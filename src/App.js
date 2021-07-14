import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React, { useState } from 'react';

// const arr = [
//   {
//     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: 12999,
//     imageUrl: '/img/sneakers/1.jpg',
//   },
//   { title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers/2.jpg' },
//   {
//     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: 8500,
//     imageUrl: '/img/sneakers/3.jpg',
//   },
//   { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 9000, imageUrl: '/img/sneakers/4.jpg' },
// ];

/* [
  { "title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 12999, "imageUrl": "/img/sneakers/1.jpg" },
  { "title": "Мужские Кроссовки Nike Air Max 270", "price": 15600, "imageUrl": "/img/sneakers/2.jpg" },
  { "title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8500, "imageUrl": "/img/sneakers/3.jpg" },
  { "title": "Кроссовки Puma X Aka Boku Future Rider", "price": 9000, "imageUrl": "/img/sneakers/4.jpg" },
  { "title": "Мужские Кроссовки Under Armour Curry 8", "price": 15999, "imageUrl": "/img/sneakers/5.jpg" },
  { "title": "Мужские Кроссовки Nike Kyrie 7", "price": 11599, "imageUrl": "/img/sneakers/6.jpg" },
  { "title": "Мужские Кроссовки Jordan Air Jordan 11", "price": 10700, "imageUrl": "/img/sneakers/7.jpg" },
  { "title": "Мужские Кроссовки Nike LeBron XVIII", "price": 16499, "imageUrl": "/img/sneakers/8.jpg" }
] */

function App() {
  const [items, setItems] = useState([]);
  /* [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: '/img/sneakers/1.jpg',
    },
    { title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers/2.jpg' },
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8500,
      imageUrl: '/img/sneakers/3.jpg',
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 9000,
      imageUrl: '/img/sneakers/4.jpg',
    },
    {
      title: 'Мужские Кроссовки Under Armour Curry 8',
      price: 15999,
      imageUrl: '/img/sneakers/5.jpg',
    },
    { title: 'Мужские Кроссовки Nike Kyrie 7', price: 11599, imageUrl: '/img/sneakers/6.jpg' },
    {
      title: 'Мужские Кроссовки Jordan Air Jordan 11',
      price: 10700,
      imageUrl: '/img/sneakers/7.jpg',
    },
    { title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageUrl: '/img/sneakers/8.jpg' },
  ]  );*/

  const [cartOpened, setCartOpened] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  React.useEffect(() => {
    fetch('https://60e375196c365a00178392c8.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    // console.log(obj, 'onAddToCart');
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => {
            return (
              <Card
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => {
                  onAddToCart(obj);
                }}
                onFavorite={() => {
                  console.log('Нажали на лайк');
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
