import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { cartActions } from "../../../store/slices/cart";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeCartItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(cartItem.id));

    toast.success("Removed item from cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <li className="row align-items-center cart-item p-3">
      <div className="col-6">
        <div className="d-flex align-items-center gap-4">
          <img className="cart-img" src={cartItem.image} alt={cartItem.title} />
          <div className="d-flex flex-column gap-2">
            <span className="category text-capitalize">
              {cartItem.category}
            </span>
            <span className="title">{cartItem.title}</span>
          </div>
        </div>
      </div>

      <div className="col-2 text-center">
        <span className="quantity">{cartItem.quantity}</span>
      </div>

      <div className="col-2 text-center">
        <span className="total-price">$ {cartItem.totalPrice}</span>
      </div>

      <div
        role="button"
        onClick={removeCartItemHandler}
        className="col-2 text-center"
      >
        <span className="cross">&#10005;</span>
      </div>
    </li>
  );
};

export default CartItem;
