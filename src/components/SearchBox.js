import React from "react";

const SearchBox = ({searchChange} ) => {
  return (
    <div className=''>
      <input
      id='pkmnSearch'
        className="tc pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search name or type"
      />
      <button type='button' onClick={searchChange}>Click</button>
    </div>
  );
};

export default SearchBox;
