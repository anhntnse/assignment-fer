import { useEffect, useState } from 'react';
import {
    Container,
    Card,
    Row,
    Col,
    Button,
    Form,
    Image,
    FormGroup,
    FormControl,
    Modal
} from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { collection, addDoc } from "firebase/firestore";
import { Toast } from 'react-bootstrap';

import { UploadImage } from '../helpers/UploadImage';
import { db } from '../config/Config';
import { toast } from 'react-toastify';


function AddAProduct(
    {
        show,
        handleClose,
        fetchData
    }
) {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [productImgs, setProductImgs] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg'];

    const productImgHandle = async (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            const rs = await UploadImage(selectedFile);
            selectedFile.secureUrl = rs.secure_url;
            selectedFile.preview = URL.createObjectURL(selectedFile);
            setProductImgs([...productImgs, selectedFile]);
            setError('');

        }
        else {
            setProductImgs(null);
            setError('Please select a valid image type png or jpeg');
        }
    };

    const handleDeleteImage = (indexImg) => {
        const newProductImages = [...productImgs];
        newProductImages.splice(indexImg, 1);

        setProductImgs(newProductImages);
    };

    const addProduct = async () => {
        // e.preventDefault();

        console.log(productImgs);

        const urls = productImgs.map(item => item.secureUrl);

        console.log('urls ', urls);
        await addDoc(collection(db, "products"), {
            productName,
            price: parseFloat(productPrice),
            description,
            imageUrls: urls,
        });

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName" className="mb-4">
                        <Form.Label >Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            size="md"
                            placeholder="Enter the product's name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPrice" className="mb-4">
                        <Form.Label >Price</Form.Label>
                        <Form.Control
                            type="number"
                            size="md"
                            placeholder="Enter the product's price"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="description" className="mb-4">
                        <Form.Label >Description</Form.Label>
                        <Form.Control
                            type="text"
                            size="md"
                            placeholder="Enter the product's description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formImage" className="mb-4">
                        <Form.Control
                            type="file"
                            size="md"
                            onChange={productImgHandle}
                        // placeholder="Enter the product's price"
                        />
                    </Form.Group>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '5px'
                    }}>
                        {productImgs && productImgs.map((item, index) => {
                            return (
                                <div key={item.preview} style={{ position: 'relative' }}>
                                    <MdDeleteForever style={{ position: 'absolute', color: '#fff', top: '0', right: '0' }} onClick={() => handleDeleteImage(index)} />
                                    <img src={item.preview} style={{ height: '60px' }} />
                                </div>
                            )
                        })}
                    </div>
                    {error && <p>{error}</p>}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button type="submit" variant="primary" onClick={() => { addProduct(); toast.success('Successfully Created New Product.'); fetchData(); handleClose() }}>
                    Upload
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddAProduct;