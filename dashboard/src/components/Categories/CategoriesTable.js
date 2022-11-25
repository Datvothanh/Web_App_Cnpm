import React, { useEffect , useState , useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../Redux/Context/CategoryContext";
const CategoriesTable = () => {
  const {
    categoryState: {categories , categoryLoading},
    getCategories
  } = useContext(CategoryContext)


  const handleClick = (e) => {
  
    fetch("http://localhost:4000/api/category/" + `${e}` , {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      console.log("Category deleted");
    });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
 
  useEffect(() => getCategories() , []);
  var stt =0 ;
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
        <tbody>
        {categories.map(category =>
         <tr>
           <th>{++stt}</th>
           <th>{category.name}</th>
           <th className="text-end"><button className="btn btn-danger py-3" onClick={() => handleClick(category._id)}>Xóa</button></th>
         </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
