import React, { useState } from "react";
import "../../../styles/components/sectionTop/search/Search.css";
import iconSearch from "./icon/Search.svg";
import iconMice from "./icon/Mice.svg";
import { SearchBox } from "../../../store/songs/Songs";
import { useDispatch } from "react-redux";
import ResultSearch from "./ResultSearch";
import { useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.Songs);
  const [textSearch, setTextSearch] = useState("");

  return (
    <div className="search">
      <div className="containerSearch">
        <div className="iconMice">
          <img src={iconMice} />
        </div>
        <input
          type="search"
          placeholder="ابحث هنا"
          value={textSearch}
          onChange={(e) => {
            const searchValue = e.target.value;
            setTextSearch(searchValue);
            const capitalizedValue =
              searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
            dispatch(SearchBox(capitalizedValue));
          }}
        />
        <div className="iconSearch">
          <img src={iconSearch} />
        </div>
      </div>
      {textSearch.length > 0 && (
        <ResultSearch search={search} setTextSearch={setTextSearch} />
      )}
    </div>
  );
};

export default Search;
