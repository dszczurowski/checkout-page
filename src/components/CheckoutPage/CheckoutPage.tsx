import React from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import './CheckoutPage.scss';

const CheckoutPage: React.FC = () => {
  return (
    <main className="checkout-page">
      <ProductDetails/>
    </main>
  );
}

export default CheckoutPage;
