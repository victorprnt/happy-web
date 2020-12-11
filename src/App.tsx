// This is a function that returns HTML or JSX
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import "./styles/global.css"

import Routes from "./routes"

const App = () => (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );

export default App;