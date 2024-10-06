import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import GetUser from "./Pages/GetUser";
import Adduser from "./Pages/Adduser";
import Updateuser from "./Pages/Updateuser";

export default function App(){

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetUser/>}/>
            <Route path="/add" element={<Adduser/>}/>
            <Route path="/update/:id" element={<Updateuser/>}/>


        </Routes>
    </BrowserRouter>
    )
}