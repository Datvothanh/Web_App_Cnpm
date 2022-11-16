import React, { useEffect , useState , useContext } from "react";
import { CategoryContext } from "../../Redux/Context/CategoryContext";
import Nav from 'react-bootstrap/Nav';
const Category = () => {
  const {
    categoryState: {categories , categoryLoading},
    getCategories
  } = useContext(CategoryContext)
 
  useEffect(() => getCategories() , []);
 
  return (
    <Nav  style={{
      marginLeft: "200px",
      fontSize: "22px",
    }}>
      {categories.map(category =>
        <Nav.Item>
         <Nav.Link href={"/category/" + category._id}>{category.name}</Nav.Link>
        </Nav.Item>
      )}
    </Nav>
    
  );
  
};

export default Category;
