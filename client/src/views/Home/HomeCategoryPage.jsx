import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/esm/Spinner';
import { ProductByCategoryContext } from '../../contexts/ProductByCategoryContext';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './homePage.module.scss'
import ProductCard from '../../components/product/ProductCard';

const HomeCategoryPage = () => {

    const { id_category } = useParams();
    //Contexts
    const {productByCategoryState: {productsByCategory , productsByCategoryLoading}, getProductsByCategory} = useContext(ProductByCategoryContext)
    //Start: Get all products
    
    useEffect(() => {getProductsByCategory(id_category)},[getProductsByCategory, id_category])

    let body = null

    if (productsByCategoryLoading) {
        body = (
            <div className="spinner-container">
                <Spinner animation='border' variant='info'/>
            </div> 
        )
    } else if (productsByCategory.length === 0 ){
        body=(
            <>
               <div>
                    Nodata.
               </div>
            </>
        )
    } else{
        body = (
            <>
                <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                    {productsByCategory.map(product => (
                        <Col key={product.id} className='my-2'>
                            <ProductCard product={product}/>
                        </Col>
                    ))}
                </Row>
            </>
        )
    } 
    return <>{body}</>
};

export default HomeCategoryPage;
