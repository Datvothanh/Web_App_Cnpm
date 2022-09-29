import Card from 'react-bootstrap/Card'



const SinglePost = ({product: {name,price,tinyDes,fullDes}}) => (
    <Card className='shadow'>
        <Card.Body>
            <div>
                {name}
            </div>
            <div>
                {price}
            </div>
            <div>
                {tinyDes}
            </div>
            <div>
                {fullDes}
            </div>
        </Card.Body> 
    </Card>
)

export default SinglePost