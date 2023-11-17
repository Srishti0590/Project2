import { useSelector } from "react-redux";

import CartItem from "./CartItem/CartItem";

const CartItems = () => {
  const { items, grandTotal } = useSelector((state) => state.cart);

  return (
    <div className="container mb-5 h-100 position-relative">
      {items.length ? (
        <div className="cart-container w-75 m-lg-auto">
          <div className="row mb-4 fw-bold">
            <div className="col-6">Product Details</div>
            <div className="col-2 text-center">Quantity</div>
            <div className="col-2 text-center">Total Price</div>
          </div>
          <ul className="mb-4">
            {items.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </ul>
          <div className="text-end fw-bold">Grand Total: $ {grandTotal}</div>
        </div>
      ) : (
        <p className="text-center no-items-msg">
          No any products are added in the cart! Please start adding items to
          view them.
        </p>
      )}
    </div>
  );
};

export default CartItems;
