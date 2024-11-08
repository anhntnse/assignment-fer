import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImagesSlider from "../components/ImagesSlider";
// import Footer from "../components/Footer";
import StarReview from '../components/StarReview';
import RelativeProducts from "../components/RelativeProducts";
// import Header from "../components/Header";
import ProductsSlider from '../components/ProductsSlider';
// import './App.scss';
// import image1 from './image/image1.jpg';
// import image2 from './image/image2.jpg';
// import image3 from './image/image3.png';
// import image4 from './image/image4.png';
// import image5 from './image/image5.png';
// import image6 from './image/image6.png';
import { TbTruckDelivery } from "react-icons/tb";
import { GrPowerCycle } from "react-icons/gr";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/Config';


function App() {
    const productId = useParams();

    console.log('product id: ', productId.productId);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const fetchProduct = async () => {
        try {
            const productRef = doc(db, 'products', productId.productId); // Reference to the product document
            const productDoc = await getDoc(productRef);

            if (productDoc.exists()) {
                setProduct(productDoc.data());
            } else {
                setError("Product not found");
            }
        } catch (err) {
            setError("Error fetching product: " + err.message);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);


    return (
        <Container>
            <Row className="mt-5">
                <Col md={7}>
                    <ImagesSlider data={product} />
                </Col>
                <Col md={5}>
                    <h1 className='fs-3' style={{ padding: 0, margin: 0 }}>{product?.productName}</h1>
                    <div className='d-flex gap-4 align-items-center mt-3'>
                        <StarReview />
                        <p className='m-0'>100 reviews</p>
                        <p className='m-0'>|</p>
                        <p className='m-0 text-success'>In stocks</p>
                    </div>
                    <div className='text-start mt-3'>
                        <h3>${product?.price}.00</h3>
                    </div>
                    <div className='text-start mt-3'>
                        <p>
                            {product?.description}
                        </p>
                    </div>
                    <div className='text-start mt-3' style={{ border: '1px solid black' }} />
                    <div className='d-flex align-items-center mt-3'>
                        <h4 className='m-0 me-4'>Colours: </h4>
                        <button style={{ height: '23px', width: '23px', border: 0, background: 'red', borderRadius: '999px', marginRight: '10px' }}></button>
                        <button style={{ height: '23px', width: '23px', border: 0, background: 'blue', borderRadius: '999px' }}></button>
                    </div>
                    <div className='d-flex align-items-center mt-3'>
                        <h4 className='m-0 me-4'>Sizes: </h4>
                        <button style={{ height: '28px', width: '35px', border: 0, background: '', marginRight: '10px', textAlign: 'center', borderRadius: '8px' }}>XS</button>
                        <button style={{ height: '28px', width: '35px', border: 0, background: '', marginRight: '10px', textAlign: 'center', borderRadius: '8px' }}>S</button>
                        <button style={{ height: '28px', width: '35px', border: 0, background: '', marginRight: '10px', textAlign: 'center', borderRadius: '8px' }}>M</button>
                        <button style={{ height: '28px', width: '35px', border: 0, background: '', marginRight: '10px', textAlign: 'center', borderRadius: '8px' }}>L</button>
                        <button style={{ height: '28px', width: '35px', border: 0, background: '', marginRight: '10px', textAlign: 'center', borderRadius: '8px' }}>XL</button>
                    </div>
                    <div className='d-flex align-items-center mt-4 gap-4'>
                        <input type='number' style={{ padding: '10px 0px' }} />
                        <button className='btn btn-danger' style={{ padding: '10px 45px' }}>Buy Now</button>
                    </div>
                    <div className='d-flex align-items-center mt-4 gap-4 px-3 py-2' style={{ border: '1px solid black', borderBottom: 0 }}>
                        <div style={{ fontSize: '40px' }}>
                            <TbTruckDelivery />
                        </div>
                        <div >
                            <p style={{ margin: '0', textAlign: 'left' }}>Free Delivery</p>
                            <a>Enter your postal code for Delivery Availability</a>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-4 px-3 py-2' style={{ border: '1px solid black' }}>
                        <div style={{ fontSize: '40px' }}>
                            <GrPowerCycle />
                        </div>
                        <div>
                            <p style={{ margin: '0', textAlign: 'left' }}>Return Delivery</p>
                            <a>Free 30 Days Delivery Returns. Details</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{ marginTop: '100px', textAlign: 'center' }}>
                <div className="d-flex gap-2 align-items-center mb-5">
                    <div
                        style={{
                            width: '25px',
                            height: '40px',
                            borderRadius: '8px',
                            background: 'red',
                        }}>
                    </div>
                    <h3 style={{ margin: '0' }}>Relative Products</h3>
                </div>
                <ProductsSlider />
                {/* <RelativeProducts /> */}
            </Row>
        </Container>
    )
}

export default App;
