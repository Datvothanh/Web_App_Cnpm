import React from "react";
import { Link } from "react-router-dom";

const CategoriesTable = () => {
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
  
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
