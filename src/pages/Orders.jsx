import axios from 'axios';
import React, { useState } from 'react';
import Card from '../components/Card';
import AppContext from '../context';

const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { onAddToCart, onAddToFavorite } = React.useContext(AppContext);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://60e375196c365a00178392c8.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => {
          return (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              loading={isLoading}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
