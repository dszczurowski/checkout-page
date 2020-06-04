const DISCOUNT_DECIMAL = 0.05;
const SHIPPING_PRICE = 15;

export const PRODUCT_PRICE = 27.49;

const getRoundedPrice = (price: number): number => Math.floor(price) + 0.99;
const formatPrice = (price: number, quantity: number): number => {
    const priceToFormat = quantity > 1 ? getRoundedPrice(price) : price;
    return Number(priceToFormat.toFixed(2));
}

export const getInitialTotalAmount = () => Number((PRODUCT_PRICE + SHIPPING_PRICE).toFixed(2));

export const getTotalAmountWithoutDiscount = (quantity: number, freeShipping: boolean): number => {
    const totalAmount = PRODUCT_PRICE * quantity;
    const totalAmountWithShipping = freeShipping ? totalAmount : totalAmount + SHIPPING_PRICE;
    return formatPrice(totalAmountWithShipping, quantity);
}

export const getTotalAmount = (quantity: number, freeShipping: boolean): number => {
    const discountDecimal = (quantity - 1) * DISCOUNT_DECIMAL;
    const totalAmount = getTotalAmountWithoutDiscount(quantity, true) * (1 - discountDecimal);
    const totalAmountWithShipping = freeShipping ? totalAmount : totalAmount + SHIPPING_PRICE;
    return formatPrice(totalAmountWithShipping, quantity);
};
