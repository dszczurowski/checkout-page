import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import OrdersList from '../../components/OrdersList/OrdersList';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ShippingDetails from '../../components/ShippingDetails/ShippingDetails';
import { OrderItemType } from '../../types/order';
import './CheckoutPage.scss';

const CheckoutPage: React.FC = () => {
  const [orders, setOrders] = useState([]);
  const [purchaseData, setPurchaseData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const sortOrders = (orders: Array<OrderItemType>) => orders.sort((a: OrderItemType, b: OrderItemType) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  });

  useEffect(() => {
    (async () => {
      let response  = await fetch('https://api.jsonbin.io/b/5ecd438ca2a6e10f7bc644c3');
      let data = await response.json();
      setOrders(sortOrders(data));
    })();
    // eslint-disable-next-line
  }, [])

  const handlePurchaseClick = (shippingState: {[key: string]: string}) => {
    const newPurchaseData = { ...purchaseData, ...shippingState, id: String(Date.now()), createdAt: String(new Date()) };
    const newSortedOrders = sortOrders([newPurchaseData].concat(orders))
    setPurchaseData(newPurchaseData);
    setOrders(newSortedOrders);
    setShowModal(true);
  };

  const handleProductDataChange = (totalAmount: number, quantity: number) => {
    setPurchaseData({ ...purchaseData, totalAmount, units: quantity, isPremium: quantity > 11 });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main className="checkout-page">
      <section className="checkout-info">
        <ProductDetails onProductDataChange={handleProductDataChange}/>
        <ShippingDetails onPurchaseClick={handlePurchaseClick}/>
      </section>
      <OrdersList orders={orders}/>
      <Modal
        confirmText="OK"
        onClose={handleCloseModal}
        showModal={showModal}
        text="Purchase completed. See recent orders below."
      />
    </main>
  );
}

export default CheckoutPage;
