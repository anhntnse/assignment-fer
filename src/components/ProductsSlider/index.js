import { Carousel, Card, Button, Row, Container, Col } from 'react-bootstrap';
import StarReview from '../StarReview';
import laptop1 from '../../images/laptop1.jpg';
import Product from '../Product';
const image = 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png';

const products = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        image: laptop1,
        discountPrice: 120,
        originalPrice: 160,
        rating: 4,
        discount: 40,
    },
    {
        id: 2,
        name: 'Acer Nitro 5',
        image: laptop1,
        discountPrice: 950,
        originalPrice: 1200,
        rating: 5,
        discount: 35,
    },
    {
        id: 3,
        name: 'Razer Blade 15',
        image: image,
        discountPrice: 2200,
        originalPrice: 2500,
        rating: 4,
        discount: 15,
    },
    {
        id: 4,
        name: 'Dell XPS 13',
        image: image,
        discountPrice: 1000,
        originalPrice: 1200,
        rating: 5,
        discount: 20,
    },
];

function ProductsSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <Container>
                    <Row>
                        {products.map((product) => (
                            <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
                                <Product
                                    image={product.image}
                                    name={product.name}
                                    discountPrice={product.discountPrice}
                                    originalPrice={product.originalPrice}
                                    rating={product.rating}
                                    discount={product.discount}
                                />
                            </Col>
                        ))}
                        {/* <Col>
                            <Card>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Iphone 16</Card.Title>
                                    <Card.Text>
                                        <div className='d-flex gap-4 justify-content-center'>
                                            <p class="card-text" style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>$120</p>
                                            <p style={{ textDecoration: 'line-through', fontSize: '18px' }}>$160</p>
                                        </div>
                                        <p class="card-text " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarReview />
                                            <p className='m-0 ms-2'>(80)</p>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Iphone 16</Card.Title>
                                    <Card.Text>
                                        <div className='d-flex gap-4 justify-content-center'>
                                            <p class="card-text" style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>$120</p>
                                            <p style={{ textDecoration: 'line-through', fontSize: '18px' }}>$160</p>
                                        </div>
                                        <p class="card-text " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarReview />
                                            <p className='m-0 ms-2'>(80)</p>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Iphone 16</Card.Title>
                                    <Card.Text>
                                        <div className='d-flex gap-4 justify-content-center'>
                                            <p class="card-text" style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>$120</p>
                                            <p style={{ textDecoration: 'line-through', fontSize: '18px' }}>$160</p>
                                        </div>
                                        <p class="card-text " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarReview />
                                            <p className='m-0 ms-2'>(80)</p>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> */}
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row>
                        {products.map((product) => (
                            <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
                                <Product
                                    image={product.image}
                                    name={product.name}
                                    discountPrice={product.discountPrice}
                                    originalPrice={product.originalPrice}
                                    rating={product.rating}
                                    discount={product.discount}
                                />
                            </Col>
                        ))}
                        {/* <Col>
                            <Card>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Iphone 16</Card.Title>
                                    <Card.Text>
                                        <div className='d-flex gap-4 justify-content-center'>
                                            <p class="card-text" style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>$120</p>
                                            <p style={{ textDecoration: 'line-through', fontSize: '18px' }}>$160</p>
                                        </div>
                                        <p class="card-text " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarReview />
                                            <p className='m-0 ms-2'>(80)</p>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Iphone 16</Card.Title>
                                    <Card.Text>
                                        <div className='d-flex gap-4 justify-content-center'>
                                            <p class="card-text" style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>$120</p>
                                            <p style={{ textDecoration: 'line-through', fontSize: '18px' }}>$160</p>
                                        </div>
                                        <p class="card-text " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarReview />
                                            <p className='m-0 ms-2'>(80)</p>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Iphone 16</Card.Title>
                                    <Card.Text>
                                        <div className='d-flex gap-4 justify-content-center'>
                                            <p class="card-text" style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>$120</p>
                                            <p style={{ textDecoration: 'line-through', fontSize: '18px' }}>$160</p>
                                        </div>
                                        <p class="card-text " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarReview />
                                            <p className='m-0 ms-2'>(80)</p>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Iphone 16</Card.Title>
                                    <Card.Text>
                                        <div className='d-flex gap-4 justify-content-center'>
                                            <p class="card-text" style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>$120</p>
                                            <p style={{ textDecoration: 'line-through', fontSize: '18px' }}>$160</p>
                                        </div>
                                        <p class="card-text " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarReview />
                                            <p className='m-0 ms-2'>(80)</p>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> */}
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductsSlider;