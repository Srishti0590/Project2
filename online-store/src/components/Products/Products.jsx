import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "./Product/Product";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinnner";

import { fetchAllProducts } from "../../store/actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.product);
  const { isLoading, userMessage, searchTerm } = useSelector(
    (state) => state.ui
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const productsContent = () => {
    if (isLoading) return <LoadingSpinner />;

    if (!allProducts.length)
      return (
        <p className="user-message text-center">😟 No any products found!</p>
      );

    if (!isLoading && userMessage === "error")
      return (
        <p className="text-danger user-message text-center">
          😟 Error while fetching products !
        </p>
      );

    return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-5 mb-5">
        {allProducts.map((product, index) => (
          <Product
            productIndex={index}
            productInfo={product}
            key={product.id}
            className="col"
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {!isLoading && (
        <h2 className="heading-secondary mb-5">
          {searchTerm || "All"} Products
        </h2>
      )}
      {productsContent()}
    </>
  );
};

export default Products;
