import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

import Layout from "./components/Layout/Layout";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>

      <ToastContainer />
    </>
  );
};

export default App;
