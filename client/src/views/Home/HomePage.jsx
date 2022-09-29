import { useContext, useEffect } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import { ProductContext } from '../../contexts/ProductContext';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './homePage.scss'
import SingleProduct from '../../components/product/SingleProduct';

const HomePage = () => {
    //Contexts
    const {productState: {products , productsLoading}, getProducts} = useContext(ProductContext)

    useEffect(() => {getProducts()},[])
    

    let body = null

    if (productsLoading) {
        body = (
            <div className="spinner-container">
                <Spinner animation='border' variant='info'/>
            </div> 
        )
    } else if (products.length === 0 ){
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
                    {products.map(product => (
                        <Col key={product.id} className='my-2'>
                            <SingleProduct product={product}/>
                        </Col>
                    ))}
                </Row>
            </>
        )
    } 
    return <>{body}</>
};

export default HomePage;
