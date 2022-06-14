import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef();

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  function handleChange() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="search">search your favorite drink here: </label>
          <input
            type="text"
            id="search"
            onChange={handleChange}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
