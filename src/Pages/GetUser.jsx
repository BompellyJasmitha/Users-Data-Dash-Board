import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style.css";

export default function GetUser() {
    const [api, setApi] = useState([]);
    const [headValue, setHeadValue] = useState([]);
    const [notification, setNotification] = useState("");
    const navigate = useNavigate();

    const add = () => navigate("/add");

    const remove = (id) => {
        axios.delete(`http://localhost:3000/user/${id}`)
            .then(() => {
                setNotification("User deleted successfully!");
                setApi(api.filter(user => user.id !== id)); // Update local state
            })
            .catch((error) => {
                console.log("Delete API failed in GetUser.jsx", error);
                setNotification("Failed to delete user. Please try again.");
            });
    };

    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(res => {
                setApi(res.data);
                setHeadValue(Object.keys(res.data[0]).slice(0, 4));
            })
            .catch((error) => {
                console.log("Get API failed in GetUser.jsx", error);
                setNotification("Failed to fetch users. Please try again.");
            });
    }, []);

    return (<>

        <div id="userpageDiv">
            <table border={"9px solid antiquewhite"}>
                <caption>CRUD OPERATIONS ON TABLE &nbsp; <button onClick={add}>ADD+</button></caption>
                <thead>
                    <tr>
                        {headValue.map((x, k1) => <th key={k1}>{x}</th>)}
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {api.map((x, key1) => (
                        <tr key={key1}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.username}</td>
                            <td>{x.email}</td>
                            <td>
                                &nbsp; <button onClick={() => navigate(`/update/${x.id}`)}>Edit</button>
                                &nbsp; <button onClick={() => remove(x.id)}>Delete</button> &nbsp;
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {notification && <div className="notification">{notification}</div>}
        </>
    );
}
