import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Form, Button, Modal } from 'react-bootstrap';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { FaEdit } from "react-icons/fa";
import { db } from '../../config/Config';
import './AllUsers.css';

function AllUsers() {

    const [users, setUsers] = useState([]);
    const [role, setRole] = useState("");
    const [userId, setUserId] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchUsers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            const usersArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(usersArray);
        } catch (error) {
            console.error("Error fetching users: ", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUpdateRole = async (userId) => {

        console.log('user id ', userId);

        const userRef = doc(db, "users", userId);

        try {
            await updateDoc(userRef, {
                role: role,
            });

            fetchUsers();

            handleClose();
        } catch (error) {
            console.error("Error updating user:", error);
            alert("Failed to update user.");
        }
    };

    const handleEditRole = (id) => {
        setUserId(id);
        handleShow();
    };

    console.log(userId);

    return (
        <Container>
            <Row style={{ fontSize: '20px' }}>All Users</Row>
            <Row className='mt-4'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && (
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="edit-button" style={{ width: '30px', height: '30px', textAlign: 'center' }}>
                                            <FaEdit style={{ color: 'green', fontSize: '20px' }} onClick={() => handleEditRole(user.id)} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User's Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
                        <option>Select Role</option>
                        <option value="GENERAL">GENERAL</option>
                        <option value="ADMIN">ADMIN</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleUpdateRole(userId)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default AllUsers;