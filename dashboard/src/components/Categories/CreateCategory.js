import React from "react";
import { useState, useEffect } from "react";
const CreateCategory = () => {

  const [name, setName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const category = { name };
    console.log(category);
    fetch("http://localhost:4000/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    }).then(() => {
      console.log("New product added");
    });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };


  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
          Tên loại sản phẩm
          </label>
          <input
            type="text"
            placeholder="Nhập vào đây"
            className="form-control py-3"
            id="product_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="d-grid" >
          <button className="btn btn-primary py-3" onClick={handleClick}>Tạo loại sản phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
