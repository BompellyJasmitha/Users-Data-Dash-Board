import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css"


let ele=ReactDOM.createRoot(document.getElementById("root"))
ele.render(<>
            <div id="backgroundDiv">Index File</div>
            <App/>
        </>)