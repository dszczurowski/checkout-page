import React, { useEffect, useState } from 'react';
import productImg from '../../images/product.png';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector'
import { getInitialTotalAmount, getTotalAmount, getTotalAmountWithoutDiscount, PRODUCT_PRICE } from '../../utils/price'
import './ProductDetails.scss';

interface IProps {
  onProductDataChange: (amount: number, quantity: number) => void;
}

const ProductDetails: React.FC<IProps> = ({ onProductDataChange }) => {
  const [freeShipping, setFreeShipping] = useState(false);
  const [totalAmount, setTotalAmount] = useState(getInitialTotalAmount());
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const amount = getTotalAmount(quantity, freeShipping);
    setTotalAmount(amount);
    onProductDataChange(amount, quantity);
    // eslint-disable-next-line
  }, [quantity, freeShipping])

  const handleQuantityChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(evt.target.value);
    setQuantity(quantity);
    setFreeShipping(quantity > 11);
  }

  const totalAmountWithoutDiscount = quantity > 1 && <s>${getTotalAmountWithoutDiscount(quantity, freeShipping)}</s>;
  const shippingInformation = `Shipping: $${freeShipping ? '0' : '15'}`

  return (
    <section className="product-details">
      <p className="product-brand">
        POIĒMA
      </p>
      <p className="product-name">
        Multi-functional serum
      </p>
      <img alt="product" className="product-img" src={productImg} />
      <span className="product-price">${PRODUCT_PRICE}</span>
      <p className="product-discount">
        Get 5% discount for each additional product<br/>
        For 12 products shipping is free!
      </p>
      <QuantitySelector onChange={handleQuantityChange} quantity={quantity} max={12}/>
      <p className="product-shipping">
        {shippingInformation}
      </p>
      <span>
        <b>Total amount: ${totalAmount}</b> {totalAmountWithoutDiscount}
      </span>
    </section>
  );
}

export default ProductDetails;
