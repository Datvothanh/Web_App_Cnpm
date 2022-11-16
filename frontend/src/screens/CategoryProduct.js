import React, { useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Rating from "../components/homeComponents/Rating";
import Header from "../components/Header";
import { ProductContext } from "../Redux/Context/ProductContext";
import Category from "../components/homeComponents/Category";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
const CategoryProduct = ({match}) => {
  const id = match.params.id;
  const {
    productState: {products , loading},
    getProductsByCategory
  } = useContext(ProductContext)
 
  useEffect(() => getProductsByCategory(id), [id]);
  return (
    <>
    <Header/>
    <Category/>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
            <div className="shopcontainer row">
            <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} nhận xét`}
                            />
                            <h3>{product.price} đ</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
            </div>         
            </div>
          </div>
        </div>
      </div>
    <CalltoActionSection />
    <ContactInfo />
    <Footer />
    </>
  );
};

export default CategoryProduct;
