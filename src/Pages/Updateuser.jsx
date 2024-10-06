import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style.css";

export default function Updateuser() {
    const navigate = useNavigate();
    const [value, setValue] = useState({ name: "", username: "", email: "" });
    const [notification, setNotification] = useState("");
    const { id } = useParams();

    const change = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${id}`)
            .then(x => setValue(x.data))
            .catch((error) => {
                console.log("Get API failed in Updateuser.jsx", error);
                setNotification("Failed to fetch user details. Please try again.");
            });
    }, [id]);

    const update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/user/${id}`, value)
            .then(() => {
                setNotification("User updated successfully!");
                setTimeout(() => navigate("/"), 2000);
            })
            .catch((error) => {
                console.log("Put API failed in Updateuser.jsx", error);
                setNotification("Failed to update user. Please try again.");
            });
    };

    return (
        <>
            <form action="">
                <fieldset>
                    <legend><h3>UPDATE USER DETAILS</h3></legend>
                    <input onChange={change} value={value.name} name="name" type="text" placeholder="Name" /><br />
                    <input onChange={change} value={value.username} name="username" type="text" placeholder="User Name" /><br />
                    <input onChange={change} value={value.email} name="email" type="email" placeholder="Email" /><br />
                    <input onClick={update} type="submit" value="Save The Details" />
                </fieldset>
            </form>
            {notification && <div className="notification">{notification}</div>}
        </>
    );
}
