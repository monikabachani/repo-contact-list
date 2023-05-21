import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { useLocation, useNavigate } from "react-router-dom";


const AddContact = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [contact, setContact] = useState(location.state?.contact ? location.state.contact : {});

    const handleChange = (e) => {
        let newcontact = { ...contact };
        newcontact[e.target.name] = e.target.value;
        setContact(newcontact);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var url;
        if (location.state?.contact && Object.keys(location.state?.contact).length > 0) {
            url = `${process.env.REACT_APP_BASE_URL}/contact-edit/${location.state?.contact._id}`;
        } else {
            url = `${process.env.REACT_APP_BASE_URL}/contact-create`;
        }
        axios.post(url, contact).then((response) => {
            console.log(response);
            if (response.status === 200) {
                swal({
                    title: "Success",
                    text: "Contact added successfully",
                    icon: "success",
                })
                navigate('/');
            } else {
                swal({
                    title: "Error",
                    text: "Someting went wrong",
                    icon: "error",
                })
            }
        })
            .catch((err) => console.log("Contact List API error", err));
    }


    return (
        <>
            <Container>
                <h1>{location.state?.contact && Object.keys(location.state?.contact).length > 0 ? "Edit" : "Add"} Contact</h1>
                <Form>
                    <Row>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label className="label">First Name</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={contact.firstname}
                                name="firstname"
                                required
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label className="label">Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={contact.lastname}
                                name="lastname"
                                required
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label className="label">Email</Form.Label>
                            <Form.Control
                                type="email"
                                defaultValue={contact.email}
                                name="email"
                                required
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label className="label">Mobile</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={contact.mobile}
                                name="mobile"
                                required
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label className="label">Company</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={contact.company}
                                name="company"
                                required
                                onChange={handleChange}
                            />
                        </Form.Group>


                    </Row>
                    <Button className="mt-4" variant="primary" type="submit" onClick={handleSubmit}>Save & Exit</Button>
                </Form>
            </Container>
        </>
    )
}

export default AddContact;