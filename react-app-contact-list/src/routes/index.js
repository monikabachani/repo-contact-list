import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import ContactList from "../pages/contactList";
import AddContact from "../pages/addContact";
const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={ContactList} />
                <Route path='/add-contact' Component={AddContact} />
                <Route path='/edit-contact' Component={AddContact} />
            </Routes>
        </Router>
    )
}

export default AllRoutes