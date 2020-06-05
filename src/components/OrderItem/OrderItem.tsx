import React from 'react';
import { OrderItemType } from '../../types/order';
import './OrderItem.scss';

interface IProps {
  data: OrderItemType
}

const OrderItem: React.FC<IProps> = ({ data }) => {
  return (
    <li>
      {data.firstName} {data.lastName} ({data.country})
      <p>Ordered time: {new Date(data.createdAt).toLocaleString()}</p>
      <p>Units: {data.units}</p>
      <p>Premium service: {data.isPremium ? 'yes' : 'no'}</p>
    </li>
  );
}

export default OrderItem;
