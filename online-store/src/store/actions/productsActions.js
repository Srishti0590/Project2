import { fetchProducts, fetchProductsByCategory } from "../../api/api";

import { productActions } from "../slices/product";
import { uiActions } from "../slices/ui";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(uiActions.updateUI({ isLoading: true }));

    const allProducts = await fetchProducts();

    dispatch(productActions.updateProducts(allProducts));
    dispatch(uiActions.updateUI({ isLoading: false }));
  } catch (errors) {
    dispatch(uiActions.updateUI({ isLoading: false, userMessage: "error" }));
  }
};

export const searchProductsByCategory = (category) => async (dispatch) => {
  try {
    dispatch(uiActions.updateUI({ isLoading: true }));

    const searchedProducts = await fetchProductsByCategory(
      category.toLowerCase()
    );

    dispatch(productActions.updateProducts(searchedProducts));
    dispatch(uiActions.updateUI({ isLoading: false, searchTerm: category }));
  } catch (errors) {
    dispatch(
      uiActions.updateUI({
        isLoading: false,
        userMessage: "error",
        searchTerm: category,
      })
    );
  }
};
