// IMPORTS
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import App from "./Components/App";

// STYLESE
import './styles/main.css'
import './styles/fonts/font.css'

// INITIALIZING
const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(
    <HashRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </HashRouter>
)