import React from 'react';
import { OrderItemType } from '../../types/order';
import OrderItem from '../../components/OrderItem/OrderItem';
import './OrdersList.scss';

interface IProps {
  orders: Array<OrderItemType>;
}

const OrdersList: React.FC<IProps> = ({ orders}) => {
  return (
    <section>
      <p className="orders-title">RECENT ORDERS</p>
      <ul className="orders-list">
        {orders.map((order: OrderItemType) => <OrderItem key={order.id} data={order}/>)}
      </ul>
    </section>
  );
}

export default OrdersList;
