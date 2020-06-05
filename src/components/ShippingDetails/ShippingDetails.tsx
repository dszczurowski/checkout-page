import React, { useEffect, useState } from 'react';
import './ShippingDetails.scss';

interface IProps {
  onPurchaseClick: (state: {[key: string]: string}) => void;
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  country: ''
};

const ShippingDetails: React.FC<IProps> = ({ onPurchaseClick }) => {
  const [formState, setFormState] = useState(initialState);
  const [fetchedCountry, setFetchedCountry] = useState('');

  useEffect(() => {
    (async () => {
      let response  = await fetch('http://ip-api.com/json');
      let data = await response.json();
      setFormState({ ...formState, country: data.country })
      setFetchedCountry(data.country);
    })();
    // eslint-disable-next-line
  }, [])

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = evt.target;
		setFormState({
			...formState,
			[name]: value
		});
  };
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.checkValidity()) {
      onPurchaseClick(formState);
      setFormState({ ...initialState, country: fetchedCountry });
    }
	};

  return (
    <section className="shipping-container">
      <form id="shipping-form" className="shipping-details" onSubmit={handleSubmit}>
        <p className="checkout-title">CHECKOUT</p>
        <label>First name:
          <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} required/>
        </label>
        <label>Last name:
          <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} required/>
        </label>
        <label>E-mail:
          <input type="email" name="email" value={formState.email} onChange={handleChange} required/>
        </label>
        <label>Phone:
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} required/>
        </label>
        <label>Street:
          <input type="text" name="street" value={formState.street} onChange={handleChange} required/>
        </label>
        <label>City:
          <input type="text" name="city" value={formState.city} onChange={handleChange} required/>
        </label>
        <label>Country:
          <input type="text" name="country" value={formState.country} onChange={handleChange} required/>
        </label>
      </form>
      <button form="shipping-form" className="purchase-btn">PURCHASE</button>
    </section>
    
  );
}

export default ShippingDetails;
