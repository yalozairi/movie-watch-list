import React from "react";

//Styles
import { AnasIsDumb } from "../styles";

const SearchBar = ({ label, setQuery }) => {
  return (
    <div>
      <AnasIsDumb
        placeholder={` Search ${label}`}
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
