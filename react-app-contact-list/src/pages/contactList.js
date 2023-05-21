import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import swal from "sweetalert";

const ContactList = () => {
    const [contactList, setContactList] = useState([]);
    const navigate = useNavigate();

    const getContactList = async () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/contact-list`).then((response) => {
            if (response.data?.status === 200)
                setContactList(response.data?.data);
        })
            .catch((err) => console.log("Contact List API error", err));
    }

    const handleDelete = async (id) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/contact-delete/${id}`).then((response) => {
            if (response.data?.status === 200)
                swal({
                    title: "Success",
                    text: "Contact deleted successfully",
                    icon: "success",
                })
            getContactList();
        })
            .catch((err) => console.log("Delete Contac API error", err));
    }

    useEffect(() => {
        getContactList();
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-8">
                            <h1>Contact List</h1>
                        </div>
                        <div className="col-md-4">
                            <Link to={"/add-contact"}> Add Contact</Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <table>
                            <thead>
                                <th className="col-2">S.No</th>
                                <th className="col-2">Name</th>
                                <th className="col-2">Email</th>
                                <th className="col-2">Mobile</th>
                                <th className="col-2">Company</th>
                                <th className="col-2">Action</th>
                            </thead>
                            <tbody>
                                {contactList.length > 0 ? contactList.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.firstname + " " + item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.company}</td>
                                        <td><Button className={"btn-primary me-4"} onClick={() => {
                                            navigate('/edit-contact', {
                                                state: {
                                                    contact: item,
                                                }
                                            });
                                        }}> Edit</Button>
                                            <Button className={"btn-primary"} type="button" onClick={() => {
                                                handleDelete(item._id);
                                            }}> Delete</Button></td>
                                    </tr>
                                )) : <tr>Data not found</tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactList;