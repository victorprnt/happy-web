// This is a function that returns HTML or JSX
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/global";

import Routes from "./routes"

const App = () => (
    <BrowserRouter>
        <Routes />
        <GlobalStyles />
    </BrowserRouter>
  );

export default App;