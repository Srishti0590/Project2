import { NavLink } from "react-router-dom";

import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-5">
      <NavLink to="/">
        <h1 className="heading-primary">OnlineStore</h1>
      </NavLink>
      <Cart />
    </div>
  );
};

export default Header;
