import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import CartIcon from "../../Icons/CartIcon";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="cart position-relative">
      <NavLink to="/cart">
        <CartIcon className="cart-icon" />
        <span className="d-flex align-items-center justify-content-center cart-item-count position-absolute text-center p-2">
          {items.length}
        </span>
      </NavLink>
    </div>
  );
};

export default Cart;
