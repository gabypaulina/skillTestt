import React from "react";
import "../App.css";

const Category = ({ data }) => (
  <div className="category-container row g-3 mb-4 justify-content-between">
    {data.map((item, i) => (
      <div key={i} className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <div className="card category-card d-flex align-items-center justify-content-center">
  <div className="card-body d-flex align-items-center justify-content-between text-center flex-lg-row flex-column">
    <div className="data-iconss rounded-circle">{item.icon}</div>
    <div className="d-flex flex-column align-items-center justify-content-center ms-lg-2 mt-lg-0 mt-2">
      <span className="text-uppercase fw-bold">{item.title}</span>
      <h3 className="fw-bold mb-0" style={{color: '#17A9E2'}}>{item.value}</h3>
    </div>
  </div>
</div>

      </div>
    ))}
  </div>
);

export default Category;
