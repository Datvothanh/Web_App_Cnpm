import styles from "./featured.module.scss";
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import ProductCard from "../../../components/product/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../../components/Slick/NextArrow";
import PrevArrow from "../../../components/Slick/PrevArrow";
import { Link, useHref } from "react-router-dom";
const Featured = () => {
    const {
        productState: { products, productsLoading },
        getProducts,
    } = useContext(ProductContext);
    
    useEffect(() => {
        getProducts();
    }, [getProducts]);

    
    return (
        <div
            className={`${styles.featured} `}
        >
            <div className="">
                <div className={styles.title}>Featured Product</div>
                <Slider
                    dots={true}
                    slidesToShow={5}
                    slidesToScroll={2}
                    autoplay={false}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                >
                    {products.map((product) => (
                        <div className="w-full" key={product.title}>
                            <div className="mx-4">
                                <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                                <ProductCard product={product}/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
export default Featured;
