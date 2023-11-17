import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Button from "../../Button/Button";
import Ratings from "../Ratings/Ratings";

import { cartActions } from "../../../store/slices/cart";

const Product = (props) => {
  const dispatch = useDispatch();

  const { className, productInfo, productIndex } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: productInfo.id,
        title: productInfo.title,
        category: productInfo.category,
        image: productInfo.image,
        price: productInfo.price,
      })
    );

    toast.success("Added item to cart", {
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
    <div className={`${className || ""}`}>
      <div className="product-card d-flex align-items-center flex-column gap-4 px-4 py-2 w-100 h-100 position-relative">
        <NavLink state={{ productInfo }} to={`products/${productInfo.id}`}>
          <img src={productInfo.image} alt={productInfo.title} />
        </NavLink>

        <ul className="product-info d-flex flex-column gap-3 pt-3 pb-1 w-100">
          <li className="product-price">$ {productInfo.price}</li>
          <li className="product-title">
            <NavLink state={{ productInfo }} to={`products/${productInfo.id}`}>
              {productInfo.title}
            </NavLink>
          </li>
          <Ratings rating={productInfo.rating} />
        </ul>

        <Button
          onClick={addToCartHandler}
          className="w-100 py-3 btn-primary btn-pill mb-2 mt-auto"
        >
          Add to cart
        </Button>

        {productIndex < 4 && (
          <span className="new-tag d-flex align-items-center justify-content-center px-2 py-1 position-absolute">
            New
          </span>
        )}
      </div>
    </div>
  );
};

export default Product;
