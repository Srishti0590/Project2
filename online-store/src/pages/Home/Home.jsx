import { useState } from "react";
import { useDispatch } from "react-redux";

import SearchField from "../../components/SearchField/SearchField";
import Products from "../../components/Products/Products";

import { searchProductsByCategory } from "../../store/actions/productsActions";

const Home = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermErrorMsg, setSearchTermErrorMsg] = useState("");

  const handleSearchTermChange = (event) => {
    if (searchTerm) setSearchTermErrorMsg("");

    setSearchTerm(event.target.value);
  };

  const handleProductSearch = () => {
    if (!searchTerm.length)
      return setSearchTermErrorMsg("Search field cannot be empty.");

    dispatch(searchProductsByCategory(searchTerm));
  };

  return (
    <>
      <SearchField
        onInputChange={handleSearchTermChange}
        value={searchTerm}
        onProductSearch={handleProductSearch}
        searchTermErrorMsg={searchTermErrorMsg}
      />
      <Products />
    </>
  );
};

export default Home;
