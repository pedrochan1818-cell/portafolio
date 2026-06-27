import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Swal from "sweetalert2";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)