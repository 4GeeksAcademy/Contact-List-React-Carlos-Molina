import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

import Card from "../component/Card.jsx";
import "../../styles/Contacts.css";

export const Contacts = () => {
    const { store } = useContext(Context);

    return (
        <div>
            {store.contacts.map((contact, index) => (
                <Card key={index} contact={contact} />
            ))}
        </div>
    );
};