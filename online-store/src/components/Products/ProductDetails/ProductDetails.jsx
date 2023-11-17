import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Button from "../../Button/Button";
import Ratings from "../Ratings/Ratings";

import { cartActions } from "../../../store/slices/cart";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const {
    state: { productInfo },
  } = useLocation();

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
    <div className="container mb-5 product-details">
      <div className="row align-items-center justify-content-center g-4 g-lg-0">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <img
            className="w-75"
            src={productInfo.image}
            alt={productInfo.title}
          />
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-column gap-4">
            <h2 className="heading-secondary">{productInfo.title}</h2>

            <Ratings rating={productInfo.rating} />

            <p className="m-0 p-0 category">
              Category:{" "}
              <span className="text-capitalize">{productInfo.category}</span>
            </p>

            <span className="price">$ {productInfo.price}</span>

            <p className="m-0 p-0 description">{productInfo.description}</p>

            <div className="d-flex align-items-center gap-4">
              <Button className="btn-secondary py-3 px-5">Buy now</Button>
              <Button
                onClick={addToCartHandler}
                className="btn-primary py-3 px-5"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
