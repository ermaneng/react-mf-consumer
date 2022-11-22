import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MyWidget from 'host/MyWidget';

const App = () => (
    <div>
        <h2>Consumer</h2>
        <MyWidget />
    </div>
    )

ReactDOM.render(<App />, document.getElementById("app"));
