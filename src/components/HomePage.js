import React from "react";
import SearchBox from "./SearchBox";

const HomePage = ({searchChange}) => {
  return (
    <div className="tc">
      <div><h1>Pokemon</h1></div>
      <div className='items-center' id='home-page-search'><SearchBox searchChange={searchChange}/></div>
    </div>
  );
};

export default HomePage;
