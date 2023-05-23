import React from "react";
import "../../../styles/components/sectionTop/search/ResultSearch.css";
import { Link } from "react-router-dom";

const ResultSearch = ({ search, setTextSearch }) => {
  return (
    <div className="resultSearch">
      {search?.map((item) => (
        <Link
          to={`/Music/${item.id}`}
          className="searchContent"
          onClick={() => setTextSearch('')}
        >
          <div className="contentImage">
            <img src={item.coverImg} />
          </div>
          <div className="text">
            <h1>{item.title}</h1>
            <p>{item.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResultSearch;
