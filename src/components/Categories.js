import React from "react";
import PropTypes from "prop-types";

const Categories = ({ data, update }) => (
  <div className="categories">
    <button onClick={update}>Refresh</button>
    {data.map((cat, i) => (
      <div key={i}>
        <h2>{cat.name}</h2>
        <ul>
          {cat.options.map((opt, j) => (
            <li key={j}>{opt}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

Categories.propTypes = {
  data: PropTypes.array.isRequired,
  update: PropTypes.func,
};

export default Categories;
