
const SearchBox = ({ searchFieldValue, handleChange }) => {

  return (
    <div className="pa2 mb3">
      <input
        className="pa3 br3 ba b--blue bg-lightest-blue"
        type="text"
        name="search"
        value={searchFieldValue}
        placeholder="Search monsters..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
