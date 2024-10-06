import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Adduser() {
    const [value, setValue] = useState({ name: "", username: "", email: "" });
    const [notification, setNotification] = useState("");
    const navigate = useNavigate();

    const change = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const add = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/user", value)
            .then(() => {
                setNotification("User added successfully!");
                setTimeout(() => navigate("/"), 2000);
            })
            .catch((error) => {
                console.log("Post API failed in Adduser.jsx", error);
                setNotification("Failed to add user. Please try again.");
            });
    };

    return (
        <>
            <form action="">
                <fieldset>
                    <legend><h3>NEW USER REGISTRATION</h3></legend>
                    <input onChange={change} value={value.name} name="name" type="text" placeholder="Name" /><br />
                    <input onChange={change} value={value.username} name="username" type="text" placeholder="User Name" /><br />
                    <input onChange={change} value={value.email} name="email" type="email" placeholder="Email" /><br />
                    <input onClick={add} type="submit" value="Add New User" />
                </fieldset>
            </form>
            {notification && <div className="notification">{notification}</div>}
        </>
    );
}