import { useState } from "react";

const SearchBox = ({ search, handleChange }) => {

  return (
    <div className="pa2">
      <input
        className="pa3 br3 ba b--blue bg-lightest-blue"
        type="text"
        name="search"
        value={search}
        placeholder="search robots"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
