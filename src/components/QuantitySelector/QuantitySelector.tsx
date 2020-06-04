import React from 'react';
import './QuantitySelector.scss';

interface IProps {
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  quantity: number;
}

const QuantitySelector: React.FC<IProps> = ({ max, quantity, onChange }) => {
  return (
    <div className="quantity-selector-container">
      <p>
        {quantity} product(s)
      </p>
      <input
        className="quantity-selector"
        onChange={onChange}
        type="range"
        min={1}
        max={max}
        step={1}
        value={quantity}
      />
    </div>
  );
}

export default QuantitySelector;
