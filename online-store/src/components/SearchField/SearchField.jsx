import SearchIcon from "../Icons/SearchIcon";

const SearchField = (props) => {
  const { value, onInputChange, onProductSearch, searchTermErrorMsg } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    onProductSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-field d-flex align-items-stretch justify-content-between mb-2">
        <input
          autoComplete="off"
          type="text"
          id="search-field"
          list="search-categories"
          value={value}
          onChange={onInputChange}
          placeholder="Search products by category..."
          className="w-100 py-3 px-4"
        />

        <datalist id="search-categories">
          <option value="Electronics" />
          <option value="Jewelery" />
          <option value="Men's Clothing" />
          <option value="Women's Clothing" />
        </datalist>

        <button
          type="submit"
          className="search-icon-container d-flex align-items-center justify-content-center p-3"
        >
          <SearchIcon className="search-icon" />
        </button>
      </div>

      <p className="text-danger mb-5 ms-2">{searchTermErrorMsg}</p>
    </form>
  );
};

export default SearchField;
