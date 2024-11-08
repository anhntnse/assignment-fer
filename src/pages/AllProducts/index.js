import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { MdDelete } from "react-icons/md";
import { db } from '../../config/Config';
import AddAProduct from '../AddAProduct';
import { toast } from 'react-toastify';

function AllProducts() {

    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchProducts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "products"));
            const productsArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(productsArray);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (productId) => {
        const productRef = doc(db, "products", productId);
        try {
            await deleteDoc(productRef);
            setProducts(products.filter(product => product.id !== productId)); // Remove deleted product from state

            toast.success('Successfully deleted product .');
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product: ", error);
            toast.error("Failed to delete product.");
        }
    };

    return (
        <Container>
            <Row style={{ fontSize: '20px', justifyContent: 'center' }}>
                <Col className='p-0'>All Products</Col>
                <Col className='p-0' style={{ textAlign: 'right' }}>
                    <Button variant="primary" onClick={handleShow}>Add New Product</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product, index) => {
                            return (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>{product?.productName}</td>
                                    <td>{product?.price}</td>
                                    <td>{product?.description}</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="edit-button" style={{ width: '30px', height: '30px', textAlign: 'center' }}>
                                            < MdDelete style={{ color: 'red', fontSize: '20px' }} onClick={() => handleDelete(product.id)} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
            <AddAProduct handleClose={handleClose} show={show} fetchData={fetchProducts} />
        </Container>
    )
}

export default AllProducts;